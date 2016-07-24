var TodoComp = React.createClass({
	displayName: "TodoComp",

	render: function () {
		return React.createElement(
			"div",
			{ className: "reactToDoApp" },
			"Starting ToDoApp...."
		);
	}
});

ReactDOM.render(React.createElement(TodoComp, null), document.getElementById("todoApp"));