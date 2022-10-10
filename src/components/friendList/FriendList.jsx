
export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => 
            <li key={id}>
                <span>{isOnline}</span>
                <img src={avatar} alt={name} width="48" />
                <p> {name} </p>
            </li>)}
        </ul>
    )
}