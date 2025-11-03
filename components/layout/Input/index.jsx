import styles from "@/assets/styles/components/layout/Input.module.css"

const Input = ({...props}) => {

    return <input onKeyPress={props.onKeyPress} disabled={props.disabled} type={props.htmlType || "text"} className={props.className || styles.input_field} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
}

export default Input;