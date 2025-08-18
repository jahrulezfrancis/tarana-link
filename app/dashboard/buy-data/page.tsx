"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-400", textColor: "text-black" },
  { id: "airtel", name: "Airtel", color: "bg-red-600", textColor: "text-white" },
  { id: "glo", name: "Glo", color: "bg-green-600", textColor: "text-white" },
  { id: "9mobile", name: "9Mobile", color: "bg-blue-600", textColor: "text-white" },
]

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

export default function BuyDataPage() {
  const [formData, setFormData] = useState({
    network: "",
    phoneNumber: "",
    dataPlan: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [purchaseSuccess, setPurchaseSuccess] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      // Reset data plan when network changes
      ...(field === "network" && { dataPlan: "" }),
    }))
    setError("")
  }

  const validateForm = () => {
    if (!formData.network) return "Please select a network"
    if (!formData.phoneNumber) return "Please enter phone number"
    if (!/^0[789][01]\d{8}$/.test(formData.phoneNumber)) return "Please enter a valid Nigerian phone number"
    if (!formData.dataPlan) return "Please select a data plan"
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    setShowConfirmation(true)
  }

  const handleConfirmPurchase = async () => {
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setPurchaseSuccess(true)

      // Auto redirect after 3 seconds
      setTimeout(() => {
        router.push("/dashboard/transactions")
      }, 3000)
    } catch (err) {
      setError("Purchase failed. Please try again.")
      setShowConfirmation(false)
    } finally {
      setIsLoading(false)
    }
  }

  const selectedNetwork = networks.find((n) => n.id === formData.network)
  const availablePlans = formData.network ? dataPlans[formData.network as keyof typeof dataPlans] || [] : []
  const selectedPlan = availablePlans.find((p) => p.id === formData.dataPlan)

  if (purchaseSuccess) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="text-center border-2 border-accent/50">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Purchase Successful!</h2>
            <p className="text-muted-foreground mb-4">
              {selectedPlan?.name} data plan has been activated on {formData.phoneNumber}
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground">Transaction ID: TXN{Date.now()}</p>
            </div>
            <p className="text-sm text-muted-foreground">Redirecting to transactions...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Buy Data</h1>
        <p className="text-muted-foreground">Purchase affordable data plans for any Nigerian network</p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Data Purchase
          </CardTitle>
          <CardDescription>Select network, choose data plan and enter phone number</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert className="border-destructive/50 text-destructive">
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Network Selection */}
            <div className="space-y-3">
              <Label>Select Network</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {networks.map((network) => (
                  <button
                    key={network.id}
                    type="button"
                    onClick={() => handleInputChange("network", network.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.network === network.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 ${network.color} rounded-lg flex items-center justify-center mx-auto mb-2`}
                    >
                      <span className={`font-bold text-sm ${network.textColor}`}>
                        {network.name === "9Mobile" ? "9M" : network.name.slice(0, 3)}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{network.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Data Plan Selection */}
            {formData.network && (
              <div className="space-y-3">
                <Label>Select Data Plan</Label>
                <div className="grid gap-3">
                  {availablePlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => handleInputChange("dataPlan", plan.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData.dataPlan === plan.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{plan.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {plan.validity}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-foreground">₦{plan.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="e.g., 08012345678"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="h-12"
              />
              <p className="text-xs text-muted-foreground">Enter the phone number to activate data plan</p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              disabled={!formData.network || !formData.phoneNumber || !formData.dataPlan}
            >
              Continue to Confirmation
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Data Purchase</DialogTitle>
            <DialogDescription>Please review your purchase details before proceeding</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network:</span>
                <div className="flex items-center gap-2">
                  {selectedNetwork && (
                    <div className={`w-6 h-6 ${selectedNetwork.color} rounded flex items-center justify-center`}>
                      <span className={`text-xs font-bold ${selectedNetwork.textColor}`}>
                        {selectedNetwork.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="font-medium">{selectedNetwork?.name}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data Plan:</span>
                <div className="text-right">
                  <p className="font-medium">{selectedPlan?.name}</p>
                  <p className="text-xs text-muted-foreground">{selectedPlan?.validity}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone Number:</span>
                <span className="font-medium">{formData.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-bold text-lg">₦{selectedPlan?.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                className="flex-1"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmPurchase}
                className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Confirm Purchase"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
