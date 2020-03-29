import React from 'react'
import { Component } from "react";
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <p>Welcome home!</p>
                <p>Routes:</p>
                <Link to='/todos'>Todos</Link>
            </div>
        )
    }
}

export default Home;