var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


//All actual paths start with "/skills"

//GET/skills
router.get('/', skillsCtrl.index);
// GET/ skills :id
router.get('/:id', skillsCtrl.show);
// GET /skills/new   <-- this new route cannot not stay here!
router.get('/new', skillsCtrl.new);
// // POST /skills
router.post('/', skillsCtrl.create); 
// delete
router.delete('/:id', skillsCtrl.delete)


module.exports = router;
