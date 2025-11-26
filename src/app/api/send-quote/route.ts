import { NextResponse } from "next/server";
import { Resend } from "resend";

// Pega a chave que está no arquivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, mobile, company, message } = body;

    // Tenta enviar o e-mail
    const { data, error } = await resend.emails.send({
      from: "SafeCred Site <onboarding@resend.dev>", // Não mude isso ainda (regra do plano grátis)
      to: ["sac@safecredagencia.com.br"], // <--- TROQUE PELO SEU E-MAIL REAL
      subject: `Nova Cotação: ${name}`,
      html: `
        <h1>Nova Solicitação de Cotação</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Celular:</strong> ${mobile}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Erro no Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro interno:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}