import Select from "@/components/layout/Select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "@/assets/styles/components/layout/index.module.css";
import {useEffect, useState} from "react";

const Layout = ({ ...props }) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <>
            <Header currentUser={currentUser} setCurrentUser={(value) => setCurrentUser(value)}/>
            <div className={styles.layout__container}>
                {props.children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;