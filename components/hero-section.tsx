import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Smartphone, Zap, Signal, Wifi, Clock, Star, Users, TrendingUp, Globe, Lock, Award } from 'lucide-react';

export default function HeroSection() {
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

        // Animate stats counter
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

        // Network rotation
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
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

                    {/* Left Content Section */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

                        {/* Status Badge with pulse */}
                        <div className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 shadow-lg">
                            <div className="relative">
                                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-emerald-300 font-medium">🚀 Fast and Reliable Telecom Platform</span>
                        </div>

                        {/* Main Headlines with gradient text */}
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight">
                                <span className="block text-white">Instant</span>
                                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Topup
                                </span>
                                <span className="block text-slate-300">Revolution</span>
                            </h1>

                            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                                Experience the future of mobile recharging. Lightning-fast transactions,
                                <span className="text-emerald-400 font-semibold"> unbeatable rates</span>, and
                                crystal-clear reliability for all Nigerian networks.
                            </p>
                        </div>

                        {/* Enhanced Key Benefits */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Zap, text: "Instant Delivery", color: "text-yellow-400" },
                                { icon: Globe, text: "All Networks", color: "text-blue-400" },
                                { icon: Lock, text: "Bank-Level Security", color: "text-green-400" },
                                { icon: Award, text: "Award Winning", color: "text-purple-400" }
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                                    <span className="text-white font-medium">{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-3 text-lg">
                                    Start Recharging
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>

                            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                                <span className="flex items-center gap-3 text-lg">
                                    <Shield className="w-5 h-5" />
                                    View Security
                                </span>
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full border-2 border-slate-800"></div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                                <span className="text-slate-300 ml-2">4.8/5 from 100+ reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Section */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

                        {/* Main Visual Container */}
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">

                            {/* Glowing border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>

                            {/* Phone Mockup */}
                            <div className="relative bg-slate-900 rounded-3xl p-3 mx-auto max-w-sm shadow-2xl">
                                <div className="bg-white rounded-2xl overflow-hidden">

                                    {/* Phone Header */}
                                    <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-5 text-white relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 animate-pulse"></div>
                                        <div className="relative flex items-center justify-between">
                                            <span className="font-bold text-lg">TaranaLink</span>
                                            <div className="flex items-center gap-2">
                                                <Signal className="w-4 h-4 animate-pulse" />
                                                <Wifi className="w-4 h-4" />
                                                <div className="w-6 h-3 bg-white/30 rounded-full flex items-center">
                                                    <div className="w-4 h-2 bg-white rounded-full ml-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Content */}
                                    <div className="p-6 space-y-6 bg-gradient-to-b from-slate-50 to-white">

                                        {/* Network Selection */}
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-slate-700">Select Network</label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {networks.map((network, index) => (
                                                    <div
                                                        key={network.name}
                                                        className={`p-4 rounded-xl text-center transition-all duration-500 transform ${index === currentNetwork
                                                                ? `bg-gradient-to-br ${network.color} text-white shadow-lg scale-105`
                                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                                            }`}
                                                    >
                                                        <span className="font-bold text-sm">{network.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Amount Input */}
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-slate-700">Amount</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 font-bold text-lg">₦</span>
                                                <input
                                                    type="text"
                                                    value="2,500"
                                                    readOnly
                                                    className="w-full pl-10 pr-4 py-4 border-2 border-emerald-200 rounded-xl bg-emerald-50 font-bold text-lg focus:border-emerald-400 transition-colors duration-300"
                                                />
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <TrendingUp className="w-5 h-5 text-green-500" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Buy Button */}
                                        <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-4 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                            <span className="flex items-center justify-center gap-3">
                                                <Zap className="w-5 h-5" />
                                                Buy Airtime Now
                                            </span>
                                        </button>

                                        {/* Quick Amount Buttons */}
                                        <div className="grid grid-cols-3 gap-2 pt-2">
                                            {['₦100', '₦500', '₦1000'].map((amount, index) => (
                                                <button key={index} className="py-2 px-3 bg-slate-100 hover:bg-emerald-100 rounded-lg text-sm font-medium transition-colors duration-200">
                                                    {amount}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Success Notification */}
                            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl animate-bounce">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5" />
                                    <div>
                                        <div className="font-bold text-sm">Recharge Complete!</div>
                                        <div className="text-xs opacity-90">In 2.3 seconds</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating User Testimonial */}
                            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-white/50 max-w-xs">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        A
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <div className="font-medium text-sm text-slate-700">{testimonials[currentNetwork]}</div>
                                        <div className="text-xs text-slate-500">Ahmed K.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Speed Indicator */}
                            <div className="absolute top-8 -left-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-2xl p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">Avg. Speed</div>
                                        <div className="text-2xl font-black">2.1s</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-1/4 right-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className={`text-center mt-20 space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Experience the <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Future</span>?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                        <div className="group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Smartphone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Buy Airtime</h3>
                            <p className="text-slate-300 text-sm">Instant recharge for all networks</p>
                        </div>

                        <div className="group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Buy Data</h3>
                            <p className="text-slate-300 text-sm">Affordable plans for everyone</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}