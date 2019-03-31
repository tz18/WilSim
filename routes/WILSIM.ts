import express = require('express');
var router = express.Router();
import {PetFacade} from "../PetFacade"
import {Food, PetActionKind} from "../IPetFacade"

let p = new PetFacade();
p.createPet("test","WILSON", "hilde");
router.get('/', function(req, res, next) {
    res.render('index', { title: 'AAWEOFKAOWEFKAWOPERFKAWOPEK' });
});

/* create pet */
router.get('/:serverid/adopt', function(req, res, next) {
    let userid = req.params.userid;
    let serverid = req.params.serverid;
    let result=p.createPet(serverid, userid);
    res.send(result);
});

/* feed pet */
router.get('/:serverid/:userid/feed', function(req, res, next) {
    let userid = req.params.userid;
    let serverid = req.params.serverid;
    let result=p.performAction(serverid, userid, {action: PetActionKind.FEED, args: {food:Food.COCONUT}});
  res.send(result);
});

/* play pet */
router.get('/:serverid/:userid/play', function(req, res, next) {
    let userid = req.params.userid;
    let serverid = req.params.serverid;
    let result=p.performAction(serverid, userid, {action: PetActionKind.PET, args: {}});
    res.send(result);
});

/* paint pet */
router.get('/:serverid/:userid/paint', function(req, res, next) {
    let userid = req.params.userid;
    let serverid = req.params.serverid;
    let result=p.performAction(serverid, userid, {action: PetActionKind.PAINT, args: {}});
    res.send(result);
});

/* admire pet */
router.get('/:serverid/:userid/admire', function(req, res, next) {
    let userid = req.params.userid;
    let serverid = req.params.serverid;
    let result=p.performAction(serverid, userid, {action: PetActionKind.ADMIRE, args: {}});
    res.send(result);
});

/* admire pet */
router.get('/:serverid/:userid/status', function(req, res, next) {
    let userid = req.params.userid;
    let serverid = req.params.serverid;
    let result=p.getPet(serverid,userid);
    res.send(result);
});

export = router;