import React, {useEffect,useState} from 'react';
import { useTable, usePagination } from 'react-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import '../assets/css/components/Menu.css'
import 'fontsource-roboto';


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
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
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <div className="divPadding">
        <table {...getTableProps()} className="table table-hover tableList">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                <th>Editar</th>
                <th>Eliminar</th> 
                <th>Notificar</th> 
              </tr>

            ))}

          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                  <td> <Button className="buttonEdit" startIcon={<EditIcon />}> </Button> </td>
                  <td> <Button className="buttonDelete" startIcon={<DeleteIcon />}> </Button></td>
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

        ],
      },
    ],
    []
  )

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

  useEffect(()=> {
      getClientes();
  }, []);

  return (
    
      <Table columns={columns} data={clientes} />
    
  )
}

export default Pagination