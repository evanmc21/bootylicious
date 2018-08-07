// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { getComments } from '../actions/workouts';
// import CommentCard from '../components/CommentCard'
// import '../styles/Comments.css';
//
// class Comments extends Component {
//
//   componentDidMount(){
//     this.props.getComments()
//   }
//
//   render(){
//     return(
//       <div className="CommentContainer">
//         <h1>Comments</h1>
//         {this.props.comments.map(Comment => <CommentCard key={comment.id} comment=
//         {comment}/>)}
//         </div>
//     );
//   }
// }
//
//   const mapStateToProps = (state) => {
//     return({
//       comments: state.comments
//     })
//   }
//
// export default connect(mapStateToProps, { getComments })(Comments);
