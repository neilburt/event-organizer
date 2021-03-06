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
        modelName: 'savedEvent'
    }
)

module.exports = SavedEvent;