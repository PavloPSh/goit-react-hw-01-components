
export const TransactionHistory = ({items}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, amount, type, currency }) => 
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)}
                </tbody> 
            </table>
        </div>
    )
}