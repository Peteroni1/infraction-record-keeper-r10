
import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Search } from 'lucide-react';
import { Infraction } from '@/types';

interface InfractionListProps {
  infractions: Infraction[];
  onView: (infraction: Infraction) => void;
  onEdit: (infraction: Infraction) => void;
}

const InfractionList = ({ infractions, onView, onEdit }: InfractionListProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns: ColumnDef<Infraction>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: ({ row }) => <span className="font-medium">{row.original.id}</span>,
    },
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => new Date(row.original.date).toLocaleDateString(),
    },
    {
      accessorKey: 'type',
      header: 'Type',
      cell: ({ row }) => <span>{row.original.type}</span>,
    },
    {
      accessorKey: 'unit',
      header: 'Unit',
      cell: ({ row }) => <span>{row.original.unit}</span>,
    },
    {
      accessorKey: 'severity',
      header: 'Severity',
      cell: ({ row }) => {
        const severity = row.original.severity;
        let badgeClass = '';
        
        switch(severity) {
          case 'Minor':
            badgeClass = 'bg-blue-100 text-blue-800 hover:bg-blue-100';
            break;
          case 'Moderate':
            badgeClass = 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
            break;
          case 'Major':
            badgeClass = 'bg-orange-100 text-orange-800 hover:bg-orange-100';
            break;
          case 'Critical':
            badgeClass = 'bg-red-100 text-red-800 hover:bg-red-100';
            break;
        }
        
        return <Badge className={badgeClass}>{severity}</Badge>;
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.status;
        let badgeClass = '';
        
        switch(status) {
          case 'Pending':
            badgeClass = 'bg-gray-100 text-gray-800 hover:bg-gray-100';
            break;
          case 'Under Review':
            badgeClass = 'bg-purple-100 text-purple-800 hover:bg-purple-100';
            break;
          case 'Processed':
            badgeClass = 'bg-blue-100 text-blue-800 hover:bg-blue-100';
            break;
          case 'Resolved':
            badgeClass = 'bg-green-100 text-green-800 hover:bg-green-100';
            break;
          case 'Escalated':
            badgeClass = 'bg-red-100 text-red-800 hover:bg-red-100';
            break;
        }
        
        return <Badge className={badgeClass}>{status}</Badge>;
      },
    },
    {
      accessorKey: 'complianceStatus',
      header: 'Compliance',
      cell: ({ row }) => {
        const status = row.original.complianceStatus;
        if (!status) return <span>N/A</span>;
        
        let badgeClass = '';
        
        switch(status) {
          case 'Pending':
            badgeClass = 'bg-gray-100 text-gray-800 hover:bg-gray-100';
            break;
          case 'Compliant':
            badgeClass = 'bg-green-100 text-green-800 hover:bg-green-100';
            break;
          case 'Non-Compliant':
            badgeClass = 'bg-red-100 text-red-800 hover:bg-red-100';
            break;
          case 'In Progress':
            badgeClass = 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
            break;
        }
        
        return <Badge className={badgeClass}>{status}</Badge>;
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const infraction = row.original;
        
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onView(infraction)}>
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(infraction)}>
                Edit Record
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: infractions,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search infractions..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex space-x-2">
          <Button>Add New</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No infractions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{' '}
          of {table.getFilteredRowModel().rows.length} entries
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfractionList;
