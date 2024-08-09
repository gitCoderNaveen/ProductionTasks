const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const dataModel = require('../model/data-models')

router.use(bodyParser.json())

router.get('/', (req, res)=>{
    res.send('Datas page')
})
// GET request to fetch firm name and door no based on product name 
router.get('/getFirmDetails', async (req, res) => {
    const productName = req.query.product;

    try {
        const firm = await dataModel.find({ product: productName }, 'firmname doorno street area city pincode mobile product');
        if (firm.length>0) {
            res.json(firm);
        } else {
            res.status(404).json({ message: 'Firm not found for the specified product' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;