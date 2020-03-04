import React from 'react';
import {connect} from "react-redux";
import {Todo, fetchTodos, deleteTodo} from "../actions";
import {StoreState} from "../reducers";

interface AppState {
    fetching: boolean;
}

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state =  { fetching : false }
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({fetching: false});
        }
    }

    componentDidMount(): void {
        this.props.fetchTodos();
        this.setState({fetching: true});
    }

    onToDoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div onClick={() => this.onToDoClick(todo.id)} key={todo.id}>
                    {todo.title}
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.state.fetching? 'Loading': null}
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
    todos: state.todos
});

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(App);
