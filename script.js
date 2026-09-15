// ==========================================
// ⬇️ منطقة المنهج (Syllabus) ⬇️
// عدد الأقفال على الباب يتم حسابه تلقائياً بناءً على عدد الأسئلة في الدرس.5
// ==========================================

// ==========================================
// ⬇️ منطقة المنهج (Syllabus) المحدثة ⬇️
// ==========================================

{
    chapter: "Grammar: Auxiliary Verbs",
    branches: [
        {
            title: "1. Verb to Be",
            lesson: "📜 Grammar Rules (Be):\n• Present: I am | He/She/It is | You/We/They are.\n• Past: I/He/She/It was | You/We/They were.",
            questions: [
                { q: "She ______ a talented doctor.", options: ["is", "are", "am"], a: "is" },
                { q: "They ______ playing football right now.", options: ["am", "are", "is"], a: "are" },
                { q: "Yesterday, I ______ very tired after work.", options: ["was", "were", "are"], a: "was" },
                { q: "We ______ late for the movie last night.", options: ["was", "were", "is"], a: "were" }
            ]
        },
        {
            title: "2. Verb to Do",
            lesson: "📜 Grammar Rules (Do):\n• Present: I/You/We/They do | He/She/It does.\n• Past: Did (for all pronouns).",
            questions: [
                { q: "______ he like chocolate ice cream?", options: ["Do", "Does", "Did"], a: "Does" },
                { q: "They ______ work on Sundays.", options: ["do not", "does not", "did not"], a: "do not" },
                { q: "Where ______ you go last weekend?", options: ["does", "did", "do"], a: "did" },
                { q: "She ______ her homework every afternoon.", options: ["do", "does", "did"], a: "does" }
            ]
        },
        {
            title: "3. Verb to Have",
            lesson: "📜 Grammar Rules (Have):\n• Present: I/You/We/They have | He/She/It has.\n• Past: Had (for all pronouns).",
            questions: [
                { q: "Sarah ______ two brothers.", options: ["has", "have", "had"], a: "has" },
                { q: "We ______ a meeting at 10:00 AM today.", options: ["has", "have", "had"], a: "have" },
                { q: "They ______ a great time at the party last night.", options: ["has", "have", "had"], a: "had" },
                { q: "Mark ______ a dog when he was a child.", options: ["has", "have", "had"], a: "had" }
            ]
        }
    ]
}
كود مصفوفة syllabus الكامل متضمناً الفصل الجديد:
JavaScript


const syllabus = [
    {
        chapter: "أسرار التاريخ",
        branches: [
            {
                title: "1. الفراعنة",
                lesson: "📜 خريطة الهروب: بُنيت الأهرامات لتكون مقابر للملوك، وأشهرها هرم الملك خوفو.",
                questions: [
                    { q: "لماذا بنى المصريون القدماء الأهرامات؟", options: ["لتكون قصوراً", "لتكون مقابر للملوك", "لتكون معابد"], a: "لتكون مقابر للملوك" },
                    { q: "من هو صاحب الهرم الأكبر؟", options: ["خفرع", "خوفو", "منكاورع"], a: "خوفو" }
                ]
            },
            {
                title: "2. نهر النيل",
                lesson: "📜 خريطة الهروب: نهر النيل هو أطول نهر في العالم، وكان شريان الحياة للحضارة المصرية.",
                questions: [
                    { q: "ما هو أطول نهر في العالم؟", options: ["نهر الأمازون", "نهر المسيسيبي", "نهر النيل"], a: "نهر النيل" },
                    { q: "ماذا يمثل نهر النيل لمصر؟", options: ["مكان للصيد فقط", "شريان الحياة", "حد فاصل"], a: "شريان الحياة" },
                    { q: "أين يصب نهر النيل؟", options: ["البحر الأحمر", "البحر المتوسط", "المحيط الأطلسي"], a: "البحر المتوسط" }
                ]
            }
        ]
    },
    {
        chapter: "Science: Mixtures and Solutions",
        branches: [
            {
                title: "1. Definitions",
                lesson: "📜 Map Rules:\n• Mixture: Physical combination of two or more substances that do not combine chemically.\n• Solution: Blended so completely that it looks the same everywhere.\n• Colloid: Particles are scattered without settling out.\n• Suspension: Particles settle out over time showing the parts.",
                questions: [
                    { q: "What is a physical combination of two or more substances that do not combine chemically?", options: ["Solution", "Suspension", "Mixture"], a: "Mixture" },
                    { q: "A mixture in which particles are scattered without settling out is a:", options: ["Colloid", "Solution", "Suspension"], a: "Colloid" },
                    { q: "A heterogeneous mixture that settles out over time is a:", options: ["Solution", "Suspension", "Colloid"], a: "Suspension" },
                    { q: "A mixture blended so completely that it looks the same everywhere is a:", options: ["Mixture", "Colloid", "Solution"], a: "Solution" }
                ]
            },
            {
                title: "2. Identifying Types of Mixtures",
                lesson: "📜 Examples Guide:\n• Solutions: Tap water, Sugar water, Carbonated beverage.\n• Colloids: Foam, Aerosol, Whipped cream, Milk, Fog, Airborne dust.\n• Suspensions: Oil and water, Muddy water.",
                questions: [
                    { q: "What type of mixture is 'Tap water'?", options: ["Solution", "Suspension", "Colloid"], a: "Solution" },
                    { q: "What type of mixture is 'Milk'?", options: ["Solution", "Suspension", "Colloid"], a: "Colloid" },
                    { q: "What type of mixture is 'Oil and water'?", options: ["Solution", "Suspension", "Colloid"], a: "Suspension" },
                    { q: "What type of mixture is 'Fog'?", options: ["Solution", "Suspension", "Colloid"], a: "Colloid" },
                    { q: "What type of mixture is 'Muddy water'?", options: ["Solution", "Suspension", "Colloid"], a: "Suspension" }
                ]
            }
        ]
    },
    {
        chapter: "Grammar: Auxiliary Verbs",
        branches: [
            {
                title: "1. Verb to Be",
                lesson: "📜 Grammar Rules (Be):\n• Present: I am | He/She/It is | You/We/They are.\n• Past: I/He/She/It was | You/We/They were.",
                questions: [
                    { q: "She ______ a talented doctor.", options: ["is", "are", "am"], a: "is" },
                    { q: "They ______ playing football right now.", options: ["am", "are", "is"], a: "are" },
                    { q: "Yesterday, I ______ very tired after work.", options: ["was", "were", "are"], a: "was" },
                    { q: "We ______ late for the movie last night.", options: ["was", "were", "is"], a: "were" }
                ]
            },
            {
                title: "2. Verb to Do",
                lesson: "📜 Grammar Rules (Do):\n• Present: I/You/We/They do | He/She/It does.\n• Past: Did (for all pronouns).",
                questions: [
                    { q: "______ he like chocolate ice cream?", options: ["Do", "Does", "Did"], a: "Does" },
                    { q: "They ______ work on Sundays.", options: ["do not", "does not", "did not"], a: "do not" },
                    { q: "Where ______ you go last weekend?", options: ["does", "did", "do"], a: "did" },
                    { q: "She ______ her homework every afternoon.", options: ["do", "does", "did"], a: "does" }
                ]
            },
            {
                title: "3. Verb to Have",
                lesson: "📜 Grammar Rules (Have):\n• Present: I/You/We/They have | He/She/It has.\n• Past: Had (for all pronouns).",
                questions: [
                    { q: "Sarah ______ two brothers.", options: ["has", "have", "had"], a: "has" },
                    { q: "We ______ a meeting at 10:00 AM today.", options: ["has", "have", "had"], a: "have" },
                    { q: "They ______ a great time at the party last night.", options: ["has", "have", "had"], a: "had" },
                    { q: "Mark ______ a dog when he was a child.", options: ["has", "have", "had"], a: "had" }
                ]
            }
        ]
    }
];
