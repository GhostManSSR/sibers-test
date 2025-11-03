let socket;

import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Input from "@/components/layout/Input";
import styles from "@/assets/styles/components/Chat/index.module.css";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io();

        socketRef.current.on("receive_message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() === "") return;
        socketRef.current.emit("send_message", message);
        setMessages((prev) => [...prev, message]);
        setMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className={styles.chat_container} style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div className={styles.messages_container} style={{ flexGrow: 1, overflowY: "auto", padding: "10px" }}>
                {messages.map((msg, index) => (
                    <div key={index} className={styles.message}>
                        {msg}
                    </div>
                ))}
            </div>
            <div className={styles.input_container} style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
                <Input
                    style={{ width: "100%", height: "42px" }}
                    type="text"
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>
    );
};

export default Chat;

