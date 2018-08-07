import React from 'react';
import CommentForm from '../containers/CommentForm';

const Comment = ({comments}) => {
  return (
    <div className="comments">
    {this.props.comments.map()}
    <CommentForm />
    </div>
  );
}

// return (
//   <div className="WorkoutContainer">
//     <h1>Workouts</h1>
//     {this.props.workouts.map(workout => <WorkoutCard key={workout.id} workout=
//     {workout}/>)}
//     <WorkoutForm />
//   </div>
// );

export default Comment;
