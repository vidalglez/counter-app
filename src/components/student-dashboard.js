import React from 'react';
import axios from 'axios';
import StudentDetails from './student-details';

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      error: {}
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8083/web-spring-rest/springservice/student/9';
    axios
      .get(url)
      .then(response => {
        this.setState({
          student: response.data
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Student Dashboard</h2>
        <StudentDetails student={this.state.student} />
        <h3>Error trying to fetch studen data</h3>
      </div>
    );
  }
}

export default StudentDashboard;
