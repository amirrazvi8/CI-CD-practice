import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req,res) => {
    return res.send('Hello World from Express.js');
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
