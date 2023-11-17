const model = require('../models/')

module.exports = {
    getRegister : async (req,res)=>{
        res.render('register.ejs')
    },
    postRegister : async (req,res)=>{
        const {name,email, password, identity_type, identity_number, address} = req.body
        if(email === new model.register.User("Onny Vergiean", "onny@example.com").email){
            return res.status(400).json({
                status : 'fail',
                code : 400,
                message : 'Registrasi gagal : Email sudah terdaftar'
            })
        }
        if(email !== new model.register.User("Onny Vergiean", "onny@example.com").email){

            return res.status(200).json({
                status : 'success',
                code : 200,
                message : "Registrasi berhasil"
            })
        }
    }
}