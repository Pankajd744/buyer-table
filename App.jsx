import React, { Component } from "react";
import Table from "./table/tabledata";
import "./App.css";
import dummyBuyerData from "./json/jsondata";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: "",
      searchboxValue: "",
      fromDate: "",
      toDate: "",
      buyerData: dummyBuyerData
    };
  }

  onChange = e => {
    if (e.target.value === "Select Option") {
      this.setState({ searchboxValue: "" });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = () => {
    let buyerData = dummyBuyerData;
    if (this.state.dropdownValue !== "Select Option") {
      buyerData = dummyBuyerData.filter(data => {
        if (
          data.Ccy === this.state.dropdownValue ||
          data.Reference.toLowerCase().includes(
            this.state.searchboxValue.toLowerCase()
          )
        ) {
          return true;
        } else {
          return false;
        }
      });
    }
    this.setState({ buyerData });
  };

  render() {
    const styles = {
      root: {
        display: "flex",
        justifyContent: "center"
      }
    };

    return (
      <div className="App">
        <h1>Table</h1>
        <div style={styles.root}>
          <label>Name: </label>
          <input
            type="text"
            onChange={this.onChange}
            name="searchboxValue"
            value={this.state.searchboxValue}
          />

          <label>Ccy: </label>
          <select onChange={this.onChange} name="dropdownValue">
            <option value="Select Option">Select Option</option>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="JPY">JPY</option>
            <option value="RYD">RYD</option>
          </select>
          <label>From : </label>
          <input
            type="date"
            name="fromDate"
            value={this.state.fromTo}
            onChange={this.onChange}
          />
          <label>To : </label>
          <input type="date" name="toDate" onChange={this.onChange} />
        </div>
        <button type="submit" onClick={this.onSubmit}>
          Search
        </button>
        <br />
        <Table buyerData={this.state.buyerData} />
      </div>
    );
  }
}
export default App;
