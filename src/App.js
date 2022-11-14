import React from "react";
import styles from "./style.module.css";
import icon from "../images/location.png";
import search from "../images/search.png";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;

    this.setState({
      inputValue: value,
    });
  }

  onButtonClick(e) {
    document.querySelector(".yAE3vtbHyS3XGbxQGP0m").style.display = "none";
  }

  render() {
    const { inputValue } = this.state;
    var myScript = document.createElement("script");
    myScript.type = "text/html";
    myScript.src = "./index.js";
    document.getElementsByTagName("head")[0].appendChild(myScript);

    return (
      <>
        <div className={styles.overlay}>
          <div className={styles.inputwrapper}>
            <div className={styles.inputbox}>
              <input
                onChange={this.onInputChange}
                placeholder="Enter your current location"
                value={inputValue}
                spellCheck={false}
              />
              <span className={styles.inputhighlight}>
                {inputValue.replace(/ /g, "\u00a0")}
              </span>
            </div>
            <button className={styles.searchbutton}>
              <img
                src={search}
                className={styles.searchimg}
                onClick={this.onButtonClick}
              />
            </button>
            <button className={styles.button}>
              <img src={icon} className={styles.img} />
            </button>
          </div>
        </div>
      </>
    );
  }
}
