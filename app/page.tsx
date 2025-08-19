"use client"

import React, { useEffect, useState } from 'react';
import { Smartphone, Zap, Shield, Users, Star, ArrowRight, CheckCircle, Signal, Wifi, Clock, Globe, Lock, Award, TrendingUp, Eye, Heart, MessageCircle } from 'lucide-react';
import DataPlans from '@/components/data-plans';
import HeroSection from '@/components/hero-section';

export default function EnhancedHomePage() {
  const [statsCount, setStatsCount] = useState({ users: 0, transactions: 0, uptime: 0 });
  const [currentNetwork, setCurrentNetwork] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const networks = [
    { name: 'MTN', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Airtel', color: 'from-red-500 to-red-600' },
    { name: 'Glo', color: 'from-green-500 to-green-600' },
    { name: '9Mobile', color: 'from-blue-500 to-blue-600' }
  ];

  const testimonials = [
    "Lightning fast transactions!",
    "Best rates in Nigeria",
    "Never failed me once",
    "Super reliable service"
  ];

  useEffect(() => {
    setIsVisible(true);

    const animateStats = () => {
      const targets = { users: 75000, transactions: 3500000, uptime: 99.9 };
      const duration = 3000;
      const steps = 60;
      const increment = {
        users: targets.users / steps,
        transactions: targets.transactions / steps,
        uptime: targets.uptime / steps
      };

      let current = { users: 0, transactions: 0, uptime: 0 };
      let step = 0;

      const timer = setInterval(() => {
        if (step < steps) {
          current.users += increment.users;
          current.transactions += increment.transactions;
          current.uptime += increment.uptime;
          setStatsCount({
            users: Math.floor(current.users),
            transactions: Math.floor(current.transactions),
            uptime: Math.min(current.uptime, 99.9)
          });
          step++;
        } else {
          clearInterval(timer);
        }
      }, duration / steps);
    };

    const networkTimer = setInterval(() => {
      setCurrentNetwork(prev => (prev + 1) % networks.length);
    }, 2500);

    const timeout = setTimeout(animateStats, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(networkTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">

      {/* Enhanced Header */}
      <header className="relative bg-slate-900/95 backdrop-blur-xl border-b border-white/10 top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white">TaranaLink</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium hover:scale-105">Features</a>
            <a href="#networks" className="text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium hover:scale-105">Networks</a>
            <a href="#testimonials" className="text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium hover:scale-105">Reviews</a>
            <a href="#support" className="text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium hover:scale-105">Support</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              Login
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* Enhanced Trust Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powering <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">All Networks</span>
            </h2>
            <p className="text-slate-300 text-xl">Seamless integration with every major Nigerian carrier</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'MTN', gradient: 'from-yellow-400 to-yellow-600', delay: '0s' },
              { name: 'Airtel', gradient: 'from-red-500 to-red-600', delay: '0.2s' },
              { name: 'Glo', gradient: 'from-green-500 to-green-600', delay: '0.4s' },
              { name: '9Mobile', gradient: 'from-blue-500 to-blue-600', delay: '0.6s' }
            ].map((network, index) => (
              <div
                key={network.name}
                className="group text-center"
                style={{ animationDelay: network.delay }}
              >
                <div className={`relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${network.gradient} rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center h-full">
                    <span className="font-black text-white text-lg">{network.name}</span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${network.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                </div>
                <div className="text-slate-400 font-medium group-hover:text-white transition-colors duration-300">
                  {network.name === '9Mobile' ? '9Mobile' : `${network.name} Nigeria`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">TaranaLink?</span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the cutting-edge of mobile recharging technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Average transaction time of 2.1 seconds. Experience instant gratification with every recharge.",
                gradient: "from-yellow-400 to-orange-500",
                bgGradient: "from-yellow-500/20 to-orange-500/20",
                delay: "0s"
              },
              {
                icon: Shield,
                title: "Military Grade Security",
                description: "Bank-level encryption and advanced fraud protection keep your transactions 100% secure.",
                gradient: "from-emerald-400 to-green-500",
                bgGradient: "from-emerald-500/20 to-green-500/20",
                delay: "0.2s"
              },
              {
                icon: Users,
                title: "24/7 Premium Support",
                description: "Dedicated support team ready to assist you anytime. Real humans, real solutions.",
                gradient: "from-blue-400 to-purple-500",
                bgGradient: "from-blue-500/20 to-purple-500/20",
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: feature.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Data Plans Section */}
      <section >
        <DataPlans />
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Love Stories
              </span> From Our Users
            </h2>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              Join 75,000+ satisfied customers who trust TaranaLink
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                rating: 5,
                text: "TaranaLink has completely transformed how I manage my phone credit. The speed is incredible - I get my airtime in literally 2 seconds!",
                name: "Adebayo Ogundimu",
                location: "Lagos, Nigeria",
                avatar: "AO",
                gradient: "from-emerald-500 to-blue-600",
                delay: "0s"
              },
              {
                rating: 5,
                text: "I've been using TaranaLink for over a year now. Never had a single failed transaction. The reliability is unmatched in Nigeria!",
                name: "Fatima Ibrahim",
                location: "Abuja, Nigeria",
                avatar: "FI",
                gradient: "from-purple-500 to-pink-600",
                delay: "0.2s"
              },
              {
                rating: 5,
                text: "Best rates, instant delivery, and amazing customer support. TaranaLink is hands down the best recharge platform I've ever used.",
                name: "Chidi Eze",
                location: "Port Harcourt, Nigeria",
                avatar: "CE",
                gradient: "from-blue-500 to-purple-600",
                delay: "0.4s"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-lg leading-relaxed mb-8 group-hover:text-slate-100 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">4.9/5</div>
              <div className="text-slate-400">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10k+</div>
              <div className="text-slate-400">Reviews</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Ready to Experience the <span className="text-yellow-300">Future?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Nigerians who have already revolutionized their mobile experience
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-12 py-6 bg-white text-slate-900 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-4">
                Start Recharging Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            <button className="group px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl font-black text-xl text-white hover:bg-white/20 transition-all duration-300">
              <span className="flex items-center gap-4">
                <Eye className="w-6 h-6" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: "2.1s Average Speed" },
              { icon: Shield, text: "Bank-Level Security" },
              { icon: Award, text: "Award Winning" },
              { icon: Heart, text: "99.9% Success Rate" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-white" />
                <span className="text-white font-bold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative bg-slate-900 border-t border-white/10 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">

            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-black text-white">TaranaLink</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Nigeria's most trusted and fastest mobile recharge platform. Powering connections across the nation.
              </p>

              {/* Social Stats */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">75k+</div>
                  <div className="text-slate-500 text-sm">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-slate-500 text-sm">Uptime</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-black text-white text-xl mb-6">Services</h3>
              <ul className="space-y-4">
                {[
                  'Buy Airtime',
                  'Buy Data Plans',
                  'Transaction History',
                  'Bulk Purchases',
                  'API Integration'
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-black text-white text-xl mb-6">Support</h3>
              <ul className="space-y-4">
                {[
                  'Help Center',
                  'Contact Support',
                  'FAQ',
                  'Security',
                  'System Status'
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-black text-white text-xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Email</div>
                    <div>support@taranalink.ng</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Phone</div>
                    <div>+234 800 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Location</div>
                    <div>Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-center md:text-left">
              <p>&copy; 2024 TaranaLink. All rights reserved. Powering Nigeria's mobile future.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}