import { useState } from 'react';
import Container from './App.styled.jsx';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert('This value is not defined');
    }
  };

  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total === 0 ? 0 : Number(((good / total) * 100).toFixed(0));
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onIncrement={onIncrement} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
// export class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onIncrement = option => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = options => {
//     return options.reduce((total, item) => {
//       total += this.state[item];
//       return total;
//     }, 0);
//   };

//   countPositiveFeedbackPercentage = total => {
//     return total === 0
//       ? 0
//       : Number(((this.state.good / total) * 100).toFixed(0));
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback(options);
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={options} onIncrement={this.onIncrement} />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage(total)}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
