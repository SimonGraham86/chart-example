import styles from './App.module.css';
import ReactEcharts from "echarts-for-react";
import options from './chartOptions';
import Card from './components/UI/Card';

const clickHandler = () => {

}

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
      <div className={styles.buttonContainer}>
        <button onClick={clickHandler}>Page 1</button>
        <button onClick={clickHandler}>Page 2</button>
      </div>
    </div>
  )
}

export default App
