import React from 'react';

const coinContainer = {
    position:'relative',
    width:'100%',

};
const coinRow = {
	alignItems: 'center',
	minHeight: 80,
	borderBottom: '1 solid #d7d7d7',
	borderStyle: 'solid',
	textAlign: 'center',
	paddingVertical: 20,
	paddingHorizontal:0,
};

const coin = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}

const img = {
	height: 20,
	width: 20,
	marginRight: 10,
}

const h1 ={
    fontSize: 16,
}
const coinSymbol = {
	textTransform: 'uppercase',
}

const red = {
	color: '#f00606',
}

const green = {
	color: '#11d811',
}
const p = {
	marginBottom: 0,
}

const Coin = ({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	marketCap,
}) => {
	return (
		<div style={coinContainer} className="container coin-container">
			<div className="row coin-row" style={coinRow}>
				<div className="col-md-3 coin" style={coin}>
					<img src={image} alt="crypto" />
					<h1>{name}</h1>
					<p className="coin-symbol">{symbol}</p>
				</div>
				<p className="col-md-2 coin-price">${price}</p>
				<p className="col-md-2 coin-volume">
					${volume.toLocaleString()}
				</p>
				{priceChange < 0 ? (
					<p style={red} className="col-md-1 coin-percent red">
						{priceChange.toFixed(2)}%
					</p>
				) : (
					<p style={green} className="col-md-1 coin-percent green">
						{priceChange.toFixed(2)}%
					</p>
				)}
				<p className="col-md-4 coin-marketcap">
					Market Cap: ${marketCap.toLocaleString()}
				</p>
			</div>
		 </div>
	);
};

export default Coin;