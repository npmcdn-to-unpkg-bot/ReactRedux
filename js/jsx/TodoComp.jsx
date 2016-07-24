var TodoComp = React.createClass({
	render : function(){
		return (
			<div className="reactToDoApp">
				Starting ToDoApp.... 
			</div>
		);
	}
});

ReactDOM.render(
	<TodoComp />,
	document.getElementById("todoApp")
);