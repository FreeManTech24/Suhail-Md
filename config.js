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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348164177231";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_29_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiblpzQWFBUjdUUnR3NkZ3YzBEcHlBYWtmQUE0MEYrbnJMWlMydVhZUXNhcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY0MTc3MjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QzhFQjRFNTVGOUFGNkJEQTAzMzY0MkVBQTg0RkE5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1ODczNzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX3dMU2thZUpSckNsWDNaeEs3WHhkQVwiLFxuICBcInBob25lSWRcIjogXCJmODRiZTRlNC1hMzc5LTQ5MjctYmI2ZC0zZjBiN2QwYmRkMGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTkxLFxuICAgICAgODcsXG4gICAgICAxOTUsXG4gICAgICA5NCxcbiAgICAgIDE5NSxcbiAgICAgIDE5MyxcbiAgICAgIDE4NSxcbiAgICAgIDEwOSxcbiAgICAgIDIyMSxcbiAgICAgIDE1MyxcbiAgICAgIDYzLFxuICAgICAgODQsXG4gICAgICAyMzIsXG4gICAgICAxMixcbiAgICAgIDI0MSxcbiAgICAgIDQyLFxuICAgICAgMjYsXG4gICAgICAxMTAsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAxNTEsXG4gICAgICAxMDEsXG4gICAgICAxMDcsXG4gICAgICAyNDYsXG4gICAgICAxNjAsXG4gICAgICAxMCxcbiAgICAgIDE0MixcbiAgICAgIDEwNixcbiAgICAgIDEzNyxcbiAgICAgIDIzOCxcbiAgICAgIDE2NCxcbiAgICAgIDIwMCxcbiAgICAgIDIwNyxcbiAgICAgIDE0NCxcbiAgICAgIDYwLFxuICAgICAgODcsXG4gICAgICA3NyxcbiAgICAgIDIxOCxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRjNROVJaOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NDE3NzIzMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NjUxMjY2MzA5MzI4OToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01pQy93TVE0ckd5dFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWhjZUVKR3JCOHo1dk9FN2xMenhEeGNESWcrTkExdDZlWC9aUS9DMWNDQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBQ0pweGVKbGxlcmtSYTV5NVg3MS9LbG5jeFFBbU1GNno2cFo4QUVFcEJqWXdWSkxxZFVMYXdzRTBJWExvbHh2cGFiMm1rYndiNWJ2ajN3K1hiWmdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrdWg5Yi9CK3orVmtXWHpGcGx6WXZzanpuSFF1Wm9hanVjbVF5cWhwMjdmUUlMUzJ2RTVUa3p6ZEJDSXRNNTk2KytjamZXZ2FuM0sra2plOWw1L3lBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY0MTc3MjMxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTg3MzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGlOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIaU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzeFhtTTBvL2hMc2pkeG9tanNIc0h0aWRTSkVvcWRFU2Vpa0VzWjhlTnFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzNzI1NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU4NzM3MjkyOVwifSIKfQ=="  // PUT your SESSION_ID 


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
