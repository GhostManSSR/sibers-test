import {useState} from "react";
import styles from "@/assets/styles/components/ListChats/index.module.css"

const ListChats = ({...props}) => {
    const [chatsUser, setChatsUser] = useState([{title: "Hello", lastMessage: "Hello bro", dataLastMessage:"12.04.2025"}])

    const ChatItem = ({...props}) => {
        return(
            <div key={props.key}>
                <span>{props.item.title}</span>
                <span>{props.item.lastMessage}</span>
                <span>{props.item.dataLastMessage}</span>
            </div>
        )
    }

    return(
        <div className={styles.list__container}>
            {chatsUser.map((item, key) => (
                <ChatItem key={key} item={item}/>
            ))}
        </div>
    )
}

export default ListChats;