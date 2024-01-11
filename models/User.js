module.exports =(sequelize,DataTypes)=>{
    const user=sequelize.define(
        "user",
        {
            user_id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                allowNull:false,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            email:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            phone:{
                type:DataTypes.STRING(15),
                allowNull:false
            },
            
            password:{
                type:DataTypes.STRING(255),
                allowNull:false
            }
        },
        {
            tableName:"user"
        }
    );
    return user
}