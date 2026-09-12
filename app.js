// Harish Tuition Centre - Main Application Logic
// Features: Bilingual (English & Telugu), Dark Mode, Teacher Auth, Credential Manager, UPI QR Fee Payment

const STORAGE_KEY = 'HTC_APP_DATA_V3';
const LANG_KEY = 'HTC_APP_LANG';
const THEME_KEY = 'HTC_APP_THEME';
const AUTH_KEY = 'HTC_APP_AUTH';

// ============================================================================
// BILINGUAL TRANSLATION DICTIONARY (ENGLISH & TELUGU)
// ============================================================================
const TRANSLATIONS = {
  en: {
    admissionsOpen: "Admissions Open",
    bannerText: "Class 7th, 8th, 9th & 10th Batches (CBSE & State Board)",
    logoSubtitle: "Classes 7th to 10th • Est. 2014",
    navHome: "Home",
    navTeacher: "Teacher Portal",
    navStudent: "Student Portal",
    navParent: "Parent Portal",
    heroBadge: "Dedicated Coaching for Classes 7th to 10th",
    heroTitle1: "Clear Concepts.",
    heroTitle2: "Daily Discipline.",
    heroTitle3: "Guaranteed Board Success.",
    heroSubtitle: "Welcome to Harish Tuition Centre. We mentor students of 7th, 8th, 9th, and 10th standards in Mathematics, Science, English & Social Science with digital chapter notes, video lectures, live daily attendance, and transparent parental updates.",
    ctaParent: "Parent Portal Login",
    ctaStudent: "Student Learning Hub",
    ctaTeacher: "Teacher NALAM HARISH Portal",
    statPassRate: "Board Pass Rate",
    statExperience: "Years Experience",
    statDaily: "Daily",
    statAttendanceSms: "Attendance Tracking",
    centreLiveDashboard: "Centre Live Portal",
    systemOnline: "Live 24/7",
    featNotes: "Subject Notes & Formulas",
    featNotesDesc: "Full revision notes, formula cheat sheets, and board questions.",
    featVideos: "Curated Video Lessons",
    featVideosDesc: "Watch conceptual chapter lectures anytime from home.",
    featAttendance: "Daily Attendance Tracking",
    featAttendanceDesc: "Marked daily with live arrival timestamps for parents.",
    featUpi: "Parent UPI Fee Payment",
    featUpiDesc: "Instant QR Code payment via PhonePe, GPay, Paytm with receipts.",
    batchSize: "Small Batch: Max 15 students",
    personalAttention: "Personalized Attention",
    targetedCurriculum: "Targeted Curriculum",
    classesTitle: "Specialized Batches for Classes 7th to 10th",
    classesSubtitle: "Tailored curriculum for CBSE and State Board examinations.",
    noticeBoard: "Centre Notice Board",
    noticeBoardSubtitle: "Official updates for Students & Parents",
    updatedToday: "Updated Today",
    meetDirector: "Director's Desk",
    directorQuote: '"Every student has the potential to excel with the right guidance and daily discipline."',
    directorMsg: "At Harish Tuition Centre, we do not believe in rote memorization. We teach from the ground up, ensuring students understand the 'why' behind every mathematical formula and scientific phenomenon.",
    directorName: "NALAM HARISH, M.Sc., B.Ed.",
    directorExp: "Founder & Academic Director (12+ Years Teaching Experience)",
    visitCentre: "Visit Our Centre",
    centreAddress: "#42, Temple Road, 2nd Main, Near City Library, Main Town.",
    loginCheckProgress: "Log In to Check Student Progress",
    teacherHarishMode: "NALAM HARISH Sir - Teacher Administrator Mode",
    tuitionManagement: "Tuition Management Dashboard",
    teacherDashboardSubtitle: "Manage daily attendance, notes, videos, student passwords, and fee records.",
    addStudentBtn: "Add Student",
    logoutBtn: "Logout",
    totalStudents: "Total Students",
    todayAttendance: "Today's Attendance",
    studyNotesCount: "Study Notes",
    videoLecturesCount: "Video Lectures",
    upiFeeCollection: "UPI Fee Status",
    tabMarkAttendance: "Mark Attendance",
    tabStudentCredentials: "Student & Parent Credentials",
    tabReports: "Attendance Records & Log",
    tabNotes: "Manage Notes",
    tabVideos: "Manage Videos",
    tabFeeManager: "Fee Ledger & UPI",
    dailyAttendanceRegister: "Daily Attendance Register",
    dailyAttendanceSub: "Select batch and date to mark attendance. Synchronizes live to Parent Portal.",
    selectBatch: "Select Batch",
    attendanceDate: "Date",
    markAllPresent: "Mark All Present",
    colRollStudent: "Roll & Student",
    colParentDetails: "Parent Details",
    colAttendanceStatus: "Attendance Status",
    colArrivalTime: "Arrival Time",
    colTeacherRemark: "Teacher Remark",
    attendanceSyncNotice: "Saved attendance updates the live Parent & Student portals immediately.",
    saveAttendanceBtn: "Save & Broadcast Attendance",
    credManagerTitle: "Student & Parent Credential Management",
    credManagerSubtitle: "Set and manage login IDs and passwords for each student and parent. Share directly via WhatsApp.",
    colStudent: "Student Name",
    colClass: "Class",
    colLoginId: "Login ID",
    colPassword: "Password",
    colParentPhone: "Parent Phone",
    colActions: "Actions & WhatsApp",
    cumulativeReports: "Cumulative Attendance Register & Audit",
    cumulativeReportsSub: "Audit percentages, spot absences, and export reports.",
    notesManagerTitle: "Notes & Study Materials Hub",
    notesManagerSub: "Upload revision notes, formula sheets, and chapter summaries.",
    addNewNote: "Add New Subject Note",
    videoManagerTitle: "Video Lecture Repository",
    videoManagerSub: "Add and manage video lectures with embedded players.",
    addNewVideo: "Add New Video Lecture",
    upiSettings: "Teacher UPI Fee Settings",
    feeLedgerTitle: "Student Fee Ledger & Payment Status",
    myAttendanceRate: "My Attendance Rate",
    todayClassStatus: "Today's Class Status",
    academicStanding: "Academic Standing",
    tabMarks: "My Test Marks",
    tabAttendanceLog: "Attendance Log",
    myScorecard: "My Academic Scorecard",
    attendanceHistory: "My Complete Attendance History",
    verifiedParent: "Verified Parent Access",
    parentPortalTitle: "Parent Transparency Portal",
    parentPortalSub: "Live monitoring of attendance, test scores, homework, and UPI fee payment.",
    guardianLabel: "Parent / Guardian:",
    phoneLabel: "Registered Mobile:",
    batchTimeLabel: "Batch Timing:",
    feeStatusLabel: "Monthly Tuition Fee:",
    contactTeacher: "Direct Contact with Harish Sir:",
    callTeacher: "Call Teacher",
    realtimeToday: "Real-Time Attendance Today",
    monthlyAttendance: "Monthly Attendance",
    recentAbsences: "Recent Absences",
    regularStatus: "Status: Regular & Consistent",
    upiPaymentTitle: "Instant Tuition Fee Payment (UPI QR)",
    upiPaymentSub: "Scan the QR code below with any UPI mobile app to pay monthly tuition fee directly.",
    feeAmountDue: "Monthly Fee:",
    alreadyPaid: "Already Paid? Submit Transaction UTR / Ref Number:",
    homeworkTitle: "Today's Classwork & Assigned Homework",
    homeworkSub: "Verify that your child completes their homework before tomorrow's class.",
    mentorFeedbackTitle: "Academic Performance & Mentor Feedback",
    mentorFeedbackSub: "Unit test scores and personal remarks from Harish Sir",
    printReportCard: "Print Official Report Card",
    teacherLoginTitle: "Teacher Portal Login",
    teacherLoginSub: "Only for NALAM HARISH Sir (Centre Administrator)",
    teacherIdLabel: "Teacher ID *",
    passwordLabel: "Password *",
    loginTeacherBtn: "Login as NALAM HARISH Sir",
    studentLoginTitle: "Student Portal Login",
    studentLoginSub: "Enter your Student ID and Password",
    studentIdLabel: "Student ID *",
    loginStudentBtn: "Login to Student Portal",
    parentLoginTitle: "Parent Portal Login",
    parentLoginSub: "Enter your Child's Student ID and Password",
    loginParentBtn: "Login to Parent Portal",
    resetData: "Reset Demo Data"
  },

  te: {
    admissionsOpen: "అడ్మిషన్లు ప్రారంభమైనవి",
    bannerText: "7, 8, 9 మరియు 10వ తరగతి బ్యాచులు (CBSE & స్టేట్ బోర్డ్)",
    logoSubtitle: "7 నుండి 10వ తరగతి వరకు • స్థాపన 2014",
    navHome: "హోమ్",
    navTeacher: "హరీష్ సార్ పోర్టల్",
    navStudent: "విద్యార్థుల పోర్టల్",
    navParent: "తల్లిదండ్రుల పోర్టల్",
    heroBadge: "7 నుండి 10వ తరగతి ప్రత్యేక శిక్షణ",
    heroTitle1: "స్పష్టమైన భావనలు.",
    heroTitle2: "నిత్య క్రమశిక్షణ.",
    heroTitle3: "బోర్డు పరీక్షల్లో విజయానికి హామీ.",
    heroSubtitle: "హరీష్ ట్యూషన్ సెంటర్‌కు స్వాగతం. 7, 8, 9 మరియు 10వ తరగతి విద్యార్థులకు గణితం, సైన్స్, ఇంగ్లీష్ మరియు సాంఘిక శాస్త్రాలలో సమగ్ర అధ్యయన నోట్స్, వీడియో పాఠాలు, రోజువారీ లైవ్ హాజరు మరియు తల్లిదండ్రులకు పూర్తి పారదర్శకతను అందిస్తున్నాము.",
    ctaParent: "తల్లిదండ్రుల పోర్టల్ లాగిన్",
    ctaStudent: "విద్యార్థి పోర్టల్ లాగిన్",
    ctaTeacher: "ఉపాధ్యాయుని పోర్టల్ (నలం హరీష్ సార్)",
    statPassRate: "బోర్డు ఉత్తీర్ణత శాతం",
    statExperience: "సంవత్సరాల అనుభవం",
    statDaily: "రోజువారీ",
    statAttendanceSms: "హాజరు ట్రాకింగ్ & సమాచారం",
    centreLiveDashboard: "సెంటర్ లైవ్ పోర్టల్",
    systemOnline: "24/7 అందుబాటులో ఉంది",
    featNotes: "సబ్జెక్ట్ నోట్స్ & ఫార్ములాలు",
    featNotesDesc: "పూర్తి రివిజన్ నోట్స్, ఫార్ములా షీట్లు మరియు గత బోర్డు పరీక్ష ప్రశ్నలు.",
    featVideos: "వీడియో పాఠాలు",
    featVideosDesc: "ఇంటి వద్ద నుండే అధ్యాయాల వీడియో పాఠాలు ఎప్పుడైనా చూడవచ్చు.",
    featAttendance: "రోజువారీ హాజరు నమోదు",
    featAttendanceDesc: "లైవ్ సమయంతో సహా రోజువారీ హాజరు తల్లిదండ్రులకు కనిపిస్తుంది.",
    featUpi: "UPI ఫీజు చెల్లింపు (QR కోడ్)",
    featUpiDesc: "PhonePe, GPay, Paytm ద్వారా సులభంగా ఫీజు చెల్లింపు.",
    batchSize: "చిన్న బ్యాచ్: గరిష్టంగా 15 మంది",
    personalAttention: "ప్రతి విద్యార్థిపై ప్రత్యేక శ్రద్ధ",
    targetedCurriculum: "లక్షిత విద్యా ప్రణాళిక",
    classesTitle: "7 నుండి 10వ తరగతి ప్రత్యేక బ్యాచులు",
    classesSubtitle: "CBSE మరియు స్టేట్ బోర్డు పరీక్షలకు ప్రత్యేక విద్యా ప్రణాళిక.",
    noticeBoard: "నోటీస్ బోర్డు",
    noticeBoardSubtitle: "విద్యార్థులు & తల్లిదండ్రులకు ముఖ్య సమాచారం",
    updatedToday: "నేడు అప్‌డేట్ చేయబడింది",
    meetDirector: "డైరెక్టర్ సందేశం",
    directorQuote: '"సరైన మార్గదర్శకత్వం మరియు రోజువారీ క్రమశిక్షణతో ప్రతి విద్యార్థి అద్భుతాలు సాధించగలడు."',
    directorMsg: "హరీష్ ట్యూషన్ సెంటర్‌లో మేము బట్టీ పట్టే విధానాన్ని ప్రోత్సహించము. ప్రతి సూత్రం మరియు సైన్స్ ప్రయోగం వెనుక ఉన్న అర్థాన్ని విద్యార్థులకు స్పష్టంగా నేర్పుతాము.",
    directorName: "నలం హరీష్, M.Sc., B.Ed.",
    directorExp: "వ్యవస్థాపకుడు & అకడమిక్ డైరెక్టర్ (12+ సంవత్సరాల అనుభవం)",
    visitCentre: "మా సెంటర్‌ను సందర్శించండి",
    centreAddress: "#42, టెంపుల్ రోడ్, 2వ మెయిన్, సిటీ లైబ్రరీ దగ్గర, మెయిన్ టౌన్.",
    loginCheckProgress: "విద్యార్థి పురోగతిని చూడటానికి లాగిన్ అవ్వండి",
    teacherHarishMode: "నలం హరీష్ సార్ - టీచర్ అడ్మినిస్ట్రేటర్ మోడ్",
    tuitionManagement: "ట్యూషన్ నిర్వహణ డ్యాష్‌బోర్డ్",
    teacherDashboardSubtitle: "రోజువారీ హాజరు, నోట్స్, వీడియోలు, విద్యార్థి పాస్‌వర్డ్‌లు మరియు ఫీజు రికార్డులను నిర్వహించండి.",
    addStudentBtn: "కొత్త విద్యార్థి చేరిక",
    logoutBtn: "లాగౌట్",
    totalStudents: "మొత్తం విద్యార్థులు",
    todayAttendance: "నేటి హాజరు",
    studyNotesCount: "స్టడీ నోట్స్",
    videoLecturesCount: "వీడియో పాఠాలు",
    upiFeeCollection: "UPI ఫీజు స్థితి",
    tabMarkAttendance: "హాజరు నమోదు",
    tabStudentCredentials: "విద్యార్థి & తల్లిదండ్రుల పాస్‌వర్డ్‌లు",
    tabReports: "హాజరు రికార్డులు & రిపోర్టులు",
    tabNotes: "నోట్స్ నిర్వహణ",
    tabVideos: "వీడియోల నిర్వహణ",
    tabFeeManager: "ఫీజు లెడ్జర్ & UPI సెట్టింగ్స్",
    dailyAttendanceRegister: "రోజువారీ హాజరు రిజిస్టర్",
    dailyAttendanceSub: "బ్యాచ్ మరియు తేదీని ఎంచుకుని హాజరును నమోదు చేయండి. ఇది వెంటనే పేరెంట్ పోర్టల్‌లో అప్‌డేట్ అవుతుంది.",
    selectBatch: "బ్యాచ్ ఎంచుకోండి",
    attendanceDate: "తేదీ",
    markAllPresent: "అందరికీ హాజరు వేయండి",
    colRollStudent: "రోల్ నంబర్ & విద్యార్థి",
    colParentDetails: "తల్లిదండ్రుల వివరాలు",
    colAttendanceStatus: "హాజరు స్థితి",
    colArrivalTime: "వచ్చిన సమయం",
    colTeacherRemark: "ఉపాధ్యాయుని వ్యాఖ్య",
    attendanceSyncNotice: "నమోదు చేసిన హాజరు పేరెంట్ & విద్యార్థి పోర్టల్‌లలో ప్రత్యక్షంగా కనిపిస్తుంది.",
    saveAttendanceBtn: "హాజరును సేవ్ చేసి పంపండి",
    credManagerTitle: "విద్యార్థి & తల్లిదండ్రుల లాగిన్ వివరాల నిర్వహణ",
    credManagerSubtitle: "ప్రతి విద్యార్థికి లాగిన్ ID మరియు పాస్‌వర్డ్‌లను సెట్ చేయండి. వాట్సాప్ ద్వారా నేరుగా షేర్ చేయండి.",
    colStudent: "విద్యార్థి పేరు",
    colClass: "తరగతి",
    colLoginId: "యూజర్ ID",
    colPassword: "పాస్‌వర్డ్",
    colParentPhone: "తల్లిదండ్రుల ఫోన్",
    colActions: "మార్పులు & వాట్సాప్ షేర్",
    cumulativeReports: "సమగ్ర హాజరు రికార్డు మరియు ఆడిట్",
    cumulativeReportsSub: "హాజరు శాతం లెక్కించండి, తక్కువ హాజరు ఉన్నవారిని గుర్తించండి.",
    notesManagerTitle: "స్టడీ నోట్స్ హబ్",
    notesManagerSub: "రివిజన్ నోట్స్, ఫార్ములా షీట్లు మరియు అధ్యాయాల సమాచారం అప్‌లోడ్ చేయండి.",
    addNewNote: "కొత్త సబ్జెక్ట్ నోట్ చేర్చండి",
    videoManagerTitle: "వీడియో పాఠాల రిపోజిటరీ",
    videoManagerSub: "వీడియో పాఠాలను జోడించి నిర్వహించండి.",
    addNewVideo: "కొత్త వీడియో పాఠం చేర్చండి",
    upiSettings: "టీచర్ UPI ఫీజు సెట్టింగ్స్",
    feeLedgerTitle: "విద్యార్థుల ఫీజు లెడ్జర్ మరియు చెల్లింపు స్థితి",
    myAttendanceRate: "నా హాజరు శాతం",
    todayClassStatus: "నేటి తరగతి హాజరు స్థితి",
    academicStanding: "విద్యా ప్రమాణం",
    tabMarks: "నా పరీక్ష మార్కులు",
    tabAttendanceLog: "హాజరు చిట్టా",
    myScorecard: "నా అకడమిక్ స్కోర్‌కార్డ్",
    attendanceHistory: "నా పూర్తి హాజరు చరిత్ర",
    verifiedParent: "ధృవీకరించబడిన పేరెంట్ యాక్సెస్",
    parentPortalTitle: "తల్లిదండ్రుల పారదర్శక పోర్టల్",
    parentPortalSub: "హాజరు, పరీక్ష మార్కులు, హోంవర్క్ మరియు UPI ఫీజు చెల్లింపు లైవ్ పర్యవేక్షణ.",
    guardianLabel: "తల్లిదండ్రులు / సంరక్షకుడు:",
    phoneLabel: "నమోదిత మొబైల్:",
    batchTimeLabel: "ట్యూషన్ సమయం:",
    feeStatusLabel: "నెలవారీ ట్యూషన్ ఫీజు:",
    contactTeacher: "హరీష్ సార్‌తో నేరుగా సంప్రదించండి:",
    callTeacher: "ఫోన్ కాల్ చేయండి",
    realtimeToday: "ఈరోజు లైవ్ హాజరు",
    monthlyAttendance: "నెలవారీ హాజరు శాతం",
    recentAbsences: "గైర్హాజరు రోజులు",
    regularStatus: "స్థితి: క్రమం తప్పకుండా హాజరవుతున్నారు",
    upiPaymentTitle: "తక్షణ ట్యూషన్ ఫీజు చెల్లింపు (UPI QR కోడ్)",
    upiPaymentSub: "PhonePe, Google Pay, Paytm ద్వారా నేరుగా ఫీజు చెల్లించడానికి క్రింది QR కోడ్‌ను స్కాన్ చేయండి.",
    feeAmountDue: "నెలవారీ ఫీజు:",
    alreadyPaid: "ఇప్పటికే చెల్లించారా? ట్రాన్సాక్షన్ UTR నంబర్ సమర్పించండి:",
    homeworkTitle: "నేటి తరగతి పాఠాలు & ఇచ్చిన హోంవర్క్",
    homeworkSub: "రేపటి తరగతికి ముందు మీ పిల్లలు హోంవర్క్ పూర్తి చేశారో లేదో సరిచూసుకోండి.",
    mentorFeedbackTitle: "విద్యా ప్రతిభ & ఉపాధ్యాయుని అభిప్రాయం",
    mentorFeedbackSub: "యూనిట్ టెస్ట్ మార్కులు మరియు హరీష్ సార్ వ్యక్తిగత సూచనలు",
    printReportCard: "అధికారిక రిపోర్ట్ కార్డు ముద్రించండి",
    teacherLoginTitle: "ఉపాధ్యాయుని లాగిన్ (నలం హరీష్ సార్)",
    teacherLoginSub: "నలం హరీష్ సార్ (సెంటర్ అడ్మినిస్ట్రేటర్) కోసం మాత్రమే",
    teacherIdLabel: "టీచర్ ID *",
    passwordLabel: "పాస్‌వర్డ్ *",
    loginTeacherBtn: "నలం హరీష్ సార్‌గా లాగిన్ అవ్వండి",
    studentLoginTitle: "విద్యార్థి పోర్టల్ లాగిన్",
    studentLoginSub: "మీ విద్యార్థి ID మరియు పాస్‌వర్డ్ నమోదు చేయండి",
    studentIdLabel: "విద్యార్థి ID *",
    loginStudentBtn: "విద్యార్థి పోర్టల్‌లోకి ప్రవేశించండి",
    parentLoginTitle: "తల్లిదండ్రుల పోర్టల్ లాగిన్",
    parentLoginSub: "మీ పిల్లల విద్యార్థి ID మరియు పాస్‌వర్డ్ నమోదు చేయండి",
    loginParentBtn: "పేరెంట్ పోర్టల్‌లోకి ప్రవేశించండి",
    resetData: "డెమో డేటా రీసెట్ చేయండి"
  }
};

// ============================================================================
// STATE INITIALIZATION
// ============================================================================
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (window.INITIAL_DATA && window.INITIAL_DATA.teacherAuth) {
        parsed.teacherAuth = JSON.parse(JSON.stringify(window.INITIAL_DATA.teacherAuth));
      }
      return parsed;
    } catch (e) {
      console.error('Resetting to initial data', e);
    }
  }
  return JSON.parse(JSON.stringify(window.INITIAL_DATA));
}

let appState = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

// Global active preferences
let currentLang = localStorage.getItem(LANG_KEY) || 'en'; // 'en' or 'te'
let currentTheme = localStorage.getItem(THEME_KEY) || 'light'; // 'light' or 'dark'
let authSession = JSON.parse(localStorage.getItem(AUTH_KEY) || '{"role": null, "id": null, "name": null}');
if (authSession && authSession.role === 'admin') {
  authSession.id = '262709';
  authSession.name = 'NALAM HARISH';
}

let currentView = 'public'; // 'public' | 'admin' | 'student' | 'parent'
let currentAdminTab = 'attendance';
let currentStudentTab = 'notes';
let activeStudentId = 'HTC-1001';
let activeParentStudentId = 'HTC-1001';

// Translation helper
function t(key) {
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
    return TRANSLATIONS[currentLang][key];
  }
  return TRANSLATIONS['en'][key] || key;
}

// ============================================================================
// ON PAGE LOAD
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(currentTheme);

  // Apply saved language
  applyLanguage(currentLang);

  // Set default attendance date to today
  const dateInput = document.getElementById('attendance-date-input');
  if (dateInput) {
    dateInput.value = '2026-09-12';
  }

  // Update Auth Status
  updateAuthUI();

  // Render components
  renderPublicLanding();
  renderAdminKPIs();
  renderAttendanceSheet();
  renderStudentView();
  renderParentView();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ============================================================================
// THEME SWITCHER (DARK / LIGHT)
// ============================================================================
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem(THEME_KEY, currentTheme);
  applyTheme(currentTheme);
  showToast(currentTheme === 'dark' ? 'Dark theme enabled' : 'Light theme enabled', 'info');
}

function applyTheme(theme) {
  const html = document.documentElement;
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');

  if (theme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    if (moonIcon && sunIcon) {
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    }
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    if (moonIcon && sunIcon) {
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
    }
  }
}

// ============================================================================
// BILINGUAL ENGINE (ENGLISH & TELUGU)
// ============================================================================
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'te' : 'en';
  localStorage.setItem(LANG_KEY, currentLang);
  applyLanguage(currentLang);
  showToast(currentLang === 'te' ? 'తెలుగు భాష ఎంపిక చేయబడింది' : 'Switched to English', 'info');
}

function applyLanguage(lang) {
  // Update button label
  const langLabel = document.getElementById('current-lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'en' ? 'తెలుగు' : 'English';
  }

  // Translate all DOM elements with data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Re-render components with localized text
  renderPublicLanding();
  renderStudentView();
  renderParentView();
  if (currentView === 'admin') {
    renderAttendanceSheet();
    renderCredentialsDirectory();
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ============================================================================
// AUTHENTICATION & ROLE ACCESS
// ============================================================================
function updateAuthUI() {
  const container = document.getElementById('auth-status-container');
  if (!container) return;

  if (authSession.role === 'admin') {
    const adminDisplayName = currentLang === 'te' ? 'నలం హరీష్ సార్' : 'NALAM HARISH Sir';
    container.innerHTML = `
      <div class="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold">
        <span class="w-2 h-2 rounded-full bg-emerald-500 live-dot"></span>
        <span>${adminDisplayName}</span>
        <button onclick="logoutSession()" class="ml-1 text-emerald-900 dark:text-emerald-200 hover:text-red-500" title="Logout">
          <i data-lucide="log-out" class="w-3.5 h-3.5 inline"></i>
        </button>
      </div>
    `;
  } else if (authSession.role === 'student') {
    const s = appState.students.find(st => st.id === authSession.id);
    const name = s ? (currentLang === 'te' && s.nameTe ? s.nameTe : s.name) : authSession.id;
    container.innerHTML = `
      <div class="flex items-center gap-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 px-3 py-1.5 rounded-full text-xs font-bold">
        <span class="w-2 h-2 rounded-full bg-blue-500 live-dot"></span>
        <span>${name}</span>
        <button onclick="logoutSession()" class="ml-1 text-blue-900 dark:text-blue-200 hover:text-red-500" title="Logout">
          <i data-lucide="log-out" class="w-3.5 h-3.5 inline"></i>
        </button>
      </div>
    `;
  } else if (authSession.role === 'parent') {
    const s = appState.students.find(st => st.id === authSession.id);
    const parentName = s ? (currentLang === 'te' && s.parentNameTe ? s.parentNameTe : s.parentName) : 'Parent';
    container.innerHTML = `
      <div class="flex items-center gap-2 bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800 px-3 py-1.5 rounded-full text-xs font-bold">
        <span class="w-2 h-2 rounded-full bg-purple-500 live-dot"></span>
        <span>${parentName}</span>
        <button onclick="logoutSession()" class="ml-1 text-purple-900 dark:text-purple-200 hover:text-red-500" title="Logout">
          <i data-lucide="log-out" class="w-3.5 h-3.5 inline"></i>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button onclick="handleTeacherNavClick()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all">
        <i data-lucide="lock" class="w-3.5 h-3.5"></i>
        <span>Login</span>
      </button>
    `;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Navigation Guards
function handleTeacherNavClick() {
  if (authSession.role === 'admin') {
    switchView('admin');
  } else {
    openTeacherLoginModal();
  }
}

function handleStudentNavClick() {
  if (authSession.role === 'student') {
    switchView('student');
  } else {
    openStudentLoginModal();
  }
}

function handleParentNavClick() {
  if (authSession.role === 'parent') {
    switchView('parent');
  } else {
    openParentLoginModal();
  }
}

// Teacher Login Handling
function openTeacherLoginModal() {
  document.getElementById('teacher-login-error').classList.add('hidden');
  document.getElementById('modal-teacher-login').classList.remove('hidden');
}
function closeTeacherLoginModal() {
  document.getElementById('modal-teacher-login').classList.add('hidden');
}

function handleTeacherLogin(e) {
  e.preventDefault();
  const idInput = document.getElementById('teacher-login-id').value.trim();
  const passInput = document.getElementById('teacher-login-password').value;

  const validId = (appState.teacherAuth?.teacherId || "262709").toString().trim();
  const validPass = appState.teacherAuth?.password || "H@RInalam80085..";

  if (idInput === validId && passInput === validPass) {
    authSession = { role: 'admin', id: '262709', name: 'NALAM HARISH' };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authSession));
    closeTeacherLoginModal();
    updateAuthUI();
    switchView('admin');
    showToast(currentLang === 'te' ? 'స్వాగతం నలం హరీష్ సార్!' : 'Welcome NALAM HARISH Sir!', 'success');
  } else {
    const err = document.getElementById('teacher-login-error');
    err.textContent = currentLang === 'te' ? 'తప్పుడు Teacher ID లేదా పాస్‌వర్డ్. దయచేసి సరైన వివరాలు నమోదు చేయండి.' : 'Invalid Teacher ID or Password. Please enter the correct credentials.';
    err.classList.remove('hidden');
  }
}

// Student Login Handling
function openStudentLoginModal() {
  document.getElementById('student-login-error').classList.add('hidden');
  document.getElementById('modal-student-login').classList.remove('hidden');
}
function closeStudentLoginModal() {
  document.getElementById('modal-student-login').classList.add('hidden');
}

function handleStudentLogin(e) {
  e.preventDefault();
  const id = document.getElementById('student-login-id').value.trim().toUpperCase();
  const pass = document.getElementById('student-login-password').value.trim();

  const student = appState.students.find(s => s.id.toUpperCase() === id && s.password === pass);

  if (student) {
    activeStudentId = student.id;
    authSession = { role: 'student', id: student.id, name: student.name };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authSession));
    closeStudentLoginModal();
    updateAuthUI();
    renderStudentView();
    switchView('student');
    showToast(currentLang === 'te' ? `స్వాగతం ${student.nameTe || student.name}!` : `Welcome ${student.name}!`, 'success');
  } else {
    const err = document.getElementById('student-login-error');
    err.textContent = currentLang === 'te' ? 'తప్పుడు Student ID లేదా పాస్‌వర్డ్. హరీష్ సార్‌ను సంప్రదించండి.' : 'Invalid Student ID or Password. Contact Harish Sir.';
    err.classList.remove('hidden');
  }
}

// Parent Login Handling
function openParentLoginModal() {
  document.getElementById('parent-login-error').classList.add('hidden');
  document.getElementById('modal-parent-login').classList.remove('hidden');
}
function closeParentLoginModal() {
  document.getElementById('modal-parent-login').classList.add('hidden');
}

function handleParentLogin(e) {
  e.preventDefault();
  const id = document.getElementById('parent-login-id').value.trim().toUpperCase();
  const pass = document.getElementById('parent-login-password').value.trim();

  const student = appState.students.find(s => s.id.toUpperCase() === id && s.password === pass);

  if (student) {
    activeParentStudentId = student.id;
    authSession = { role: 'parent', id: student.id, name: student.parentName };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authSession));
    closeParentLoginModal();
    updateAuthUI();
    renderParentView();
    switchView('parent');
    showToast(currentLang === 'te' ? `స్వాగతం ${student.parentNameTe || student.parentName} గారు!` : `Welcome ${student.parentName}!`, 'success');
  } else {
    const err = document.getElementById('parent-login-error');
    err.textContent = currentLang === 'te' ? 'తప్పుడు Student ID లేదా పాస్‌వర్డ్. హరీష్ సార్‌ను సంప్రదించండి.' : 'Invalid Student ID or Password. Contact Harish Sir.';
    err.classList.remove('hidden');
  }
}

// Logout
function logoutSession() {
  authSession = { role: null, id: null, name: null };
  localStorage.removeItem(AUTH_KEY);
  updateAuthUI();
  switchView('public');
  showToast(currentLang === 'te' ? 'విజయవంతంగా లాగౌట్ అయ్యారు' : 'Logged out successfully', 'info');
}

// ============================================================================
// VIEW SWITCHER
// ============================================================================
function switchView(viewName) {
  currentView = viewName;

  const views = ['view-public', 'view-admin', 'view-student', 'view-parent'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.classList.add('hidden');
  });

  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove('hidden');
  }

  // Update Nav links
  const navBtns = ['public', 'admin', 'student', 'parent'];
  navBtns.forEach(name => {
    const btn = document.getElementById(`nav-btn-${name}`);
    if (btn) {
      if (name === viewName) {
        btn.className = 'px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700';
      } else {
        btn.className = 'px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-emerald-700';
      }
    }
  });

  if (viewName === 'public') renderPublicLanding();
  if (viewName === 'admin') {
    renderAdminKPIs();
    renderAttendanceSheet();
    renderCredentialsDirectory();
  }
  if (viewName === 'student') renderStudentView();
  if (viewName === 'parent') renderParentView();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-nav');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// ============================================================================
// PUBLIC LANDING PAGE RENDERING
// ============================================================================
function renderPublicLanding() {
  const classesContainer = document.getElementById('public-classes-container');
  if (classesContainer) {
    classesContainer.innerHTML = appState.classes.map(cls => {
      const studentCount = appState.students.filter(s => s.classId === cls.id).length;
      const title = currentLang === 'te' && cls.nameTe ? cls.nameTe : cls.name;
      const desc = currentLang === 'te' && cls.descriptionTe ? cls.descriptionTe : cls.description;

      return `
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover-lift flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                ${title}
              </span>
              <span class="text-xs font-semibold text-slate-500 font-mono">${cls.batchTime}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">${title}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${desc}</p>
            
            <div class="space-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
              <div class="font-bold text-slate-800 dark:text-slate-200">${currentLang === 'te' ? 'సబ్జెక్టులు:' : 'Subjects Included:'}</div>
              <div class="flex flex-wrap gap-1">
                ${cls.subjects.map(sub => `<span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md text-[11px] font-medium">${sub}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="pt-5 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between">
            <span class="text-xs text-slate-500 font-medium">${studentCount} ${currentLang === 'te' ? 'విద్యార్థులు' : 'Active Students'}</span>
            <button onclick="handleStudentNavClick()" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
              ${currentLang === 'te' ? 'సిలబస్ చూడండి' : 'View Syllabus'} &rarr;
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Announcements
  const annContainer = document.getElementById('public-announcements-container');
  if (annContainer) {
    annContainer.innerHTML = appState.announcements.map(ann => {
      const title = currentLang === 'te' && ann.titleTe ? ann.titleTe : ann.title;
      const content = currentLang === 'te' && ann.contentTe ? ann.contentTe : ann.content;
      const target = currentLang === 'te' && ann.targetTe ? ann.targetTe : ann.target;

      return `
        <div class="bg-white/80 dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover-lift">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">${ann.badge}</span>
            <span class="text-[11px] text-slate-400 font-mono">${ann.date}</span>
          </div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1.5 leading-snug">${title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${content}</p>
          <div class="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            ${currentLang === 'te' ? 'లక్ష్యం:' : 'Target:'} ${target}
          </div>
        </div>
      `;
    }).join('');
  }
}

// ============================================================================
// TEACHER / ADMIN PORTAL LOGIC
// ============================================================================
function setAdminTab(tabName) {
  currentAdminTab = tabName;
  const tabs = ['attendance', 'credentials', 'reports', 'notes', 'videos', 'fees'];

  tabs.forEach(t => {
    const panel = document.getElementById(`admin-panel-${t}`);
    const btn = document.getElementById(`admin-tab-${t}`);
    if (panel) {
      if (t === tabName) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
    if (btn) {
      if (t === tabName) btn.className = 'tab-btn active px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all';
      else btn.className = 'tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-all';
    }
  });

  if (tabName === 'attendance') renderAttendanceSheet();
  if (tabName === 'credentials') renderCredentialsDirectory();
  if (tabName === 'reports') renderAttendanceReports();
  if (tabName === 'notes') renderAdminNotes();
  if (tabName === 'videos') renderAdminVideos();
  if (tabName === 'fees') renderFeeLedger();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderAdminKPIs() {
  document.getElementById('stat-total-students').textContent = appState.students.length;
  document.getElementById('stat-total-notes').textContent = appState.notes.length;
  document.getElementById('stat-total-videos').textContent = appState.videos.length;

  const today = '2026-09-12';
  const todayRecords = appState.attendance.filter(a => a.date === today);
  const presentCount = todayRecords.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const absentCount = todayRecords.filter(a => a.status === 'Absent').length;
  const totalMarked = todayRecords.length;

  const percent = totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0;
  document.getElementById('stat-today-attendance').textContent = `${percent}%`;
  document.getElementById('stat-attendance-counts').textContent = `${presentCount} Present / ${absentCount} Absent`;

  // Fees KPI
  const paidCount = appState.students.filter(s => s.feeStatus === 'Paid').length;
  document.getElementById('stat-fees-collected').textContent = `${paidCount} / ${appState.students.length} Paid`;
}

// Attendance Register
let pendingAttendanceMap = {};

function renderAttendanceSheet() {
  const classSelect = document.getElementById('attendance-class-select');
  const dateInput = document.getElementById('attendance-date-input');
  const tbody = document.getElementById('attendance-table-body');

  if (!classSelect || !dateInput || !tbody) return;

  const selectedClass = classSelect.value;
  const selectedDate = dateInput.value || '2026-09-12';

  const classStudents = appState.students.filter(s => s.classId === selectedClass);
  pendingAttendanceMap = {};

  if (classStudents.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-slate-400">No students enrolled in this batch.</td></tr>`;
    return;
  }

  tbody.innerHTML = classStudents.map(student => {
    const existing = appState.attendance.find(a => a.date === selectedDate && a.studentId === student.id);
    const status = existing ? existing.status : 'Present';
    const arrivalTime = existing ? existing.arrivalTime : '7:28 PM';
    const remarks = existing ? (currentLang === 'te' && existing.remarksTe ? existing.remarksTe : existing.remarks) : (currentLang === 'te' ? 'సమయపాలన, శ్రద్ధగా విన్నారు' : 'Attentive, participated well');

    pendingAttendanceMap[student.id] = { status, arrivalTime, remarks };

    const stuName = currentLang === 'te' && student.nameTe ? student.nameTe : student.name;
    const parName = currentLang === 'te' && student.parentNameTe ? student.parentNameTe : student.parentName;

    return `
      <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
        <td class="py-3 px-4">
          <div class="flex items-center gap-3">
            <img src="${student.avatar}" class="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700">
            <div>
              <div class="font-bold text-slate-900 dark:text-white">${stuName}</div>
              <div class="text-[11px] text-slate-500 font-mono font-bold">Roll: ${student.rollNo} • <span class="text-emerald-600">${student.id}</span></div>
            </div>
          </div>
        </td>
        
        <td class="py-3 px-4">
          <div class="text-xs font-semibold text-slate-800 dark:text-slate-200">${parName}</div>
          <div class="text-[11px] text-slate-500 font-mono">${student.parentPhone}</div>
        </td>

        <td class="py-3 px-4 text-center">
          <div class="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <button type="button" onclick="setStudentAttendanceStatus('${student.id}', 'Present')" id="btn-status-${student.id}-Present" class="px-3 py-1.5 rounded-lg transition-all ${status === 'Present' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'}">
              ${currentLang === 'te' ? 'హాజరు' : 'Present'}
            </button>
            <button type="button" onclick="setStudentAttendanceStatus('${student.id}', 'Absent')" id="btn-status-${student.id}-Absent" class="px-3 py-1.5 rounded-lg transition-all ${status === 'Absent' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'}">
              ${currentLang === 'te' ? 'రాలేదు' : 'Absent'}
            </button>
            <button type="button" onclick="setStudentAttendanceStatus('${student.id}', 'Late')" id="btn-status-${student.id}-Late" class="px-3 py-1.5 rounded-lg transition-all ${status === 'Late' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'}">
              ${currentLang === 'te' ? 'ఆలస్యం' : 'Late'}
            </button>
          </div>
        </td>

        <td class="py-3 px-4">
          <input type="text" id="arrival-${student.id}" value="${arrivalTime}" onchange="updateAttendanceField('${student.id}', 'arrivalTime', this.value)" class="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-mono w-24 outline-none">
        </td>

        <td class="py-3 px-4">
          <input type="text" id="remark-${student.id}" value="${remarks}" onchange="updateAttendanceField('${student.id}', 'remarks', this.value)" class="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 w-full outline-none">
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setStudentAttendanceStatus(studentId, newStatus) {
  if (!pendingAttendanceMap[studentId]) pendingAttendanceMap[studentId] = {};
  pendingAttendanceMap[studentId].status = newStatus;

  ['Present', 'Absent', 'Late'].forEach(st => {
    const btn = document.getElementById(`btn-status-${studentId}-${st}`);
    if (btn) {
      if (st === newStatus) {
        btn.className = `px-3 py-1.5 rounded-lg transition-all text-white shadow-sm ${st === 'Present' ? 'bg-emerald-600' : st === 'Absent' ? 'bg-red-600' : 'bg-amber-600'}`;
      } else {
        btn.className = 'px-3 py-1.5 rounded-lg transition-all text-slate-600 dark:text-slate-300 hover:text-slate-900';
      }
    }
  });

  const arrivalInput = document.getElementById(`arrival-${studentId}`);
  if (arrivalInput) {
    if (newStatus === 'Absent') {
      arrivalInput.value = '-';
      pendingAttendanceMap[studentId].arrivalTime = '-';
    } else if (arrivalInput.value === '-') {
      arrivalInput.value = '7:28 PM';
      pendingAttendanceMap[studentId].arrivalTime = '7:28 PM';
    }
  }
}

function updateAttendanceField(studentId, field, value) {
  if (!pendingAttendanceMap[studentId]) pendingAttendanceMap[studentId] = {};
  pendingAttendanceMap[studentId][field] = value;
}

function markAllAttendance(status) {
  Object.keys(pendingAttendanceMap).forEach(id => {
    setStudentAttendanceStatus(id, status);
  });
  showToast(currentLang === 'te' ? `అందరికీ '${status}' నమోదు చేయబడింది` : `All students marked as ${status}`, 'info');
}

function saveAttendanceRecords() {
  const dateInput = document.getElementById('attendance-date-input');
  const selectedDate = dateInput ? dateInput.value : '2026-09-12';

  Object.keys(pendingAttendanceMap).forEach(studentId => {
    const entry = pendingAttendanceMap[studentId];
    appState.attendance = appState.attendance.filter(a => !(a.date === selectedDate && a.studentId === studentId));

    appState.attendance.push({
      date: selectedDate,
      studentId: studentId,
      status: entry.status || 'Present',
      arrivalTime: entry.arrivalTime || (entry.status === 'Absent' ? '-' : '7:28 PM'),
      remarks: entry.remarks || 'Regular',
      remarksTe: entry.remarks || 'హాజరయ్యారు'
    });
  });

  saveState();
  renderAdminKPIs();
  renderParentView();
  renderStudentView();
  showToast(currentLang === 'te' ? 'హాజరు విజయవంతంగా సేవ్ చేయబడింది!' : 'Attendance saved successfully!', 'success');
}

// ============================================================================
// STUDENT & PARENT CREDENTIALS MANAGER (HARISH SIR CONTROL)
// ============================================================================
function renderCredentialsDirectory() {
  const tbody = document.getElementById('credentials-table-body');
  if (!tbody) return;

  tbody.innerHTML = appState.students.map(s => {
    const stuName = currentLang === 'te' && s.nameTe ? s.nameTe : s.name;
    const parName = currentLang === 'te' && s.parentNameTe ? s.parentNameTe : s.parentName;

    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <td class="py-3 px-4">
          <div class="flex items-center gap-3">
            <img src="${s.avatar}" class="w-8 h-8 rounded-xl object-cover border border-slate-200 dark:border-slate-700">
            <div>
              <div class="font-bold text-slate-900 dark:text-white">${stuName}</div>
              <div class="text-[11px] text-slate-500">Roll: ${s.rollNo}</div>
            </div>
          </div>
        </td>

        <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">${s.className}</td>

        <td class="py-3 px-4">
          <code class="bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            ${s.id}
          </code>
        </td>

        <td class="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200">
          ${s.password}
        </td>

        <td class="py-3 px-4">
          <div class="font-medium text-slate-900 dark:text-white text-xs">${parName}</div>
          <div class="text-[11px] text-slate-500 font-mono">${s.parentPhone}</div>
        </td>

        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button onclick="openEditCredentialsModal('${s.id}')" class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-1">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit Pass
            </button>
            <button onclick="shareCredentialsWhatsApp('${s.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-all flex items-center gap-1">
              <i data-lucide="share-2" class="w-3.5 h-3.5"></i> WhatsApp
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function filterCredentialsDirectory() {
  const query = document.getElementById('credential-search-input')?.value.toLowerCase() || '';
  const rows = document.querySelectorAll('#credentials-table-body tr');

  rows.forEach(r => {
    const text = r.textContent.toLowerCase();
    r.style.display = text.includes(query) ? '' : 'none';
  });
}

function openEditCredentialsModal(studentId) {
  const s = appState.students.find(st => st.id === studentId);
  if (!s) return;

  document.getElementById('edit-cred-student-id').value = s.id;
  document.getElementById('edit-cred-student-name').value = `${s.name} (${s.className})`;
  document.getElementById('edit-cred-new-id').value = s.id;
  document.getElementById('edit-cred-new-password').value = s.password;

  document.getElementById('modal-edit-credentials').classList.remove('hidden');
}

function closeEditCredentialsModal() {
  document.getElementById('modal-edit-credentials').classList.add('hidden');
}

function handleSaveStudentCredentials(e) {
  e.preventDefault();
  const origId = document.getElementById('edit-cred-student-id').value;
  const newId = document.getElementById('edit-cred-new-id').value.trim().toUpperCase();
  const newPass = document.getElementById('edit-cred-new-password').value.trim();

  const student = appState.students.find(s => s.id === origId);
  if (!student) return;

  student.id = newId;
  student.password = newPass;

  // Also update attendance records studentId reference if ID changed
  if (origId !== newId) {
    appState.attendance.forEach(a => {
      if (a.studentId === origId) a.studentId = newId;
    });
    appState.tests.forEach(test => {
      test.scores.forEach(sc => {
        if (sc.studentId === origId) sc.studentId = newId;
      });
    });
  }

  saveState();
  renderCredentialsDirectory();
  closeEditCredentialsModal();
  showToast(currentLang === 'te' ? 'పాస్‌వర్డ్ మరియు ID అప్‌డేట్ చేయబడింది!' : 'Credentials updated successfully!', 'success');
}

// Generate pre-formatted WhatsApp message slip for Harish Sir to send to parents
function shareCredentialsWhatsApp(studentId) {
  const s = appState.students.find(st => st.id === studentId);
  if (!s) return;

  const webUrl = "https://bnmurthych.github.io/harish-tuition-centre/";
  const cleanPhone = s.parentPhone.replace(/[^0-9]/g, '');

  let msg = "";
  if (currentLang === 'te') {
    msg = `నమస్కారం ${s.parentNameTe || s.parentName} గారు!\nహరీష్ ట్యూషన్ సెంటర్ (Harish Tuition Centre) డిజిటల్ పోర్టల్ లాగిన్ వివరాలు:\n\n` +
          `👤 విద్యార్థి: ${s.nameTe || s.name} (${s.className})\n` +
          `🌐 వెబ్‌సైట్: ${webUrl}\n` +
          `🔑 యూజర్ ID: ${s.id}\n` +
          `🔒 పాస్‌వర్డ్: ${s.password}\n\n` +
          `దయచేసి ఈ లింక్ ఓపెన్ చేసి మీ పిల్లల రోజువారీ హాజరు, హోంవర్క్, మార్కులు మరియు UPI ఫీజు చెల్లింపు QR కోడ్ చూసుకోవచ్చు.\n- హరీష్ సార్`;
  } else {
    msg = `Hello ${s.parentName}!\nHere are your portal login credentials for Harish Tuition Centre:\n\n` +
          `👤 Student: ${s.name} (${s.className})\n` +
          `🌐 Website: ${webUrl}\n` +
          `🔑 Student ID: ${s.id}\n` +
          `🔒 Password: ${s.password}\n\n` +
          `Please log in to track daily attendance, test marks, homework, and UPI fee payments.\n- Harish Sir (+91 98765 43210)`;
  }

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
  showToast('Opening WhatsApp with login details...', 'info');
}

// Attendance Reports in Admin
function renderAttendanceReports() {
  const filter = document.getElementById('report-class-filter')?.value || 'all';
  const tbody = document.getElementById('attendance-report-table-body');
  if (!tbody) return;

  let students = appState.students;
  if (filter !== 'all') students = students.filter(s => s.classId === filter);

  tbody.innerHTML = students.map(student => {
    const records = appState.attendance.filter(a => a.studentId === student.id);
    const total = records.length;
    const present = records.filter(a => a.status === 'Present' || a.status === 'Late').length;
    const absent = records.filter(a => a.status === 'Absent').length;
    const rate = total > 0 ? Math.round((present / total) * 100) : 100;

    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
        <td class="py-3 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <img src="${student.avatar}" class="w-7 h-7 rounded-lg object-cover">
          ${currentLang === 'te' && student.nameTe ? student.nameTe : student.name}
        </td>
        <td class="py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">${student.className}</td>
        <td class="py-3 px-4 text-center font-bold text-emerald-600">${present}</td>
        <td class="py-3 px-4 text-center font-bold text-red-600">${absent}</td>
        <td class="py-3 px-4 text-center font-extrabold text-sm ${rate >= 80 ? 'text-emerald-600' : 'text-red-600'}">
          ${rate}%
        </td>
        <td class="py-3 px-4 text-right">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold ${rate >= 75 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-red-100 dark:bg-red-950 text-red-800'}">
            ${rate >= 75 ? 'Good' : 'Alert (< 75%)'}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function exportAttendanceCSV() {
  let csv = 'Student ID,Student Name,Class,Roll No,Date,Status,Arrival Time,Teacher Remarks\n';
  appState.attendance.forEach(att => {
    const student = appState.students.find(s => s.id === att.studentId);
    if (student) {
      csv += `"${student.id}","${student.name}","${student.className}","${student.rollNo}","${att.date}","${att.status}","${att.arrivalTime}","${att.remarks}"\n`;
    }
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `harish_tuition_attendance_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  showToast('Attendance report exported as CSV', 'success');
}

// Notes in Admin
function renderAdminNotes() {
  const container = document.getElementById('admin-notes-grid');
  if (!container) return;

  container.innerHTML = appState.notes.map(note => {
    const title = currentLang === 'te' && note.titleTe ? note.titleTe : note.title;
    const summary = currentLang === 'te' && note.summaryTe ? note.summaryTe : note.summary;

    return `
      <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              ${note.className} • ${note.subject}
            </span>
            <span class="text-[11px] text-slate-400 font-mono">${note.addedDate}</span>
          </div>
          <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1 font-display leading-snug">${title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">${summary}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onclick="openNoteModal('${note.id}')" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Read & Preview
          </button>
          <button onclick="deleteNote('${note.id}')" class="text-xs text-red-500 hover:text-red-700">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function deleteNote(id) {
  if (confirm('Delete this note?')) {
    appState.notes = appState.notes.filter(n => n.id !== id);
    saveState();
    renderAdminNotes();
    renderAdminKPIs();
    showToast('Note deleted', 'info');
  }
}

// Videos in Admin
function renderAdminVideos() {
  const container = document.getElementById('admin-videos-grid');
  if (!container) return;

  container.innerHTML = appState.videos.map(vid => {
    const title = currentLang === 'te' && vid.titleTe ? vid.titleTe : vid.title;

    return `
      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover-lift flex flex-col justify-between">
        <div class="relative bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer" onclick="openVideoModal('${vid.id}')">
          <img src="https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
          <div class="absolute w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i data-lucide="play" class="w-5 h-5 ml-0.5"></i>
          </div>
          <span class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded font-mono">
            ${vid.duration}
          </span>
        </div>

        <div class="p-5 flex-grow flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                ${vid.className} • ${vid.subject}
              </span>
              <span class="text-[11px] text-slate-400 font-mono">${vid.views} views</span>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1 font-display line-clamp-2">${title}</h4>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between">
            <button onclick="openVideoModal('${vid.id}')" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              Play Video
            </button>
            <button onclick="deleteVideo('${vid.id}')" class="text-xs text-red-500 hover:text-red-700">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function deleteVideo(id) {
  if (confirm('Delete this video?')) {
    appState.videos = appState.videos.filter(v => v.id !== id);
    saveState();
    renderAdminVideos();
    renderAdminKPIs();
    showToast('Video deleted', 'info');
  }
}

// Fee Ledger & UPI Settings in Admin
function renderFeeLedger() {
  const upiInput = document.getElementById('teacher-upi-input');
  const upiNameInput = document.getElementById('teacher-upi-name');
  if (upiInput) upiInput.value = appState.teacherAuth.upiId || '9876543210@upi';
  if (upiNameInput) upiNameInput.value = appState.teacherAuth.upiName || 'Harish Tuition Centre';

  const tbody = document.getElementById('fee-ledger-table-body');
  if (!tbody) return;

  tbody.innerHTML = appState.students.map(s => {
    const isPaid = s.feeStatus === 'Paid';
    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
        <td class="py-2.5 px-3 font-bold text-slate-900 dark:text-white">${s.name}</td>
        <td class="py-2.5 px-3 font-medium text-slate-500">${s.className}</td>
        <td class="py-2.5 px-3 font-mono font-bold">${s.feeAmount}</td>
        <td class="py-2.5 px-3 text-center">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${isPaid ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${s.feeStatus}
          </span>
        </td>
        <td class="py-2.5 px-3 text-right">
          <button onclick="toggleStudentFeeStatus('${s.id}')" class="px-3 py-1 rounded-lg text-xs font-bold ${isPaid ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' : 'bg-emerald-600 text-white'}">
            ${isPaid ? 'Mark Pending' : 'Mark Paid'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleStudentFeeStatus(studentId) {
  const s = appState.students.find(st => st.id === studentId);
  if (!s) return;

  s.feeStatus = s.feeStatus === 'Paid' ? 'Pending' : 'Paid';
  if (s.feeStatus === 'Paid') {
    s.lastPaidDate = new Date().toISOString().slice(0, 10);
  }
  saveState();
  renderFeeLedger();
  renderAdminKPIs();
  renderParentView();
  showToast(`Fee status for ${s.name} set to ${s.feeStatus}`, 'success');
}

function saveUpiSettings() {
  const upi = document.getElementById('teacher-upi-input').value.trim();
  const name = document.getElementById('teacher-upi-name').value.trim();

  appState.teacherAuth.upiId = upi;
  appState.teacherAuth.upiName = name;
  saveState();
  renderParentView();
  showToast('Teacher UPI Configuration Updated!', 'success');
}

// ============================================================================
// STUDENT PORTAL LOGIC
// ============================================================================
function setStudentTab(tabName) {
  currentStudentTab = tabName;
  const tabs = ['notes', 'videos', 'tests', 'calendar'];

  tabs.forEach(t => {
    const panel = document.getElementById(`student-panel-${t}`);
    const btn = document.getElementById(`student-tab-${t}`);
    if (panel) {
      if (t === tabName) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
    if (btn) {
      if (t === tabName) btn.className = 'tab-btn active px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all';
      else btn.className = 'tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 transition-all';
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderStudentView() {
  const student = appState.students.find(s => s.id === activeStudentId) || appState.students[0];
  if (!student) return;

  const stuName = currentLang === 'te' && student.nameTe ? student.nameTe : student.name;
  const clsName = currentLang === 'te' && student.classNameTe ? student.classNameTe : student.className;

  document.getElementById('student-view-name').textContent = stuName;
  document.getElementById('student-view-class-badge').textContent = `${clsName} (${student.board})`;
  document.getElementById('student-view-id').textContent = student.id;
  document.getElementById('student-view-roll').textContent = student.rollNo;
  document.getElementById('student-view-avatar').src = student.avatar;

  // Attendance metrics
  const records = appState.attendance.filter(a => a.studentId === student.id);
  const total = records.length;
  const presentCount = records.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const absentCount = records.filter(a => a.status === 'Absent').length;
  const rate = total > 0 ? Math.round((presentCount / total) * 100) : 100;

  document.getElementById('student-attendance-percent').textContent = `${rate}%`;
  document.getElementById('student-attendance-detail').textContent = `${presentCount} ${currentLang === 'te' ? 'హాజరు' : 'Present'} • ${absentCount} ${currentLang === 'te' ? 'రాలేదు' : 'Absent'}`;

  // Today status
  const todayRecord = appState.attendance.find(a => a.studentId === student.id && a.date === '2026-09-12');
  const todayStatusEl = document.getElementById('student-today-status');
  const todayTimeEl = document.getElementById('student-today-time');

  if (todayRecord) {
    const isPres = todayRecord.status === 'Present';
    todayStatusEl.innerHTML = `<span class="w-3 h-3 rounded-full ${isPres ? 'bg-emerald-500' : 'bg-red-500'} live-dot"></span> ${isPres ? (currentLang === 'te' ? 'హాజరయ్యారు' : 'Present') : (currentLang === 'te' ? 'రాలేదు' : 'Absent')}`;
    todayTimeEl.textContent = todayRecord.status === 'Absent' ? (todayRecord.remarksTe || todayRecord.remarks) : `Checked in at ${todayRecord.arrivalTime}`;
  }

  // Render Notes
  renderStudentNotes(student.classId);

  // Render Videos
  renderStudentVideos(student.classId);

  // Render Tests
  renderStudentTests(student.id);

  // Render Attendance History Log
  renderStudentAttendanceLog(student.id);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderStudentNotes(classId) {
  const container = document.getElementById('student-notes-grid');
  if (!container) return;

  const notes = appState.notes.filter(n => n.classId === classId);

  container.innerHTML = notes.map(n => {
    const title = currentLang === 'te' && n.titleTe ? n.titleTe : n.title;
    const summary = currentLang === 'te' && n.summaryTe ? n.summaryTe : n.summary;

    return `
      <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              ${n.subject}
            </span>
            <span class="text-[11px] text-slate-400 font-mono">${n.readTime}</span>
          </div>
          <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1 font-display">${title}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">${summary}</p>
        </div>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onclick="openNoteModal('${n.id}')" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-4 h-4"></i> Read Notes
          </button>
          <button onclick="downloadNoteContent('${n.id}')" class="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> Download
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderStudentVideos(classId) {
  const container = document.getElementById('student-videos-grid');
  if (!container) return;

  const videos = appState.videos.filter(v => v.classId === classId);

  container.innerHTML = videos.map(v => {
    const title = currentLang === 'te' && v.titleTe ? v.titleTe : v.title;
    return `
      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover-lift flex flex-col justify-between">
        <div class="relative bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer" onclick="openVideoModal('${v.id}')">
          <img src="https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
          <div class="absolute w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i data-lucide="play" class="w-5 h-5 ml-0.5"></i>
          </div>
          <span class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded font-mono">${v.duration}</span>
        </div>
        <div class="p-5 flex-grow flex flex-col justify-between">
          <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1 font-display line-clamp-2">${title}</h4>
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
            <button onclick="openVideoModal('${v.id}')" class="w-full bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 text-blue-800 dark:text-blue-300 font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Watch Lecture
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderStudentTests(studentId) {
  const tbody = document.getElementById('student-tests-table-body');
  if (!tbody) return;

  const testRows = [];
  appState.tests.forEach(test => {
    const sc = test.scores.find(s => s.studentId === studentId);
    if (sc) {
      testRows.push({
        title: currentLang === 'te' && test.titleTe ? test.titleTe : test.title,
        subject: currentLang === 'te' && test.subjectTe ? test.subjectTe : test.subject,
        date: test.date,
        maxMarks: test.maxMarks,
        marks: sc.marks,
        grade: sc.grade,
        remarks: currentLang === 'te' && sc.remarksTe ? sc.remarksTe : sc.remarks
      });
    }
  });

  tbody.innerHTML = testRows.map(t => {
    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
        <td class="py-3 px-4 font-bold text-slate-900 dark:text-white">${t.title}</td>
        <td class="py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">${t.subject}</td>
        <td class="py-3 px-4 font-mono text-slate-500">${t.date}</td>
        <td class="py-3 px-4 text-center font-extrabold text-slate-900 dark:text-white">${t.marks} / ${t.maxMarks}</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono">${t.grade}</span>
        </td>
        <td class="py-3 px-4 text-xs text-slate-700 dark:text-slate-300 italic">"${t.remarks}"</td>
      </tr>
    `;
  }).join('');
}

function renderStudentAttendanceLog(studentId) {
  const container = document.getElementById('student-attendance-log-container');
  if (!container) return;

  const logs = appState.attendance.filter(a => a.studentId === studentId).sort((a, b) => b.date.localeCompare(a.date));

  container.innerHTML = logs.map(l => {
    const isPres = l.status === 'Present';
    const remark = currentLang === 'te' && l.remarksTe ? l.remarksTe : l.remarks;

    return `
      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
        <div class="flex items-center gap-3">
          <span class="font-mono font-bold text-slate-800 dark:text-slate-200">${l.date}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${isPres ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-red-100 dark:bg-red-950 text-red-800'}">
            ${isPres ? (currentLang === 'te' ? 'హాజరు' : 'Present') : (currentLang === 'te' ? 'రాలేదు' : 'Absent')}
          </span>
        </div>
        <div class="text-slate-500 font-mono">${l.arrivalTime}</div>
        <div class="text-slate-600 dark:text-slate-400 italic">"${remark}"</div>
      </div>
    `;
  }).join('');
}

// ============================================================================
// PARENT ACCESS PORTAL LOGIC & UPI QR CODE PAYMENT
// ============================================================================
function renderParentView() {
  const ward = appState.students.find(s => s.id === activeParentStudentId) || appState.students[0];
  if (!ward) return;

  const stuName = currentLang === 'te' && ward.nameTe ? ward.nameTe : ward.name;
  const parName = currentLang === 'te' && ward.parentNameTe ? ward.parentNameTe : ward.parentName;
  const clsName = currentLang === 'te' && ward.classNameTe ? ward.classNameTe : ward.className;

  document.getElementById('parent-ward-name').textContent = stuName;
  document.getElementById('parent-ward-class').textContent = `${clsName} (${ward.board})`;
  document.getElementById('parent-ward-roll').textContent = ward.rollNo;
  document.getElementById('parent-ward-id').textContent = ward.id;
  document.getElementById('parent-ward-avatar').src = ward.avatar;

  document.getElementById('parent-guardian-name').textContent = parName;
  document.getElementById('parent-guardian-phone').textContent = ward.parentPhone;

  // Fee Status Badge
  const feeBadge = document.getElementById('parent-fee-badge');
  if (feeBadge) {
    if (ward.feeStatus === 'Paid') {
      feeBadge.className = 'px-2.5 py-0.5 rounded-full font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800';
      feeBadge.textContent = currentLang === 'te' ? `చెల్లించబడింది (${ward.feeAmount})` : `Paid (${ward.feeAmount})`;
    } else {
      feeBadge.className = 'px-2.5 py-0.5 rounded-full font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800';
      feeBadge.textContent = currentLang === 'te' ? `బాకీ ఉంది (${ward.feeAmount})` : `Pending (${ward.feeAmount})`;
    }
  }

  // Live Today's Attendance
  const todayRecord = appState.attendance.find(a => a.studentId === ward.id && a.date === '2026-09-12');
  const statusText = document.getElementById('parent-live-status-text');
  const timeText = document.getElementById('parent-live-time-text');
  const remarkText = document.getElementById('parent-live-remark-text');

  if (todayRecord) {
    const isPres = todayRecord.status === 'Present';
    statusText.textContent = isPres ? (currentLang === 'te' ? 'హాజరయ్యారు' : 'Present') : (currentLang === 'te' ? 'రాలేదు' : 'Absent');
    timeText.textContent = todayRecord.status === 'Absent' ? 'Marked absent by teacher' : `Checked in at ${todayRecord.arrivalTime}`;
    remarkText.textContent = `Teacher Note: "${currentLang === 'te' && todayRecord.remarksTe ? todayRecord.remarksTe : todayRecord.remarks}"`;
  }

  // Attendance stats
  const records = appState.attendance.filter(a => a.studentId === ward.id);
  const total = records.length;
  const presentCount = records.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const absentCount = records.filter(a => a.status === 'Absent').length;
  const rate = total > 0 ? Math.round((presentCount / total) * 100) : 100;

  document.getElementById('parent-stat-percentage').textContent = `${rate}%`;
  document.getElementById('parent-stat-absent-count').textContent = `${absentCount} Day${absentCount === 1 ? '' : 's'}`;

  // WhatsApp Connect link
  const cleanPhone = appState.centreInfo.phone.replace(/[^0-9]/g, '');
  const waLink = document.getElementById('parent-whatsapp-link');
  if (waLink) {
    waLink.href = `https://wa.me/${cleanPhone}?text=Hello%20Harish%20Sir%2C%20I%20am%20the%20parent%20of%20${encodeURIComponent(ward.name)}%20(${encodeURIComponent(ward.className)}).`;
  }

  // =========================================================================
  // GENERATE UPI QR CODE FOR FEE PAYMENT
  // =========================================================================
  const upiId = appState.teacherAuth.upiId || '9876543210@upi';
  const upiName = appState.teacherAuth.upiName || 'Harish Tuition Centre';
  const feeAmountNum = ward.feeAmountNum || 2500;

  document.getElementById('parent-fee-amount-display').textContent = ward.feeAmount || `₹${feeAmountNum}`;
  document.getElementById('parent-upi-id-display').textContent = upiId;

  // Standard UPI URI format
  const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(upiName)}&am=${feeAmountNum}&cu=INR&tn=${encodeURIComponent(ward.name + ' Tuition Fee')}`;
  
  // Free instant QR code generator API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(upiUri)}`;
  const qrImg = document.getElementById('parent-upi-qr-image');
  if (qrImg) {
    qrImg.src = qrUrl;
  }

  // Render Homework & Tests
  renderParentHomework(ward.classId);
  renderParentTests(ward.id);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function copyUpiId() {
  const upiId = document.getElementById('parent-upi-id-display').textContent.trim();
  navigator.clipboard.writeText(upiId).then(() => {
    showToast(currentLang === 'te' ? `UPI ID కాపీ చేయబడింది: ${upiId}` : `UPI ID copied: ${upiId}`, 'success');
  }).catch(() => {
    showToast(`UPI ID: ${upiId}`, 'info');
  });
}

function handleParentPaymentSubmit(e) {
  e.preventDefault();
  const utr = document.getElementById('parent-utr-input').value.trim();
  const ward = appState.students.find(s => s.id === activeParentStudentId);

  if (ward) {
    ward.transactionRef = utr;
    ward.feeStatus = 'Paid';
    ward.lastPaidDate = new Date().toISOString().slice(0, 10);
    saveState();

    const msg = document.getElementById('parent-payment-confirmation-msg');
    msg.textContent = currentLang === 'te' 
      ? `ధన్యవాదాలు! మీ UTR నంబర్ (${utr}) నమోదైంది. హరీష్ సార్ దీనిని ధృవీకరిస్తారు.`
      : `Thank you! UTR (${utr}) submitted. Harish Sir has been notified of your payment.`;
    msg.classList.remove('hidden');

    renderParentView();
    showToast(currentLang === 'te' ? 'ఫీజు చెల్లింపు రిఫరెన్స్ సమర్పించబడింది!' : 'Fee payment reference submitted!', 'success');
  }
}

function renderParentHomework(classId) {
  const container = document.getElementById('parent-homework-container');
  if (!container) return;

  const items = appState.homework.filter(h => h.classId === classId);
  if (items.length === 0) {
    container.innerHTML = `<div class="col-span-2 text-center py-4 text-slate-400">No homework posted for today.</div>`;
    return;
  }

  container.innerHTML = items.map(hw => {
    const topic = currentLang === 'te' && hw.topicTaughtTe ? hw.topicTaughtTe : hw.topicTaught;
    const task = currentLang === 'te' && hw.homeworkAssignedTe ? hw.homeworkAssignedTe : hw.homeworkAssigned;

    return `
      <div class="bg-amber-50/50 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 space-y-2 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-bold text-amber-900 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-2 py-0.5 rounded-md">${hw.subject}</span>
          <span class="font-mono text-slate-500">Date: ${hw.date}</span>
        </div>
        <div>
          <div class="font-bold text-slate-700 dark:text-slate-300">${currentLang === 'te' ? 'తరగతిలో బోధించినది:' : 'Taught in class:'}</div>
          <p class="text-slate-600 dark:text-slate-400">${topic}</p>
        </div>
        <div class="pt-1">
          <div class="font-bold text-amber-800 dark:text-amber-400">${currentLang === 'te' ? 'చేయవలసిన హోంవర్క్:' : 'Homework to complete tonight:'}</div>
          <p class="text-slate-800 dark:text-slate-200 font-medium">${task}</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderParentTests(studentId) {
  const tbody = document.getElementById('parent-tests-table-body');
  if (!tbody) return;

  const testRows = [];
  appState.tests.forEach(test => {
    const sc = test.scores.find(s => s.studentId === studentId);
    if (sc) {
      testRows.push({
        title: currentLang === 'te' && test.titleTe ? test.titleTe : test.title,
        subject: currentLang === 'te' && test.subjectTe ? test.subjectTe : test.subject,
        date: test.date,
        maxMarks: test.maxMarks,
        marks: sc.marks,
        grade: sc.grade,
        remarks: currentLang === 'te' && sc.remarksTe ? sc.remarksTe : sc.remarks
      });
    }
  });

  tbody.innerHTML = testRows.map(t => {
    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
        <td class="py-3 px-4 font-bold text-slate-900 dark:text-white">${t.title}</td>
        <td class="py-3 px-4 font-semibold text-slate-600 dark:text-slate-300">${t.subject}</td>
        <td class="py-3 px-4 font-mono text-slate-500">${t.date}</td>
        <td class="py-3 px-4 text-center font-extrabold text-slate-900 dark:text-white">${t.marks} / ${t.maxMarks}</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono">${t.grade}</span>
        </td>
        <td class="py-3 px-4 text-xs text-slate-700 dark:text-slate-300 italic">"${t.remarks}"</td>
      </tr>
    `;
  }).join('');
}

// ============================================================================
// MODAL CONTROLS & UTILITIES
// ============================================================================
function openVideoModal(id) {
  const vid = appState.videos.find(v => v.id === id);
  if (!vid) return;

  document.getElementById('modal-video-title').textContent = currentLang === 'te' && vid.titleTe ? vid.titleTe : vid.title;
  document.getElementById('modal-video-subject-badge').textContent = `${vid.className} • ${vid.subject}`;
  document.getElementById('modal-video-summary').textContent = currentLang === 'te' && vid.summaryTe ? vid.summaryTe : vid.summary;
  document.getElementById('modal-video-iframe').src = `https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1`;

  document.getElementById('modal-video').classList.remove('hidden');
}

function closeVideoModal() {
  document.getElementById('modal-video-iframe').src = '';
  document.getElementById('modal-video').classList.add('hidden');
}

function openNoteModal(id) {
  const note = appState.notes.find(n => n.id === id);
  if (!note) return;

  document.getElementById('modal-note-title').textContent = currentLang === 'te' && note.titleTe ? note.titleTe : note.title;
  document.getElementById('modal-note-class-badge').textContent = note.className;
  document.getElementById('modal-note-subject').textContent = note.subject;
  document.getElementById('modal-note-time').textContent = `${note.readTime} • Harish Tuition Notes`;
  document.getElementById('modal-note-body').innerHTML = note.content;

  document.getElementById('modal-note').classList.remove('hidden');
}

function closeNoteModal() {
  document.getElementById('modal-note').classList.add('hidden');
}

function downloadNoteContent(noteId) {
  const note = appState.notes[0];
  const content = `HARISH TUITION CENTRE - OFFICIAL STUDY NOTES\nClass: ${note.className} | Subject: ${note.subject}\nTitle: ${note.title}\n\nSUMMARY:\n${note.summary}\n\n---\nCreated by NALAM HARISH, M.Sc., B.Ed. (Harish Tuition Centre)`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${note.title.replace(/[^a-zA-Z0-9]/g, '_')}_Notes.txt`;
  a.click();
  showToast('Notes downloaded successfully!', 'success');
}

// Add Student Modal
function openAddStudentModal() {
  document.getElementById('modal-add-student').classList.remove('hidden');
}
function closeAddStudentModal() {
  document.getElementById('modal-add-student').classList.add('hidden');
}

function handleCreateStudent(e) {
  e.preventDefault();
  const name = document.getElementById('new-student-name').value.trim();
  const classId = document.getElementById('new-student-class').value;
  const rollNo = document.getElementById('new-student-roll').value.trim();
  const board = document.getElementById('new-student-board').value;
  const pin = document.getElementById('new-student-pin').value.trim();
  const parentName = document.getElementById('new-student-parent').value.trim();
  const parentPhone = document.getElementById('new-student-phone').value.trim();

  const classNames = { 'class-7': 'Class 7', 'class-8': 'Class 8', 'class-9': 'Class 9', 'class-10': 'Class 10' };
  const numId = Math.floor(100 + Math.random() * 900);
  const newId = `HTC-${classId.slice(6)}${numId}`;

  const newStudent = {
    id: newId,
    password: pin || '1234',
    name,
    rollNo,
    classId,
    className: classNames[classId],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    parentName,
    parentPhone,
    board,
    feeStatus: 'Paid',
    feeAmountNum: classId === 'class-10' ? 2500 : 2000,
    feeAmount: classId === 'class-10' ? '₹2,500/month' : '₹2,000/month',
    lastPaidDate: new Date().toISOString().slice(0, 10),
    joinedDate: new Date().toISOString().slice(0, 10)
  };

  appState.students.push(newStudent);
  saveState();
  renderCredentialsDirectory();
  renderAdminKPIs();
  renderAttendanceSheet();
  closeAddStudentModal();
  showToast(`Enrolled ${name} successfully! (ID: ${newId}, Password: ${pin})`, 'success');
}

// Add Note Modal
function openAddNoteModal() {
  document.getElementById('modal-add-note').classList.remove('hidden');
}
function closeAddNoteModal() {
  document.getElementById('modal-add-note').classList.add('hidden');
}

function handleCreateNote(e) {
  e.preventDefault();
  const title = document.getElementById('new-note-title').value.trim();
  const classId = document.getElementById('new-note-class').value;
  const subject = document.getElementById('new-note-subject').value;
  const chapter = document.getElementById('new-note-chapter').value.trim();
  const summary = document.getElementById('new-note-summary').value.trim();
  const content = document.getElementById('new-note-content').value.trim();

  const classNames = { 'class-7': 'Class 7', 'class-8': 'Class 8', 'class-9': 'Class 9', 'class-10': 'Class 10' };

  appState.notes.unshift({
    id: `note-${Date.now()}`,
    title,
    subject,
    classId,
    className: classNames[classId],
    chapter,
    topic: chapter,
    addedDate: new Date().toISOString().slice(0, 10),
    downloads: 1,
    readTime: '10 min read',
    summary,
    content: `<div class="space-y-3">${content.replace(/\n/g, '<br>')}</div>`
  });

  saveState();
  renderAdminNotes();
  renderAdminKPIs();
  closeAddNoteModal();
  showToast(`Note "${title}" published!`, 'success');
}

// Add Video Modal
function openAddVideoModal() {
  document.getElementById('modal-add-video').classList.remove('hidden');
}
function closeAddVideoModal() {
  document.getElementById('modal-add-video').classList.add('hidden');
}

function handleCreateVideo(e) {
  e.preventDefault();
  const title = document.getElementById('new-video-title').value.trim();
  const classId = document.getElementById('new-video-class').value;
  const subject = document.getElementById('new-video-subject').value;
  const rawUrl = document.getElementById('new-video-url').value.trim();
  const summary = document.getElementById('new-video-summary').value.trim();

  let youtubeId = rawUrl;
  if (rawUrl.includes('v=')) youtubeId = rawUrl.split('v=')[1].split('&')[0];
  else if (rawUrl.includes('youtu.be/')) youtubeId = rawUrl.split('youtu.be/')[1].split('?')[0];

  const classNames = { 'class-7': 'Class 7', 'class-8': 'Class 8', 'class-9': 'Class 9', 'class-10': 'Class 10' };

  appState.videos.unshift({
    id: `vid-${Date.now()}`,
    title,
    subject,
    classId,
    className: classNames[classId],
    duration: '20:00',
    addedDate: new Date().toISOString().slice(0, 10),
    youtubeId,
    instructor: 'Harish Sir',
    views: 1,
    summary
  });

  saveState();
  renderAdminVideos();
  renderAdminKPIs();
  closeAddVideoModal();
  showToast('Video lecture published!', 'success');
}

// Toast
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  let bg = 'bg-slate-900 text-white';
  let icon = 'info';

  if (type === 'success') {
    bg = 'bg-emerald-700 text-white shadow-emerald-900/30';
    icon = 'check-circle';
  } else if (type === 'error') {
    bg = 'bg-red-700 text-white shadow-red-900/30';
    icon = 'alert-triangle';
  }

  toast.className = `toast px-4 py-3 rounded-2xl shadow-xl border border-white/10 text-xs font-semibold flex items-center gap-2.5 ${bg}`;
  toast.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 shrink-0"></i> <span>${msg}</span>`;

  container.appendChild(toast);
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function resetToDefaultData() {
  if (confirm('Reset to initial demo data?')) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(AUTH_KEY);
    location.reload();
  }
}
