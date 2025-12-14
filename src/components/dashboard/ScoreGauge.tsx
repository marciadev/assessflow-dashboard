import { getScoreColors } from "@/utils/utils";

interface ScoreGaugeProps {
    score: number;
    scoreInterpretation: string;
}

function ScoreGauge({ score, scoreInterpretation }: ScoreGaugeProps) {
    const scoreColors = getScoreColors(score);

    return (
        <div className="mb-8">
            <h4 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">
                Overall Score
            </h4>
            <div className="flex flex-col items-center py-6 bg-[var(--color-gray-50)] rounded-lg">
                <div className="relative h-20 mb-4 z-0">
                    <svg viewBox="0 -5 200 110" className="w-full h-full">
                        <path
                            d="M 180 90 A 80 80 0 0 0 20 90"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="24"
                            strokeLinecap="butt"
                        />
                        <path
                            d="M 180 90 A 80 80 0 0 0 20 90"
                            fill="none"
                            stroke="url(#scoreGradient)"
                            strokeWidth="24"
                            strokeLinecap="butt"
                            strokeDasharray={`${(score / 100) * 251.2} 251.2`}
                        />
                        <defs>
                            <linearGradient
                                id="scoreGradient"
                                x1="100%"
                                y1="0%"
                                x2="0%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="var(--color-success-500)" />
                                <stop offset="50%" stopColor="var(--color-warning-500)" />
                                <stop offset="100%" stopColor="var(--color-error-500)" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center pt-6">
                        <span className="text-4xl font-bold text-gray-900">
                            {score}
                        </span>
                    </div>
                </div>
                <div className="text-sm text-gray-600">Composite Score</div>
                <div className={`text-base font-semibold mt-1 ${scoreColors?.text}`}>
                    {scoreInterpretation}
                </div>
            </div>
        </div>
    );
}

export default ScoreGauge;