import React , { Component } from 'react';
import './App.css';
import CardList from './CardList.js';
import Searchbox from './Searchbox.js';
import Scroll from './Scroll.js';
import { monsters } from './monsters.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: monsters}))
            //this.setState({monsters: monsters})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const filteredMonsters = this.state.monsters.filter(monsters => {
            return monsters.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <div className='f-subheadline lh-title tp4 title'>RoboFriends</div>
                <Searchbox searchChange={this.onSearchChange} />
                <hr className='ma3 '></hr>
                <Scroll>
                    <CardList monsters={filteredMonsters}/>
                </Scroll>
            </div>
        );
    }
}

export default App;