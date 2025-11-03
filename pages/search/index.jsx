import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "@/assets/styles/components/Search/index.module.css";
import Card from "@/components/Card";

const Search = () => {
    const router = useRouter();
    const { q } = router.query;
    const listNameUsers = useSelector((state) => state.user.listNameUsers);
    const currentUser = useSelector((state) => state.user.currentUser);

    const filteredUsers = q
        ? listNameUsers.filter((user) =>
            user.username.toLowerCase().includes(q.toLowerCase())
        )
        : [];

    return (
        <div className={styles.search__container}>
            {q ? (
                filteredUsers.length > 0 ? (
                    <Card style={{background:"inherit", border:"1px solid #999", padding:"28px 28px"}}>
                        {filteredUsers.map((user) => (
                            <Card type="user" key={user.username} currentUser={currentUser} user={user} style={{width:"97.5%"}} username={user.username}/>
                        ))}
                    </Card>
                ) : (
                    <Card style={{background: "inherit", border: "1px solid #999", padding: "28px 28px"}}>
                        <p>No results found for "{q}"</p>
                    </Card>
                )
            ) : (
                <Card style={{background:"inherit", border:"1px solid #999", padding:"28px 28px"}}>
                    <p>Please enter a search term.</p>
                </Card>
            )}
        </div>
    );
};

export default Search;
