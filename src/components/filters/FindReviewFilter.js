import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { setTextFilter } from '../../actions/filters';


const cardStyle = {
    width: '80%'
};

class FindReviewFilter extends React.Component {

  onTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="create-card">
          <TextField
            style={{width: '80%'}}
            className="review-form_mobile"
            floatingLabelText="Find a company"
            value={this.props.filtersReducer.text}
            onChange={this.onTextChange}
          />
        </div>
      </MuiThemeProvider>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filtersReducer: state.filtersReducer
  }
}


export default connect(mapStateToProps)(FindReviewFilter);
