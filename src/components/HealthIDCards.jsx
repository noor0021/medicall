import { CreditCard, QrCode, Cpu } from 'lucide-react';

const HealthIDCards = () => {
    const healthCards = [
        {
            id: 1,
            name: 'Aadhaar Card',
            number: '1234 5678 9012',
            icon: CreditCard,
            gradient: 'from-mint-400 to-mint-600',
        },
        {
            id: 2,
            name: 'Ayushman Bharat',
            number: 'AB-9876-5432-1234',
            icon: CreditCard,
            gradient: 'from-blue-400 to-blue-600',
        },
    ];

    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold text-deep-black mb-4 px-6">Government Health IDs</h2>

            {/* Horizontal scroll container */}
            <div className="horizontal-scroll flex gap-4 overflow-x-auto px-6 pb-4">
                {healthCards.map((card) => (
                    <div
                        key={card.id}
                        className={`flex-shrink-0 w-80 bg-gradient-to-br ${card.gradient} rounded-card p-6 shadow-soft-lg text-white relative overflow-hidden`}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12" />

                        {/* Card content */}
                        <div className="relative z-10">
                            {/* Chip icon */}
                            <div className="mb-6">
                                <Cpu size={40} className="text-white opacity-90" />
                            </div>

                            {/* Card name */}
                            <h3 className="text-lg font-semibold mb-2">{card.name}</h3>

                            {/* Card number */}
                            <p className="text-2xl font-mono tracking-wider mb-6">
                                {card.number}
                            </p>

                            {/* QR Code placeholder */}
                            <div className="flex justify-end">
                                <div className="bg-white p-2 rounded-lg">
                                    <QrCode size={48} className="text-gray-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthIDCards;
