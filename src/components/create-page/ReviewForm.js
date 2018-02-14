import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

// Component for creating new company review
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
  // Object for storing answers
    this.state = {
      companyName: props.review ? props.review.companyName : 'Capgemini' ||
      // it doesn't run, check how to make condition to not add the same company name, the actual idea - make a good validation
       state.review.map((companyName) => {
        return companyName === this.state.companyName ? 'TRUE' : 'FALSE';
      }),
      q1: props.review ? props.review.q1 : '',
      q2: props.review ? props.review.q2 : '',
      q3: '',
      q4: '',
      q5: '',
      shortNote: ''
    };
  };

  // Functions to handle every question in a review form
  onCompanyName = (e) => {
    const getCompanyName = e.target.value;

    this.setState(() => ({companyName: getCompanyName}));
  }

  onChangeQ1 = (e) => {
    const getQ1 = e.target.value;
    this.setState(() => ({ q1: getQ1 }));
  };

  onChangeQ2 = (e) => {
    const getQ2 = e.target.value;
    this.setState(() => ({ q2: getQ2 }));
  };

  onChangeQ3 = (e) => {
    const getQ3 = e.target.value;
    this.setState(() => ({ q3: getQ3 }));
  };

  onChangeQ4 = (e) => {
    const getQ4 = e.target.value;
    this.setState(() => ({ q4: getQ4 }));
  };

  onChangeQ5 = (e) => {
    const getQ5 = e.target.value;
    this.setState(() => ({ q5: getQ5 }));
  };

  onChangeNote = (e) => {
    const getNote = e.target.value;
    this.setState(() => ({ shortNote: getNote }));
  };
  // From create review page
  onSubmit = (e) => {
    console.log(this.state.companyName);
    e.preventDefault();
    this.props.onSubmit({
      companyName: this.state.companyName,
      q1:this.state.q1,
      q2:this.state.q2,
      q3:this.state.q3,
      q4:this.state.q4,
      q5:this.state.q5,
      shortNote: this.state.shortNote

    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <MuiThemeProvider>
            <div className="review-form">
              <h1>Review Company Form</h1>
            <TextField
              type="text"
              floatingLabelText="Company Name"
              floatingLabelFixed={true}
              autoFocus
              value={this.state.companyName}
              onChange={this.onCompanyName}
            /> <br />
            <TextField
              type="text"
              floatingLabelText="Number of home-office days"
              floatingLabelFixed={true}
              value={this.state.q1}
              onChange={this.onChangeQ1}
            /> <br />
            <TextField
              type="text"
              floatingLabelText="Days for learning"
              floatingLabelFixed={true}
              value={this.state.q2}
              onChange={this.onChangeQ2}
            /> <br />
            <TextField
              type="text"
              floatingLabelText="Wage amount"
              floatingLabelFixed={true}
              value={this.state.q3}
              onChange={this.onChangeQ3}
            /> <br />
            <TextField
              type="text"
              floatingLabelText="Type down what you think"
              multiLine={true}
              floatingLabelFixed={true}
              rows={2}
              value={this.state.note}
              onChange={this.onChangeNote}
            />
              <p>Review Score: {this.state.shortNote}</p>
            <FlatButton type="submit" label="Submit" />
            </div>
          </MuiThemeProvider>
        </form>
      </div>
    );
  }
};

export default ReviewForm;
