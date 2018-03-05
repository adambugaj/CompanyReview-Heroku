import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { startAddExpense } from '../../actions/review-generators';

const CreateReviewPage = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className="header-container header-container__edit-create">Review Company Form</h2>
      <ReviewForm
        onSubmit={(review) => {
          // Be sure what you type as Parameter, don't use destructuring ({})
          props.startAddExpense(review);
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(CreateReviewPage);

// export class CreateReviewPage extends React.Component {
//   onSubmit = (review) => {
//     // Be sure what you type as Parameter, don't use destructuring ({})
//     this.props.startAddExpense(review);
//     this.props.history.push('/');
//   };
//   render() {
//     return (
//       <div>
//         <h2 className="header-container header-container__edit-create">Review Company Form</h2>
//         <ReviewForm
//           onSubmit={this.onSubmit}
//         />
//       </div>
//     );
//   }
// };
//
// const mapDispatchToProps = (props) => ({
//   startAddReview: (review) => dispatch(startAddExpense(review))
// });
//
// export default connect(undefined, mapDispatchToProps)(CreateReviewPage);
