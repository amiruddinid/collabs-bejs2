module.exports = {
    async create(req, res){
        // console.log(profile);

        res.status(201).json({
            status : 'success',
            code : 201,
            message : 'Data ditambahkan!',
            data : [{
                nama: "Beyonce"
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
