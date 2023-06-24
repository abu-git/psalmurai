import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

async function sendEmail(req, res){
    //console.log(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    
    try{
        await sgMail.send({
            to: 'psalmurai@gmail.com',
            from: '3310572@myuwc.ac.za',
            subject: `From: ${req.body.name} with mail ${req.body.email}`,
            text: req.body.message,
        }).then(() => {
            console.log("Email sent")
            res.status(200).json({ status: 'Ok' })
        }).catch((err) => {
            console.error(err.body)
            res.status(400).json({ error: err.message })
        })
    }catch(err){
        console.log(err)
        res.status(200).json({ error: '' })
        return 
    }
}

export default sendEmail