import logo from './logo.svg';
import './App.css';
import * as React from 'react';

class Hello extends React.Component {
  static defaultProps = {
    children: 'world'
  }
  componentDidMount() {
    console.log(this.props, '---')
  }
  render() {
    const { children } = this.props
    const ch = React.Children.map(children, c => {
      return (
        <div>
          {c}
        </div>
      )
    })
    console.log(ch, children)
    return <div>
      {
        ch
      }
      {/* {React.Children.map(children, function (item) {
        console.log(item, 'item')
        return item
      })} */}
    </div>
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Hello>
          <div>
            <span>1</span>
            <span>2</span>
          </div>
          <span>2</span>
          <span>3</span>
        </Hello>
      </header>
    </div>
  );
}

export default App;
