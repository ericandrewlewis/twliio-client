import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css';

console.log(styles);
class App extends React.Component {
  render() {
    return <div {...this.props}>hi</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.react-root')
);
