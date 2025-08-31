"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  CreditCard,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  AreaChart,
} from "recharts"

const slides = [
  // Slide 1: Cover + Intro
  {
    id: 1,
    title: "Lemly: Powering the Future of Live Commerce",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-balance">Lemly: Powering the Future of Live Commerce</h1>
          <h2 className="text-2xl text-muted-foreground text-balance">
            Commerce infrastructure with instant payouts, purpose-built for live personal shopping
          </h2>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg max-w-4xl">
          <p className="text-lg text-balance">
            Lemly combines Shopify-style commerce infrastructure with Uber Shop & Deliver–style instant payouts, built
            for the rise of live personal shopping.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <span className="font-semibold">Commerce Infrastructure</span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <span className="font-semibold">Instant Payouts</span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <span className="font-semibold">Live Shopping</span>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: Problem
  {
    id: 2,
    title: "The Problem: Live Personal Shopping is Chaos",
    content: (
      <div className="flex flex-col justify-center h-full space-y-12">
        <h1 className="text-5xl font-bold text-center text-balance">Today, live personal shopping is chaos</h1>

        <div className="grid grid-cols-2 gap-8">
          <Card className="p-8">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Fragmented Payments</h3>
              <p className="text-muted-foreground">
                Viewers are pushed to PayPal, CashApp, or bank transfers with no unified checkout → high drop-off
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Manual Order Tracking</h3>
              <p className="text-muted-foreground">
                Streamers use handwriting, calculators, and Google Forms after streams → error-prone and kills momentum
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">No Commerce Infrastructure</h3>
              <p className="text-muted-foreground">
                No system for product cards, order management, or client follow-up → poor experience, no scalability
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Delayed Payouts</h3>
              <p className="text-muted-foreground">
                Earnings stuck for days or weeks → streamers can't reinvest instantly
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },

  // Slide 3: Solution
  {
    id: 3,
    title: "The Solution: One Seamless Infrastructure",
    content: (
      <div className="flex flex-col justify-center h-full space-y-12">
        <h1 className="text-5xl font-bold text-center text-balance">
          Lemly fixes this with one seamless infrastructure
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <Card className="p-8 border-primary/20">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Instant Product Cards</h3>
              <p className="text-muted-foreground">Create in one tap during streams; no handwriting, no delays</p>
            </CardContent>
          </Card>

          <Card className="p-8 border-primary/20">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Smart Checkout</h3>
              <p className="text-muted-foreground">
                Unified bio-link (Apple/Google Pay, Visa/Mastercard) with 1-click flow
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-primary/20">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Integrated Wallet + Cards</h3>
              <p className="text-muted-foreground">
                Instant payouts, instant spend (virtual/physical Visa with controls)
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-primary/20">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Built-in Order Management</h3>
              <p className="text-muted-foreground">Track orders, follow up with clients, and scale like e-commerce</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },

  // Slide 4: Market Growth
  {
    id: 4,
    title: "Market Growth: Global vs Europe 2024-2030",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Explosive Growth in Live Commerce Market</h1>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Global Market</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { year: "2024", value: 128.42 },
                    { year: "2025", value: 180 },
                    { year: "2026", value: 320 },
                    { year: "2027", value: 580 },
                    { year: "2028", value: 1100 },
                    { year: "2029", value: 1800 },
                    { year: "2030", value: 2470 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}B`, "Market Size"]} />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">$128.42B → $2.47T</p>
              <p className="text-muted-foreground">CAGR ~40%</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Europe Market</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { year: "2024", value: 1.497 },
                    { year: "2025", value: 1.9 },
                    { year: "2026", value: 2.4 },
                    { year: "2027", value: 3.1 },
                    { year: "2028", value: 3.9 },
                    { year: "2029", value: 5.0 },
                    { year: "2030", value: 6.216 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}B`, "Market Size"]} />
                  <Line type="monotone" dataKey="value" stroke="#dc2626" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">$1.497B → $6.216B</p>
              <p className="text-muted-foreground">CAGR 27.4%</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 5: Virtual Personal Shopping
  {
    id: 5,
    title: "Sub-segment: Virtual Personal Shopping",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Virtual Personal Shopping is Exploding</h1>

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Case Study: Rita Colon (NBC)</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">12k TikTok followers</span>
                </p>
                <p>
                  <span className="font-semibold">~$660/day</span> as virtual personal shopper
                </p>
                <p className="text-muted-foreground">Featured on NBC for her success in live personal shopping</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">UK TikTok Shop Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">+131%</p>
                  <p className="text-sm text-muted-foreground">User Growth</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">+180%</p>
                  <p className="text-sm text-muted-foreground">Revenue Growth</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">200k</p>
                  <p className="text-sm text-muted-foreground">Active Sellers</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">6k</p>
                  <p className="text-sm text-muted-foreground">Live Sessions/Day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">France TikTok Shop Launch</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Launched:</span> March 2025
                </p>
                <p>
                  <span className="font-semibold">Target Users:</span> 25.1M users
                </p>
                <p>
                  <span className="font-semibold">Year 1 GMV Target:</span> €400-600M
                </p>
              </div>
            </div>

            <div className="h-48">
              <img
                src="/professional-woman-shopping-on-phone-with-tiktok-i.png"
                alt="Virtual personal shopping illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 6: Consumer Demographics
  {
    id: 6,
    title: "Consumer Demographics: TikTok as Shopping Channel",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Gen Z & Millennials Drive TikTok Commerce</h1>

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">TikTok as Primary Shopping Channel by Age</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { age: "18-24", percentage: 42 },
                    { age: "25-34", percentage: 32 },
                    { age: "35-44", percentage: 18 },
                    { age: "45-54", percentage: 8 },
                    { age: "55+", percentage: 3 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, "Usage"]} />
                  <Bar dataKey="percentage" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-lg font-semibold text-center">
                37% of 18-34 year-olds use TikTok as their primary shopping channel
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-64">
              <img
                src="/young-diverse-people-shopping-on-mobile-phones-wit.png"
                alt="Young consumers shopping on TikTok"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Consumer Behaviors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Live shopping sessions drive impulse purchases</li>
                <li>• Trust influencers and personal shoppers over brands</li>
                <li>• Expect instant, seamless checkout experiences</li>
                <li>• Value personalized product recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 7: Business Model
  {
    id: 7,
    title: "Business Model: Multiple Revenue Streams",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Diversified Revenue Model</h1>

        <div className="grid grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">GMV Commission</h3>
              <p className="text-3xl font-bold text-primary">5%</p>
              <p className="text-muted-foreground">Of all transactions processed through the platform</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">SaaS Subscription</h3>
              <p className="text-3xl font-bold text-primary">€20</p>
              <p className="text-muted-foreground">Per month per active streamer</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Card Interchange</h3>
              <p className="text-3xl font-bold text-primary">+</p>
              <p className="text-muted-foreground">Additional revenue from card transactions (upside)</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Revenue Flow</h2>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold">Streamers</p>
              <p className="text-sm text-muted-foreground">Create & sell</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <p className="font-semibold">Lemly Platform</p>
              <p className="text-sm text-muted-foreground">Process & manage</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <p className="font-semibold">Consumers</p>
              <p className="text-sm text-muted-foreground">Buy & pay</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 8: 3-Year Projections
  {
    id: 8,
    title: "3-Year Growth Projections",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Aggressive but Achievable Growth</h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Streamers & Cards Growth</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={[
                    { year: "Y0", streamers: 50, cards: 50 },
                    { year: "Y1", streamers: 300, cards: 300 },
                    { year: "Y2", streamers: 1000, cards: 1000 },
                    { year: "Y3", streamers: 2500, cards: 2500 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="streamers" fill="#2563eb" name="Active Streamers" />
                  <Line type="monotone" dataKey="cards" stroke="#dc2626" strokeWidth={3} name="Cards Issued" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Monthly GMV Growth</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { year: "Y0", gmv: 0.25 },
                    { year: "Y1", gmv: 0.75 },
                    { year: "Y2", gmv: 5 },
                    { year: "Y3", gmv: 13.5 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`€${value}M`, "Monthly GMV"]} />
                  <Area type="monotone" dataKey="gmv" stroke="#16a34a" fill="#16a34a" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <CardContent>
              <p className="text-2xl font-bold text-primary">50 → 2,500</p>
              <p className="text-sm text-muted-foreground">Active Streamers</p>
            </CardContent>
          </Card>
          <Card className="p-4 text-center">
            <CardContent>
              <p className="text-2xl font-bold text-primary">€250k → €13.5M</p>
              <p className="text-sm text-muted-foreground">Monthly GMV</p>
            </CardContent>
          </Card>
          <Card className="p-4 text-center">
            <CardContent>
              <p className="text-2xl font-bold text-primary">€50-70</p>
              <p className="text-sm text-muted-foreground">Average Basket</p>
            </CardContent>
          </Card>
          <Card className="p-4 text-center">
            <CardContent>
              <p className="text-2xl font-bold text-primary">100-150</p>
              <p className="text-sm text-muted-foreground">Purchases/Month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },

  // Slide 9: Transaction Flow
  {
    id: 9,
    title: "Transaction Flow: End-to-End Infrastructure",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Seamless Transaction Flow</h1>

        <div className="bg-muted/50 p-8 rounded-lg">
          <div className="flex items-center justify-between space-x-4">
            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-semibold">Buyer</h3>
              <p className="text-sm text-muted-foreground">Watches live stream</p>
              <p className="text-sm text-muted-foreground">Clicks bio-link</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground" />

            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-semibold">Smart Checkout</h3>
              <p className="text-sm text-muted-foreground">Apple/Google Pay</p>
              <p className="text-sm text-muted-foreground">Visa/Mastercard</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground" />

            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold">Acquiring</h3>
              <p className="text-sm text-muted-foreground">Payment processing</p>
              <p className="text-sm text-muted-foreground">Risk management</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground" />

            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-semibold">Lemly Wallet</h3>
              <p className="text-sm text-muted-foreground">Instant settlement</p>
              <p className="text-sm text-muted-foreground">Real-time balance</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground" />

            <div className="text-center flex-1">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="font-semibold">Visa Card</h3>
              <p className="text-sm text-muted-foreground">Instant spend</p>
              <p className="text-sm text-muted-foreground">MCC controls</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <Card className="p-4">
            <CardContent className="text-center">
              <h4 className="font-semibold mb-2">Payment Methods</h4>
              <p className="text-sm text-muted-foreground">Apple Pay, Google Pay, Visa, Mastercard</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="text-center">
              <h4 className="font-semibold mb-2">Settlement Speed</h4>
              <p className="text-sm text-muted-foreground">Instant to Lemly wallet</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="text-center">
              <h4 className="font-semibold mb-2">Card Controls</h4>
              <p className="text-sm text-muted-foreground">MCC, geo, and limit controls</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },

  // Slide 10: Compliance
  {
    id: 10,
    title: "Compliance: EPCOT vs KYC+KYB",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Regulatory Compliance Strategy</h1>

        <div className="grid grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">EPCOT Framework</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Electronic Payment Collection & Onward Transmission</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Simplified regulatory pathway</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Faster time to market</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Lower compliance costs</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Ideal for payment facilitation and instant settlement use cases
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold">KYC + KYB</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Know Your Customer verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Know Your Business validation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Anti-money laundering (AML)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Risk assessment protocols</span>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Comprehensive identity verification for all platform users
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Compliance Timeline</h3>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                1
              </div>
              <p className="font-semibold">EPCOT Application</p>
              <p className="text-sm text-muted-foreground">Q4 2025</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                2
              </div>
              <p className="font-semibold">KYC/KYB Integration</p>
              <p className="text-sm text-muted-foreground">Q1 2026</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                3
              </div>
              <p className="font-semibold">Full Compliance</p>
              <p className="text-sm text-muted-foreground">Q2 2026</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: Financial Projections
  {
    id: 11,
    title: "Financial Projections: 3-Year Revenue Forecast",
    content: (
      <div className="flex flex-col justify-center h-full space-y-6">
        <h1 className="text-4xl font-bold text-center text-balance">Conservative Growth, Strong Unit Economics</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-muted">
                <th className="border border-gray-300 p-3 text-left">Year</th>
                <th className="border border-gray-300 p-3 text-center">Active Streamers</th>
                <th className="border border-gray-300 p-3 text-center">Cards Issued</th>
                <th className="border border-gray-300 p-3 text-center">Avg. Monthly GMV (€)</th>
                <th className="border border-gray-300 p-3 text-center">Revenue (5% GMV)</th>
                <th className="border border-gray-300 p-3 text-center">SaaS Revenue (€20/streamer)</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Total Revenue/Month</th>
                <th className="border border-gray-300 p-3 text-center font-bold">Total Revenue/Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Y0 (Nov 2025 launch)</td>
                <td className="border border-gray-300 p-3 text-center">50</td>
                <td className="border border-gray-300 p-3 text-center">50</td>
                <td className="border border-gray-300 p-3 text-center">€250,000</td>
                <td className="border border-gray-300 p-3 text-center">€12,500</td>
                <td className="border border-gray-300 p-3 text-center">€1,000</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€13,500</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€162,000</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-gray-300 p-3 font-semibold">Y1 (end 2026)</td>
                <td className="border border-gray-300 p-3 text-center">300</td>
                <td className="border border-gray-300 p-3 text-center">300</td>
                <td className="border border-gray-300 p-3 text-center">€750,000</td>
                <td className="border border-gray-300 p-3 text-center">€37,500</td>
                <td className="border border-gray-300 p-3 text-center">€6,000</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€43,500</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€522,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">Y2 (end 2027)</td>
                <td className="border border-gray-300 p-3 text-center">1,000</td>
                <td className="border border-gray-300 p-3 text-center">1,000</td>
                <td className="border border-gray-300 p-3 text-center">€5,000,000</td>
                <td className="border border-gray-300 p-3 text-center">€250,000</td>
                <td className="border border-gray-300 p-3 text-center">€20,000</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€270,000</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€3,240,000</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-gray-300 p-3 font-semibold">Y3 (end 2028)</td>
                <td className="border border-gray-300 p-3 text-center">2,500</td>
                <td className="border border-gray-300 p-3 text-center">2,500</td>
                <td className="border border-gray-300 p-3 text-center">€12M–15M</td>
                <td className="border border-gray-300 p-3 text-center">€600k–750k</td>
                <td className="border border-gray-300 p-3 text-center">€50,000</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€650k–800k</td>
                <td className="border border-gray-300 p-3 text-center font-bold text-primary">€7.8M–9.6M</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6 border-primary/20">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold mb-3">Annual Revenue Breakdown (Year 3)</h3>
              <p className="text-3xl font-bold text-primary mb-2">€8.04M</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>€7.2M (5% GMV)</p>
                <p>€0.6M SaaS</p>
                <p>+ Interchange upside</p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 border-primary/20">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold mb-3">Key Growth Drivers</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Avg Basket:</span> €50–70
                </p>
                <p>
                  <span className="font-semibold">Purchases:</span> 100–150 per streamer/month
                </p>
                <p>
                  <span className="font-semibold">Revenue per streamer:</span> ~€268/month
                </p>
                <p>
                  <span className="font-semibold">Market penetration:</span> Conservative
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },

  // Slide 12: Roadmap
  {
    id: 12,
    title: "Roadmap: Launch to Scale",
    content: (
      <div className="flex flex-col justify-center h-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-balance">Strategic Roadmap 2025-2028</h1>

        <div className="space-y-8">
          <div className="grid grid-cols-4 gap-6">
            <Card className="p-6 border-l-4 border-l-blue-500">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">Nov 2025 Launch</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• UK market entry</li>
                  <li>• 50 beta streamers</li>
                  <li>• Core platform MVP</li>
                  <li>• EPCOT application</li>
                  <li>• Partner integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-500">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">2026 Growth</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Scale to 300 streamers</li>
                  <li>• France market entry</li>
                  <li>• KYC/KYB integration</li>
                  <li>• Advanced analytics</li>
                  <li>• Mobile app launch</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">2027 Expansion</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1,000 active streamers</li>
                  <li>• Germany & Italy launch</li>
                  <li>• AI-powered features</li>
                  <li>• Marketplace integration</li>
                  <li>• Enterprise partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-500">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-lg font-semibold">2028 Scaling</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 2,500+ streamers</li>
                  <li>• Pan-European presence</li>
                  <li>• €8M+ annual revenue</li>
                  <li>• Series A funding</li>
                  <li>• Global expansion prep</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Key Milestones</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Revenue Growth</p>
                <p className="text-sm text-muted-foreground">€162k → €8M+ ARR</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">User Growth</p>
                <p className="text-sm text-muted-foreground">50 → 2,500 streamers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Market Expansion</p>
                <p className="text-sm text-muted-foreground">UK → Pan-European</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 13: Next Steps
  {
    id: 13,
    title: "Next Steps: Partnership & Launch",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-balance">Ready to Partner with Lemly?</h1>

        <p className="text-xl text-muted-foreground max-w-3xl text-balance">
          Join us in revolutionizing live commerce with instant payouts and seamless infrastructure
        </p>

        <div className="grid grid-cols-3 gap-8 my-12">
          <Card className="p-6 text-center">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Partner Call</h3>
              <p className="text-muted-foreground">Schedule technical discussion with our team</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">API Alignment</h3>
              <p className="text-muted-foreground">Integrate with your existing infrastructure</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Pilot Launch</h3>
              <p className="text-muted-foreground">Start with 50 beta streamers in Q4 2025</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/10 p-8 rounded-lg max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Why Partner with Lemly Now?</h2>
          <div className="grid grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>First-mover advantage in live commerce</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Proven market demand and growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Strong unit economics from day one</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Experienced fintech team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Clear regulatory pathway</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Scalable technology platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button size="lg" className="px-8 py-3 text-lg">
            Schedule Partnership Call
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
            Download Full Deck
          </Button>
        </div>
      </div>
    ),
  },
]

export default function LemlyPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Lemly Pitch Deck</h1>
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="pt-16 h-screen">
        <div className="h-full p-8">
          <div className="h-full bg-white rounded-lg shadow-lg border">{slides[currentSlide].content}</div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 bg-background/95 backdrop-blur-sm rounded-full px-4 py-2 border">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="sr-only">Press left/right arrow keys to navigate slides</div>
    </div>
  )
}
