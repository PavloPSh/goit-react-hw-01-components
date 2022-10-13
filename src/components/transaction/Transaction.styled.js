import styled from "styled-components";

export const TransactionWrapper = styled.table`
    background-color: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.card};
    box-shadow: ${p => p.theme.shadows.normal};

`;

export const TransactionsHead = styled.thead`
    background-color: ${p => p.theme.colors.secondary};
    color:${p => p.theme.colors.mainBg};
    & th {
        padding: ${p => p.theme.space[3]}px;
        text-align: center;
    }
`;

export const TransactionBody = styled.tbody`
    background-color: ${p => p.theme.colors.muted};
    & td {
        padding: ${p => p.theme.space[3]}px;
        text-align: center;
    }
`;
