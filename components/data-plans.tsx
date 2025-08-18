import React from 'react';

interface Plan {
    provider: string;
    logo: string;
    color: string;
    darkColor: string;
    textColor: string;
    plans: { data: string; price: string; duration: string }[];
}

const planData: Plan[] = [
    {
        provider: 'MTN',
        logo: 'https://images.seeklogo.com/logo-png/28/1/mtn-logo-png_seeklogo-287921.png',
        color: 'bg-blue-600',
        darkColor: 'bg-blue-800',
        textColor: 'text-blue-700',
        plans: [
            { data: '1.0GB', price: '₦500', duration: '(1 day awoof)' },
            { data: '1.0GB', price: '₦750', duration: '(7–30 days)' },
            { data: '2.0GB', price: '₦770', duration: '(2 days awoof)' },
            { data: '1.0GB', price: '₦820', duration: '(1 week)' },
            { data: '1.5GB', price: '₦1000', duration: '(1 week)' },
            { data: '2.0GB', price: '₦1500', duration: '(7–30 days)' },
        ],
    },
    {
        provider: 'Airtel',
        logo: 'https://images.seeklogo.com/logo-png/28/1/airtel-logo-png_seeklogo-289636.png',
        color: 'bg-red-600',
        darkColor: 'bg-red-800',
        textColor: 'text-red-700',
        plans: [
            { data: '1.0GB', price: '₦400', duration: '(1 day awoof)' },
            { data: '4.0GB', price: '₦1000', duration: '(2 days awoof)' },
            { data: '7.0GB', price: '₦2300', duration: '(7 days awoof)' },
            { data: '10.0GB', price: '₦3500', duration: '(30 days awoof)' },
        ],
    },
    {
        provider: 'Glo',
        logo: 'https://images.seeklogo.com/logo-png/49/1/glo-limited-logo-png_seeklogo-491131.png',
        color: 'bg-green-600',
        darkColor: 'bg-green-800',
        textColor: 'text-green-700',
        plans: [
            { data: '1.0GB', price: '₦470', duration: '(30 days)' },
            { data: '2.0GB', price: '₦940', duration: '(30 days)' },
            { data: '3.0GB', price: '₦1410', duration: '(30 days)' },
            { data: '5.0GB', price: '₦2350', duration: '(30 days)' },
            { data: '10.0GB', price: '₦4700', duration: '(30 days)' },
        ],
    },
    {
        provider: '9Mobile',
        logo: 'https://images.seeklogo.com/logo-png/48/1/9mobile-logo-png_seeklogo-481168.png',
        color: 'bg-emerald-600',
        darkColor: 'bg-emerald-800',
        textColor: 'text-emerald-700',
        plans: [
            { data: '1.0GB', price: '₦400', duration: '(30 days gifting)' },
            { data: '2.0GB', price: '₦800', duration: '(30 days gifting)' },
            { data: '3.0GB', price: '₦1200', duration: '(30 days gifting)' },
            { data: '5.0GB', price: '₦2000', duration: '(30 days gifting)' },
        ],
    },
];

const DataPlans: React.FC = () => {
    return (
        <section id="data-prices" className="py-20 px-4 bg-muted/10 animate-fade-in">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                    Mobile Data Plans
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                    Latest data bundle prices across MTN, Airtel, Glo, and 9Mobile 📶
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {planData.map((plan) => (
                        <div
                            key={plan.provider}
                            className={`${plan.color} text-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col min-h-[400px]`}
                        >
                            <div className={`${plan.darkColor} flex justify-center py-6`}>
                                <img
                                    src={plan.logo}
                                    alt={plan.provider}
                                    className="w-16 h-16 rounded-full shadow-md"
                                />
                            </div>
                            <div className="p-6 text-left space-y-3 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-4 text-center">
                                    {plan.provider.toUpperCase()} PLAN
                                </h3>
                                <div className="flex-grow space-y-3 text-center">
                                    {plan.plans.map((item, index) => (
                                        <p key={index}>
                                            {item.data} — {item.price}{' '}
                                            <span className="text-xs">{item.duration}</span>
                                        </p>
                                    ))}
                                </div>
                                <button
                                    className={`mt-6 w-full bg-white ${plan.textColor} font-semibold py-2 rounded-md shadow hover:bg-gray-100`}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataPlans;