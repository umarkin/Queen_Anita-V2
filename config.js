//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923016883089";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkRpbVNYbjhXUWpWa3UrMStCVUxnMlVMSWZNVkQwc2NTeE90QlZlSEsyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWNMM1VYOURhVW1sbTBLU3FUcW9ybjFSQmxPbVpNSVh1akNHemlUR3hFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TDJXMjJNMDNoSlFiS1RuQkpaRTQwbGRYenJlT2pkRVNTSkpjTVFoS1VzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMVVRY1pIY3dPQVJmRDA2a1lIRC9wNmVxdCtsaTY4NWtTYjNqbmlpUEdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBZGRtblJsNS9JTU5RQlNXZ1doWGNuNlRnUWsydHFNdGtHdCtaNUlTV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEvbSt3YW1ZT3FITXh0ZHRKc0NONHlWQUgvc2FnNkFJZ29kR09xYVVxbXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0IyVFJockl4T0g3ZUZwdkh5S3YybGRWZ3RYRzljc0pmcUVOdk5JUDdGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREtOWWZDcGYwVFlUbks5YXpHUTgvdmdkNXlSSS84bkhqNTNXRHVpSytIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh0ak5HYitWT1RjN29PYXpLdjFxNGtBckNiOHRZaVpJMmo4bG1Lc2NhbExGejFpY0o1Z203QlVONnVTeGV4RTF0b3VibEZtVHkyUjh3VTlUb3NGS0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJTRFVqRVhwcGllY2VqWmxQUCt6UmgwNSthU29kaDJna3FZaU4wMlFVcFk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMZF9JOEYxeVQxNlc1MHFBelNMMFV3IiwicGhvbmVJZCI6IjE3NGY1MzQ5LTdiMWEtNGQ4Mi1hN2NhLTg3NjJkY2FiMjAzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUlF5dmNlUTA4RnpKK3BLNTM0cDk2NjRiYXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVZiaklTZVVEdlVGdmJBRFJmRDV4c3VHM3NrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE0OFpNN0pKIiwibWUiOnsiaWQiOiI5MjMwMTY4ODMwODk6NjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pyI4oKA4bew4oKDzavigoDNo+KCgeG3ouKChuKCiOK3qOKCiOG3tOKCg+G3m+KCgM2q4oKIzaPigonht57im7kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082ZXBiQURFS3lKdmJVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhYV2hnTHlOMGlQQTNYVkYvQUdEbVZzYUxrNEJ0NG9iaFNNWjA5M1h0MU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InJsNldGVDdPT1ZySUpFem5VdVJndFNZSzBRcTJydXY5SHhyaHVtaEViTkJLRHIrZjBtbEkzSGxUNGNTTm03VzFuU1d2RFZRNEJOV0ZoMjRRSTNpakRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIVjFwQ0p6WnJBdkJXdENaNEUvbDFVYyt2NEsyWU83YXRRdmpuNGIzN01sN0lObUkrS0Y0dnVCM3JLRFE1R0xGQ1hqTEE3SC9sdENZcUJQMWZsQ0ZBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAxNjg4MzA4OTo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZVjFvWUM4amRJandOMTFSZndCZzVsYkdpNU9BYmVLRzRVakdkUGQxN2RUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzYyNDI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpteiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "umar Mughal",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
