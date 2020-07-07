const express = require('express');

const app = express();

const database = {
    users: [
        {
            id: "123",
            name: "Grace",
            email: "grace@gmail.com",
            password: 'cookies',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('This is working')
});

app.post('/signin', (req, res) => {
    res.json('signin');
})


app.listen(3000, () => {
    console.log('app is running on port 3000');
});

// "/" --> res = this is working
// /signin --> POST = success/fail
// /register --> POST = user
// /profile/:userId --> GET = user
// /image --> PUT --> user
