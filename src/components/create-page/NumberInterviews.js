import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardHeader } from 'material-ui/Card';

const cardStyle = {
    width: '80%'
};

const NumberInterviews = (props) => {
  console.log(props.reviewTotal.length);

const spellItRight = () => {
  if (props.reviewGerman.length < 1) {
    return "None company require german skills"
  } else if ( props.reviewGerman.length = 1) {
    return "1 company require german skills"
  }
}

  return (
    <MuiThemeProvider>
      <div className="create-card review-list__number-interviews">
        <Card className="review-form_mobile " style={cardStyle}>
          <CardHeader
            title={<p>Number of Interviews: <span>{props.reviewTotal.length}</span></p>}
            subtitle="expand for details"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {<p>{props.reviewEnglish.length} out of {props.reviewTotal.length} has english enviroment</p>}
            {<p>{spellItRight()}</p>}
          </CardText>
        </Card>
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state, props) => {
  return {
    reviewTotal: state.reviewReducer,
    reviewEnglish: state.reviewReducer.filter((company) => {
      return company.checkboxEnglish === 'Yes';
    }),
    reviewGerman: state.reviewReducer.filter((company) => {
      return company.checkboxGerman === 'Yes'
    })
  };
};

export default connect(mapStateToProps)(NumberInterviews);
