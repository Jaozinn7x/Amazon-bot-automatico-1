import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Variáveis do Telegram (Render → Environment)
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;

// Página inicial (teste online)
app.get("/", (req, res) => {
  res.send("🤖 Bot Afiliado + Telegram está ONLINE!");
});

// Rota de teste para enviar mensagem no Telegram
app.get("/test", async (req, res) => {
  try {
    await axios.post(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TG_CHAT_ID,
        text: "🔥 Bot conectado com sucesso! Mensagem automática funcionando 🚀"
      }
    );

    res.send("Mensagem enviada no Telegram ✅");
  } catch (error) {
    console.error(error.message);
    res.send("Erro ao enviar mensagem ❌");
  }
});

// Servidor
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
