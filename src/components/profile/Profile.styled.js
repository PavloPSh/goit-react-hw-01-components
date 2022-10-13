import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.normal};
    padding: ${p => p.theme.space[4]}px;
    margin-top: ${p => p.theme.space[5]}px;
    background-color: ${p => p.theme.colors.white};
`;  


export const FriendInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${p => p.theme.space[5]}px;
    & img{
        width: 150px;
        border: ${p => p.theme.borders.card};
        border-radius: ${p => p.theme.radii.round};
        margin-bottom: ${p => p.theme.space[5]}px;;
    }
`;

export const FriendStatsList = styled.ul`
    display: flex;
    justify-content: space-around;
    & li {
        display: flex;
    flex-direction: column;
    align-items: center;
    }
`;
