module.exports =(sequelize,DataTypes)=>{
    const cart=sequelize.define(
        "cart",
        {
            cart_id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                allowNull:false,
                autoIncrement:true
            },
            user_id:{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            product_id  :{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            qty  :{
                type:DataTypes.INTEGER,
                allowNull:false,
            }
        },
        {
            tableName:"cart"
        }
    );
    return cart
}