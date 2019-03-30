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
  res.send(p.performAction(req.params.serverid, {action: PetActionKind.FEED, args: {food:Food.COCONUT}}));
});

/* play pet */
router.get('/:serverid/:userid/play', function(req, res, next) {
    res.send('PLAY');
});

/* paint pet */
router.get('/:serverid}/:userid/paint', function(req, res, next) {
    res.send('PAINT');
});

export = router;