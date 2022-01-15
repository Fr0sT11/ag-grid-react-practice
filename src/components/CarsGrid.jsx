import { useRef } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

const CarsGrid = ({ rowData }) => {
  const gridRef = useRef(null);

  const onButtonClick = e => {
    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

  const defaultColDef = {
    // set every column width
    width: 100,
    // make every column editable
    editable: true,
    sortable: true ,
    filter: true,
    resizable:true
};

  return (
    <div
      className="ag-theme-alpine"
      style={{height:400, width:700, marginBottom:50}}  
    >
      <button
        onClick={onButtonClick}
        style={{padding:10, borderRadius:5, color:'#FFFFFF', border:'none', backgroundColor:'#1434A4', fontWeight:'bold'}}
        >Get Selected Rows</button>
      <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        rowSelection="multiple"
      >
          <AgGridColumn field="make"  checkboxSelection={true}></AgGridColumn>
          <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
          <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
        </AgGridReact>

    </div>
  );
}

export default CarsGrid;
