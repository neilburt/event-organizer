const { Model, DataTypes } = require('sequelize');
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
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false
        },

        details: {
            type: DataTypes.TEXT,
            defaultValue: "Details unavailable."
        },
    
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        max_capacity: {
            type: DataTypes.INTEGER
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
        modelName: 'createdEvent'
    }
)

module.exports = CreatedEvent;