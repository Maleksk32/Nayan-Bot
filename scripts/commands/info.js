module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐀𝐋𝐄𝐊 𝐑𝐀𝐉 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ꔹꕥꔹꕥꔹꕥꘈꔹꙮꔹꘈꕥꔹꕥꔹꕥꔹ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐈𝐧𝐝𝐢𝐚, 𝐌𝐮𝐫𝐬𝐡𝐢𝐝𝐚𝐛𝐚𝐝 
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐚𝐮𝐝𝐢 𝐀𝐫𝐚𝐛 , 𝐀𝐥 𝐐𝐚𝐬𝐬𝐢𝐦, 
𝐁𝐮𝐫𝐚𝐲𝐝𝐚𝐡 
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟐𝟐+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐃𝐫𝐢𝐯𝐞𝐫 
𝐆𝐦𝐚𝐢𝐥       : 𝐢𝐚𝐦𝐦𝐚𝐥𝐞𝐤𝐬𝐤𝟑𝟒𝟒@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦 
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 𝐰𝐚.𝐦𝐞/+ 𝟗𝟔𝟔𝟎𝟓𝟕𝟑𝟒𝟏𝟖𝟕𝟗𝟖 
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : 𝐌𝐀𝐋𝐄𝐊 𝐑𝐀𝐉 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/malekskroy88`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
