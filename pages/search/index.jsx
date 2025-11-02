import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "@/assets/styles/components/Search/index.module.css";

const Search = () => {
    const router = useRouter();
    const { q } = router.query;
    const listNameUsers = useSelector((state) => state.user.listNameUsers);

    const filteredUsers = q
        ? listNameUsers.filter((user) =>
            user.username.toLowerCase().includes(q.toLowerCase())
        )
        : [];

    return (
        <div className={styles.search__container}>
            {q ? (
                filteredUsers.length > 0 ? (
                    <ul>
                        {filteredUsers.map((user) => (
                            <li key={user.username}>{user.username}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found for "{q}"</p>
                )
            ) : (
                <p>Please enter a search term.</p>
            )}
        </div>
    );
};

export default Search;
