const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('ULearning API is Running now');
});

app.listen(port, () => {
    console.log('ULearning server running on port 5000', port);
})