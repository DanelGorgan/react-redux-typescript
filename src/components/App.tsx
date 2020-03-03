import React from 'react';
import {connect} from "react-redux";
import {Todo, fetchTodos} from "../actions/todoAction";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[];

    fetchTodos(): any;
}

class App extends React.Component<AppProps> {

    componentDidMount(): void {
        this.props.fetchTodos();
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id}>Title: {todo.title}</div>
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
    todos: state.todos
});

export default connect(mapStateToProps, {fetchTodos})(App);
