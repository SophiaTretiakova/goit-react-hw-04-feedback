import { StstisticsNoFeedback } from './Notification.styled';
import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <StstisticsNoFeedback>
      <p>{message}</p>
    </StstisticsNoFeedback>
  );
};

Notification.propTypes = {
  message: propTypes.string,
};
