import { FeedbackTitle } from 'components/Feedback/FeedBackBtns.styled';
import { MainSection } from './Section.styled';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
