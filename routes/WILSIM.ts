import express = require('express');
var router = express.Router();
import {PetFacade} from "../PetFacade"
import {Food, PetActionKind} from "../IPetFacade"

let p = new PetFacade();
p.createPet("test","WILSON");
router.get('/', function(req, res, next) {
    res.render('index', { title: 'AAWEOFKAOWEFKAWOPERFKAWOPEK' });
});

/* feed pet */
router.get('/:serverid/feed', function(req, res, next) { //:userid/
    let result=p.performAction(req.params.serverid, {action: PetActionKind.FEED, args: {food:Food.COCONUT}});
  res.send(result);
});

/* play pet */
router.get('/:serverid/play', function(req, res, next) {
    let result=p.performAction(req.params.serverid, {action: PetActionKind.PET, args: {}});
    res.send(result);
});

/* paint pet */
router.get('/:serverid/paint', function(req, res, next) {
    let result=p.performAction(req.params.serverid, {action: PetActionKind.PAINT, args: {}});
    res.send(result);
});

/* admire pet */
router.get('/:serverid/admire', function(req, res, next) {
    let result=p.performAction(req.params.serverid, {action: PetActionKind.ADMIRE, args: {}});
    res.send(result);
});

export = router;