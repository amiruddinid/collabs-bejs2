module.exports={
    async get(req,res){
        return res.status(200).json({
            status:"Success!",
            data: [{
                account: 1234567890 
            }]
        })
    },
    async delete(req,res){
        return res.status(200).json({
            status:"Success!",
            message:"Data Berhasil Dihapus!",
            
        })
    }
    
}