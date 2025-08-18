"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Smartphone, Zap, TrendingUp, ArrowUpRight, ArrowDownRight, CreditCard, Activity } from "lucide-react"
import Link from "next/link"

// Mock data for charts
const transactionData = [
  { month: "Jan", airtime: 4500, data: 8200 },
  { month: "Feb", airtime: 5200, data: 9100 },
  { month: "Mar", airtime: 4800, data: 7800 },
  { month: "Apr", airtime: 6100, data: 10500 },
  { month: "May", airtime: 5800, data: 9800 },
  { month: "Jun", airtime: 7200, data: 12100 },
]

const recentTransactions = [
  {
    id: "TXN001",
    type: "Airtime",
    network: "MTN",
    amount: 1000,
    phone: "08012345678",
    status: "Success",
    date: "2024-01-15",
  },
  {
    id: "TXN002",
    type: "Data",
    network: "Airtel",
    amount: 2500,
    phone: "08087654321",
    status: "Success",
    date: "2024-01-14",
  },
  {
    id: "TXN003",
    type: "Airtime",
    network: "Glo",
    amount: 500,
    phone: "08098765432",
    status: "Pending",
    date: "2024-01-14",
  },
]

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's your account summary.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/buy-airtime">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Smartphone className="w-4 h-4 mr-2" />
              Buy Airtime
            </Button>
          </Link>
          <Link href="/dashboard/buy-data">
            <Button variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              Buy Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
            <CreditCard className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦45,230</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-accent">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Airtime Purchases</CardTitle>
            <Smartphone className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦18,650</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-accent">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +8.2%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-accent/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Purchases</CardTitle>
            <Zap className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦26,580</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-accent">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +15.3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-secondary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Activity className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₦7,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-destructive">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                -2.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Monthly Spending
            </CardTitle>
            <CardDescription>Your airtime and data purchases over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="airtime" fill="hsl(var(--chart-1))" name="Airtime" radius={[2, 2, 0, 0]} />
                <Bar dataKey="data" fill="hsl(var(--chart-3))" name="Data" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              Transaction Trends
            </CardTitle>
            <CardDescription>Total transaction volume over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="airtime"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                  name="Airtime"
                />
                <Line
                  type="monotone"
                  dataKey="data"
                  stroke="hsl(var(--chart-4))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
                  name="Data"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest airtime and data purchases</CardDescription>
          </div>
          <Link href="/dashboard/transactions">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "Airtime" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    {transaction.type === "Airtime" ? (
                      <Smartphone className={`w-5 h-5 text-primary`} />
                    ) : (
                      <Zap className={`w-5 h-5 text-accent`} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {transaction.type} - {transaction.network}
                    </p>
                    <p className="text-sm text-muted-foreground">{transaction.phone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">₦{transaction.amount.toLocaleString()}</p>
                  <Badge
                    variant={transaction.status === "Success" ? "default" : "secondary"}
                    className={
                      transaction.status === "Success"
                        ? "bg-accent/10 text-accent border-accent/20"
                        : "bg-secondary/10 text-secondary border-secondary/20"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
