import styled from "styled-components";

export const FriendsListContainer = styled.ul`
    width: 250px;
    margin: 50px auto;
    
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
        border-radius: 50%;
        background-color: ${p => (p.isOnline ? p.theme.colors.success : p.theme.colors.error)};
        width: 10px;
        height: 10px;  
        margin-left: 10px;
        
    }
    & img{
        margin-left: 15px;
    }
    & p {
        margin-left: 20px;
    }
`;