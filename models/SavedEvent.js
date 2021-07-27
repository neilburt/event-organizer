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
            allowNull: false
        },

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