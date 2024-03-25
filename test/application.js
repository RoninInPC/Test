require(“dotenv”).config()
const { createClient } = require("redis");

const redisClient = createClient({
   url: process.env.REDIS_URL,
   socket: {
       tls: true,
       servername: process.env.REDIS_HOST,
   },
});


const ami = require('asterisk-ami-client');

let client = new AmiClient();

client.connect("Master", "master", { host: "127.0.0.1", port: 5038 })

amiClient.action({
    action: 'Originate',
    channel: 'SIP/softphone',
    context: 'default',
    exten: '0000',
    priority: 1,
    async: true,
    variable: {
      ECHO_TEST: 'echotest'
    }
  }, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Задание на callback выполнено:', task);
  });

