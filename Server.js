const express =require('express')
const cors = require ('cors')
const dotenv = require('dotenv')
const path =require('path')


//rest object
const app = express()

//dotenv configurations
dotenv.config();





//middlewares
app.use(cors());
app.use(express.json());

//static files access
// app.use(express.static(path.join(__dirname,'./frontend/build')))
app.use(express.static(path.join(__dirname, 'build')));


//routes
app.use('/api/v1/protfolio', require('./routes/protfolioRoute.js'))

// app.get('*', (req,res)=>{
//     res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
// });

app.get('/*', function (req, res) {
       res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
    
//port
const PORT = process.env.PORT|| 3005


//listen

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

