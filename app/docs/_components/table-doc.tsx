import { Showcase } from "@/app/_components/showcase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableDoc() {
  const rows = [
    { name: "MacBook Pro", category: "Mac", price: "$1,999", status: "In Stock" },
    { name: "iPhone 16 Pro", category: "iPhone", price: "$999", status: "In Stock" },
    { name: "iPad Pro", category: "iPad", price: "$1,099", status: "Low Stock" },
    { name: "Apple Watch Ultra", category: "Watch", price: "$799", status: "In Stock" },
  ];
  return (
    <Showcase
      id="table"
      name="Table"
      description="Apple HIG data table — 13px cells, hairline borders, uppercase 11px column headers, hover row bg-muted/40."
      install="npx shadcn add https://cupertino-ui.vercel.app/r/table.json"
      code={`import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>MacBook Pro</TableCell>
      <TableCell>$1,999</TableCell>
      <TableCell>In Stock</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      preview={
        <div className="w-full max-w-lg rounded-2xl border border-border/60">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.category}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${row.status === "Low Stock" ? "bg-amber-500/10 text-amber-600" : "bg-green-500/10 text-green-600"}`}>
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      }
    />
  );
}
