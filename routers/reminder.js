const express = require('express');
const router = express.Router();
const reminderController = require('../controller/reminder_controller');

router.get("/reminders", reminderController.list);

router.get("/reminder/new", reminderController.new);

router.get("/reminder/:id", reminderController.listOne);

router.get("/reminder/:id/edit", reminderController.edit);

router.post("/reminder/", reminderController.create);

// Implement this yourself
router.post("/reminder/update/:id", reminderController.update);

// Implement this yourself
router.post("/reminder/delete/:id", reminderController.delete);


module.exports = router;