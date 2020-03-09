const nodemailer  = require('nodemailer')
const bodyParser  = require('body-parser')
const express  = require('express')

const app  = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



app.post('/mail', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    console.log(req)

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      secure: false,
      auth: {
        user: 'quicksavingsapp@gmail.com',
        pass: '2019Red$'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    let mailOptions = {
      from: 'quicksavingsapp@gmail.com',
      to: `${req.body.email}`,
      subject: `Quick$avings Password Reset`,
      text: `
      Login in with this temporary password:
      ${req.body.temp}
      `,
    }

    transporter.sendMail(mailOptions, (err, info) => {
     if (!err) {
        console.log('message sent')
      } else {
        console.log(err)
      }
    })
  })
})



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('listening')
  console.log(PORT)
})
