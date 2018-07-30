// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createComment } from '../actions/workouts';
// import {bindActionCreators} from 'redux';
//
// class CommentForm extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       content: ""
//     }
//   }
//
//   handleChange = event => {
//     this.setState({
//       content: event.target.value
//     })
//   }
//
//   handleOnSubmit = event => {
//     event.preventDefault();
//     const comment = {
//       content: this.state.content,
//       workout_id: this.props.workout.id
//     }
//     this.props.createComment(comment)
//     this.setState({
//       content: ""
//     })
//   }
//
//   render(){
//     return (
//       <div className="commentForm">
//         <h3>add some details, fam</h3>
//         <form>
//         <div>
//         <textarea
//         type="text"
//         name="content"
//         />
//         <button className="button" type="submit">
//           hit me
//         </button>
//         </div>
//         </form>
//       </div>
//     )
//   }
// }
//   const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//       createComment
//     }, dispatch)
//   }
//
//   export default connect(null, mapDispatchToProps)(CommentForm);
