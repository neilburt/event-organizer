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
        
        // type: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },

        // date: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },

        details: {
            type: DataTypes.TEXT,
            defaultValue: "Details unavailable."
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