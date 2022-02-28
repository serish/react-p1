import {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state= {
        monsters: [],
        searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  handleChange = e => {   //arrow function is necessary for this keyword to work
    this.setState({searchField: e.target.value}) //for normal function we have to bind this in the constructor. 
  }
  render(){
    const {monsters, searchField} = this.state;  //destructuring; creating copy to retain original state and use new object for filtering
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return(<div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
  </div>);
  }
}


export default App;
