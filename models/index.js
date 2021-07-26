const User = require('./User');
const SavedEvent = require('./SavedEvent');
const CreatedEvent = require('./CreatedEvent');


User.hasMany(SavedEvent, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),

User.hasMany(CreatedEvent, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),

SavedEvent.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),

CreatedEvent.belongsTo(SavedEvent, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),


SavedEvent.hasMany(CreatedEvent, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}),



module.exports = { User, SavedEvent, CreatedEvent };
