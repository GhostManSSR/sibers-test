import { useDispatch, useSelector } from "react-redux";
import styles from "@/assets/styles/pages/user/index.module.css";
import Card from "@/components/Card";
import Input from "@/components/layout/Input";
import { updateUser } from "@/reducers/userSlice";
import { useRouter } from "next/router";
import usersFromJson from "@/data/users.json";
import { useEffect, useState } from "react";

const User = () => {
    const router = useRouter();
    const { id } = router.query;
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    const [formState, setFormState] = useState({
        username: "",
        phone: "",
        address: { city: "", country: "", state: "" },
        email: "",
    });

    const [isCurrentUser, setIsCurrentUser] = useState(false);

    useEffect(() => {
        if (!id) return;
        const user = usersFromJson.find(user => user.id === Number(id)) || null;
        setIsCurrentUser(currentUser?.id === Number(id));
        !isCurrentUser ? setUserName(user.username) : setUserName(currentUser.username);

        if (user && !isCurrentUser) {
            setFormState({
                username: user.username || "",
                phone: user.phone || "",
                address: {
                    city: user.address?.city || "",
                    country: user.address?.country || "",
                    state: user.address?.state || "",
                },
                email: user.email || "",
            });
        }
        else{
            setFormState({
                username: currentUser.username || "",
                phone: currentUser.phone || "",
                address: {
                    city: currentUser.address?.city || "",
                    country: currentUser.address?.country || "",
                    state: currentUser.address?.state || "",
                },
                email: currentUser.email || "",
            });
        }
    }, [id, currentUser]);

    const handleChange = (field, value) => {
        if (field.startsWith("address.")) {
            const addrField = field.split(".")[1];
            setFormState(prev => ({
                ...prev,
                address: { ...prev.address, [addrField]: value },
            }));
        } else {
            setFormState(prev => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            username: formState.username,
            phone: formState.phone,
            address: formState.address,
            email: formState.email,
        }));
    };

    console.log(currentUser)

    if (!id) return <div>Loading...</div>;

    return (
        <div className={styles.user__container}>
            <Card type="setting">
                <h2>Setting {userName}</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Your name:</h3>
                    <Input
                        disabled={!isCurrentUser}
                        placeholder="Your name"
                        value={formState.username}
                        onChange={e => handleChange("username", e.target.value)}
                    />
                    <h3>Phone:</h3>
                    <Input
                        disabled={!isCurrentUser}
                        placeholder="Your phone"
                        value={formState.phone}
                        onChange={e => handleChange("phone", e.target.value)}
                    />
                    {isCurrentUser && (
                        <>
                            <h3>Address:</h3>
                            <Input
                                disabled={!isCurrentUser}
                                placeholder="City"
                                value={formState.address.city}
                                onChange={e => handleChange("address.city", e.target.value)}
                            />
                            <Input
                                disabled={!isCurrentUser}
                                placeholder="Country"
                                value={formState.address.country}
                                onChange={e => handleChange("address.country", e.target.value)}
                            />
                            <Input
                                disabled={!isCurrentUser}
                                placeholder="State"
                                value={formState.address.state}
                                onChange={e => handleChange("address.state", e.target.value)}
                            />
                            <h3>Email address:</h3>
                            <Input
                                placeholder="Email"
                                value={formState.email}
                                onChange={e => handleChange("email", e.target.value)}
                            />
                            <button type="submit" disabled={!isCurrentUser}>Save</button>
                        </>
                    )}
                </form>
            </Card>
        </div>
    );
};

export default User;
