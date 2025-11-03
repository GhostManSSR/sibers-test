import { Server } from "socket.io";

export default function handler(req, res) {
    if (!res.socket.server.io) {
        console.log("Starting Socket.IO server...");
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on("connection", (socket) => {
            console.log("User connected: ", socket.id);

            socket.on("send_message", (msg) => {
                io.emit("receive_message", msg);
            });

            socket.on("disconnect", () => {
                console.log("User disconnected: ", socket.id);
            });
        });
    }
    res.end();
}
