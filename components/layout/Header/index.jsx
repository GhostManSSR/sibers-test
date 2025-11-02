import styles from "@/assets/styles/components/layout/Header.module.css";
import Select from "@/components/layout/Select";
import Search from "@/components/chats/Search";
import { useEffect, useState } from "react";
import Button from "@/components/layout/Button";
import ModalWindow from "@/components/ModalWindow";
import Avatar from "@/components/authorization/Avatar";

const Header = ({...props}) => {
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
                <a href={"/"}><img src={"/img/logo.png"} className={styles.header__logo}/></a>
            </div>
            <div className={styles.header__column}>
                <Search/>
            </div>
            <div className={styles.header__column}>
                {!props.currentUserName ? <Button type={"warning"} onClick={() => setModalOpen(true)}>Log in</Button> :
                    <Avatar currentUser={props.currentUser} username={props.currentUserName} url={"/img/user.png"} setCurrentUserName={(value) => props.setCurrentUserName(value)}/>}
                    <ModalWindow isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <Select setCurrentUserName={(value) => props.setCurrentUserName(value)} options={props.listNameUsers} defaultValue={"Выбирите пользоватля"} />
                </ModalWindow>
            </div>
        </header>
    );
};

export default Header;
