const {User, Post} = require('../models');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Like', {
        PostId: {
            type: DataTypes.INTEGER,
            reference: {
                model: Post,
                key: 'id',
            }
        },
        UserId: {
            type: DataTypes.INTEGER,
            reference: {
                model: User,
                key: 'id',
            }
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    })
}