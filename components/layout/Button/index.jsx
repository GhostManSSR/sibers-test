import styles from "@/assets/styles/components/layout/Button.module.css"

const Button = (props) => {
    console.log(props)
    let className;
    let type = props.type ? props.type : 'default';

    switch (type) {
        case 'success':
            className = styles.button__success;
            break;
        case 'warning':
            className = styles.button__warning;
            break;
        case 'danger':
            className = styles.button__danger;
            break;
        case 'default':
        default:
            className = styles.button;
    }

    return <button className={props.className || className} onClick={props.onClick} type={props.htmlType} style={props.style}>{props.children}</button>
}

export default Button