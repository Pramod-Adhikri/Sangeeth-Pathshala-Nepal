import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function oneLine(v: string) {
  return v.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid form submission" },
      { status: 400 }
    );
  }

  // Honeypot — real visitors never fill this field; bots that auto-fill
  // every input do, so we quietly pretend success and send nothing.
  if (String(form.get("_honey") || "").trim()) {
    return NextResponse.json({ success: true });
  }

  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const email = String(form.get("email") || "").trim();
  const instrument = String(form.get("instrument") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { success: false, message: "Name, phone and email are required" },
      { status: 400 }
    );
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { success: false, message: "That email address doesn't look right" },
      { status: 400 }
    );
  }
  if (
    name.length > 200 ||
    phone.length > 50 ||
    email.length > 200 ||
    message.length > 4000
  ) {
    return NextResponse.json(
      { success: false, message: "One of the fields is too long" },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.TO_EMAIL || "sangeetpathshalanepal@gmail.com";

  if (!gmailUser || !gmailPass) {
    console.error(
      "GMAIL_USER / GMAIL_APP_PASSWORD are not set — see .env.local.example"
    );
    return NextResponse.json(
      { success: false, message: "Email is not configured on the server yet" },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"Sangeet Pathshala Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: "New class enquiry — Sangeet Pathshala",
      text:
        `New enquiry from the website:\n\n` +
        `Name: ${oneLine(name)}\n` +
        `Phone: ${oneLine(phone)}\n` +
        `Email: ${oneLine(email)}\n` +
        `Instrument: ${oneLine(instrument)}\n\n` +
        `Message:\n${message}\n`,
    });

    // Best-effort confirmation email back to the visitor. If this fails
    // (e.g. their address bounces) we still report success, since the
    // school has already received the enquiry.
    try {
      await transporter.sendMail({
        from: `"Sangeet Pathshala" <${gmailUser}>`,
        to: email,
        replyTo: toEmail,
        subject: "Thank you for your enquiry — Sangeet Pathshala",
        text:
          `Dear ${oneLine(name)},\n\n` +
          `Thank you for reaching out to Sangeet Pathshala. We have received ` +
          `your enquiry regarding ${oneLine(instrument) || "our classes"}, and ` +
          `a member of our team will contact you shortly to arrange your free ` +
          `trial class.\n\n` +
          `If you have any immediate questions in the meantime, please feel ` +
          `free to call us at 01-4568339 or simply reply to this email.\n\n` +
          `Warm regards,\n` +
          `Sangeet Pathshala\n` +
          `Handigaun, Kathmandu\n`,
      });
    } catch (replyErr) {
      console.error("Confirmation email to visitor failed:", replyErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { success: false, message: "The server could not send the email" },
      { status: 500 }
    );
  }
}
