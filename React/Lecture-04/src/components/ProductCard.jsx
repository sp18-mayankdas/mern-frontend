function ProductCard({ user, addFriend }) {
    console.log(user)
    const { id, name, img, age, isFriend } = user;


    return (
        <div className="userCard">
            <img className="userImage" src={img} alt="Profile Image" />
            <p className="userName">{name}</p>
            <span className="userAge">{age}</span>
            <button onClick={() => { addFriend(id) }} className={isFriend ? "Friends" : "AddFriend"}>{isFriend ? "Friends" : "Add to Friend"}</button>
        </div>
    )
}

export default ProductCard