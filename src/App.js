import { useEffect, useState } from 'react'
import Card from './components/Card/Card';

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  const base_url = "https://api.nasa.gov/planetary/apod?api_key=";
  const [data, setData] = useState({});

  async function fetchData() {
    await fetch(`${base_url}${api_key}`)
      .then(res => res.json())
      .then(data => {
        setData(data);  
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <Card
        title={data.title}
        img={data.hdurl}
        explanation={data.explanation}
        date={data.date}
        copyright={data.copyright} />
  )

}

export default App;
