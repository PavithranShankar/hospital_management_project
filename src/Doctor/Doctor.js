import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';


 const Doctor_page=()=>
  {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'S.No',
        field: 'sno',
        width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
          sort:"asc"
        },
        
      },
      {
        label: 'PatientName',
        field: 'name',
        width: 150,
        
      },
      {
        label: 'Reason',
        field: 'reason',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 80,
      },
      {
        label: 'Appointment Date',
        field: 'date',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'StartTime',
        field: 'StdTime',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'EndTime',
        field: 'EdTime',
        sort: 'asc',
        width: 100,
      },
      
    ],
    rows: [
      {
        sno: '1',
        name: 'Kumar',
        reason: 'For FullBody Checkup',
        age: '61',
        date: '2020/10/25',
        StdTime:"2:30 Pm",
        EdTime:"3:30 Pm"
       
      },
      {
        sno: '2',
        name: 'Raj',
        reason: 'For Normal Checkup',
        age: '28',
        date: '2020/10/22',
        StdTime:"11:30 Am",
        EdTime:"12:30 Pm"
       
      },
      {
        sno: '3',
        name: 'Suresh',
        reason: 'For Heart',
        age: '35',
        date: '2020/10/26',
        StdTime:"6:30 Pm",
        EdTime:"7:30 Pm"
       
      },
      {
        sno: '4',
        name: 'Vinoth',
        reason: 'For Depression',
        age: '18',
        date: '2020/10/27',
        StdTime:"7:30 Am",
        EdTime:"8:30 Am"
       
      },
      {
        sno: '5',
        name: 'Siva',
        reason: 'For Headache',
        age: '55',
        date: '2020/10/25',
        StdTime:"5:30 Pm",
        EdTime:"6:30 Pm"
       
      },
    ],
  });

  return (
  <MDBDataTableV5
  hover 
  striped
      bordered
  entriesOptions={[5, 20, 25]} 
  entries={5} 
  pagesAmount={4}
   data={datatable} 
   searchTop 
   searchBottom={false} />
  );
}

export default Doctor_page;