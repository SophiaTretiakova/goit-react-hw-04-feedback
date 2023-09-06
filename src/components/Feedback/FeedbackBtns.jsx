import { FeedbackSection, BtnsList } from './FeedBackBtns.styled';
import propTypes from 'prop-types';

export const FeedbackBtns = ({ onLeaveFeedback }) => {
  return (
    <FeedbackSection>
      <BtnsList>
        <li>
          <button
            onClick={evt => {
              onLeaveFeedback(evt.target.value);
            }}
            value="good"
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={evt => {
              onLeaveFeedback(evt.target.value);
            }}
            value="neutral"
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={evt => {
              onLeaveFeedback(evt.target.value);
            }}
            value="bad"
          >
            Bad
          </button>
        </li>
      </BtnsList>
    </FeedbackSection>
  );
};

FeedbackBtns.propTypes = {
  onGood: propTypes.func,
  onNeutral: propTypes.func,
  onBad: propTypes.func,
};
