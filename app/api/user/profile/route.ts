import { type NextRequest, NextResponse } from "next/server"

// Mock user data
const mockUser = {
  id: "user_123",
  name: "Demo User",
  email: "demo@taranalink.ng",
  phone: "08012345678",
  balance: 2450.0,
  createdAt: "2024-01-01T00:00:00Z",
  lastLogin: new Date().toISOString(),
  preferences: {
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    defaultNetwork: "mtn",
    currency: "NGN",
  },
  stats: {
    totalTransactions: 45,
    totalSpent: 45230,
    airtimeSpent: 18650,
    dataSpent: 26580,
    thisMonth: 7200,
  },
}

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return NextResponse.json({
      success: true,
      user: mockUser,
    })
  } catch (error) {
    console.error("Profile GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, preferences } = body

    // Validate input
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    if (phone && !/^0[789][01]\d{8}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Update mock user data
    const updatedUser = {
      ...mockUser,
      name,
      email,
      phone: phone || mockUser.phone,
      preferences: preferences || mockUser.preferences,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    })
  } catch (error) {
    console.error("Profile PUT error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
