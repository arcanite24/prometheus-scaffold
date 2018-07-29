module.exports = {

  test(req, res) {
    return res.json({msg: 'Hola :D el controller de user funciona'})
  },

  otro(req, res) {
    return res.json({msg: 'otro funcando'})
  }

}