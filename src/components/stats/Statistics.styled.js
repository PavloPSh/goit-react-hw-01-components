import styled from "styled-components";

export const StatsWrapper = styled.div`
    margin-top: ${p => p.theme.space[6]}px;
    border: ${p => p.theme.borders.item} ;
    width: 400px;
    padding: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.sm};
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.normal};
    & h2 {
        text-align: center;
        margin-bottom: ${p => p.theme.space[5]}px;
    }
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: ${p => p.theme.space[2]}px;
    
    
    & li{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        border: ${p => p.theme.borders.item};
        border-radius:${p => p.theme.radii.sm};
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};;
        
    }
`;