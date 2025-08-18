import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { network, phoneNumber, amount } = body

    // Validate input
    if (!network || !phoneNumber || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!/^0[789][01]\d{8}$/.test(phoneNumber)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    const numAmount = Number.parseInt(amount)
    if (numAmount < 50 || numAmount > 50000) {
      return NextResponse.json({ error: "Amount must be between ₦50 and ₦50,000" }, { status: 400 })
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate 95% success rate
    const isSuccess = Math.random() > 0.05

    if (!isSuccess) {
      return NextResponse.json({ error: "Transaction failed. Please try again." }, { status: 500 })
    }

    // Generate transaction
    const transaction = {
      id: `TXN${Date.now()}`,
      type: "Airtime",
      network: network.toUpperCase(),
      amount: numAmount,
      phone: phoneNumber,
      status: "Success",
      date: new Date().toISOString(),
      reference: `REF${Date.now()}${Math.floor(Math.random() * 1000)}`,
    }

    return NextResponse.json({
      success: true,
      message: "Airtime purchase successful",
      transaction,
    })
  } catch (error) {
    console.error("Airtime purchase error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
