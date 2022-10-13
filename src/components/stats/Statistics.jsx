import PropTypes from 'prop-types';
import { StatsWrapper,StatsList } from './Statistics.styled';

export const Statistics = ({ title="Upload stats", stats }) => {
    return (
        <StatsWrapper>
            <h2>{title}</h2>
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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}