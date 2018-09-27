module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        authtestdata: DatatTypes.STRING,
        owner: DataTypes.INTEGER
    });
};