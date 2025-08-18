import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Zap, Shield, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TaranaLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#networks" className="text-muted-foreground hover:text-foreground transition-colors">
              Networks
            </Link>
            <Link href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-scale-in">
            Fast & Reliable Recharge Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-in-left">
            Fast Airtime & Data Purchases, <span className="text-primary">Anytime!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
            Recharge your phone instantly with our secure platform. Support for all major Nigerian networks - MTN,
            Airtel, Glo, and 9Mobile.
          </p>

          {/* Quick Buy Section */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Link href="/dashboard/buy-airtime">
              <Card className="group cursor-pointer card-hover border-2 hover:border-primary/30 animate-slide-in-left">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Buy Airtime</h3>
                  <p className="text-muted-foreground mb-4">Instant airtime recharge for all networks</p>
                  <ArrowRight className="w-5 h-5 text-primary mx-auto group-hover:translate-x-2 transition-transform duration-300" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/buy-data">
              <Card className="group cursor-pointer card-hover border-2 hover:border-accent/30 animate-slide-in-right">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Buy Data</h3>
                  <p className="text-muted-foreground mb-4">Affordable data plans for all networks</p>
                  <ArrowRight className="w-5 h-5 text-accent mx-auto group-hover:translate-x-2 transition-transform duration-300" />
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 btn-smooth">
                Get Started Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 bg-transparent btn-smooth hover:bg-muted/50">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section - Nigerian Telecom Logos */}
      <section className="py-16 px-4 bg-muted/20 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Trusted by millions across Nigeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 animate-slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/80 to-yellow-500/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="font-bold text-yellow-900 text-lg">MTN</span>
              </div>
              <span className="text-sm text-muted-foreground">MTN Nigeria</span>
            </div>
            <div className="flex flex-col items-center gap-3 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/80 to-red-600/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="font-bold text-white text-lg">Airtel</span>
              </div>
              <span className="text-sm text-muted-foreground">Airtel Nigeria</span>
            </div>
            <div className="flex flex-col items-center gap-3 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/80 to-green-600/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="font-bold text-white text-lg">Glo</span>
              </div>
              <span className="text-sm text-muted-foreground">Globacom</span>
            </div>
            <div className="flex flex-col items-center gap-3 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="font-bold text-white text-sm">9Mobile</span>
              </div>
              <span className="text-sm text-muted-foreground">9Mobile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left">
              Why Choose TaranaLink?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
              Experience the fastest and most secure way to recharge your phone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary/30 card-hover animate-slide-in-left">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Instant Recharge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get your airtime and data instantly. No waiting, no delays - just immediate top-up to your phone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center border-2 hover:border-accent/30 card-hover animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>100% Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your transactions are protected with bank-level security. Safe payments guaranteed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center border-2 hover:border-secondary/30 card-hover animate-slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-secondary/20 hover:scale-110">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our customer support team is always ready to help you with any issues or questions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/20 animate-fade-in">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-left">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-in-right">
              Join thousands of satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="card-hover animate-slide-in-left">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "TaranaLink has made my life so much easier. I can top up my phone anytime, anywhere!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">AO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Adebayo Ogundimu</p>
                    <p className="text-xs text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast, reliable, and secure. I've been using TaranaLink for months without any issues."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">FI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fatima Ibrahim</p>
                    <p className="text-xs text-muted-foreground">Abuja, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The best recharge platform I've used. Great prices and instant delivery every time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-secondary">CE</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Chidi Eze</p>
                    <p className="text-xs text-muted-foreground">Port Harcourt, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">TaranaLink</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Nigeria's fastest and most reliable airtime and data recharge platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/dashboard/buy-airtime" className="hover:text-foreground transition-colors">
                    Buy Airtime
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/buy-data" className="hover:text-foreground transition-colors">
                    Buy Data
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/transactions" className="hover:text-foreground transition-colors">
                    Transaction History
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: support@taranalink.ng</li>
                <li>Phone: +234 800 123 4567</li>
                <li>Address: Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TaranaLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
