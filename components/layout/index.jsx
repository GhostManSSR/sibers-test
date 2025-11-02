import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserName, setListNameUsers } from "@/reducers/userSlice";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/assets/styles/components/layout/index.module.css";
import users from "@/data/users.json";

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const { currentUser, currentUserName, listNameUsers } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(setListNameUsers(users));
    }, [dispatch]);

    return (
        <div className={styles.layout__main}>
            <Header
                currentUser={currentUser}
                listNameUsers={listNameUsers.map(user => ({ title: user.username }))}
                currentUserName={currentUserName}
                setCurrentUserName={(name) => dispatch(setCurrentUserName(name))}
            />
            <div className={styles.layout__container}>
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
