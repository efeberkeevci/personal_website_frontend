import React from 'react';
import Calendar from 'react-awesome-calendar';
import styles from '../Styles/Calendar2.css';
import {getDays,createEvents, current_month, activities, events} from "../DBCalendarEventsFetch";


/*
const events = [{
  id: 1,
  color: '#fd3153',
  from: '2020-11-02T18:00:00+00:00',
  to: '2020-11-07T19:00:00+00:00',
  title: 'Seeing family',
}, {
  id: 2,
  color: '#1ccb9e',
  from: '2020-11-01T13:00:00+00:00',
  to: '2020-11-07T14:00:00+00:00',
  title: 'Holiday',
}, {
  id: 3,
  color: '#F480A8',
  from: '2020-11-05T00:00:00+00:00',
  to: '2020-11-06T00:01:00+00:00',
  title: 'Jet skiing',
}, {
  id: 4,
  color: '#fda256',
  from: '2020-11-05T18:00:00+00:00',
  to: '2020-11-05T19:30:00+00:00',
  title: 'Dinner',
}, {
  id: 5,
  color: '#8281fd',
  from: '2020-11-15T12:00:00+00:00',
  to: '2020-11-15T21:00:00+00:00',
  title: 'Doctors',
}];
*/

class Calendar2 extends React.Component {
  constructor(props) {
    super(props);
    this.calendar = React.createRef();
    this.state = {
      events : []
    }
  }

  componentDidMount() {
    //const details = this.calendar.current.getDetails();
    // call get events endpoint
    //getDays(current_month).then(() =>createEvents(activities).then((res) =>{this.setState({events : res})}));
  }

  render() {
    return (
      <div className={styles.pageCalendar}>
        <Calendar
          ref={this.calendar}
          onClickEvent={(event) => console.log('this is an event', event)}
          onChange={(dates) => console.log(dates)}
          onClickTimeLine={(date) => console.log(date)}
          events={this.state.events}
        />
      </div>
    );
  }
}export default Calendar2;