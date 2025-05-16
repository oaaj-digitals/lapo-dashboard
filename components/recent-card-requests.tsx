import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentRequests = [
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Ready",
    action: "View",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "In Progress",
    action: "View",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "Acknowledged",
    action: "View",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Pending",
    action: "View",
  },
]

export function RecentCardRequests() {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Branch</TableHead>
            <TableHead>Card Type</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentRequests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>{request.branch}</TableCell>
              <TableCell>{request.cardType}</TableCell>
              <TableCell>{request.quantity}</TableCell>
              <TableCell>
                <StatusBadge status={request.status} />
              </TableCell>
              <TableCell>
                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  {request.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800 border-green-200"
      case "In Progress":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Acknowledged":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Pending":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusStyles()}`}>{status}</span>
}
