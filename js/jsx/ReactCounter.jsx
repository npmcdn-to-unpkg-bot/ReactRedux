var ReactCounter = React.createClass({
	render: function(){
		var props = this.props
			, value = props.value
			, onIncrClick = onIncrClick
			, onDecrClick = onDecrClick
			;
		return (
			<div className="react-ounter">
				<h1 className="counter-msg">{value}</h1>
				<button className="btn" onClick={onIncrClick}></button>
				<button className="btn" onClick={onDecrClick}></button>	
			</div>
		);
	}
});

var renderCounter = function(store){
	ReactDOM.render(
		<ReactCounter value={store.getState()}
		onIncrClick={function(){
			store.dispatch({type:'INCREMENT'});
		}}
		onDecrClick={function(){
			store.dispatch({type:'DECREMENT'});
		}} />,
		document.getElementById("ReactCounter"),
		function(){
			console.log("Post Render !!");
		}
	)
};
