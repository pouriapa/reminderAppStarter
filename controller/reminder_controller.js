let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: Math.floor(Math.random() * 100),
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminder"); 
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    
    let remidnerToUpdate = req.params.id;
    let reminderBody = req.body;    
    let updateReminderField = {id:+remidnerToUpdate , title:reminderBody.title , description:reminderBody.description , completed:reminderBody.completed == 'true'};
    let elementIndex = database.cindy.reminders.findIndex(element => element.id === +remidnerToUpdate)
    database.cindy.reminders[elementIndex] = updateReminderField;    
    res.redirect("/reminder");
  },

  delete: (req, res) => {
    
    let reminderToDelete = req.params.id;
    let fileteredReminders = database.cindy.reminders.filter((element) => {
      return element.id != reminderToDelete;
    })
    database.cindy.reminders = fileteredReminders;
    res.redirect('/reminder');
  },
};

module.exports = remindersController;
