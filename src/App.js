import { useEffect, useState } from 'react';
import axios from 'axios'
import Coin from './components/Coin'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

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
      <div className='mt-4 text-center text-uppercase '>
        <h1>My Crypto</h1>
      </div>

      <div className='row'>
        <input type='text' placeholder='Search Coin' className='form-control bg-dark mt-4 text-light text-center border-0' onChange={e => setSearch(e.target.value)}/>
      </div>

      <Coin coins={coins} search={search} />
    </div>
  );
}

export default App;
