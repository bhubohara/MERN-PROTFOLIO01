const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

const API_SENDGRID = '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';

//transport
debugger;
const transporter = nodemailer.createTransport(
    sendGridTransport({
        
        auth:{
            
            api_key:API_SENDGRID 
        },
    })
)

const sendEmailController =(req,res)=>{
    try{
        const {name,email,message}=req.body

        //validation

        if(!name || !email || !message){
            return res.status(500).send({
                sucess: false,
                message:"all field are required"
            })
        }
        //email matter

        transporter.sendMail({
            to:'bhubohara@gmail.com',
            from:'bhupendrabohara44@gmail.com',
            subject: 'Regading Mern protfolio app',
            html:`
                <h5> Details informations</h5>
                <ul>
                    <li>
                        <p>name : ${name}</p>
                    </li>
                    <li>
                        <p>email : ${email}</p>
                    </li>
                    <li>
                        <p>message : ${message}</p>
                    </li>
                </ul>
            
            `
        })
        return res.status(200).send({
            sucess:true,
            message:"your message send sucessfully !"
        })
    }
catch(error){
    console.log(error)
    return res.status(500).send({
        sucess:false,
        message:"send email api error",
        error,
    });
}
}

module.exports ={sendEmailController};