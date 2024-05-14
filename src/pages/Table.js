import React from 'react';
import { useTable } from 'react-table';

function Table() {
  // Dữ liệu mẫu
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        email: 'jane@example.com',
      },
      // Thêm dữ liệu khác nếu cần
    ],
    []
  );

  // Cột của bảng
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );

  // Hook sử dụng react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
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
  );
}

export default Table;
