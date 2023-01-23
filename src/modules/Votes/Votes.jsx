import { Component } from "react";

import VotesVariants from "./VotesVariants/VotesVariants";
import VotesStatistics from "./VotesStatistics/VotesStatistics";
import VotesSections from "./VotesSections/VotesSections";


class Votes extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }
    
    countPositiveFeedbackPercentage(propName) {

        const total = this.countTotalFeedback();
                if (!total) {
            return 0;
        }
        const value = this.state[propName];
        const positiveVoutes = ((value / total)*100).toFixed(2);
        return Number(positiveVoutes);
    }

    addVotes = (name) => {
        this.setState(prevState => {
            return { [name]: prevState[name] + 1 };
        })
    }
 
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveVoutes = this.countPositiveFeedbackPercentage("good");
        
    return (
        <>
            <VotesSections title="Please leave feedback">
                <VotesVariants good={good} neutral={neutral} bad={bad} addVotes={this.addVotes} />
            </VotesSections>
            <VotesSections title="Statictics">
                <VotesStatistics good={good} neutral={neutral} bad={bad} total={total} positiveVoutes={positiveVoutes}/>               
            </VotesSections>
        </>
        )
    }
}

export default Votes;