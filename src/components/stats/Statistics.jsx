
export const Statistics = ({ title, stats }) => {
    return (
        <div>
            {title && (
                <h2>{title}</h2>
            )}
            <ul>
                {
                    stats.map(({ id, label, percentage }) => 
                        <li key={id}>
                            <span>{ label }</span>
                            <span>{ percentage }%</span>
                        </li>)
                }
            </ul>

        </div> 
    )
}