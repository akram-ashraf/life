module.exports =(sequelize,DataTypes)=>{
    const product=sequelize.define(
        "product",
        {
            product_id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                allowNull:false,
                autoIncrement:true
            },
            product_name:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            price:{
                type:DataTypes.DECIMAL(10,2),
                allowNull:false
            },
            mrp:{
                type:DataTypes.DECIMAL(10,2),
                allowNull:false
            },
            discount:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            image:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            brand:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            tag:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            category:{
                type:DataTypes.STRING(15),
                allowNull:false
            },
            stock_bal:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
        },
        {
            tableName:"product"
        }
    );
    return product
}