const Button = () => {
	const klik = (e) => {
		console.log(e.target.value);
	};

	return <button onClick={klik}>Hi</button>;
};

export default Button;
