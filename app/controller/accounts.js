module.exports = {
    async create(req, res){
        // console.log(profile);

        res.status(201).json({
            status : 'success',
            code : 201,
            message : 'Account ditambahkan',
            data : [{
                nama: "Beyonce"
            }]
        })
    },
}