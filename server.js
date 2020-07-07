const express = requrie('express');

const app = express();

app.listen(3000, () => {
    console.log('app is running on port 3000');
});