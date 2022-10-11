import PropTypes from 'prop-types';
import { Wrapper, FriendImg, FriendInfoBox, FriendStatsList, FriendStatsItems } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes}}) => {
    return (

        <Wrapper>
            <FriendInfoBox>
                <FriendImg src={ avatar } alt= { username } />
                <p>{ username }</p>
                <p>@{ tag }</p>
                <p>{ location }</p>
            </FriendInfoBox>

            <FriendStatsList>
                <FriendStatsItems>
                    <span>Followers</span>
                    <span>{ followers }</span>
                </FriendStatsItems>
                <FriendStatsItems>
                    <span>Views</span>
                    <span>{ views }</span>
                </FriendStatsItems>
                <FriendStatsItems>
                    <span>Likes</span>
                    <span>{ likes }</span>
                </FriendStatsItems>
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