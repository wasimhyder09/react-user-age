const ResultList = (props) => {
  return(
    <div className="user-card">
      <p key={Math.random()}>{props.user.username} - {props.user.age} years old</p>
    </div>
  );
}

export default ResultList;