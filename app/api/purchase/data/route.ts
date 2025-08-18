import { type NextRequest, NextResponse } from "next/server"

const dataPlans = {
  mtn: [
    { id: "mtn-1gb-30", name: "1GB", validity: "30 days", price: 1000 },
    { id: "mtn-2gb-30", name: "2GB", validity: "30 days", price: 2000 },
    { id: "mtn-5gb-30", name: "5GB", validity: "30 days", price: 4500 },
    { id: "mtn-10gb-30", name: "10GB", validity: "30 days", price: 8000 },
    { id: "mtn-20gb-30", name: "20GB", validity: "30 days", price: 15000 },
  ],
  airtel: [
    { id: "airtel-1gb-30", name: "1GB", validity: "30 days", price: 1200 },
    { id: "airtel-2gb-30", name: "2GB", validity: "30 days", price: 2200 },
    { id: "airtel-5gb-30", name: "5GB", validity: "30 days", price: 5000 },
    { id: "airtel-10gb-30", name: "10GB", validity: "30 days", price: 8500 },
    { id: "airtel-15gb-30", name: "15GB", validity: "30 days", price: 12000 },
  ],
  glo: [
    { id: "glo-1gb-30", name: "1GB", validity: "30 days", price: 1000 },
    { id: "glo-3gb-30", name: "3GB", validity: "30 days", price: 2500 },
    { id: "glo-5gb-30", name: "5GB", validity: "30 days", price: 4000 },
    { id: "glo-10gb-30", name: "10GB", validity: "30 days", price: 7500 },
    { id: "glo-25gb-30", name: "25GB", validity: "30 days", price: 18000 },
  ],
  "9mobile": [
    { id: "9mobile-1gb-30", name: "1GB", validity: "30 days", price: 1200 },
    { id: "9mobile-2gb-30", name: "2GB", validity: "30 days", price: 2400 },
    { id: "9mobile-4gb-30", name: "4GB", validity: "30 days", price: 4000 },
    { id: "9mobile-8gb-30", name: "8GB", validity: "30 days", price: 7000 },
    { id: "9mobile-12gb-30", name: "12GB", validity: "30 days", price: 10000 },
  ],
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { network, phoneNumber, dataPlan } = body

    // Validate input
    if (!network || !phoneNumber || !dataPlan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!/^0[789][01]\d{8}$/.test(phoneNumber)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    // Find the selected plan
    const networkPlans = dataPlans[network.toLowerCase() as keyof typeof dataPlans]
    const selectedPlan = networkPlans?.find((plan) => plan.id === dataPlan)

    if (!selectedPlan) {
      return NextResponse.json({ error: "Invalid data plan selected" }, { status: 400 })
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate 95% success rate
    const isSuccess = Math.random() > 0.05

    if (!isSuccess) {
      return NextResponse.json({ error: "Transaction failed. Please try again." }, { status: 500 })
    }

    // Generate transaction
    const transaction = {
      id: `TXN${Date.now()}`,
      type: "Data",
      network: network.toUpperCase(),
      amount: selectedPlan.price,
      phone: phoneNumber,
      status: "Success",
      date: new Date().toISOString(),
      reference: `REF${Date.now()}${Math.floor(Math.random() * 1000)}`,
      dataPlan: `${selectedPlan.name} - ${selectedPlan.validity}`,
    }

    return NextResponse.json({
      success: true,
      message: "Data purchase successful",
      transaction,
    })
  } catch (error) {
    console.error("Data purchase error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
