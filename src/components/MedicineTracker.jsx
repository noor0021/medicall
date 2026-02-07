import { useState } from 'react';
import { Pill, Check } from 'lucide-react';

const MedicineTracker = () => {
    const [medications] = useState([
        { id: 1, name: 'Aspirin', time: '8:00 AM', taken: true },
        { id: 2, name: 'Vitamin D', time: '8:00 AM', taken: true },
        { id: 3, name: 'Metformin', time: '2:00 PM', taken: false },
        { id: 4, name: 'Lisinopril', time: '8:00 PM', taken: false },
    ]);

    // Calculate completion percentage
    const takenCount = medications.filter((med) => med.taken).length;
    const completionPercentage = (takenCount / medications.length) * 100;

    return (
        <div className="px-6 mb-24">
            <h2 className="text-xl font-bold text-deep-black mb-4">Today's Medication</h2>

            <div className="bg-white rounded-card shadow-soft-lg p-6">
                {/* Medication list */}
                <div className="space-y-4 mb-6">
                    {medications.map((med) => (
                        <div
                            key={med.id}
                            className={`flex items-center justify-between p-4 rounded-card border-2 transition-all ${med.taken
                                    ? 'bg-mint-50 border-mint-300'
                                    : 'bg-gray-50 border-gray-200'
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                {/* Pill icon */}
                                <div
                                    className={`p-2 rounded-full ${med.taken ? 'bg-mint-500' : 'bg-gray-300'
                                        }`}
                                >
                                    <Pill size={24} className="text-white" />
                                </div>

                                {/* Medication info */}
                                <div>
                                    <h4 className="font-semibold text-deep-black">{med.name}</h4>
                                    <p className="text-sm text-gray-600">{med.time}</p>
                                </div>
                            </div>

                            {/* Checkmark */}
                            {med.taken && (
                                <div className="bg-mint-500 rounded-full p-1">
                                    <Check size={20} className="text-white" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Course completion section */}
                <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-deep-black">Course Completion</span>
                        <span className="font-bold text-mint-600">{completionPercentage.toFixed(0)}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-mint-400 to-mint-600 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${completionPercentage}%` }}
                            role="progressbar"
                            aria-valuenow={completionPercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        {takenCount} of {medications.length} medications taken today
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MedicineTracker;
