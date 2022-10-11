import PropTypes from 'prop-types';
import { StatsWrapper,StatsList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatsWrapper>
            {title && (
                <h2>{title}</h2>
            )}
            <StatsList>
                {
                    stats.map(({ id, label, percentage }) => 
                        <li key={id}>
                            <span>{ label }</span>
                            <span>{ percentage }%</span>
                        </li>)
                }
            </StatsList>

        </StatsWrapper> 
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}