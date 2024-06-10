
export default (connection, DataTypes) => {
    return connection.define(
      "Inbox",
      {
        subject: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        text: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        isThread: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        timestamps: true,
      }
    );
  };
  