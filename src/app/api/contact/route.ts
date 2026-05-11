import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const body = await request.json();
    const { nom, email, telephone, service, message } = body as {
      nom: string;
      email: string;
      telephone?: string;
      service?: string;
      message: string;
    };

    if (!nom || nom.trim().length < 2) {
      return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }
    if (!message || message.trim().length < 20) {
      return NextResponse.json({ error: "Message trop court." }, { status: 400 });
    }

    await resend.emails.send({
      from: "BATIMTEC Contact <noreply@batimtec.com>",
      to: ["contact@batimtec.com"],
      replyTo: email,
      subject: `Demande de devis — ${service || "Non précisé"} — ${nom}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#1B3A6B;padding:24px 32px;border-radius:8px 8px 0 0">
            <h1 style="color:#C9A84C;margin:0;font-size:22px">Nouvelle demande de devis</h1>
            <p style="color:#ffffff99;margin:6px 0 0;font-size:14px">Via le formulaire batimtec.com</p>
          </div>
          <div style="background:#f9f9f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:600;width:140px;color:#1B3A6B">Nom</td><td style="padding:8px 0">${nom}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#1B3A6B">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1B3A6B">${email}</a></td></tr>
              ${telephone ? `<tr><td style="padding:8px 0;font-weight:600;color:#1B3A6B">Téléphone</td><td style="padding:8px 0"><a href="tel:${telephone}" style="color:#1B3A6B">${telephone}</a></td></tr>` : ""}
              ${service ? `<tr><td style="padding:8px 0;font-weight:600;color:#1B3A6B">Service</td><td style="padding:8px 0">${service}</td></tr>` : ""}
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
            <p style="font-weight:600;color:#1B3A6B;margin:0 0 8px">Message</p>
            <p style="white-space:pre-wrap;margin:0;color:#374151">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 });
  }
}
