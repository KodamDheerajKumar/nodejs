module.exports = (sequelize, DataTypes) => {

    const ProductM = sequelize.define("product", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return ProductM;

}