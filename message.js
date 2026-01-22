import axios from "axios";
import { getAmazonProduct } from "./amazon.js";

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;

export async function sendTelegramMessage() {
  const product = getAmazonProduct();

  const message = `
🔥 OFERTA RELÂMPAGO 🔥

${product.title}

❌ De R$ ${product.oldPrice}
✅ Por R$ ${product.price}

👉 COMPRAR AGORA:
${product.url}
  `;

  await axios.post(
    `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
    {
      chat_id: TG_CHAT_ID,
      text: message
    }
  );

  console.log("Mensagem enviada para o Telegram");
}
