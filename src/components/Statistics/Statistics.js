import css from "./Statistics.module.css";
import PropTypes from 'prop-types'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const options = { good, neutral, bad, total, positivePercentage };
    const arrayOfKeys = Object.keys(options);
  return (
      <ul className={css.statistics__list}>
          {arrayOfKeys.map(option => (
              <li key={option} className={css.statistics__item}>
                  { option  !== 'positivePercentage' ? <p className={css.statistics__category}>
                      {option}: {options[option]}</p> :
                      <p className={css.statistics__category}>
                          Positive feedback : {options[option]} %</p>}
              </li>
          ))}
          </ul>
     
  )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
}

export default Statistics