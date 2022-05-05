import React from "react";

export default function RenderTable({ tableInstance }) {
    const {
        getTableProps,

        getTableBodyProps,

        headerGroups,

        rows,

        prepareRow,
    } = tableInstance;
    return (
        <table {...getTableProps()} className="table-auto border-collapse">
            <thead>
                {
                    // Loop over the header rows

                    headerGroups.map((headerGroup) => (
                        // Apply the header row props

                        <tr
                            className="rounded-lg"
                            {...headerGroup.getHeaderGroupProps()}
                        >
                            {
                                // Loop over the headers in each row

                                headerGroup.headers.map((column) => (
                                    // Apply the header cell props

                                    <th
                                        className="py-4"
                                        {...column.getHeaderProps()}
                                    >
                                        {
                                            // Render the header

                                            <div className="bg-slate-50 text-slate-600 px-8 py-4">
                                                {column.render("Header")}
                                            </div>
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>

            {/* Apply the table body props */}

            <tbody {...getTableBodyProps()}>
                {
                    // Loop over the table rows

                    rows.map((row) => {
                        // Prepare the row for display

                        prepareRow(row);

                        return (
                            // Apply the row props

                            <tr className="rounded-lg" {...row.getRowProps()}>
                                {
                                    // Loop over the rows cells

                                    row.cells.map((cell) => {
                                        // Apply the cell props
                                        console.log(cell);
                                        return (
                                            <td
                                                className="py-4"
                                                {...cell.getCellProps()}
                                            >
                                                {
                                                    // Render the cell contents
                                                    <div className="bg-slate-50  px-8 py-4 h-24 flex justify-center items-center">
                                                        {cell.render("Cell")}
                                                    </div>
                                                }
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}
