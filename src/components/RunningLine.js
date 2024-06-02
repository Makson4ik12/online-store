import './RunningLine.css'

const RunningLine = ({text = "Бегущая строка"}) => {
  return (
    <div className="running-line-container">
      <p>{text}&emsp;&emsp;{text}&emsp;&emsp;{text}&emsp;&emsp;{text}&emsp;&emsp;{text}&emsp;&emsp;{text}&emsp;&emsp;{text}&emsp;&emsp;{text}&emsp;&emsp;</p>
    </div>
  );
}

export default RunningLine;