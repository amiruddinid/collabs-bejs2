module.exports = {
    async create(req,res){
        res.status(201).json({
            status: 'success',
            code: 201,
            message: 'User created'
        })
    }
}