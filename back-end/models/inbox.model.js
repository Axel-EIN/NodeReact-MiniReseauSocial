
export default (connection, DataTypes) => {
    return connection.define(
      "Inbox",
      {
        
        text: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  };
  