import TelegramBot from "node-telegram-bot-api";
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN_PERSONAL;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
// messages.
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const info = msg.photo;
  console.log(msg, "message");
  await bot.sendMessage(chatId, "text");
  await bot.sendChatAction(chatId, "typing");
  await bot.setChatDescription(chatId, msg.text);

  const data = await bot.getChatMember(chatId, msg.from.id);

  await bot.sendMessage(chatId, data.user.username);

  await bot.sendContact(chatId, "+919590204102", "Abhishek", {
    last_name: "Mahato",
    vcard: true,
  });

  await bot.sendDice(chatId);

  await bot.sendVenue(
    chatId,
    22.8018642,
    86.0983117,
    "Kalash Bhawan",
    "Pragati Nagar, Staion Road Gamharia, Jamshedpur, Jharkhand - 832108"
  );
});

bot.on("polling_error", console.error);
