import shipEngine from "@/utils/shipEngine";
import { Address,Package, ShipmentInpCheck, ShipmentInpType} from "@/utils/Type/type";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
    try {
        const {shipmentInp,packages}:{shipmentInp:Address,packages:Package[]} = await  req.json();
        if(!shipmentInp || !packages){
            return NextResponse.json(
                {
                  error: "Missing required fields: shipementInp and packages",
                },
                { status: 400 }
              );
        };
        const shipFromAddress:Address = {
            name:'Shaikh Abdul Moiz',
            phone:'+92 3345234443',
            addressLine1: "456 Oak Avenue",
            addressLine2: "Suite 200",
            cityLocality: "Los Angeles",
            stateProvince: "CA",
            postalCode: "90001",
            countryCode: "US",
            addressResidentialIndicator: "no",

        };
        const shipmentDetail = await shipEngine.getRatesWithShipmentDetails({
            shipment:{
                shipTo:shipmentInp,
                shipFrom:shipFromAddress,
                packages:packages,
            },
            rateOptions:{
                carrierIds:[
                    process.env.NEXT_PUBLIC_SHIPENGINE_FIRST_COURIER || '',
                    process.env.NEXT_PUBLIC_SHIPENGINE_SECOND_COURIER || '',
                    process.env.NEXT_PUBLIC_SHIPENGINE_THIRD_COURIER || '',
                    process.env.NEXT_PUBLIC_SHIPENGINE_FOURTH_COURIER || '',
                ].filter(Boolean)
            }
        });
        console.log('shipmentInp',shipmentInp)
        console.log('packages',packages);
        console.log('shipmentDetail',shipmentDetail)
        return NextResponse.json({ shipmentInp, packages, shipmentDetail },
            { status: 200 }
          );
    } catch (error) {
        console.log("Error on shipping rates:", error)
    return NextResponse.json({ error: error }, {
      status: 500,
    });
    }
}