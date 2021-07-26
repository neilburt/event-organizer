const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
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
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

        details: {
            type: DataTypes.TEXT,
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
        timestamps: true,
        freezeTableName: true,
        modelName: 'savedEvent'
    }
)

module.exports = SavedEvent;