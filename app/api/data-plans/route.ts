import { type NextRequest, NextResponse } from "next/server"

const dataPlans = {
  mtn: [
    { id: "mtn-1gb-30", name: "1GB", validity: "30 days", price: 1000, description: "Perfect for light browsing" },
    { id: "mtn-2gb-30", name: "2GB", validity: "30 days", price: 2000, description: "Great for social media" },
    { id: "mtn-5gb-30", name: "5GB", validity: "30 days", price: 4500, description: "Ideal for streaming" },
    { id: "mtn-10gb-30", name: "10GB", validity: "30 days", price: 8000, description: "Heavy usage plan" },
    { id: "mtn-20gb-30", name: "20GB", validity: "30 days", price: 15000, description: "Unlimited experience" },
  ],
  airtel: [
    { id: "airtel-1gb-30", name: "1GB", validity: "30 days", price: 1200, description: "Basic browsing plan" },
    { id: "airtel-2gb-30", name: "2GB", validity: "30 days", price: 2200, description: "Social media ready" },
    { id: "airtel-5gb-30", name: "5GB", validity: "30 days", price: 5000, description: "Video streaming" },
    { id: "airtel-10gb-30", name: "10GB", validity: "30 days", price: 8500, description: "Power user plan" },
    { id: "airtel-15gb-30", name: "15GB", validity: "30 days", price: 12000, description: "Premium experience" },
  ],
  glo: [
    { id: "glo-1gb-30", name: "1GB", validity: "30 days", price: 1000, description: "Starter pack" },
    { id: "glo-3gb-30", name: "3GB", validity: "30 days", price: 2500, description: "Regular user plan" },
    { id: "glo-5gb-30", name: "5GB", validity: "30 days", price: 4000, description: "Entertainment ready" },
    { id: "glo-10gb-30", name: "10GB", validity: "30 days", price: 7500, description: "Heavy browsing" },
    { id: "glo-25gb-30", name: "25GB", validity: "30 days", price: 18000, description: "Ultimate plan" },
  ],
  "9mobile": [
    { id: "9mobile-1gb-30", name: "1GB", validity: "30 days", price: 1200, description: "Basic plan" },
    { id: "9mobile-2gb-30", name: "2GB", validity: "30 days", price: 2400, description: "Standard plan" },
    { id: "9mobile-4gb-30", name: "4GB", validity: "30 days", price: 4000, description: "Popular choice" },
    { id: "9mobile-8gb-30", name: "8GB", validity: "30 days", price: 7000, description: "Power plan" },
    { id: "9mobile-12gb-30", name: "12GB", validity: "30 days", price: 10000, description: "Premium plan" },
  ],
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const network = searchParams.get("network")

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200))

    if (network) {
      const networkPlans = dataPlans[network.toLowerCase() as keyof typeof dataPlans]
      if (!networkPlans) {
        return NextResponse.json({ error: "Network not found" }, { status: 404 })
      }

      return NextResponse.json({
        success: true,
        network: network.toUpperCase(),
        plans: networkPlans,
      })
    }

    return NextResponse.json({
      success: true,
      networks: Object.keys(dataPlans),
      plans: dataPlans,
    })
  } catch (error) {
    console.error("Data plans API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
