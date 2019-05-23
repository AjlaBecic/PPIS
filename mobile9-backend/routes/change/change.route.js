const express = require('express');
const ChangeRouter = express.Router();
const ChangeController = require('./change.controller');

ChangeRouter.post('/', ChangeController.newChange);
ChangeRouter.get('/new', ChangeController.getNewChanges);
ChangeRouter.get('/all', ChangeController.getAllChanges);
ChangeRouter.get('/', ChangeController.getChange);
ChangeRouter.get('/board', ChangeController.getChangeBoard);

ChangeRouter.put('/dodijeliOdboru', ChangeController.dodijeliOdboru);
ChangeRouter.put('/approved', ChangeController.approved);
ChangeRouter.put('/dodijeliTehnicaru', ChangeController.dodijeliTehnicaru);
ChangeRouter.put('/', ChangeController.updateChange);

module.exports = ChangeRouter;