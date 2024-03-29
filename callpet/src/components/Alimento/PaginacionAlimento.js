//* Standard library imports *//
import React, {useEffect,useState} from 'react';

//* Third-Party imports *//
import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import 'fontsource-roboto';
import Moment from 'moment';

//* Material UI Imports *//
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import { Icon } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DeleteIcon from '@material-ui/icons/Delete';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


//* Local application imports *//
import '../../assets/css/components/Menu.css'
import EditarAlimento from "./EditarAlimento.js";
import EliminarAlimento from "./EliminarAlimento.js";


function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Filtro:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} alimentos...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

function Table({ columns, data }) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    visibleColumns,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <div className="divPadding">
        <table {...getTableProps()} className="table table-hover tableList">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                { 
                  index === 1 ? (
                  <>
                    <th>Editar</th>
                    <th>Eliminar</th> 
                  </>):
                  <>
                    <th/>
                    <th/>
                  </> 
                }
              </tr>

            ))}
            <tr>
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: 'left',
                }}
              >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
              <>
                <th/>
                <th/>
                <th/>
              </> 
            </tr>

          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  <td> <EditarAlimento row={row}/> </td>
                  <td> <EliminarAlimento row={row}/> </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
        <div className="pagination">
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} startIcon={<FastRewindIcon />}>
            
          </Button>
          <Button onClick={() => previousPage()} disabled={!canPreviousPage} startIcon={<NavigateBeforeIcon />}>
            
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage} startIcon={<NavigateNextIcon />}>
            
          </Button>
          <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} startIcon={<FastForwardIcon />}>
            
          </Button>{' '}
          
          Página {' '} {pageIndex + 1} de {pageOptions.length}
            
        </div>
      </div>
    </>
  )
}

function Pagination() {

  const [alimentos, setAlimentos] = useState([]);

	const getAlimentos = async() => {
	try {
	    const response = await fetch("http://localhost:5000/alimentos")
	    const jasonData = await response.json();

	    setAlimentos(jasonData);
	} catch (err) {
	    console.error(err.message);
	}
	}

	useEffect(()=> {
		getAlimentos();
	}, []);

	console.log(alimentos);

	const columns = React.useMemo(
	() => [
	  {
	    Header: 'Alimentos',
	    columns: [
	      {
	        Header: 'ID',
	        accessor: 'id_alimento',
	      },
	      {
	        Header: 'Marca',
	        accessor: 'marca',
	      },
	      {
	        Header: 'Presentación',
	        accessor: 'presentacion',
	      },
	      {
	        Header: 'Consumo Diario',
	        accessor: 'consumo_diario',
          Cell : (props)=>{
            
            const custom_text = props.value + ' gramos'
            return <span>{custom_text}</span>
          }
	      },
	    ],
	  },
	],
	[]
  	)

  	return (
      
    	<Table columns={columns} data={alimentos} />
    )
}

export default Pagination