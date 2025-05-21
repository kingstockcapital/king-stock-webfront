
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const transactionsData = [
  { date: "2025-05-15", type: "Deposit", amount: "$10,000", status: "Completed" },
  { date: "2025-05-10", type: "Withdrawal", amount: "$2,500", status: "Completed" },
  { date: "2025-05-01", type: "Dividend", amount: "$750", status: "Completed" },
  { date: "2025-04-20", type: "Fee", amount: "$100", status: "Completed" },
  { date: "2025-04-15", type: "Deposit", amount: "$5,000", status: "Completed" },
];

const Transactions: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionsData.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                    {transaction.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Transactions;
