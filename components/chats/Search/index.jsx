import Button from "@/components/layout/Button";
import styles from "@/assets/styles/components/Search/index.module.css"

const Search = () => {

    return(
        <div className={styles.search__container}>
            <input className={styles.search__input} placeholder="Searching the chats or users you need..." />
            <Button>Search</Button>
        </div>
    )
}

export default Search;