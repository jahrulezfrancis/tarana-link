// API utility functions for making requests

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new ApiError(errorData.error || `HTTP ${response.status}`, response.status)
  }

  return response.json()
}

// Purchase APIs
export const purchaseApi = {
  buyAirtime: async (data: { network: string; phoneNumber: string; amount: string }) => {
    return apiRequest("/api/purchase/airtime", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  buyData: async (data: { network: string; phoneNumber: string; dataPlan: string }) => {
    return apiRequest("/api/purchase/data", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },
}

// Transaction APIs
export const transactionApi = {
  getTransactions: async (
    params: {
      page?: number
      limit?: number
      type?: string
      status?: string
      network?: string
      search?: string
    } = {},
  ) => {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, value.toString())
      }
    })

    return apiRequest(`/api/transactions?${searchParams.toString()}`)
  },
}

// User APIs
export const userApi = {
  getProfile: async () => {
    return apiRequest("/api/user/profile")
  },

  updateProfile: async (data: {
    name: string
    email: string
    phone?: string
    preferences?: any
  }) => {
    return apiRequest("/api/user/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    })
  },
}

// Data Plans API
export const dataPlansApi = {
  getPlans: async (network?: string) => {
    const url = network ? `/api/data-plans?network=${network}` : "/api/data-plans"
    return apiRequest(url)
  },
}
