const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
          <Order />
          <Inventory />
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return (
      <p>Header</p>
    )
  }
}

class Order extends React.Component {

  render(){
    return (
      <p>Order</p>
    )
  }
}

class Inventory extends React.Component {
  render(){
    return (
      <p>Inventory</p>
    )
  }
}

class StorePicker extends React.Component {
  render() {
    return(
      <form className='store-selector'>
        {/* comment here */}
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" />
        <input type="Submit" />

      </form>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#main'));
