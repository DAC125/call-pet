import React, {useEffect,useState} from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import { Icon } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import '../../assets/css/components/Menu.css'
import 'fontsource-roboto';

import EditarCliente from "./EditarCliente.js";
import CambiarEstadoCliente from "./CambiarEstadoCliente.js";

function CellEstado({ value, columnProps } ){
  
  return <Box display="flex" justifyContent="center">
  {
    value ?
      <FiberManualRecordIcon style={{ color: green[500] }} fontSize="small"/>
    
    :
      <FiberManualRecordIcon style={{ color: red[500] }} fontSize="small"/>
    

  }

  </Box>
}

function CellNotificacion({ value, columnProps } ){
  
  return <Box display="flex" justifyContent="center">
  {
    value ?
      <FiberManualRecordIcon style={{ color: green[500] }} fontSize="small"/>
    :
      <FiberManualRecordIcon style={{ color: red[500] }} fontSize="small"/>
  }
  </Box>
}

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
        placeholder={`${count} clientes...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI

  const [clientes, setClientes] = useState([]);

  const eliminarCliente = async id => {

    try {
      const eliminarCliente = await fetch(`http://localhost:5000/clientes/${id}`, {
        method: "DELETE"
      });

      setClientes(clientes.filter(cliente => cliente.id !== id));
    } catch (err) {
      console.error(err.message);
    }

  };


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
                    <th>Cambiar Estado</th> 
                    <th>Notificar</th> 
                  </>):
                  <>
                    <th/>
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
                  <td> <EditarCliente row={row}/> </td>
                  <td> <CambiarEstadoCliente row={row}/> </td>
                  <td> <Button className="buttonNotify" startIcon={<WhatsAppIcon />}> </Button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
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

  const [clientes, setClientes] = useState([]);

  const getClientes = async() => {
      try {
          const response = await fetch("http://localhost:5000/clientes")
          const jasonData = await response.json();

          setClientes(jasonData);
      } catch (err) {
          console.error(err.message);
      }
  }

  console.log(clientes);

  useEffect(()=> {
    getClientes();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Clientes',
        columns: [
          {
            Header: 'Id',
            accessor: 'id',
          },
          {
            Header: 'Nombre',
            accessor: 'nombre',
          },
          {
            Header: 'Primer Apellido',
            accessor: 'primer_apellido',
          },
          {
            Header: 'Segundo Apellido',
            accessor: 'segundo_apellido',
          },
          {
            Header: 'Teléfono',
            accessor: 'telefono',
          },
          {
            Header: 'Dirección',
            accessor: 'direccion_entrega',
          },
          {
            Header: 'Notificación',
            accessor: 'notificacion',
            Cell: CellNotificacion,
          },
          {
            Header: 'Estado',
            accesor: 'estado',
            Cell: e => {
              
              return <CellEstado value={e.row.original.estado}/>
            },

          },
        ],
      },
    ],
    []
  )

  return (
      
      <Table columns={columns} data={clientes} />
    
  )
}

export default Pagination