import './App.css';
import ReactEcharts from "echarts-for-react";
import options from './chartOptions';

function App() {
  return (
    <div>
      {options.map((option) => 
        <ReactEcharts
          option={option}
          style={{ width: "800px", height: "300px" }}
        ></ReactEcharts>
      )}
    </div>
  )
}

export default App
