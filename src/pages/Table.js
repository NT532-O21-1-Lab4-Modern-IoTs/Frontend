import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { saveAs } from 'file-saver';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/mongoDB/getAll/DHT11');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const downloadCSV = () => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'data.csv');
  };

  const convertToCSV = (data) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const rowData of data) {
      const values = headers.map(header => rowData[header]);
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  // Columns of the table
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: '_id',
      },
          {
      Header: 'Device',
      accessor: (row) => {
        // Kiểm tra nếu temperature là null
        if (row.temperature === null) {
          return 'ESP8266 device 2';
        } else {
          return 'ESP8266';
        }
      }
    },
    {
      Header: 'Sensor',
      accessor: (row) => {
        if (row.temperature === null) {
          return 'DHT11 device 2';
        } else {
          return 'DHT11';
        }
      }
    },
      {
      Header: 'Temperature',
      accessor: (row) => {
        // Check if temperature is null and set default value
        return row.temperature === null ? 27 : row.temperature;
      },
      Cell: ({ value }) => `${value} °C`  // Optional: Add unit for temperature
    },
    {
      Header: 'Humidity',
      accessor: (row) => {
        // Check if humidity is null and set default value
        return row.humidity === null ? 80 : row.humidity;
      },
      Cell: ({ value }) => `${value} %`  // Optional: Add unit for humidity
    },
      {
        Header: 'Light',
        accessor: 'light',
      },
      {
        Header: 'Timestamp',
        accessor: 'timestamp',
      },
    ],
    []
  );

  // React-table hook
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <button onClick={downloadCSV}>Download CSV</button>
      <table {...getTableProps()} className="border-collapse border border-gray-200">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-2 border border-gray-200">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="p-2 border border-gray-200">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
