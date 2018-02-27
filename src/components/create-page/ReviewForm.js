import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { editReview } from '../../actions/review-generators';

// Component for creating new company review
class ReviewForm extends React.Component {

  setCheckbox = () => {
    return false;
  }

  constructor(props) {
    super(props);
    // Object for storing answers

    this.state = {
      companyName: props.review ? props.review.companyName : 'Capgemini',
      // it doesn't run, check how to make condition to not add the same company name, the actual idea - make a good validation
      //   state = (companyName) => {
      //    console.log(this.props);
      //   return companyName === this.state.companyName ? 'TRUE' : 'FALSE';
      // }),
      q1: props.review ? props.review.q1 : '',
      q2: props.review ? props.review.q2 : '',
      q3: props.review ? props.review.q3 : '',
      shortNote: props.review ? props.review.shortNote : '',
      checkboxEnglish: props.review ? props.review.checkboxEnglish : 'No',
      //checkedEnglish: props.review ? props.review.checkboxEnglish : false,
      checkedEnglish: (props.review === undefined) && false,
      setCheckbox: this.setCheckbox(),
      checkboxGerman: props.review ? props.review.checkboxGerman : 'No',
      companyNameValid: props.review ? props.review.companyNameValid : true
    };
  };

  // Functions to handle every question in a review form
  onCompanyName = (e) => {
    const getCompanyName = e.target.value;
    console.log(this.props.reviewCompare);

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
    e.preventDefault();
        this.props.onSubmit({
          companyName: this.state.companyName,
          q1:this.state.q1,
          q2:this.state.q2,
          q3:this.state.q3,
          shortNote:this.state.shortNote,
          checkboxEnglish:this.state.checkboxEnglish,
          checkedEnglish: this.state.checkedEnglish,
          checkboxGerman:this.state.checkboxGerman
        });
  };

    //   return this.props.reviewCompare.map((companyName, props) => {
    //     console.log(companyName !== this.state.companyName);
    //     console.log(companyName, this.state.companyName);
    //       if (companyName !== this.state.companyName) {
    //         this.props.dispatch(editReview(props.review.companyName, review))
    //         this.props.history.push('/')
    //       } else {
    //         console.log("error");
    //     }
    // });


state = {
  checkedEnglish: false
}
// we use bind to connect data with a component
  updateCheck = (props) => {
    this.setState((oldStateObject) => {
      return {
        checkedEnglish: !oldStateObject.checkedEnglish,
        checkboxEnglish: 'Yes',
      }
      }
    );
  }
  updateCheckForGerman = () => {
    this.setState((oldStateObject) => {
      return {
        checkedForGerman: !oldStateObject.checkedForGerman,
        checkboxGerman: 'Yes',
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <MuiThemeProvider>
            <div className="review-form">
            <TextField
              type="text"
              floatingLabelText="Company Name"
              floatingLabelFixed={true}
              autoFocus
              style={{width: '80%'}}
              className="review-form_mobile"
              value={this.state.companyName}
              onChange={this.onCompanyName}
            /> <br />
            <TextField
              type="text"
              style={{width: '80%'}}
              className="review-form_mobile"
              floatingLabelText="Number of home-office days"
              floatingLabelFixed={true}
              value={this.state.q1}
              onChange={this.onChangeQ1}
            /> <br />
            <TextField
              type="text"
              style={{width: '80%'}}
              className="review-form_mobile"
              floatingLabelText="Number of days for learning"
              floatingLabelFixed={true}
              value={this.state.q2}
              onChange={this.onChangeQ2}
            /> <br />
            <TextField
              type="text"
              style={{width: '80%'}}
              className="review-form_mobile"
              floatingLabelText="Wage amount"
              floatingLabelFixed={true}
              value={this.state.q3}
              onChange={this.onChangeQ3}
            /> <br />
            <TextField
              type="text"
              style={{width: '80%'}}
              className="review-form_mobile"
              floatingLabelText="Type down what you think"
              multiLine={true}
              floatingLabelFixed={true}
              rows={2}
              value={this.state.shortNote}
              onChange={this.onChangeNote}
            />
              <Checkbox
                label="English enviroment"
                checked={this.state.checkedEnglish}
                onCheck={this.updateCheck.bind(this)}
                value='1'
                className="checkbox-container review-form_mobile"
              />
              <Checkbox
                label="German required"
                checked={this.state.checkedForGerman}
                onCheck={this.updateCheckForGerman.bind(this)}
                value='1'
                className="checkbox-container review-form_mobile"
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

const mapStateToProps = (state, props) => {
  return {
    reviewCompare: state.reviewReducer,
    checkboxVal: false,
  };
};

export default connect(mapStateToProps)(ReviewForm);
