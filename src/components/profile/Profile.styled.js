import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 10px 5px 5px gray ;
    /* display: inline-block; */
    padding: 10px;
    margin: 50px auto;
`;

export const FriendImg = styled.img`
    width: 150px;
    border: 1px solid gray;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const FriendInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const FriendStatsList = styled.ul`
    display: flex;
    justify-content: space-around;
`;
export const FriendStatsItems = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;