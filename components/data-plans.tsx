import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Star, ArrowRight, CheckCircle, Wifi, TrendingUp, Crown, Gift } from 'lucide-react';

interface Plan {
    provider: string;
    logo: string;
    color: string;
    darkColor: string;
    textColor: string;
    gradient: string;
    bgGradient: string;
    accent: string;
    plans: { data: string; price: string; duration: string; popular?: boolean; badge?: string }[];
}

const planData: Plan[] = [
    {
        provider: 'MTN',
        logo: 'M',
        color: 'bg-yellow-500',
        darkColor: 'bg-yellow-600',
        textColor: 'text-yellow-700',
        gradient: 'from-yellow-400 to-yellow-600',
        bgGradient: 'from-yellow-500/20 to-orange-500/20',
        accent: 'yellow',
        plans: [
            { data: '1.0GB', price: '₦500', duration: '1 day awoof', badge: 'Popular' },
            { data: '1.0GB', price: '₦750', duration: '7–30 days' },
            { data: '2.0GB', price: '₦770', duration: '2 days awoof', popular: true },
            { data: '1.0GB', price: '₦820', duration: '1 week' },
            { data: '1.5GB', price: '₦1000', duration: '1 week' },
            { data: '2.0GB', price: '₦1500', duration: '7–30 days' },
        ],
    },
    {
        provider: 'Airtel',
        logo: 'A',
        color: 'bg-red-500',
        darkColor: 'bg-red-600',
        textColor: 'text-red-700',
        gradient: 'from-red-500 to-red-600',
        bgGradient: 'from-red-500/20 to-pink-500/20',
        accent: 'red',
        plans: [
            { data: '1.0GB', price: '₦400', duration: '1 day awoof', badge: 'Best Value' },
            { data: '4.0GB', price: '₦1000', duration: '2 days awoof', popular: true },
            { data: '7.0GB', price: '₦2300', duration: '7 days awoof' },
            { data: '10.0GB', price: '₦3500', duration: '30 days awoof' },
        ],
    },
    {
        provider: 'Glo',
        logo: 'G',
        color: 'bg-green-500',
        darkColor: 'bg-green-600',
        textColor: 'text-green-700',
        gradient: 'from-green-500 to-green-600',
        bgGradient: 'from-green-500/20 to-emerald-500/20',
        accent: 'green',
        plans: [
            { data: '1.0GB', price: '₦470', duration: '30 days' },
            { data: '2.0GB', price: '₦940', duration: '30 days', popular: true },
            { data: '3.0GB', price: '₦1410', duration: '30 days' },
            { data: '5.0GB', price: '₦2350', duration: '30 days', badge: 'Long Term' },
            { data: '10.0GB', price: '₦4700', duration: '30 days' },
        ],
    },
    {
        provider: '9Mobile',
        logo: '9',
        color: 'bg-blue-500',
        darkColor: 'bg-blue-600',
        textColor: 'text-blue-700',
        gradient: 'from-blue-500 to-blue-600',
        bgGradient: 'from-blue-500/20 to-purple-500/20',
        accent: 'blue',
        plans: [
            { data: '1.0GB', price: '₦400', duration: '30 days gifting' },
            { data: '2.0GB', price: '₦800', duration: '30 days gifting' },
            { data: '3.0GB', price: '₦1200', duration: '30 days gifting', popular: true },
            { data: '5.0GB', price: '₦2000', duration: '30 days gifting', badge: 'Gift Ready' },
        ],
    },
];

const DataPlans: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const getAccentColor = (accent: string) => {
        const colors = {
            yellow: 'text-yellow-400',
            red: 'text-red-400',
            green: 'text-green-400',
            blue: 'text-blue-400'
        };
        return colors[accent as keyof typeof colors] || 'text-blue-400';
    };

    const getBadgeColor = (accent: string) => {
        const colors = {
            yellow: 'bg-yellow-400 text-yellow-900',
            red: 'bg-red-400 text-red-900',
            green: 'bg-green-400 text-green-900',
            blue: 'bg-blue-400 text-blue-900'
        };
        return colors[accent as keyof typeof colors] || 'bg-blue-400 text-blue-900';
    };

    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
            <div className="relative container mx-auto px-4">
                {/* Header Section */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 shadow-lg mb-6">
                        <Wifi className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300 font-medium">Data Bundle Pricing</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Premium Data Plans
                        </span>
                    </h2>
                    <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Unbeatable rates across all major Nigerian networks. Stay connected with the best deals.
                    </p>
                </div>
                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto grid-rows-1">
                    {planData.map((plan, planIndex) => (
                        <div
                            key={plan.provider}
                            className={`group relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ animationDelay: `${planIndex * 0.2}s` }}
                        >
                            {/* Plan Card */}
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-visible hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex flex-col">
                                {/* Gradient Background Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                {/* Header */}
                                <div className="relative">
                                    <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
                                        {/* Logo */}
                                        <div className="relative w-20 h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl font-black text-white">{plan.logo}</span>
                                        </div>
                                        {/* Provider Name */}
                                        <h3 className="text-2xl font-black text-white mb-2">
                                            {plan.provider}
                                        </h3>
                                        <div className="text-white/80 text-sm font-medium">
                                            Premium Data Plans
                                        </div>
                                    </div>
                                    {/* Network Status Indicator */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            Network Active
                                        </div>
                                    </div>
                                </div>
                                {/* Plans List */}
                                <div className="relative p-6 pt-8 flex-1 flex flex-col">
                                    <div className="space-y-4 flex-1">
                                        {plan.plans.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`group/item relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                                                    item.popular
                                                        ? `border-${plan.accent}-400 bg-gradient-to-r ${plan.gradient}/10`
                                                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                                                }`}
                                                onClick={() => setSelectedPlan(`${plan.provider}-${index}`)}
                                            >
                                                {/* Popular Badge */}
                                                {item.popular && (
                                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                        <Crown className="w-3 h-3 inline mr-1" />
                                                        Popular
                                                    </div>
                                                )}
                                                {/* Custom Badge */}
                                                {item.badge && !item.popular && (
                                                    <div className={`absolute -top-2 -right-2 ${getBadgeColor(plan.accent)} px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                                        {item.badge === 'Gift Ready' && <Gift className="w-3 h-3 inline mr-1" />}
                                                        {item.badge === 'Best Value' && <Star className="w-3 h-3 inline mr-1" />}
                                                        {item.badge === 'Long Term' && <TrendingUp className="w-3 h-3 inline mr-1" />}
                                                        {item.badge}
                                                    </div>
                                                )}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="text-white font-bold text-lg">
                                                            {item.data}
                                                        </div>
                                                        <div className="text-slate-400 text-sm">
                                                            {item.duration}
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className={`${getAccentColor(plan.accent)} font-black text-xl`}>
                                                            {item.price}
                                                        </div>
                                                        <div className="text-slate-500 text-xs">
                                                            Best Rate
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Selection Indicator */}
                                                {selectedPlan === `${plan.provider}-${index}` && (
                                                    <div className="absolute inset-0 border-2 border-emerald-400 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                                                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Buy Button */}
                                <div className="relative p-6 pt-4 mt-auto">
                                    <button
                                        className={`group/btn w-full bg-gradient-to-r ${plan.gradient} hover:from-white hover:to-slate-100 text-white hover:text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
                                        onClick={() => console.log(`Selected ${plan.provider} plan`)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 group-hover/btn:from-white/100 group-hover/btn:to-white/80 transition-all duration-300"></div>
                                        <span className="relative flex items-center justify-center gap-3 text-lg">
                                            <Zap className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                                            Buy {plan.provider} Data
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400/50 to-blue-500/50 rounded-full animate-ping"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400/50 to-pink-500/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                        </div>
                    ))}
                </div>
                {/* Bottom CTA Section */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Need a Custom Plan?
                        </h3>
                        <p className="text-slate-300 text-lg mb-6">
                            Contact our team for bulk purchases and enterprise solutions
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <span className="flex items-center gap-3">
                                    <Smartphone className="w-5 h-5" />
                                    Contact Sales
                                </span>
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300">
                                <span className="flex items-center gap-3">
                                    <Wifi className="w-5 h-5" />
                                    View All Plans
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataPlans;