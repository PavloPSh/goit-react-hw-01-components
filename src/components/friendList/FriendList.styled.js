import styled from "styled-components";

export const FriendsListContainer = styled.ul`
    width: 250px;
    margin-top: ${p => p.theme.space[6]}px;
    
`;

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
    border-radius: ${p => p.theme.radii.sm};
    margin-bottom: 10px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.slim};
    &:hover{
        box-shadow: ${p => p.theme.shadows.normal};
    }
    & span{
        border-radius: ${p => p.theme.radii.round};
        background-color: ${p => (p.isOnline ? p.theme.colors.success : p.theme.colors.error)};
        width: 10px;
        height: 10px;  
        margin-left: ${p => p.theme.space[4]}px;
        
    }
    & img{
        margin-left: ${p => p.theme.space[4]}px;
    }
    & p {
        margin-left: ${p => p.theme.space[4]}px;
    }
`;