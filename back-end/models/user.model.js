export default (connection, DataTypes) => {
    connection.define(
    "User",
    {
      // Model attributes are defined here
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // allowNull defaults to true
      },
    },
    {
      timestamp: true,
    }
  );
};