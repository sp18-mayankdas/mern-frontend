import { useState } from "react";
import ProductCard from "./ProductCard";
import { data } from "../constants/constants";
import Search from "./Search";

export default function Products() {
    const [users, setUsers] = useState(data);
    const [filteredUsers, setfilteredUsers] = useState(data)

    function addFriend(id) {
        setfilteredUsers((prev) => {
            return prev.map((user, index) => {
                if (user.id === id) {
                    return { ...user, isFriend: !user.isFriend }
                }
                return user;
            })
        })
    }

    function filteredUser(name) {
        const filteredUser = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))

        setfilteredUsers(filteredUser)
    }

    return (
        <>

            <div className="users">
                <h1 className="friendList">Friends List</h1>
                <Search users={users} filteredUser={filteredUser} />
                <div className="cards">
                    {
                        filteredUsers.map((user, index) => (
                            <ProductCard key={user.id} user={user} addFriend={addFriend} />
                        ))
                    }
                </div>


            </div>
        </>

    )
}