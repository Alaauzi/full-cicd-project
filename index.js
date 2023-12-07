import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',(req,res)=>{
    return res.status(200).json({
        message:'Hello from Full-CICD-Project using AWS, Docker, Jenkins, Github'
    })
})

const port =3000;

app.listen(port,() =>{
    console.log (`server is running via port ${port}`)
})
