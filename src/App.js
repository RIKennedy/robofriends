import React , { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from './CardList.js';
import Searchbox from './Searchbox.js';
import Scroll from './Scroll.js';
import { monsters } from './monsters.js';

import { setSearchField, requestRobots } from './actions.js';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
            <h1>Loading</h1> :
            (
            <div className='tc'>
                <div className='f-subheadline lh-title tp4 title'>RoboFriends</div>
                <Searchbox searchChange={onSearchChange} />
                <hr className='ma3 '></hr>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);