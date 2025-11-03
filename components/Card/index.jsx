import styles from "@/assets/styles/components/Card/index.module.css"
import Image from "next/image";
import Button from "@/components/layout/Button";
import {useRouter} from "next/router";

const CardSetting = ({...props}) => {

    return(
        <div className={styles.card_setting__container} style={props.style}>{props.children}</div>
    )
}

const CardChat = ({...props}) => {
    return(
        <div className={styles.card_chat__container} style={props.style}>{props.children}</div>
    )
}

const CardUser = ({...props}) => {
    const router = useRouter();
    const isCurrentUser = props.currentUser.username === props.username;

    return(
        <div className={styles.card_user__container} style={props.style}>
            <div className={styles.card_user__line_name}>
                <Image height={32} width={32} src={"/img/user.png"}/>
                <span className={styles.card_user__username} onClick={() => router.push({pathname:`/user/${props.user.id}`, query: {q: props.user}})}>{props.username}</span>
            </div>
            {!isCurrentUser ? <div className={styles.card_user__buttons}>
                <Button type="warning" onClick={() => alert("Invite")}>Invite to friends</Button>
                <Button type="success" onClick={() => router.push(`/chat/${props.user.id}`)}>Send message</Button>
            </div> : <span>Your profile</span>}
        </div>
    )
}


const Card = ({...props}) => {
    let type = props.type || "setting"
    const Component = type === "chat" ? CardChat : type === "user" ? CardUser : CardSetting;

    return(
        <Component {...props}/>
    )
}

export default Card