

    const App = (props) => {
    
      const [data, setData] = useState(1);
  
      const increment = () => {
          setData(data+1);
      }
  
      return(
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <h1 style={{textAlign:'center'}}>{data} {props.name}</h1>
              <button className={styles.btn} onClick={increment}>COUNTER</button>
          </div>
          
      )
  };

export default App;