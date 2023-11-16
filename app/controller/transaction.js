module.exports = {
    async transfer(req,res){
        const {source, destination, amount} = req.body

        if(source){
            if(destination){
                res.status(201).json({ 
                    status: 'success', 
                    code: 200, 
                    message: 'Transfer berhasil!',
                })
            }
        }
    }, 
    async cekSaldo(req,res){
        const result = "Ini jumlah saldo"

        return res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: result
        })
    }
}