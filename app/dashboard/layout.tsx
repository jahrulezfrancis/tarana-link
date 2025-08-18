"use client"

import type React from "react"

import { AuthProvider } from "@/lib/auth"
import { AuthGuard } from "@/components/auth-guard"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen bg-background">
          <DashboardSidebar />
          <div className="lg:pl-64">
            <DashboardHeader />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </AuthGuard>
    </AuthProvider>
  )
}
