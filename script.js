// ==========================================
// ⬇️ منطقة المنهج (Syllabus) ⬇️
// عدد الأقفال على الباب يتم حسابه تلقائياً بناءً على عدد الأسئلة في الدرس.
// ==========================================

// ==========================================
// ⬇️ منطقة المنهج (Syllabus) المحدثة ⬇️
// ==========================================

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
                    { 
                        q: "What is a physical combination of two or more substances that do not combine chemically?", 
                        options: ["Solution", "Suspension", "Mixture"], 
                        a: "Mixture" 
                    },
                    { 
                        q: "A mixture in which particles are scattered without settling out is a:", 
                        options: ["Colloid", "Solution", "Suspension"], 
                        a: "Colloid" 
                    },
                    { 
                        q: "A heterogeneous mixture that settles out over time is a:", 
                        options: ["Solution", "Suspension", "Colloid"], 
                        a: "Suspension" 
                    },
                    { 
                        q: "A mixture blended so completely that it looks the same everywhere is a:", 
                        options: ["Mixture", "Colloid", "Solution"], 
                        a: "Solution" 
                    }
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
    }
];
// ==========================================
// نهاية منطقة المنهج
// ==========================================

let cIdx = 0; 
let bIdx = 0; 
let qIdx = 0; 
let needsLesson = true; 
let totalLocks = 0;
let locksBroken = 0;

window.onload = () => {
    populateIndex();
    setupDoorsAndLocks();
};

function populateIndex() {
    const select = document.getElementById('lesson-index');
    select.innerHTML = '';
    syllabus.forEach((chap, cIndex) => {
        let optGroup = document.createElement('optgroup');
        optGroup.label = chap.chapter;
        chap.branches.forEach((branch, bIndex) => {
            let opt = document.createElement('option');
            opt.value = `${cIndex}-${bIndex}`;
            opt.innerText = branch.title;
            optGroup.appendChild(opt);
        });
        select.appendChild(optGroup);
    });
}

// تجهيز الباب والأقفال للغرفة الجديدة
function setupDoorsAndLocks() {
    // إغلاق الأبواب
    document.getElementById('left-door').classList.remove('open-left');
    document.getElementById('right-door').classList.remove('open-right');
    document.getElementById('next-room-bg').style.opacity = '0';
    
    // إنشاء الأقفال بناءً على عدد الأسئلة
    totalLocks = syllabus[cIdx].branches[bIdx].questions.length;
    locksBroken = 0;
    document.getElementById('locks-left').innerText = totalLocks;
    
    const locksContainer = document.getElementById('locks-container');
    locksContainer.innerHTML = '';
    for (let i = 0; i < totalLocks; i++) {
        const lock = document.createElement('div');
        lock.className = 'padlock';
        lock.id = `lock-${i}`;
        lock.innerText = '🔒';
        locksContainer.appendChild(lock);
    }
}

function jumpToLesson() {
    const val = document.getElementById('lesson-index').value;
    const [c, b] = val.split('-');
    cIdx = parseInt(c);
    bIdx = parseInt(b);
    qIdx = 0;
    needsLesson = true;
    setupDoorsAndLocks();
    showFeedback("تم دخول غرفة جديدة! 🏰");
}

function drawQuestion() {
    if (cIdx >= syllabus.length) {
        alert("🏆 مبرووووك! لقد هربت من القلعة بنجاح بفضل ذكائك!");
        return;
    }
    document.getElementById('lesson-index').value = `${cIdx}-${bIdx}`;
    
    if (needsLesson) showLessonUI(false);
    else showQuestion();
}

function showLessonUI(isRetry) {
    const branchData = syllabus[cIdx].branches[bIdx];
    document.getElementById('lesson-title').innerText = branchData.title;
    
    let textToShow = branchData.lesson;
    if (isRetry) {
        document.getElementById('lesson-title').innerText = "👻 ظهر شبح القلعة!";
        textToShow = "إجابة خاطئة! الشبح يطلب منك قراءة هذا اللغز لتتمكن من المحاولة:\n\n" + textToShow;
    }
    
    document.getElementById('lesson-text').innerText = textToShow;
    document.getElementById('lesson-section').classList.remove('hidden');
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function showQuestion() {
    const chapterData = syllabus[cIdx];
    const branchData = chapterData.branches[bIdx];
    const questionData = branchData.questions[qIdx];
    
    document.getElementById('chapter-branch-label').innerText = `${chapterData.chapter} - ${branchData.title}`;
    document.getElementById('question-counter').innerText = `البحث عن المفتاح ${qIdx + 1} من ${totalLocks}`;
    document.getElementById('question-text').innerText = questionData.q;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, questionData.a);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('lesson-section').classList.add('hidden');
    document.getElementById('question-section').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        // إجابة صحيحة: كسر القفل
        document.getElementById('quiz-modal').classList.add('hidden');
        showFeedback("🗝️ تم كسر القفل!");
        
        const currentLock = document.getElementById(`lock-${locksBroken}`);
        currentLock.classList.add('broken-lock');
        
        locksBroken++;
        document.getElementById('locks-left').innerText = totalLocks - locksBroken;
        
        // التحقق من كسر كل الأقفال
        if (locksBroken >= totalLocks) {
            setTimeout(() => {
                showFeedback("🌟 فُتح الباب!");
                
                // أنيميشن فتح الباب 3D
                document.getElementById('left-door').classList.add('open-left');
                document.getElementById('right-door').classList.add('open-right');
                document.getElementById('next-room-bg').style.opacity = '1';
                document.getElementById('locks-container').innerHTML = ''; // إخفاء الأقفال المكسورة
                
                // الانتقال للدرس التالي بعد ثوانٍ قليلة من الاستمتاع بفتح الباب
                setTimeout(() => {
                    qIdx = 0;
                    bIdx++;
                    needsLesson = true; 
                    if (bIdx >= syllabus[cIdx].branches.length) {
                        bIdx = 0;
                        cIdx++;
                    }
                    if(cIdx < syllabus.length) {
                        setupDoorsAndLocks(); // تجهيز الغرفة الجديدة
                        showFeedback("دخلت الغرفة التالية! 🚪");
                    }
                }, 2500);

            }, 1000);
        } else {
            // لا يزال هناك أسئلة
            qIdx++;
            needsLesson = false;
        }
    } else {
        // إجابة خاطئة
        needsLesson = true;
        showLessonUI(true);
    }
}

function showFeedback(text) {
    const feedback = document.getElementById('feedback-message');
    feedback.innerText = text;
    feedback.classList.remove('hidden');
    feedback.style.animation = 'none';
    feedback.offsetHeight; 
    feedback.style.animation = 'popIn 1.5s ease-out forwards';
}



