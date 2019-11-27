
module.exports = {
    async dale(req, res){
        res.send({ ok: true, user: req.userId })
    }
}

