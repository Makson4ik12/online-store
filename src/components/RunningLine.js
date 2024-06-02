import './RunningLine.css'

const RunningLine = (props) => {
  return (
    <div className="running-line-container">
      <p>{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;{props.text}&emsp;&emsp;</p>
    </div>
  );
}

export default RunningLine;