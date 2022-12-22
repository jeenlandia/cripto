import { useEffect, useState } from 'react';
import axios from 'axios'
import Coin from './components/Coin'


function App() {
  
  const [coins, setCoins] = useState([])

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1')
    console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData()

  }, [])

  return (
    <div className="container">
      <h1>Cripto</h1>
      <Coin coins={coins}/>
    </div>
  );
}

export default App;
