const {Router} = require('express')
const config = require('config')
const Card = require('../models/Card')
const auth = require('../middleware/auth.middleware')
const router = Router()

// router.post('/create', async (req, res) => {
//     try {
//         const baseUrl = config.get('baseUrl')
//         const {from} = req.body


//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
//     }
// })

router.get('/', auth, async (req, res) => {
    try {
        const cards = await Card.find({ owner: req.user.userId })
        res.json(cards)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const card = await Card.findById(req.params.id)
        res.json(card)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router