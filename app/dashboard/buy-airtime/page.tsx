"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Smartphone, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-400", textColor: "text-black" },
  { id: "airtel", name: "Airtel", color: "bg-red-600", textColor: "text-white" },
  { id: "glo", name: "Glo", color: "bg-green-600", textColor: "text-white" },
  { id: "9mobile", name: "9Mobile", color: "bg-blue-600", textColor: "text-white" },
]

const quickAmounts = [100, 200, 500, 1000, 2000, 5000]

export default function BuyAirtimePage() {
  const [formData, setFormData] = useState({
    network: "",
    phoneNumber: "",
    amount: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [purchaseSuccess, setPurchaseSuccess] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const validateForm = () => {
    if (!formData.network) return "Please select a network"
    if (!formData.phoneNumber) return "Please enter phone number"
    if (!/^0[789][01]\d{8}$/.test(formData.phoneNumber)) return "Please enter a valid Nigerian phone number"
    if (!formData.amount) return "Please enter amount"
    const amount = Number.parseInt(formData.amount)
    if (amount < 50) return "Minimum amount is ₦50"
    if (amount > 50000) return "Maximum amount is ₦50,000"
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
              ₦{Number.parseInt(formData.amount).toLocaleString()} airtime has been sent to {formData.phoneNumber}
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Buy Airtime</h1>
        <p className="text-muted-foreground">Instantly recharge any Nigerian phone number</p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            Airtime Purchase
          </CardTitle>
          <CardDescription>Select network, enter phone number and amount to recharge</CardDescription>
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
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
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
              <p className="text-xs text-muted-foreground">Enter the phone number to recharge</p>
            </div>

            {/* Amount */}
            <div className="space-y-3">
              <Label htmlFor="amount">Amount (₦)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
                min="50"
                max="50000"
                className="h-12"
              />

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {quickAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange("amount", amount.toString())}
                    className={formData.amount === amount.toString() ? "border-primary bg-primary/5" : ""}
                  >
                    ₦{amount}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Minimum: ₦50, Maximum: ₦50,000</p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              disabled={!formData.network || !formData.phoneNumber || !formData.amount}
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
            <DialogTitle>Confirm Airtime Purchase</DialogTitle>
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
                <span className="text-muted-foreground">Phone Number:</span>
                <span className="font-medium">{formData.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-bold text-lg">₦{Number.parseInt(formData.amount || "0").toLocaleString()}</span>
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
