require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || "MTIyMTUzNjI3Mzk0NTIwMjc3OA.GzJmRu.2Q1kEZrqdWNdjupBjlCYgdcrfu2idT8z_d6CXM", // your bot token
  prefix: process.env.PREFIX || "*", // bot prefix
  ownerID: process.env.OWNERID || ["1187483815334133820"], //your discord id
  mongourl:
    process.env.MONGO_URI ||
    "mongodb+srv://Rakibxox:omit968965@cluster0.lbvtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
  topggapi: "",
  embedColor: process.env.COlOR || "#303037", // embed colour
  logs: process.env.LOGS || "1218516170668249089", // channel id for guild create and delete logs
  langs: process.env.LANGS || "en",
  nodes: [
    {
      host: process.env.NODE_HOST || "lava.link",
      identifer: process.env.NODE_ID || "Main",

      port: parseInt(process.env.NODE_PORT || "80"),
      password: process.env.NODE_PASSWORD || "LAVA",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
