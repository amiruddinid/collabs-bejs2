module.exports = {
    async update(req, res) {
        const userId = req.params.id || req.body.id;

        // Lakukan validasi jika ID pengguna tidak ada
        if (!userId) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'User ID is required for updating user'
            });
        }

        // Mengirimkan respons bahwa pengguna telah diupdate
        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'User updated'
        });
    }
};
