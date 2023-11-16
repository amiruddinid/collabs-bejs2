module.exports = {
    get: (req, res) => {
        res.send(200).json({
            message: "success",
            data: [{
                nama: "Agung"    
            }]
        })
    }
}