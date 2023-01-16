import { useEffect, useState } from 'react'
import Card from './components/Card/Card';

function App() {
  const base_url = "https://api.nasa.gov/planetary/apod?api_key=liHndHe6eFJ4ONSezGNzVsZ5uwFVgnzeDbafhMA5";
  const [data, setData] = useState({});

  async function fetchData() {
    await fetch(`${base_url}`)
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
