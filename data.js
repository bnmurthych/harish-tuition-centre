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

  // Student list with dedicated credentials (same for students & parents)
  students: [
    // Class 10 Students
    {
      id: "HTC-1001",
      password: "1234", // Password shared by student and parent
      name: "Rahul Verma",
      nameTe: "రాహుల్ వర్మ",
      rollNo: "10-01",
      classId: "class-10",
      className: "Class 10",
      classNameTe: "10వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      parentName: "Suresh Verma",
      parentNameTe: "సురేష్ వర్మ",
      parentPhone: "+91 98450 11223",
      parentEmail: "suresh.verma@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmountNum: 2500,
      feeAmount: "₹2,500/month",
      lastPaidDate: "2026-09-02",
      transactionRef: "UPI-PAY-883921",
      joinedDate: "2026-04-10"
    },
    {
      id: "HTC-1002",
      password: "1234",
      name: "Ananya Iyer",
      nameTe: "అనన్య అయ్యర్",
      rollNo: "10-02",
      classId: "class-10",
      className: "Class 10",
      classNameTe: "10వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      parentName: "R. Iyer",
      parentNameTe: "ఆర్. అయ్యర్",
      parentPhone: "+91 98450 22334",
      parentEmail: "iyer.family@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmountNum: 2500,
      feeAmount: "₹2,500/month",
      lastPaidDate: "2026-09-03",
      transactionRef: "UPI-PAY-772910",
      joinedDate: "2026-04-12"
    },
    {
      id: "HTC-1003",
      password: "1234",
      name: "Karthik Reddy",
      nameTe: "కార్తీక్ రెడ్డి",
      rollNo: "10-03",
      classId: "class-10",
      className: "Class 10",
      classNameTe: "10వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      parentName: "Venkatesh Reddy",
      parentNameTe: "వెంకటేష్ రెడ్డి",
      parentPhone: "+91 98450 33445",
      parentEmail: "venkat.reddy@example.com",
      board: "State Board",
      feeStatus: "Pending",
      feeAmountNum: 2500,
      feeAmount: "₹2,500/month",
      lastPaidDate: "-",
      transactionRef: "",
      joinedDate: "2026-05-02"
    },

    // Class 9 Students
    {
      id: "HTC-0901",
      password: "1234",
      name: "Diya Sharma",
      nameTe: "దియా శర్మ",
      rollNo: "09-01",
      classId: "class-9",
      className: "Class 9",
      classNameTe: "9వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      parentName: "Rajesh Sharma",
      parentNameTe: "రాజేష్ శర్మ",
      parentPhone: "+91 98450 44556",
      parentEmail: "rajesh.sharma@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmountNum: 2200,
      feeAmount: "₹2,200/month",
      lastPaidDate: "2026-09-01",
      transactionRef: "UPI-PAY-441209",
      joinedDate: "2026-04-15"
    },
    {
      id: "HTC-0902",
      password: "1234",
      name: "Rohan Kulkarni",
      nameTe: "రోహన్ కులకర్ణి",
      rollNo: "09-02",
      classId: "class-9",
      className: "Class 9",
      classNameTe: "9వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      parentName: "Mahesh Kulkarni",
      parentNameTe: "మహేష్ కులకర్ణి",
      parentPhone: "+91 98450 55667",
      parentEmail: "mahesh.k@example.com",
      board: "State Board",
      feeStatus: "Paid",
      feeAmountNum: 2200,
      feeAmount: "₹2,200/month",
      lastPaidDate: "2026-09-05",
      transactionRef: "UPI-PAY-992144",
      joinedDate: "2026-04-20"
    },

    // Class 8 Students
    {
      id: "HTC-0801",
      password: "1234",
      name: "Sneha Patil",
      nameTe: "స్నేహ పాటిల్",
      rollNo: "08-01",
      classId: "class-8",
      className: "Class 8",
      classNameTe: "8వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      parentName: "Ashok Patil",
      parentNameTe: "అశోక్ పాటిల్",
      parentPhone: "+91 98450 66778",
      parentEmail: "ashok.patil@example.com",
      board: "ICSE",
      feeStatus: "Paid",
      feeAmountNum: 2000,
      feeAmount: "₹2,000/month",
      lastPaidDate: "2026-09-04",
      transactionRef: "UPI-PAY-112345",
      joinedDate: "2026-05-05"
    },
    {
      id: "HTC-0802",
      password: "1234",
      name: "Aditya Nair",
      nameTe: "ఆదిత్య నాయర్",
      rollNo: "08-02",
      classId: "class-8",
      className: "Class 8",
      classNameTe: "8వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      parentName: "M. Nair",
      parentNameTe: "ఎం. నాయర్",
      parentPhone: "+91 98450 77889",
      parentEmail: "nair.m@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmountNum: 2000,
      feeAmount: "₹2,000/month",
      lastPaidDate: "2026-09-02",
      transactionRef: "UPI-PAY-665431",
      joinedDate: "2026-05-10"
    },

    // Class 7 Students
    {
      id: "HTC-0701",
      password: "1234",
      name: "Pooja Hegde",
      nameTe: "పూజా హెగ్డే",
      rollNo: "07-01",
      classId: "class-7",
      className: "Class 7",
      classNameTe: "7వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      parentName: "Shankar Hegde",
      parentNameTe: "శంకర్ హెగ్డే",
      parentPhone: "+91 98450 88990",
      parentEmail: "shankar.hegde@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmountNum: 1800,
      feeAmount: "₹1,800/month",
      lastPaidDate: "2026-09-03",
      transactionRef: "UPI-PAY-332190",
      joinedDate: "2026-05-15"
    },
    {
      id: "HTC-0702",
      password: "1234",
      name: "Varun Rao",
      nameTe: "వరుణ్ రావు",
      rollNo: "07-02",
      classId: "class-7",
      className: "Class 7",
      classNameTe: "7వ తరగతి",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      parentName: "Gopal Rao",
      parentNameTe: "గోపాల్ రావు",
      parentPhone: "+91 98450 99001",
      parentEmail: "gopal.rao@example.com",
      board: "State Board",
      feeStatus: "Pending",
      feeAmountNum: 1800,
      feeAmount: "₹1,800/month",
      lastPaidDate: "-",
      transactionRef: "",
      joinedDate: "2026-06-01"
    }
  ],

  // Attendance Records
  attendance: [
    // Today (2026-09-12)
    { date: "2026-09-12", studentId: "HTC-1001", status: "Present", arrivalTime: "7:28 PM", remarks: "Punctual, attentive", remarksTe: "సమయపాలన, శ్రద్ధగా విన్నారు" },
    { date: "2026-09-12", studentId: "HTC-1002", status: "Present", arrivalTime: "7:30 PM", remarks: "Active participation in problem solving", remarksTe: "లెక్కల సాధనలో చురుకుగా పాల్గొన్నారు" },
    { date: "2026-09-12", studentId: "HTC-1003", status: "Absent", arrivalTime: "-", remarks: "Parent informed: mild fever", remarksTe: "జ్వరం కారణంగా రాలేదు" },
    { date: "2026-09-12", studentId: "HTC-0901", status: "Present", arrivalTime: "6:25 PM", remarks: "Completed homework", remarksTe: "హోంవర్క్ పూర్తి చేశారు" },
    { date: "2026-09-12", studentId: "HTC-0902", status: "Present", arrivalTime: "6:32 PM", remarks: "Arrived slightly late", remarksTe: "కొద్దిగా ఆలస్యంగా వచ్చారు" },
    { date: "2026-09-12", studentId: "HTC-0801", status: "Present", arrivalTime: "5:27 PM", remarks: "Good notebook maintenance", remarksTe: "నోట్‌బుక్ రికార్డులు బాగున్నాయి" },
    { date: "2026-09-12", studentId: "HTC-0802", status: "Present", arrivalTime: "5:30 PM", remarks: "Solved chapter exercises", remarksTe: "అభ్యాస ప్రశ్నలు సాధించారు" },
    { date: "2026-09-12", studentId: "HTC-0701", status: "Present", arrivalTime: "4:28 PM", remarks: "Well prepared for oral quiz", remarksTe: "మౌఖిక పరీక్షకు సిద్ధమయ్యారు" },
    { date: "2026-09-12", studentId: "HTC-0702", status: "Present", arrivalTime: "4:31 PM", remarks: "Focused on math fractions", remarksTe: "భిన్నాల అధ్యయనంలో శ్రద్ధ" },

    // Past records
    { date: "2026-09-11", studentId: "HTC-1001", status: "Present", arrivalTime: "7:25 PM", remarks: "Good score in oral test", remarksTe: "మౌఖిక పరీక్షలో మంచి స్కోరు" },
    { date: "2026-09-11", studentId: "HTC-1002", status: "Present", arrivalTime: "7:29 PM", remarks: "Active discussion", remarksTe: "చర్చలో పాల్గొన్నారు" },
    { date: "2026-09-11", studentId: "HTC-1003", status: "Present", arrivalTime: "7:35 PM", remarks: "Came late due to rain", remarksTe: "వర్షం వల్ల కొద్దిగా ఆలస్యం" },
    { date: "2026-09-10", studentId: "HTC-1001", status: "Present", arrivalTime: "7:28 PM", remarks: "Solved quadratic equation problems", remarksTe: "వర్గ సమీకరణాల సమస్యలను సాధించారు" },
    { date: "2026-09-09", studentId: "HTC-1001", status: "Present", arrivalTime: "7:25 PM", remarks: "Physics numericals", remarksTe: "భౌతిక శాస్త్ర లెక్కలు" },
    { date: "2026-09-08", studentId: "HTC-1001", status: "Absent", arrivalTime: "-", remarks: "Informed: family function", remarksTe: "కుటుంబ వేడుకల వల్ల హాజరుకాలేదు" }
  ],

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
      scores: [
        { studentId: "HTC-1001", marks: 23, grade: "A+", remarks: "Outstanding performance in irrationality proofs. Clean presentation.", remarksTe: "అద్భుతమైన ప్రతిభ. నిరూపణలు చాలా స్పష్టంగా రాశారు." },
        { studentId: "HTC-1002", marks: 24, grade: "A+", remarks: "Near perfect score! Excellent clarity.", remarksTe: "అత్యుత్తమ మార్కులు సాధించారు. అభినందనలు!" },
        { studentId: "HTC-1003", marks: 18, grade: "B+", remarks: "Good effort. Practice prime factorization word problems once more.", remarksTe: "మంచి ప్రయత్నం. ప్రధాన కారణాంకాల లెక్కలు మరికొంత ప్రాక్టీస్ చేయాలి." }
      ]
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
      scores: [
        { studentId: "HTC-1001", marks: 46, grade: "A+", remarks: "Clear understanding of redox states. Well drawn diagrams.", remarksTe: "రెడాక్స్ చర్యలపై మంచి పట్టు ఉంది. బొమ్మలు చక్కగా గీశారు." },
        { studentId: "HTC-1002", marks: 48, grade: "A+", remarks: "Topped the batch! Phenomenal mastery.", remarksTe: "బ్యాచ్ టాపర్‌గా నిలిచారు!" },
        { studentId: "HTC-1003", marks: 37, grade: "B", remarks: "Need to memorize chemical state symbols (s, l, g, aq).", remarksTe: "భౌతిక స్థితుల చిహ్నాలు (s, l, g) గుర్తుంచుకోవాలి." }
      ]
    }
  ],

  // Centre Announcements
  announcements: [
    {
      id: "ann-1",
      title: "Class 10 Special Board Doubt Clearing Session",
      titleTe: "10వ తరగతి బోర్డు పరీక్షల ప్రత్యక సందేహాల నివృత్తి తరగతి",
      date: "2026-09-10",
      target: "Class 10 Students & Parents",
      targetTe: "10వ తరగతి విద్యార్థులు & తల్లిదండ్రులు",
      badge: "Important",
      content: "Special 2-hour doubt clearing session for Mathematics on Sunday, 10:00 AM. Bring previous year question booklets.",
      contentTe: "ఈ ఆదివారం ఉదయం 10:00 గంటలకు గణిత శాస్త్రంపై ప్రత్యేక 2 గంటల సందేహాల నివృత్తి తరగతి నిర్వహించబడుతుంది."
    },
    {
      id: "ann-2",
      title: "Monthly Progress Report Cards Published",
      titleTe: "నెలవారీ ప్రోగ్రెస్ రిపోర్ట్ కార్డులు విడుదలయ్యాయి",
      date: "2026-09-08",
      target: "All Parents (Classes 7 to 10)",
      targetTe: "అన్ని తరగతుల తల్లిదండ్రులు",
      badge: "Academic",
      content: "August-September test scores and attendance percentages have been updated. Parents are requested to log in.",
      contentTe: "ఆగస్టు-సెప్టెంబర్ పరీక్ష మార్కులు మరియు హాజరు శాతం పేరెంట్ పోర్టల్‌లో అప్‌డేట్ చేయబడ్డాయి. దయచేసి పరిశీలించండి."
    }
  ],

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
