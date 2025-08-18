import { type NextRequest, NextResponse } from "next/server"

// Generate mock transaction data
function generateMockTransactions(count = 50) {
  const networks = ["MTN", "Airtel", "Glo", "9Mobile"]
  const types = ["Airtime", "Data"]
  const statuses = ["Success", "Pending", "Failed"]
  const phones = ["08012345678", "08087654321", "08098765432", "08076543210", "08065432109"]

  const dataPlans = [
    "1GB - 30 days",
    "2GB - 30 days",
    "5GB - 30 days",
    "10GB - 30 days",
    "20GB - 30 days",
    "3GB - 30 days",
    "4GB - 30 days",
    "8GB - 30 days",
    "15GB - 30 days",
    "25GB - 30 days",
  ]

  const transactions = []

  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)]
    const network = networks[Math.floor(Math.random() * networks.length)]
    const phone = phones[Math.floor(Math.random() * phones.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]

    // Weight success more heavily (80% success, 15% pending, 5% failed)
    const statusWeighted = Math.random() < 0.8 ? "Success" : Math.random() < 0.75 ? "Pending" : "Failed"

    const amount =
      type === "Airtime"
        ? [100, 200, 500, 1000, 1500, 2000, 5000][Math.floor(Math.random() * 7)]
        : [1000, 1200, 2000, 2200, 2500, 4000, 4500, 5000, 7000, 7500, 8000, 8500, 10000, 12000, 15000, 18000][
            Math.floor(Math.random() * 16)
          ]

    // Generate date within last 3 months
    const date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * 90))

    const transaction = {
      id: `TXN${String(i + 1).padStart(3, "0")}`,
      type,
      network,
      amount,
      phone,
      status: statusWeighted,
      date: date.toISOString(),
      reference: `REF${Date.now() - i * 1000}${Math.floor(Math.random() * 1000)}`,
      ...(type === "Data" && { dataPlan: dataPlans[Math.floor(Math.random() * dataPlans.length)] }),
    }

    transactions.push(transaction)
  }

  // Sort by date (newest first)
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const type = searchParams.get("type")
    const status = searchParams.get("status")
    const network = searchParams.get("network")
    const search = searchParams.get("search")

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    let transactions = generateMockTransactions(100)

    // Apply filters
    if (type && type !== "all") {
      transactions = transactions.filter((t) => t.type.toLowerCase() === type.toLowerCase())
    }

    if (status && status !== "all") {
      transactions = transactions.filter((t) => t.status.toLowerCase() === status.toLowerCase())
    }

    if (network && network !== "all") {
      transactions = transactions.filter((t) => t.network.toLowerCase() === network.toLowerCase())
    }

    if (search) {
      const searchLower = search.toLowerCase()
      transactions = transactions.filter(
        (t) =>
          t.id.toLowerCase().includes(searchLower) ||
          t.phone.includes(search) ||
          t.reference.toLowerCase().includes(searchLower),
      )
    }

    // Pagination
    const total = transactions.length
    const totalPages = Math.ceil(total / limit)
    const offset = (page - 1) * limit
    const paginatedTransactions = transactions.slice(offset, offset + limit)

    return NextResponse.json({
      transactions: paginatedTransactions,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
      stats: {
        total: transactions.length,
        successful: transactions.filter((t) => t.status === "Success").length,
        pending: transactions.filter((t) => t.status === "Pending").length,
        failed: transactions.filter((t) => t.status === "Failed").length,
      },
    })
  } catch (error) {
    console.error("Transactions API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
