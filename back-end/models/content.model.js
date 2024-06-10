export default (connection, DataTypes) => {
    connection.define(
    "Content",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING(280), // Limite de 280 caractères pour un tweet
        allowNull: false,
        validate: {
            notEmpty: true,   // On vérifie que le champ n'est pas nul
            len: [1, 280]
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true 
})
}