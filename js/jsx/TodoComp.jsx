var TodoComp = React.createClass({
	render : function(){
		return (
			<div className="reactToDoApp">
				Starting ToDoApp.... Here Check
			</div>
		);
	}
});

ReactDOM.render(
	<TodoComp />,
	document.getElementById("todoApp")
);