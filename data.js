// Harish Tuition Centre - Seed Data for Classes 7th to 10th
window.INITIAL_DATA = {
  centreInfo: {
    name: "Harish Tuition Centre",
    nameTe: "హరీష్ ట్యూషన్ సెంటర్",
    tagline: "Empowering Students of Classes 7th to 10th for Academic Excellence",
    taglineTe: "7 నుండి 10వ తరగతి విద్యార్థుల ఉజ్వల విద్యా భవిష్యత్తు కోసం అంకితం",
    director: "NALAM HARISH, M.Sc., B.Ed. (12+ Years Teaching Experience)",
    directorTe: "నలం హరీష్, M.Sc., B.Ed. (12+ సంవత్సరాల బోధనా అనుభవం)",
    phone: "+91 98765 43210",
    email: "contact@harishtuition.edu.in",
    address: "#42, Temple Road, 2nd Main, Near City Library, Main Town",
    addressTe: "#42, టెంపుల్ రోడ్, 2వ మెయిన్, సిటీ లైబ్రరీ దగ్గర, మెయిన్ టౌన్",
    classesOffered: ["Class 7", "Class 8", "Class 9", "Class 10"],
    boards: ["CBSE", "State Board", "ICSE"],
    timings: "Monday - Saturday: 4:30 PM - 8:30 PM | Sunday: 9:00 AM - 12:30 PM",
    timingsTe: "సోమవారం - శనివారం: సాయంత్రం 4:30 - 8:30 | ఆదివారం: ఉదయం 9:00 - 12:30",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "English", "Social Science"],
    subjectsTe: ["గణితం (Mathematics)", "సైన్స్ (Physics, Chemistry, Biology)", "ఇంగ్లీష్ (English)", "సాంఘిక శాస్త్రం (Social Science)"]
  },

  // Teacher / Admin Authentication (NALAM HARISH)
  teacherAuth: {
    teacherId: "262709",
    password: "H@RInalam80085..",
    name: "NALAM HARISH",
    nameTe: "నలం హరీష్",
    role: "Director & Head Teacher",
    upiId: "9876543210@upi", // Harish Sir's UPI ID for fee collection
    upiName: "Harish Tuition Centre"
  },

  classes: [
    {
      id: "class-7",
      name: "Class 7",
      nameTe: "7వ తరగతి",
      description: "Foundation building in Arithmetic, Basic Algebra, Living Organisms, and Physical Science.",
      descriptionTe: "అంకగణితం, ప్రాథమిక బీజగణితం, జీవులు మరియు భౌతిక శాస్త్రంలో పటిష్ట పునాది.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "4:30 PM - 5:30 PM"
    },
    {
      id: "class-8",
      name: "Class 8",
      nameTe: "8వ తరగతి",
      description: "Intermediate concepts, Algebraic Expressions, Cell Biology, Light & Sound, and Grammar.",
      descriptionTe: "బీజగణిత సమాసాలు, కణ జీవశాస్త్రం, కాంతి, ధ్వని మరియు వ్యాకరణం సమగ్ర అవగాహన.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "5:30 PM - 6:30 PM"
    },
    {
      id: "class-9",
      name: "Class 9",
      nameTe: "9వ తరగతి",
      description: "Pre-board rigor: Polynomials, Coordinate Geometry, Laws of Motion, Atoms & Molecules.",
      descriptionTe: "బోర్డు పరీక్షలకు ముందస్తు సన్నద్ధత: బహుపదులు, న్యూటన్ నియమాలు, పరమాణువులు.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "6:30 PM - 7:30 PM"
    },
    {
      id: "class-10",
      name: "Class 10",
      nameTe: "10వ తరగతి (బోర్డు పరీక్షలు)",
      description: "Comprehensive Board Exam coaching, Previous 10 Years Question Papers, Weekly Mock Tests.",
      descriptionTe: "పదవ తరగతి బోర్డు పరీక్షల ప్రత్యక శిక్షణ, గత 10 ఏళ్ల ప్రశ్నపత్రాలు, వారపు మాక్ టెస్టులు.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "7:30 PM - 8:30 PM"
    }
  ],

  // Student list (clean directory - NALAM HARISH Sir can enroll students from the Teacher Portal)
  students: [],

  // Attendance Records (empty by default)
  attendance: [],

  // Academic Subject Notes
  notes: [
    {
      id: "note-10-1",
      title: "Real Numbers & Fundamental Theorem of Arithmetic",
      titleTe: "వాస్తవ సంఖ్యలు & అంకగణిత ప్రాథమిక సిద్ధాంతం",
      subject: "Mathematics",
      subjectTe: "గణితం",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Real Numbers",
      chapterTe: "అధ్యాయం 1: వాస్తవ సంఖ్యలు",
      topic: "Euclid's Division Lemma & Prime Factorization HCF/LCM",
      addedDate: "2026-09-02",
      downloads: 48,
      readTime: "15 min read",
      summary: "Comprehensive guide covering Euclid's division algorithm, fundamental theorem of arithmetic, proving irrationality of √2, √3, √5, and decimal expansions.",
      summaryTe: "యూక్లిడ్ భాగహార న్యాయం, అంకగణిత ప్రాథమిక సిద్ధాంతం మరియు కరణీయ సంఖ్యల నిరూపణల సమగ్ర వివరణ.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 dark:text-emerald-400 mb-2">1. Fundamental Theorem of Arithmetic (అంకగణిత ప్రాథమిక సిద్ధాంతం)</h4>
<p class="mb-3">Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur. <br><span class="text-xs text-slate-500 dark:text-slate-400">(ప్రతి సంయుక్త సంఖ్యను ప్రధానాంకాల లబ్దంగా రాయవచ్చు).</span></p>

<div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 my-3 font-semibold text-emerald-900 dark:text-emerald-300">
  Product Rule: HCF(a, b) &times; LCM(a, b) = a &times; b
</div>

<h4 class="font-bold text-lg text-emerald-800 dark:text-emerald-400 mt-4 mb-2">2. Proving Irrationality (కరణీయ సంఖ్యల నిరూపణ - &radic;2)</h4>
<ol class="list-decimal pl-5 space-y-1 my-2 text-slate-700 dark:text-slate-300">
  <li>Assume to the contrary that &radic;2 is rational: &radic;2 = a / b, where a and b are co-prime integers (b &ne; 0).</li>
  <li>Squaring both sides: 2 = a<sup>2</sup> / b<sup>2</sup> &rArr; 2b<sup>2</sup> = a<sup>2</sup>.</li>
  <li>Therefore, 2 divides a<sup>2</sup>, which means 2 divides a. Let a = 2c.</li>
  <li>Substituting: 2b<sup>2</sup> = 4c<sup>2</sup> &rArr; b<sup>2</sup> = 2c<sup>2</sup>. Thus 2 divides b.</li>
  <li>Hence, a and b share a common factor 2. Contradiction!</li>
  <li><strong>Conclusion: &radic;2 is irrational.</strong></li>
</ol>
`
    },
    {
      id: "note-10-2",
      title: "Chemical Reactions and Equations - Complete Revision",
      titleTe: "రసాయన చర్యలు మరియు సమీకరణాలు - పూర్తి రివిజన్",
      subject: "Science",
      subjectTe: "సైన్స్",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Chemical Reactions and Equations",
      chapterTe: "అధ్యాయం 1: రసాయన చర్యలు",
      topic: "Types of Reactions, Balancing Equations & Redox Reactions",
      addedDate: "2026-09-04",
      downloads: 56,
      readTime: "20 min read",
      summary: "Quick revision mind-map of Combination, Decomposition, Displacement, Double Displacement, Oxidation-Reduction with balanced equations.",
      summaryTe: "సంయోగ, వియోగ, స్థానభ్రంశ, ద్వంద్వ వియోగ మరియు రెడాక్స్ చర్యల సమగ్ర వివరాలు.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 dark:text-emerald-400 mb-2">4 Main Types of Chemical Reactions</h4>
<ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
  <li><strong>Combination Reaction (రసాయన సంయోగం):</strong> CaO (s) + H<sub>2</sub>O (l) &rarr; Ca(OH)<sub>2</sub> (aq) + Heat</li>
  <li><strong>Thermal Decomposition (ఉష్ణ వియోగం):</strong> 2FeSO<sub>4</sub> (s) &rarr; Fe<sub>2</sub>O<sub>3</sub> (s) + SO<sub>2</sub> (g) + SO<sub>3</sub> (g)</li>
  <li><strong>Displacement (రసాయన స్థానభ్రంశం):</strong> Fe (s) + CuSO<sub>4</sub> (aq) &rarr; FeSO<sub>4</sub> (aq) + Cu (s)</li>
  <li><strong>Double Displacement (ద్వంద్వ వియోగం):</strong> Na<sub>2</sub>SO<sub>4</sub> (aq) + BaCl<sub>2</sub> (aq) &rarr; BaSO<sub>4</sub> &darr; (s) + 2NaCl (aq)</li>
</ul>
`
    },
    {
      id: "note-09-1",
      title: "Force & Laws of Motion - Formula Sheet & Derivations",
      titleTe: "బలము & చలన నియమాలు - సూత్రాలు మరియు నిరూపణలు",
      subject: "Science",
      subjectTe: "సైన్స్",
      classId: "class-9",
      className: "Class 9",
      chapter: "Chapter 9: Force and Laws of Motion",
      chapterTe: "అధ్యాయం 9: బలము మరియు చలన నియమాలు",
      topic: "Newton's 3 Laws & Conservation of Linear Momentum",
      addedDate: "2026-09-03",
      downloads: 39,
      readTime: "18 min read",
      summary: "Complete derivations for F = ma and m1*u1 + m2*u2 = m1*v1 + m2*v2 with numerical problem walkthroughs.",
      summaryTe: "న్యూటన్ మూడు గమన నియమాలు మరియు ద్రవ్యవేగ నిత్యత్వ నియమం యొక్క నిరూపణలు.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 dark:text-emerald-400 mb-2">Newton's Three Laws:</h4>
<ol class="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
  <li><strong>First Law (జడత్వ నియమం):</strong> An object remains in rest or uniform motion unless an unbalanced force acts on it.</li>
  <li><strong>Second Law (చలన నియమం):</strong> F = m &times; a</li>
  <li><strong>Third Law (చర్య - ప్రతిచర్య):</strong> To every action, there is an equal and opposite reaction.</li>
</ol>
`
    }
  ],

  // Curated Video Lectures
  videos: [
    {
      id: "vid-10-1",
      title: "Real Numbers & Euclid's Lemma - Full Concept Lecture",
      titleTe: "వాస్తవ సంఖ్యలు & యూక్లిడ్ భాగహార న్యాయం - పూర్తి వీడియో పాఠం",
      subject: "Mathematics",
      subjectTe: "గణితం",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Real Numbers",
      duration: "24:15",
      addedDate: "2026-09-02",
      youtubeId: "vBvFjhqNqW0",
      instructor: "Harish Sir",
      views: 142,
      summary: "In-depth lecture on Euclid's division algorithm, step-by-step HCF calculation, and board exam presentation tips.",
      summaryTe: "యూక్లిడ్ భాగహార అల్గారిథమ్ మరియు గ.సా.భా (HCF) లెక్కలు తేలికగా సాధించే విధానం."
    },
    {
      id: "vid-10-2",
      title: "Chemical Reactions & Equations - Balancing Made Easy",
      titleTe: "రసాయన చర్యలు & సమీకరణాల తుల్యం - సులభమైన పద్ధతి",
      subject: "Science",
      subjectTe: "సైన్స్",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Chemical Reactions",
      duration: "18:40",
      addedDate: "2026-09-04",
      youtubeId: "2NXWj6j_n9k",
      instructor: "Harish Sir",
      views: 189,
      summary: "Learn the foolproof algebraic and hit-and-trial methods to balance complex chemical equations in under 60 seconds.",
      summaryTe: "రసాయన సమీకరణాలను సులభంగా తుల్యం చేసే అద్భుతమైన ట్రిక్స్."
    }
  ],

  // Academic Test Marks
  tests: [
    {
      id: "test-101",
      title: "Unit Test 1: Real Numbers",
      titleTe: "యూనిట్ టెస్ట్ 1: వాస్తవ సంఖ్యలు",
      subject: "Mathematics",
      subjectTe: "గణితం",
      classId: "class-10",
      date: "2026-08-25",
      maxMarks: 25,
      scores: []
    },
    {
      id: "test-102",
      title: "Monthly Test: Chemical Reactions & Balancing",
      titleTe: "నెలవారీ పరీక్ష: రసాయన చర్యలు & సమీకరణాలు",
      subject: "Science",
      subjectTe: "సైన్స్",
      classId: "class-10",
      date: "2026-09-05",
      maxMarks: 50,
      scores: []
    }
  ],

  // Centre Announcements & Holiday Notices
  announcements: [
    {
      id: "ann-holiday-1",
      title: "Vinayaka Chavithi Tuition Centre Holiday Notice",
      titleTe: "వినాయక చవితి సందర్భంగా ట్యూషన్ సెంటర్‌కు సెలవు ప్రకటన",
      date: "2026-09-18",
      target: "All Students & Parents (Classes 7 to 10)",
      targetTe: "అన్ని తరగతుల విద్యార్థులు & తల్లిదండ్రులు",
      category: "holiday",
      badge: "Holiday",
      badgeTe: "సెలవు",
      content: "Tuition centre will remain closed on Friday, 18th September on the auspicious occasion of Vinayaka Chavithi. Regular evening classes will resume on Saturday, 19th September as per batch timings.",
      contentTe: "వినాయక చవితి పర్వదినాన్ని పురస్కరించుకుని ఈ శుక్రవారం (18 సెప్టెంబర్) ట్యూషన్ సెంటర్‌కు సెలవు ప్రకటించడమైనది. తిరిగి శనివారం (19 సెప్టెంబర్) యధావిధిగా తరగతులు జరుగుతాయి."
    },
    {
      id: "ann-1",
      title: "Class 10 Special Board Doubt Clearing Session",
      titleTe: "10వ తరగతి బోర్డు పరీక్షల ప్రత్యక సందేహాల నివృత్తి తరగతి",
      date: "2026-09-20",
      target: "Class 10 Students & Parents",
      targetTe: "10వ తరగతి విద్యార్థులు & తల్లిదండ్రులు",
      category: "exam",
      badge: "Special Class",
      badgeTe: "ప్రత్యేక తరగతి",
      content: "Special 2-hour doubt clearing session for Mathematics on Sunday, 10:00 AM. Bring previous year question booklets.",
      contentTe: "ఈ ఆదివారం ఉదయం 10:00 గంటలకు గణిత శాస్త్రంపై ప్రత్యేక 2 గంటల సందేహాల నివృత్తి తరగతి నిర్వహించబడుతుంది."
    },
    {
      id: "ann-2",
      title: "Monthly Progress Report Cards Published",
      titleTe: "నెలవారీ ప్రోగ్రెస్ రిపోర్ట్ కార్డులు విడుదలయ్యాయి",
      date: "2026-09-14",
      target: "All Parents (Classes 7 to 10)",
      targetTe: "అన్ని తరగతుల తల్లిదండ్రులు",
      category: "general",
      badge: "Academic",
      badgeTe: "అకడమిక్",
      content: "August-September test scores and attendance percentages have been updated. Parents are requested to log in.",
      contentTe: "ఆగస్టు-సెప్టెంబర్ పరీక్ష మార్కులు మరియు హాజరు శాతం పేరెంట్ పోర్టల్‌లో అప్‌డేట్ చేయబడ్డాయి. దయచేసి పరిశీలించండి."
    }
  ],

  // Direct Teacher-Student Messages Store
  messages: [],

  // Daily Homework
  homework: [
    {
      classId: "class-10",
      className: "Class 10",
      classNameTe: "10వ తరగతి",
      subject: "Mathematics",
      subjectTe: "గణితం",
      date: "2026-09-12",
      topicTaught: "Exercise 4.3 - Quadratic formula application and nature of roots",
      topicTaughtTe: "అభ్యాసం 4.3 - వర్గ సూత్రం ప్రయోగం మరియు మూలాల స్వభావం",
      homeworkAssigned: "Complete Exercise 4.3 Question 1 to 5 in homework notebook. Submit tomorrow.",
      homeworkAssignedTe: "అభ్యాసం 4.3 లోని 1 నుండి 5 ప్రశ్నలను హోంవర్క్ నోట్‌బుక్‌లో పూర్తి చేసి రేపు తీసుకురండి.",
      dueBy: "2026-09-13"
    },
    {
      classId: "class-9",
      className: "Class 9",
      classNameTe: "9వ తరగతి",
      subject: "Science",
      subjectTe: "సైన్స్",
      date: "2026-09-12",
      topicTaught: "Third Law of Motion & Action-Reaction pairs",
      topicTaughtTe: "న్యూటన్ మూడవ గమన నియమం & చర్య-ప్రతిచర్య",
      homeworkAssigned: "Write 3 everyday examples of Newton's third law and solve in-text question 3 on page 126.",
      homeworkAssignedTe: "నిత్యజీవితంలో న్యూటన్ మూడవ నియమానికి 3 ఉదాహరణలు రాయండి.",
      dueBy: "2026-09-13"
    }
  ]
};
