const sequelize = require('../config/connection');
const { User, SavedEvent } = require('../models'); // would this be for SavedEvent or CreatedEvent

const userData = require('./userData.json')
const savedData = require('./savedData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const saves of savedData) {
        await SavedEvent.create({
            ...saves,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
}

seedDatabase();