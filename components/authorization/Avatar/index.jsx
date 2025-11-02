import styles from "@/assets/styles/components/Authorization/Avatar.module.css"
import { useState, useRef, useEffect } from "react";
import Button from "@/components/layout/Button";
import {useRouter} from "next/router";

const Avatar = ({...props}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className={styles.avatar__container} ref={menuRef}>
            <div className={styles.avatar__line} onClick={() => setIsOpen((prev) => !prev)} style={{cursor: "pointer"}}>
                <img src={props.url} alt="avatar"/>
                <span className={styles.avatar__username}>{props.username}</span>
            </div>

            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <span className={styles.dropdownMenu__arrow}></span>
                    <Button type={"warning"} onClick={() => router.push(`/user/${props.currentUser.id}`)}>
                        Настройки
                    </Button>
                    <Button onClick={() => props.setCurrentUserName(null)}>
                        Выйти
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Avatar