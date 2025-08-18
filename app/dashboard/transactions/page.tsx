"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { History, Search, Filter, Download, Eye, Smartphone, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from "date-fns"

// Mock transaction data
const mockTransactions = [
  {
    id: "TXN001",
    type: "Airtime",
    network: "MTN",
    amount: 1000,
    phone: "08012345678",
    status: "Success",
    date: "2024-01-15T10:30:00Z",
    reference: "REF001234567",
  },
  {
    id: "TXN002",
    type: "Data",
    network: "Airtel",
    amount: 2500,
    phone: "08087654321",
    status: "Success",
    date: "2024-01-14T15:45:00Z",
    reference: "REF001234568",
    dataPlan: "2GB - 30 days",
  },
  {
    id: "TXN003",
    type: "Airtime",
    network: "Glo",
    amount: 500,
    phone: "08098765432",
    status: "Pending",
    date: "2024-01-14T09:20:00Z",
    reference: "REF001234569",
  },
  {
    id: "TXN004",
    type: "Data",
    network: "9Mobile",
    amount: 4000,
    phone: "08076543210",
    status: "Success",
    date: "2024-01-13T14:15:00Z",
    reference: "REF001234570",
    dataPlan: "4GB - 30 days",
  },
  {
    id: "TXN005",
    type: "Airtime",
    network: "MTN",
    amount: 2000,
    phone: "08012345678",
    status: "Failed",
    date: "2024-01-12T11:30:00Z",
    reference: "REF001234571",
  },
  {
    id: "TXN006",
    type: "Data",
    network: "Airtel",
    amount: 8000,
    phone: "08087654321",
    status: "Success",
    date: "2024-01-11T16:45:00Z",
    reference: "REF001234572",
    dataPlan: "10GB - 30 days",
  },
  {
    id: "TXN007",
    type: "Airtime",
    network: "Glo",
    amount: 1500,
    phone: "08098765432",
    status: "Success",
    date: "2024-01-10T08:20:00Z",
    reference: "REF001234573",
  },
  {
    id: "TXN008",
    type: "Data",
    network: "MTN",
    amount: 15000,
    phone: "08012345678",
    status: "Success",
    date: "2024-01-09T13:10:00Z",
    reference: "REF001234574",
    dataPlan: "20GB - 30 days",
  },
]

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-400", textColor: "text-black" },
  { id: "airtel", name: "Airtel", color: "bg-red-600", textColor: "text-white" },
  { id: "glo", name: "Glo", color: "bg-green-600", textColor: "text-white" },
  { id: "9mobile", name: "9Mobile", color: "bg-blue-600", textColor: "text-white" },
]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [networkFilter, setNetworkFilter] = useState("all")
  const [dateFrom, setDateFrom] = useState<Date>()
  const [dateTo, setDateTo] = useState<Date>()
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter and search transactions
  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((transaction) => {
      const matchesSearch =
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.phone.includes(searchTerm) ||
        transaction.reference.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType = typeFilter === "all" || transaction.type.toLowerCase() === typeFilter
      const matchesStatus = statusFilter === "all" || transaction.status.toLowerCase() === statusFilter
      const matchesNetwork = networkFilter === "all" || transaction.network.toLowerCase() === networkFilter

      const transactionDate = new Date(transaction.date)
      const matchesDateFrom = !dateFrom || transactionDate >= dateFrom
      const matchesDateTo = !dateTo || transactionDate <= dateTo

      return matchesSearch && matchesType && matchesStatus && matchesNetwork && matchesDateFrom && matchesDateTo
    })
  }, [searchTerm, typeFilter, statusFilter, networkFilter, dateFrom, dateTo])

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const paginatedTransactions = filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Success</Badge>
      case "pending":
        return <Badge className="bg-secondary/10 text-secondary border-secondary/20">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getNetworkIcon = (network: string) => {
    const networkData = networks.find((n) => n.name.toLowerCase() === network.toLowerCase())
    if (!networkData) return null

    return (
      <div className={`w-6 h-6 ${networkData.color} rounded flex items-center justify-center`}>
        <span className={`text-xs font-bold ${networkData.textColor}`}>
          {network === "9Mobile" ? "9M" : network.charAt(0)}
        </span>
      </div>
    )
  }

  const clearFilters = () => {
    setSearchTerm("")
    setTypeFilter("all")
    setStatusFilter("all")
    setNetworkFilter("all")
    setDateFrom(undefined)
    setDateTo(undefined)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
          <p className="text-muted-foreground">View and manage all your airtime and data purchases</p>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <History className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
                <p className="text-xl font-bold">{mockTransactions.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Successful</p>
                <p className="text-xl font-bold text-accent">
                  {mockTransactions.filter((t) => t.status === "Success").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-xl font-bold text-secondary">
                  {mockTransactions.filter((t) => t.status === "Pending").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                <History className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Failed</p>
                <p className="text-xl font-bold text-destructive">
                  {mockTransactions.filter((t) => t.status === "Failed").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Transaction ID, phone, reference..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <Label>Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="airtime">Airtime</SelectItem>
                  <SelectItem value="data">Data</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <Label>Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Network Filter */}
            <div>
              <Label>Network</Label>
              <Select value={networkFilter} onValueChange={setNetworkFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Networks</SelectItem>
                  <SelectItem value="mtn">MTN</SelectItem>
                  <SelectItem value="airtel">Airtel</SelectItem>
                  <SelectItem value="glo">Glo</SelectItem>
                  <SelectItem value="9mobile">9Mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions ({filteredTransactions.length})</CardTitle>
          <CardDescription>
            {filteredTransactions.length === 0
              ? "No transactions found"
              : `Showing ${paginatedTransactions.length} of ${filteredTransactions.length} transactions`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-8">
              <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No transactions found matching your criteria</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Network</TableHead>
                      <TableHead>Phone Number</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {transaction.type === "Airtime" ? (
                              <Smartphone className="w-4 h-4 text-primary" />
                            ) : (
                              <Zap className="w-4 h-4 text-accent" />
                            )}
                            {transaction.type}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getNetworkIcon(transaction.network)}
                            {transaction.network}
                          </div>
                        </TableCell>
                        <TableCell className="font-mono">{transaction.phone}</TableCell>
                        <TableCell className="font-semibold">₦{transaction.amount.toLocaleString()}</TableCell>
                        <TableCell>{format(new Date(transaction.date), "MMM dd, yyyy HH:mm")}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedTransaction(transaction)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Transaction Details Modal */}
      <Dialog open={!!selectedTransaction} onOpenChange={() => setSelectedTransaction(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            <DialogDescription>Complete information about this transaction</DialogDescription>
          </DialogHeader>

          {selectedTransaction && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Transaction ID</Label>
                  <p className="font-mono text-sm">{selectedTransaction.id}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Reference</Label>
                  <p className="font-mono text-sm">{selectedTransaction.reference}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Type</Label>
                  <div className="flex items-center gap-2">
                    {selectedTransaction.type === "Airtime" ? (
                      <Smartphone className="w-4 h-4 text-primary" />
                    ) : (
                      <Zap className="w-4 h-4 text-accent" />
                    )}
                    <p>{selectedTransaction.type}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Network</Label>
                  <div className="flex items-center gap-2">
                    {getNetworkIcon(selectedTransaction.network)}
                    <p>{selectedTransaction.network}</p>
                  </div>
                </div>
              </div>

              {selectedTransaction.dataPlan && (
                <div>
                  <Label className="text-muted-foreground">Data Plan</Label>
                  <p>{selectedTransaction.dataPlan}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Phone Number</Label>
                  <p className="font-mono">{selectedTransaction.phone}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Amount</Label>
                  <p className="font-bold text-lg">₦{selectedTransaction.amount.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Date & Time</Label>
                  <p>{format(new Date(selectedTransaction.date), "MMMM dd, yyyy 'at' HH:mm")}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedTransaction.status)}</div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
