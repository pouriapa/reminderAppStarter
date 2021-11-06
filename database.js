let Database = {
    cindy: {
        reminders: [{id: Math.floor(Math.random() * 100), title: "first reminder", description: "first description for Cindy", completed: false}]
    },
    alex: {
        reminders: []
    } 
}

module.exports = Database;