import React from "react";
import RowCoin from "./RowCoin";

const list = ['#', 'Coin', 'Price', 'Price Chance', 'Market Cap', 'Market Cap Change', '24h Volume']

const Coin = ({ coins, search }) => {

    const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {list.map((list, index) => (
                    <td key={index}>{list}</td>
                    ))}
                </tr>
            </thead>

            <tbody>
                {filterCoins.map((coin, index) => (
                    <RowCoin coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default Coin