import styles from "@/assets/styles/components/layout/Header.module.css";
import Select from "@/components/layout/Select";
import Search from "@/components/chats/Search";
import users from "@/data/users.json";
import { useEffect, useState } from "react";
import Button from "@/components/layout/Button";
import ModalWindow from "@/components/ModalWindow";
import Avatar from "@/components/authorization/Avatar";

const Header = ({...props}) => {
    const listNameUsers = users.map(item => ({ title: item.username }));
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = scrolled
        ? `${styles.header} ${styles.scrolled}`
        : styles.header;

    return (
        <header className={headerClass}>
            <div className={styles.header__column}>
                <img src={"/img/logo.png"} className={styles.header__logo}/>
            </div>
            <div className={styles.header__column}>
                <Search/>
            </div>
            <div className={styles.header__column}>
                {!props.currentUser ? <Button type={"warning"} onClick={() => setModalOpen(true)}>Log in</Button> :
                    <Avatar username={props.currentUser} url={"/img/user.png"} setCurrentUser={(value) => props.setCurrentUser(value)}/>}
                    <ModalWindow isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <Select setCurrentUser={(value) => props.setCurrentUser(value)} options={listNameUsers} defaultValue={"Выбирите пользоватля"} />
                </ModalWindow>
            </div>
        </header>
    );
};

export default Header;
