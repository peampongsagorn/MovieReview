const request = require('request');

const options = {
  method: 'GET',
  url: 'https://apigw1.bot.or.th/bot/public/Stat-ReferenceRate/v2/DAILY_REF_RATE/',
  qs: {start_period: '2014-06-15', end_period: '2014-06-20'},
  headers: {'X-IBM-Client-Id': 'f2fa27fb-0b62-46f0-b464-1144b231356e', accept: 'application/json'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});