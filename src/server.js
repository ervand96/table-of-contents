const axios = require('axios')


axios.delete('https://jsonplaceholder.typicode.com/posts/2')
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Message: Post Get successfully');
        console.log(111);
    }).catch((err) => {
        console.error(err);
    });
console.log(axios)