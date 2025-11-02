import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "@/reducers/userSlice";
import Button from "@/components/layout/Button";
import styles from "@/assets/styles/components/Search/index.module.css";
import {useRouter} from "next/router";

const Search = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        dispatch(setSearchTerm(inputValue));
        router.push({pathname: "/search", query: { q: inputValue },})
    };

    const handleKeyDown = e => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={styles.search__container}>
            <input
                className={styles.search__input}
                placeholder="Searching the chats or users you need..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default Search;
