import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomColor';
import {
  StatCard,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistic.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatCard>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ background: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatCard>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
