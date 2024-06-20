const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923154255887";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_46_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI5LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOS9mTjk4dUNwWFZnNmx2WXp1SG9PWW02LzNBcE1RZjhBU0NDc0I5N3dEWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDgxNDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4N0EwN0MwMjAwMUYzMzczQzU2Q0E5MjY3MEU3MkU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg0NDM2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM0ODE0MTU4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzI1QUVCRTk1NERDQjg2MDc5MDQxNjc1RUFCODIxQjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODQ0MzY5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlY0WWZ4MDgxVDdHRXFyOVp5ckFHN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmMyOTA1MTUtOWIyZi00ZjRjLTg2MzgtNTgzY2Y5Yjc3NGRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE3OCxcbiAgICAgIDEwMCxcbiAgICAgIDIwNSxcbiAgICAgIDIzOSxcbiAgICAgIDkxLFxuICAgICAgMTU4LFxuICAgICAgMTksXG4gICAgICAyMTEsXG4gICAgICAyOSxcbiAgICAgIDIyNCxcbiAgICAgIDE2NCxcbiAgICAgIDIzMCxcbiAgICAgIDE4MSxcbiAgICAgIDE2OSxcbiAgICAgIDMxLFxuICAgICAgNzQsXG4gICAgICAxMDgsXG4gICAgICAwLFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTQzLFxuICAgICAgNjUsXG4gICAgICAyNDcsXG4gICAgICAxNzUsXG4gICAgICAxMjcsXG4gICAgICA3MyxcbiAgICAgIDE1NixcbiAgICAgIDE2NSxcbiAgICAgIDEzNSxcbiAgICAgIDExLFxuICAgICAgMTE2LFxuICAgICAgMTEsXG4gICAgICA4NyxcbiAgICAgIDExNyxcbiAgICAgIDksXG4gICAgICA5NyxcbiAgICAgIDE5MixcbiAgICAgIDI0MSxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5REJFS0s0TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ4MTQxNTgzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTE1NTE3Njk5NzA2MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05QbXFid0NFTXozemJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1h4RlAxVm5PZHdQUGZweVduamxqTzgvR2dHcGNqWmJSQ1lzRUhjV2tBTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYU01hemdEVkNTcytXVktrc1FmZFROTVhOK21ScFArSkRXMXNid0IwRHJ0L3dVNExlS3pKcEFHWGY2SzNwZjJ4K0lWdE04eEpGcndWelcrbytyQ25EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrWUxIa2hUOG95L1lwd0g0aEhoSEJGSFU1TUd3bXpmRml1MGxwd1o2OU1lanR0OEtuMXR0S2FSNGdlZEpnTGxHSUZKd2x2NnFQWWN1WmtISWltTHVDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDgxNDE1ODM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4NDQzNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQ3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxDcS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
