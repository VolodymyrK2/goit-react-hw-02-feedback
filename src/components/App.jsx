import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
class App extends Component {
   state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  onLeaveFeedback = (e) => {
    const option = e.target.id
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }))
  }
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return (good + bad + neutral);
  }
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return (this.state.good / this.countTotalFeedback()*100).toFixed();
  }
  render() {
    const { good, neutral, bad } = this.state;
     return (<div>
      <Section title ="Please leave feedback">
      <FeedbackOptions
        options={this.state}
        onLeaveFeedback={this.onLeaveFeedback}
       />
       </Section>
       <Section title="Statistics">
         {this.countTotalFeedback() > 0 ? <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={this.countTotalFeedback()}
           positivePercentage={this.countPositiveFeedbackPercentage()}
         /> : <Notification message="There is no feedback" />}
       </Section>
       </div>);
   }
};
export default App;