import React from 'react';
import styles from './style.module.css';
import icon from '../images/location.png';

export default class App extends React.Component {
    constructor() {
      super();
  
      this.state = {
        inputValue: ''
      };
      
      this.onInputChange = this.onInputChange.bind(this);
    }
  
    onInputChange(e) {
      const { value } = e.target;
  
      this.setState({
        inputValue: value
      });
    }
  
    render() {
      const { inputValue } = this.state;
      
      return (
        <div className={styles.overlay}>
        <div className={styles.inputwrapper}>
        <div>
          <input
            onChange={this.onInputChange}
            placeholder='Where are you?'
            value={inputValue}
            spellCheck={false}
            />
          <span className={styles.inputhighlight}>
            { inputValue.replace(/ /g, "\u00a0") }
          </span>
          </div>
          <img src={icon} className={styles.img} />
        </div>
        </div>
      );
    }
  }