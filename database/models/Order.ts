import { sequelize } from '../database.state';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
    },
    comments: {
        type: DataTypes.STRING,
    },
    article: {
        type: DataTypes.STRING,
    },
    color: {
        type: DataTypes.STRING,
    },

});

export default Order;
