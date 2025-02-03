import { CartListType } from "@/utils/Type/type";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req:NextRequest){
    const {userEmail,userName,addCartProd,totalPrice}:{userEmail:string,userName:string,addCartProd:CartListType[],totalPrice:number} = await req.json();

    //set a nodemailer to send email
    const emailTranport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    });

    //set the addCartProd for email
    const cartItems = addCartProd.map((e) => {{
        return `<li>Product Name : ${e.productname} - Price : ${e.price} - Color : ${e.productcolor} Quantity : ${e.productquantity} </li>`
    }}).join('');

    //Set the Content of Email For user
    const mailContent = {
        from:process.env.EMAIL_USER,
        to:userEmail,
        subject:`🎉 Thank you for your purchase from Fabric Haven! 🎉  `,
        html:`
        <div>
        <h1>Dear <strong style="color:#2DC071;"></strong>${userName}</h1>
         <p>Thank you for shopping with <strong>Fabric Haven</strong>!</p>
        <p>We're excited to let you know that your order has been successfully placed.</p>
        <h2 style="color: #6BC2F3;">📦 Your Order Details:</h2>
        <ul style="list-style-type: none; ">
          ${cartItems}
        </ul>
        <p><strong>💵 Total: $${totalPrice}</strong></p>

        <p>🚚 Your parcel will be delivered to you soon! We hope you love your new items. 😊</p>
        <p>If you have any questions , feel free to ask with us at <a href="mailto:ukubaid74@gmail.com" style="color: #4CAF50; text-decoration: none;">${process.env.EMAIL_USER}</a> or call us at <strong>+92-3345234443</strong>.</p>

        <p>Thank you again for choosing <strong>Bandage Online Shopping</strong>! We appreciate your trust in us. ❤️</p>
        <p style="font-size: 13px; color: #969696;">
          This is an automated email. Please do not reply directly to this message.
        </p>
        </div> `
    };
    try {
        //send the email to user
        await emailTranport.sendMail(mailContent);
        return NextResponse.json(mailContent,{status:200});
    } catch (error) {
        console.error("Error when send an email:", error);
        return NextResponse.json(
          { message: "Failed to send the email to user" },
          { status: 500 }
        );
    }

}

