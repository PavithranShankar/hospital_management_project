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
        sort: 'disabled',
        width: 100,
      },
      
    ],
    rows: [
      {
        sno: '1',
        name: 'Kumar',
        reason: 'For FullBody Checkup',
        age: '61',
        date: '2011/04/25',
       
      },
      {
        sno: '2',
        name: 'Raj',
        reason: 'For Normal Checkup',
        age: '61',
        date: '2011/04/25',
       
      },
      {
        sno: '3',
        name: 'Suresh',
        reason: 'For Heart',
        age: '61',
        date: '2011/04/25',
       
      },
      {
        sno: '4',
        name: 'Vinoth',
        reason: 'For Depression',
        age: '61',
        date: '2011/04/25',
       
      },
      {
        sno: '5',
        name: 'Siva',
        reason: 'For Headache',
        age: '61',
        date: '2011/04/25',
       
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