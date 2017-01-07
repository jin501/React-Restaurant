const React = require('react');
const ReactDOM = require('react-dom');


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


ReactDOM.render(<StorePicker />, document.querySelector('#main'));
