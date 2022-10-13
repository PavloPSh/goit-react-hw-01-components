import PropTypes from 'prop-types';
import { TransactionWrapper, TransactionsHead, TransactionBody } from './Transaction.styled';

export const TransactionHistory = ({items}) => {
    return (
        <div>
            <TransactionWrapper>
                <TransactionsHead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </TransactionsHead>
                <TransactionBody>
                    {items.map(({ id, amount, type, currency }) => 
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)}
                </TransactionBody> 
            </TransactionWrapper>
        </div>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
// TransactionHistory.propTypes = {
//     items: PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         amount: PropTypes.string.isRequired,
//         currency: PropTypes.string.isRequired
//     }).isRequired,
// }