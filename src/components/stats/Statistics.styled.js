import styled from "styled-components";

export const StatsWrapper = styled.div`
    margin: 50px auto;
    border: 1px solid ;
    width: 400px;
    padding: 10px;
    & h2 {
        text-align: center;
        margin-bottom: 10px;
    }
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    
    & li{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
`;