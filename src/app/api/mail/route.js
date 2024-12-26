import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(req) {
    const { name, email, msg } = await req.json()

    console.log(process.env.TO_EMAIL, name, email, msg)

    if (!name || !email || !msg) {
        return NextResponse.json({ message: "Parameters missing" }, { status: 404 })
    }

    try {
        await transporter.sendMail({
            from: process.env.BULK_EMAIL_USER,
            to: process.env.TO_EMAIL,
            subject: "Contact Form Senfeng",
            text: msg + `\n\nFrom\n${email}`,
        }).then(()=>{
            console.log("sent")
        })
        return NextResponse.json({ message: "Email sent" }, { status: 200 })

    } catch (e) {
        console.log(e)
        return NextResponse.json(null, { status: 500 })
    }


}

export const revalidate = 0