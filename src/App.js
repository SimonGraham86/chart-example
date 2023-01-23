import styles from './App.module.css';
import ReactEcharts from "echarts-for-react";
import options from './chartOptions';
import Card from './components/UI/Card';

function App() {
  return (
    <div className={styles.page}>
      {options.map((option) => 
        <Card className={styles.container}>  
          <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
          ></ReactEcharts>
        </Card>
      )}
    </div>
  )
}

export default App
