const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝐌𝐑.𝐀𝐛𝐢𝐑 
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐀𝐛𝐢𝐢𝐢𝐢
║ 🎂 𝗔𝗴𝗲 : 26+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐞𝐫
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝐬𝐞𝐬 𝐤𝐨𝐫𝐬𝐢 𝐨𝐧𝐞𝐤 𝐤𝐨𝐬𝐭𝐞
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐍𝐚𝐫𝐚𝐲𝐚𝐧𝐠𝐨𝐧𝐣
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/61555051697231
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/61555051697231
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/𝐧𝐚𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/your 𝐛𝐚𝐥 𝐟𝐚𝐥𝐚𝐢𝐛𝐚 𝐭𝐞𝐥𝐢 𝐝𝐢𝐲𝐚 
╚═════════════════════ ✿
`;

  const images = [
    "https://i.imgur.com/PwZS3QM.jpeg",
    "https://i.imgur.com/PwZS3QM.jpeg",
    "https://i.imgur.com/PwZS3QM.jpeg",
    "https://i.imgur.com/PwZS3QM.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
