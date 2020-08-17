import React, {Component} from 'react';
import './App.css';
import menuData from './menu-data.json';
import GetListData from './components/get-list-data';

class App extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuDataFromJson: menuData
    };
  }

  componentDidMount() {
    const menuDataList = Object.entries(menuData);
    const updatedItem = this.props.location.state;
    if(this.props.location.state) {
      menuDataList.forEach((value: any)=>{
        if(this.props.location.state.itemId.toString() === value[0]) {
          value[1].price = updatedItem.price;
          value[1].available = updatedItem.available;
        }
      });
      Object.fromEntries(menuDataList);
      this.setState({
        menuDataFromJson: Object.fromEntries(menuDataList)
      });
    }
    
  }

  render() {
    return (
      <div className="App">
        <h1>List of Items</h1>
        <h2>Name | Category | Price | tax | Available</h2>
        <GetListData menuData={menuData} />
      </div>
    );
  }
}

export default App;
