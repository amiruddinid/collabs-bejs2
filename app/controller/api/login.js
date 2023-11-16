module.exports={
    async login(req,res){
        return res.status(201).json({
            status:"Success!",
            message:"Berhasil Login!",
            data:{
             nama:"Tim Login",
             email:"login@gmail.com"
            },
        })
    }
}