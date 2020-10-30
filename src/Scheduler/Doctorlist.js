import React, { useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import config from "../Config.json";

const Doctorlist = ({ values, onChange, ...props }) => {
  const [doctorlist, setdoctorlist] = React.useState([]);

  useEffect(() => {
    const getdoctorlist = async () => {
      const tempdoctor = await axios.get(
        `${config.BASEURL}${config.DOCTOR_LIST}`
      );
      let tempdoctorlist = tempdoctor.data.map((data, index) => ({
        value: data.AccountID,
        label: "Dr." + data.Firstname + " " + data.Lastname,
      }));
      setdoctorlist(tempdoctorlist);
      //setlisttimezoness(tempzones.data);
    };
    getdoctorlist();
  }, []);

  return (
    <div className="row">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <b><p style={{float:'right',paddingTop:'10px'}}>Select Doctor</p></b>
      </div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
    <Select
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      isMulti={false}
      value={values}
      onChange={(e) => onChange(e)}
      clearable={true}
      searchable={true}
      options={doctorlist}
      classNamePrefix="react-select"
    />
    </div>
    </div>
  );
};

export default Doctorlist;
