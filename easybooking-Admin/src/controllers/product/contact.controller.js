const nodemailer = require("nodemailer");
const {
    mailreply,
    contract,
}= require('../../helper/mailreply');
class contactController{
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mrtaivietbac@gmail.com',
                pass: 'wxuh ffky dcfo edqh'
            }
        });
    }
    getAll=async(req,res)=>{
       return res.render('contact');
    }
    sendContactMail = async (req, res, next) => {
        try {
            const { Name, Email, Message } = req.body;
            const replyContent = mailreply();        
            const mailOptions = {
                from: 'mrtaivietbac@gmail.com',
                to: Email,
                subject: `Thank you for your feedback, ${Name}!`, 
                html: `<p>Dear ${Name},</p><p>${replyContent}</p>`, 
            };
            await this.transporter.sendMail(mailOptions);
            res.redirect('/home');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } 
    }
}
module.exports=new contactController();