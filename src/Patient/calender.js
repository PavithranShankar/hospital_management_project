import React from "react";
//import DatePicker from "react-date-picker";
import moment from "moment"
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class DatePickerPage extends React.Component {
      
    constructor(props){
      super(props)
      this.state = {date: moment()};
      this.dateChanged = this.dateChanged.bind(this);
      this.clear = this.clear.bind(this);
    }
        
    dateChanged(d){
      this.setState({date: d});
    }
  
    clear(){
      this.setState({date: null});
    }
  
    render() {
      return ( 
        <div>
          <DatePicker selected={this.state.date}
                      onChange={this.dateChanged} />
          <input type="button" onClick={this.clear} value="Clear"/>
        </div>
      );
    }
  }
  
export default DatePickerPage;