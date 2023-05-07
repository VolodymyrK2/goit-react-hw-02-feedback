import css from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const arrayOfKeys = Object.keys(options);
    return (
            <ul className = { css.feedback__list } >
            {arrayOfKeys.map((option) => (
                <li key = {option} className={css.feedback__item}>
                    <button id={option} onClick={onLeaveFeedback} className={css.feedback__btn} type='button'>{option}</button>
                </li>
            ))}
                
        </ul>
      
  )

}
FeedbackOptions.propTypes ={
    options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
    }),
    onLeaveFeedback: PropTypes.func
}
export default FeedbackOptions;