"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import useSchool from "@/hooks/useSchool";

export default function Page1roSecundaria() {
  const { alumnos } = useSchool();

  const columns = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Apellido Paterno",
      accessorKey: "apellidoPaterno",
    },
    {
      header: "Apellido Materno",
      accessorKey: "apellidoMaterno",
    },
  ];

  const table = useReactTable({
    data: alumnos.filter(
      (alumno) => alumno.nivel === "secundaria" && alumno.grado === "1grado_s"
    ),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th>ID</th>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              <td>{Number(row.id) + 1}</td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
