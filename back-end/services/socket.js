import app from "../app.js";
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);

// Création du serveur WebSocket avec configuration CORS pour autoriser les connexions
// depuis 'http://localhost:5173'
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  socket.on("error", (error) => {
    console.log("Socket error:", error);
  });
});

export { server, io };