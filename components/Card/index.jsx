import styles from "@/assets/styles/components/Card/index.module.css"

const CardSetting = ({...props}) => {

    return(
        <div className={styles.card_setting__container}>{props.children}</div>
    )
}

const CardChat = ({...props}) => {


    return(
        <div className={styles.card_chat__container}>{props.children}</div>
    )
}


const Card = ({...props}) => {
    let type = props.type || "setting"
    const Component = type === "chat" ? CardChat : CardSetting;

    return(
        <Component {...props}/>
    )
}

export default Card