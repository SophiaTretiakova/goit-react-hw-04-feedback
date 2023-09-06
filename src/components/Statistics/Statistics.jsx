import { StstisticsList } from './Statistic.styled';

import propTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <StstisticsList>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positive}%</p>
        </li>
      </StstisticsList>
    </div>
  );
};
// good, neutral, bad, total, positive
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positive: propTypes.number,
};
