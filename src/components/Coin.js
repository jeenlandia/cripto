import React from "react";
import RowCoin from "./RowCoin";

const list = [ '#', 'Coin', 'Price', 'Market Cap', '24h Volume']

const Coin = ({coins}) => {
    
    return(
       <table className="table table-dark mt-4 table-hover">

        <thead>
            <tr>
                {
                    list.map(list =>(
                        <td> {list} </td>
                    ))
                }
            </tr>
        </thead>

        <tbody>
            {coins.map((coin, index) => (
                <RowCoin coin={coin} key={index} index={index + 1}/>   
            ))} 
        </tbody>

       </table>
    )
}

export default Coin