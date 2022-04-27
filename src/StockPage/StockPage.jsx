import React, { useState, useEffect } from 'react';
import Coin from './Coin.jsx';
import axios from "axios";

const team3 = {
   backgroundImage: 'linear-gradient(to bottom right, #000000,#923CB5)',
	marginLeft: -550,
	marginRight: 100,
	marginTop: -100,
	marginBottom: 0,
	Left: 0,
	position: 'relative',
	fontFamily: 'sans-serif',
	backgroundColor: '#1a1a1c',
// 	color: '#fff',
	width: 1850,
};
const coinApp = {

	marginTop: 64,
	marginLeft: 50,
	marginRight: -100,
	width: 1700,
	color: '#fff',
};

const coinSearch = {
	marginBottom: 64,
	/* display: flex;
	flex-direction: column; */
	/* justify-content: center; */
	/* align-items: center; */
	textAlign: 'center',
};

const coinText = {
	marginBottom: 32,
	textAlign: 'center'
};

const coinInput = {
	paddingLeft: 16,
	width: 300,
	height: 50,
	borderRadius: 4,
	backgroundImage: 'linear-gradient(to bottom right, black, grey)',
};


function StockPage() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=250&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => console.error(error));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div style={team3} className="container-fluid janvi">
		<div style = {coinApp} className="container coin-app">
			<div style = {coinSearch} className="coin-search">
				<div className="row">
					<h1 style = {coinText} className="col-md-12 coin-text">Search a Currency</h1>
				</div>
				<form>
					<input style = {coinInput}
						 placeholder="Search"
						className="coin-input"
						onChange={handleChange}
					/>
				</form>
			</div>
			{filteredCoins.map((coin) => {
				return (
					<Coin
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						volume={coin.total_volume}
						price={coin.current_price}
						priceChange={coin.price_change_percentage_24h}
						marketCap={coin.market_cap}
					/>
				);
			})}
		</div>
		</div>
	);
}

export { StockPage };