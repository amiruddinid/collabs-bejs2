module.exports={
    async delete(req,res){
        return res.status(200).json({
            status:"Success!",
            message:"Data Berhasil Dihapus!",
            
        })
    }
    
}