const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
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
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
              <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
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
