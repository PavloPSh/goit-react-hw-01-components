import PropTypes from 'prop-types';
import { FriendsListContainer,FriendsItem } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <FriendsListContainer>
            {friends.map(({ avatar, name, isOnline, id }) => 
            <FriendsItem key={id} isOnline={isOnline}>
                <span ></span>
                <img src={avatar} alt={name} width="48" />
                <p> {name} </p>
            </FriendsItem>)}
        </FriendsListContainer>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })),
}