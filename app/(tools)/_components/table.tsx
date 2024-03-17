import Link from "next/link";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TableProps {
  data: any
  isLoading: boolean
}

export const TableData = ({ data, isLoading }: TableProps) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold uppercase">
              handbook
            </TableHead>
            <TableHead className="font-bold uppercase">
              description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell>Loading...</TableCell>
              <TableCell className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            <>
              {data?.map((d: any) => (
                <TableRow key={d.id}>
                  <TableCell className="text-left">
                    <Link
                      href={d.docs}
                      className="text-amber-400 underline capitalize"
                      target="_blank"
                    >
                      {d.handbook}
                    </Link>
                  </TableCell>
                  <TableCell className="text-nowrap md:text-wrap capitalize">{d.description}</TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}