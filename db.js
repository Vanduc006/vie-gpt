const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://openai80.p.rapidapi.com/chat/completions',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '2bdc1f0810mshfc6e44c69c98822p1bdb0bjsn85b73f91c2d1',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
    'Accept-Encoding': 'identity'
  },
  data: {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'Hello!'
      }
    ]
  }
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
    const result = response.data.choices[0].message[0].content;
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });
