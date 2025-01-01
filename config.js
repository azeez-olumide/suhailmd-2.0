const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 8176376470";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_31_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSlZoZlFybzF3OFlXTGhGZTcxblpMNFZBdWhLbGM3RzNEdk5zcC9NWkptQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLXlfbUYyUV9UZXVzZnRFXzU2SkxXZ1wiLFxuICBcInBob25lSWRcIjogXCJhNDQxMzJhOS0zNzBlLTRkNjMtOGFjZC02NGM0MmQ4MGY3MmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTY3LFxuICAgICAgODEsXG4gICAgICAzLFxuICAgICAgMTE3LFxuICAgICAgMTAzLFxuICAgICAgMTEyLFxuICAgICAgMTY4LFxuICAgICAgMTQ3LFxuICAgICAgMTUwLFxuICAgICAgODgsXG4gICAgICAxMzYsXG4gICAgICAyNDMsXG4gICAgICAxOTAsXG4gICAgICAyMDksXG4gICAgICA0LFxuICAgICAgMjM0LFxuICAgICAgNTUsXG4gICAgICAyMzIsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAyMjgsXG4gICAgICAyMSxcbiAgICAgIDMwLFxuICAgICAgNTYsXG4gICAgICAxOTAsXG4gICAgICAxNzIsXG4gICAgICAxOTUsXG4gICAgICA1NCxcbiAgICAgIDEzMSxcbiAgICAgIDE0MixcbiAgICAgIDEwMixcbiAgICAgIDE5OSxcbiAgICAgIDE0OSxcbiAgICAgIDIyNyxcbiAgICAgIDMsXG4gICAgICA4MSxcbiAgICAgIDUwLFxuICAgICAgNzgsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTZKSkY2UFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNzYzNzY0NzA6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NTk0MjA4NjI3OTMzMjo0MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNN2QyS0lCRUxQZTA3c0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhMN3Rvb2w3RWNYQXluQmlOZ0hpc1FrRTNlbCtKZFpITU11QWhQS213WHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHI4eFAvUlV5V3pGb1Z1aEhzVmhCdDc2VVZVNGxEMFFnM0hCWXovNEpZZkNINGcrTXdRK0VCc0VhdVE5d0VQb3VpMmtMWHFUdDZGYnFyKzdDUjNVQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRTNhay9oWmpKUEs4bUJnSCtrc0crdjhicW1waHkvL21takZ2Y1p3NVRteHFscEFCWS9RanB1b0R3ZjMwcDNBS2dicXBzNC84WkkrYjE4d0FRa3hGaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE3NjM3NjQ3MDo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTcxNjY2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
