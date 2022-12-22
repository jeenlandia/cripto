import React from "react";

const RowCoin = ({coin, index}) => {
    
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} className='me-4 img-fluid' style={{width: '5%'}}/>
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.market_cap}</td>
            <td>{coin.price_change_percetage_24h}</td>
            <td>{coin.total_volume}</td>   
        </tr>
    )

}

export default RowCoin