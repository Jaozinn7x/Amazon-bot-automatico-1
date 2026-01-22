import cron from "node-cron";
import { sendTelegramMessage } from "./message.js";

// horários configuráveis (exemplo: 10h, 14h, 20h)
cron.schedule("0 10 * * *", sendTelegramMessage);
cron.schedule("0 14 * * *", sendTelegramMessage);
cron.schedule("0 20 * * *", sendTelegramMessage);

console.log("⏰ Agendador ativo");
