export default (connection, DataTypes) => {
  connection.define(
    "User",
    {
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
      },
    },
    {
      timestamp: true,
    }
  );
};