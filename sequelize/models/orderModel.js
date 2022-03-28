module.exports = (sequelize, DataTypes) => {

    const OrderM = sequelize.define("order", {
        ordernum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userid: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },    
        total: {
            type: DataTypes.INTEGER
        }
    })

    return OrderM;

}