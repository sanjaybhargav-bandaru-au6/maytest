const { Router } = require("express");
const {homedata,compdetails} = require('../controller/compani_route')
const router = Router();


router.get('/',homedata)
router.get('/comp_details/:para',compdetails)

 module.exports = router;
