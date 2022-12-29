import React, { useState, useEffect } from react;
import { CSVLink } from react-csv;

const ExportCSV = () => {

const { fileData, setFileData } = useState();

// json key should match the header's key

const fileHeaders = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
  ];

 const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
  ];

const handleDataFetch = async() => {
  setFileData(data)
};

useEffect(()=>{
  handleDataFetch();
}, [])

return (
  <div>
    <h3>Export to CSV</h3>
    {fileData?.length &&
      <CSVLink
        headers={fileHeaders}
        data={fileData}
        filename="results.csv"
        target="_blank"
      >
        Export
      </CSVLink>
    }
  </div>
);
}

export default ExportCSV;