const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class CreatedEvent extends Model {}

CreatedEvent.init(
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
        modelName: 'createdEvent'
    }
)

module.exports = CreatedEvent;