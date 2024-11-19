'use client'

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Skeleton } from '../ui/skeleton'
import { GetQuery } from '@/lib/queries'
import PaginationComponent from './pagination-component'
import { EndpointType } from '@/lib/types'

export function TableInstance<TData, TValue>(
  {
    columns,
    data,
  }: {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    isLoading: boolean
  },
  isLoading: boolean
) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <>
                {isLoading ? (
                  <>
                    {Array.from({ length: 10 }).map((_, indexRow) => (
                      <TableRow key={indexRow}>
                        {Array.from({ length: columns.length }).map((_, indexCell) => (
                          <TableCell key={indexCell}>
                            <Skeleton className="w-1/2 h-[20px] rounded-full" />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationComponent table={table} />
    </>
  )
}

export default function TableComponent<TData, TValue>({ queryKey, columns, url }: { queryKey: string; columns: ColumnDef<TData, TValue>[]; url: keyof EndpointType }) {
  const { data, isLoading } = GetQuery(queryKey, url)

  return <TableInstance columns={columns} data={data?.data?.results || []} isLoading={isLoading} />
}
