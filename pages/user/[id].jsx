import {useDispatch, useSelector} from "react-redux";
import styles from "@/assets/styles/pages/user/index.module.css"
import Card from "@/components/Card"
import Input from "@/components/layout/Input";
import {setListNameUsers, updateUser} from "@/reducers/userSlice";

const User = ({...props}) => {
    const currentUser = useSelector( ( state ) => state.user.currentUser );
    const dispatch = useDispatch();


    return(
        <div className={styles.user__container}>
            <Card type={"setting"}>
                <h2>Setting</h2>
                    <span>Your name:</span>
                    <Input placeholder={"Your name"} value={currentUser.username} onChange={(e) => dispatch(updateUser({ username: e.target.value }))}  />
            </Card>
        </div>
    )
}

export default User