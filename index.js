const TelegramApi  = require('node-telegram-bot-api')

const token = "6183220599:AAGzgg3MrVrxu2lu92WoBRRpLWanGa2UmWU";


students = [
  {
    name: "",
    lastName: "",
    name: [
      {
        day: "Monday",
        time_h: 18,
        time_m: 30,
      },
      {
        day: "Monday",
        time_h: 18,
        time_m: 30,
      },
    ],
    name: "",
    name: "",
  },
];














const bot = new TelegramApi(token, {polling: true})

const keyboardOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "my text1", callback_data: "super1" },
        { text: "my text2", callback_data: "super2" },
      ],
      [{ text: "my text3", callback_data: "super3" }],
    ],
  }),
};



bot.setMyCommands([
  { command: "/start", description: "sstart" },
  { command: "/help", description: "ok" },
]);


bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
        bot.sendMessage(chatId, 'Hello')
        bot.sendSticker(
          chatId,
          "https://th.bing.com/th/id/R.dcc695cb7dfebe439d96a1b2783620b5?rik=miYGC2ZgeKLgmg&pid=ImgRaw&r=0",
          keyboardOptions
        );
    }
})

bot.on('callback_query', (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    bot.sendMessage(chatId, 'super')
})