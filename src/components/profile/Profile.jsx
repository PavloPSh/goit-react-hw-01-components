import PropTypes from 'prop-types';
import { Wrapper, FriendInfoBox, FriendStatsList } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes}}) => {
    return (

        <Wrapper>
            <FriendInfoBox>
                <img src={ avatar } alt= { username } />
                <p>{ username }</p>
                <p>@{ tag }</p>
                <p>{ location }</p>
            </FriendInfoBox>

            <FriendStatsList>
                <li>
                    <span>Followers</span>
                    <span>{ followers }</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{ views }</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{ likes }</span>
                </li>
            </FriendStatsList>
        </Wrapper>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
}