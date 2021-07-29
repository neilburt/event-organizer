const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedEvent extends Model {}

SavedEvent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false
<<<<<<< HEAD
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // details: {
        //     type: DataTypes.TEXT,
        //     defaultValue: "Details unavailable."
        // },

        date: {
            type: DataTypes.DATE,
=======
        },

        type: {
            type: DataTypes.STRING,
>>>>>>> 129de226d685ba552f18092ca572aac696437707
            allowNull: false
        },
        

        datetime_local: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "TBD"
        },

        // url: {
        //     type:DataTypes.STRING,
        //     allowNull: true
        // },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'savedevent'
    }
)

module.exports = SavedEvent;