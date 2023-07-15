import ResultList from "./ResultList";

const Result = (props) => {
  return(
    <div className="results">
      {props.data.map((user) => {
        return(
          <ResultList user={user} />
        );
      })}
    </div>
  );
}

export default Result;