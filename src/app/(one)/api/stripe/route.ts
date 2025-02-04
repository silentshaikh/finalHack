import { CartListType } from "@/utils/Type/type";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);
export async function POST(req:NextRequest){
    try {
        const addCartProd:CartListType[]= await req.json();
        //create checkout session for body params
        const cheSession = await stripe.checkout.sessions.create({
            line_items: addCartProd.map((e: CartListType) => ({
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: e.productname,
                    images:[e.productimage]
                  },
                  unit_amount:Math.round(Number(e.price) * 100),
                },
                quantity: e.productquantity,
              })),
              
            shipping_options:[
                {shipping_rate:"shr_1Qnhq7KL1cYY6FyD891F0r53"}
            ],
            mode:'payment',
            success_url: `${process.env.NEXT_PUBLIC_FABRIC}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_FABRIC}/cart`,
        });
        return NextResponse.json({ sessionId: cheSession.id },{status:200});
    } catch (error) {
        console.log(`Error in Checkout Processing ${error}`);
        return NextResponse.json({error:'Internal Server Error'},{status:500})
    }
}