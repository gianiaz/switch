require('../assets/index.less');
const React = require('react');
const ReactDOM = require('react-dom');
const Switch = require('react-rcswitch');

function onChange(value) {
  console.log('switch checked:' + value);
}


const Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  render() {
    return (<div style={{margin: 20}}>
      <Switch onChange={onChange}
              disabled={this.state.disabled}
              checkedChildren={'Si'}
              unCheckedChildren={'No'}
      />
      <div>
        <button onClick={this.toggle}>toggle disabled</button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
