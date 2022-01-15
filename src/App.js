import { useState, useEffect } from 'react';

import CarsGrid from './components/CarsGrid';
import OlympicsGrid from './components/OlympicsGrid';

import './App.scss';

const App = () => {
  const [rowData, setRowData] = useState([]);
  // const [olympicsData, setOlympicsData] = useState([]);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))

    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    // .then(result => result.json())
    // .then(rowData => setOlympicsData(rowData))
  }, [])


  return (
    <>
      <CarsGrid rowData={rowData} />
      <OlympicsGrid />
    </>
  );
}

export default App;
