// Harish Tuition Centre - Seed Data for Classes 7th to 10th
window.INITIAL_DATA = {
  centreInfo: {
    name: "Harish Tuition Centre",
    tagline: "Empowering Students of Classes 7th to 10th for Academic Excellence",
    director: "Harish R., M.Sc., B.Ed. (12+ Years Teaching Experience)",
    phone: "+91 98765 43210",
    email: "contact@harishtuition.edu.in",
    address: "#42, Temple Road, 2nd Main, Near City Library, Main Town",
    classesOffered: ["Class 7", "Class 8", "Class 9", "Class 10"],
    boards: ["CBSE", "State Board", "ICSE"],
    timings: "Monday - Saturday: 4:30 PM - 8:30 PM | Sunday: 9:00 AM - 12:30 PM (Doubt Sessions)",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "English", "Social Science"]
  },

  classes: [
    {
      id: "class-7",
      name: "Class 7",
      description: "Foundation building in Arithmetic, Basic Algebra, Living Organisms, and Physical Science.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "4:30 PM - 5:30 PM"
    },
    {
      id: "class-8",
      name: "Class 8",
      description: "Intermediate concepts, Algebraic Expressions, Cell Biology, Light & Sound, and Grammar.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "5:30 PM - 6:30 PM"
    },
    {
      id: "class-9",
      name: "Class 9",
      description: "Pre-board rigor: Polynomials, Coordinate Geometry, Laws of Motion, Atoms & Molecules.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "6:30 PM - 7:30 PM"
    },
    {
      id: "class-10",
      name: "Class 10",
      description: "Comprehensive Board Exam coaching, Previous 10 Years Question Papers, Weekly Mock Tests.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      batchTime: "7:30 PM - 8:30 PM"
    }
  ],

  students: [
    // Class 10 Students
    {
      id: "HTC-1001",
      name: "Rahul Verma",
      rollNo: "10-01",
      classId: "class-10",
      className: "Class 10",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      parentName: "Suresh Verma",
      parentPhone: "+91 98450 11223",
      parentPin: "1234",
      parentEmail: "suresh.verma@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmount: "₹2,500/month",
      joinedDate: "2026-04-10"
    },
    {
      id: "HTC-1002",
      name: "Ananya Iyer",
      rollNo: "10-02",
      classId: "class-10",
      className: "Class 10",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      parentName: "R. Iyer",
      parentPhone: "+91 98450 22334",
      parentPin: "1234",
      parentEmail: "iyer.family@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmount: "₹2,500/month",
      joinedDate: "2026-04-12"
    },
    {
      id: "HTC-1003",
      name: "Karthik Reddy",
      rollNo: "10-03",
      classId: "class-10",
      className: "Class 10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      parentName: "Venkatesh Reddy",
      parentPhone: "+91 98450 33445",
      parentPin: "1234",
      parentEmail: "venkat.reddy@example.com",
      board: "State Board",
      feeStatus: "Pending",
      feeAmount: "₹2,500/month",
      joinedDate: "2026-05-02"
    },

    // Class 9 Students
    {
      id: "HTC-0901",
      name: "Diya Sharma",
      rollNo: "09-01",
      classId: "class-9",
      className: "Class 9",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      parentName: "Rajesh Sharma",
      parentPhone: "+91 98450 44556",
      parentPin: "1234",
      parentEmail: "rajesh.sharma@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmount: "₹2,200/month",
      joinedDate: "2026-04-15"
    },
    {
      id: "HTC-0902",
      name: "Rohan Kulkarni",
      rollNo: "09-02",
      classId: "class-9",
      className: "Class 9",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      parentName: "Mahesh Kulkarni",
      parentPhone: "+91 98450 55667",
      parentPin: "1234",
      parentEmail: "mahesh.k@example.com",
      board: "State Board",
      feeStatus: "Paid",
      feeAmount: "₹2,200/month",
      joinedDate: "2026-04-20"
    },

    // Class 8 Students
    {
      id: "HTC-0801",
      name: "Sneha Patil",
      rollNo: "08-01",
      classId: "class-8",
      className: "Class 8",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      parentName: "Ashok Patil",
      parentPhone: "+91 98450 66778",
      parentPin: "1234",
      parentEmail: "ashok.patil@example.com",
      board: "ICSE",
      feeStatus: "Paid",
      feeAmount: "₹2,000/month",
      joinedDate: "2026-05-05"
    },
    {
      id: "HTC-0802",
      name: "Aditya Nair",
      rollNo: "08-02",
      classId: "class-8",
      className: "Class 8",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      parentName: "M. Nair",
      parentPhone: "+91 98450 77889",
      parentPin: "1234",
      parentEmail: "nair.m@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmount: "₹2,000/month",
      joinedDate: "2026-05-10"
    },

    // Class 7 Students
    {
      id: "HTC-0701",
      name: "Pooja Hegde",
      rollNo: "07-01",
      classId: "class-7",
      className: "Class 7",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      parentName: "Shankar Hegde",
      parentPhone: "+91 98450 88990",
      parentPin: "1234",
      parentEmail: "shankar.hegde@example.com",
      board: "CBSE",
      feeStatus: "Paid",
      feeAmount: "₹1,800/month",
      joinedDate: "2026-05-15"
    },
    {
      id: "HTC-0702",
      name: "Varun Rao",
      rollNo: "07-02",
      classId: "class-7",
      className: "Class 7",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      parentName: "Gopal Rao",
      parentPhone: "+91 98450 99001",
      parentPin: "1234",
      parentEmail: "gopal.rao@example.com",
      board: "State Board",
      feeStatus: "Pending",
      feeAmount: "₹1,800/month",
      joinedDate: "2026-06-01"
    }
  ],

  // Generated Historical Attendance Records
  attendance: [
    // Today (2026-09-10)
    { date: "2026-09-10", studentId: "HTC-1001", status: "Present", arrivalTime: "7:28 PM", remarks: "Punctual, attentive" },
    { date: "2026-09-10", studentId: "HTC-1002", status: "Present", arrivalTime: "7:30 PM", remarks: "Active participation in problem solving" },
    { date: "2026-09-10", studentId: "HTC-1003", status: "Absent", arrivalTime: "-", remarks: "Parent informed: mild fever" },
    { date: "2026-09-10", studentId: "HTC-0901", status: "Present", arrivalTime: "6:25 PM", remarks: "Completed homework" },
    { date: "2026-09-10", studentId: "HTC-0902", status: "Present", arrivalTime: "6:32 PM", remarks: "Arrived slightly late" },
    { date: "2026-09-10", studentId: "HTC-0801", status: "Present", arrivalTime: "5:27 PM", remarks: "Good notebook maintenance" },
    { date: "2026-09-10", studentId: "HTC-0802", status: "Present", arrivalTime: "5:30 PM", remarks: "Solved chapter exercises" },
    { date: "2026-09-10", studentId: "HTC-0701", status: "Present", arrivalTime: "4:28 PM", remarks: "Well prepared for oral quiz" },
    { date: "2026-09-10", studentId: "HTC-0702", status: "Present", arrivalTime: "4:31 PM", remarks: "Focused on math fractions" },

    // Yesterday (2026-09-09)
    { date: "2026-09-09", studentId: "HTC-1001", status: "Present", arrivalTime: "7:25 PM", remarks: "Good score in oral test" },
    { date: "2026-09-09", studentId: "HTC-1002", status: "Present", arrivalTime: "7:29 PM", remarks: "Very active in Chemistry discussion" },
    { date: "2026-09-09", studentId: "HTC-1003", status: "Present", arrivalTime: "7:35 PM", remarks: "Came late due to rain" },
    { date: "2026-09-09", studentId: "HTC-0901", status: "Present", arrivalTime: "6:28 PM", remarks: "Done with physics numericals" },
    { date: "2026-09-09", studentId: "HTC-0902", status: "Absent", arrivalTime: "-", remarks: "School sports practice" },
    { date: "2026-09-09", studentId: "HTC-0801", status: "Present", arrivalTime: "5:30 PM", remarks: "Clear understanding of linear equations" },
    { date: "2026-09-09", studentId: "HTC-0802", status: "Present", arrivalTime: "5:30 PM", remarks: "Regular" },
    { date: "2026-09-09", studentId: "HTC-0701", status: "Present", arrivalTime: "4:30 PM", remarks: "Regular" },
    { date: "2026-09-09", studentId: "HTC-0702", status: "Present", arrivalTime: "4:30 PM", remarks: "Regular" },

    // 2026-09-08
    { date: "2026-09-08", studentId: "HTC-1001", status: "Present", arrivalTime: "7:27 PM", remarks: "Solved quadratic equation problems" },
    { date: "2026-09-08", studentId: "HTC-1002", status: "Present", arrivalTime: "7:30 PM", remarks: "Excellent" },
    { date: "2026-09-08", studentId: "HTC-1003", status: "Present", arrivalTime: "7:30 PM", remarks: "Good" },
    { date: "2026-09-08", studentId: "HTC-0901", status: "Present", arrivalTime: "6:30 PM", remarks: "Good" },
    { date: "2026-09-08", studentId: "HTC-0902", status: "Present", arrivalTime: "6:30 PM", remarks: "Good" },
    { date: "2026-09-08", studentId: "HTC-0801", status: "Present", arrivalTime: "5:30 PM", remarks: "Good" },
    { date: "2026-09-08", studentId: "HTC-0802", status: "Absent", arrivalTime: "-", remarks: "Family function" },
    { date: "2026-09-08", studentId: "HTC-0701", status: "Present", arrivalTime: "4:30 PM", remarks: "Good" },
    { date: "2026-09-08", studentId: "HTC-0702", status: "Absent", arrivalTime: "-", remarks: "Dental appointment" },

    // Earlier records for Rahul (HTC-1001)
    { date: "2026-09-06", studentId: "HTC-1001", status: "Present", arrivalTime: "7:25 PM", remarks: "Weekly test attended" },
    { date: "2026-09-05", studentId: "HTC-1001", status: "Present", arrivalTime: "7:26 PM", remarks: "Doubt clearing session" },
    { date: "2026-09-04", studentId: "HTC-1001", status: "Present", arrivalTime: "7:28 PM", remarks: "Physics light ray diagrams" },
    { date: "2026-09-03", studentId: "HTC-1001", status: "Absent", arrivalTime: "-", remarks: "Informed: Not well" },
    { date: "2026-09-02", studentId: "HTC-1001", status: "Present", arrivalTime: "7:30 PM", remarks: "Algebra problems solved" },
    { date: "2026-09-01", studentId: "HTC-1001", status: "Present", arrivalTime: "7:29 PM", remarks: "Monthly start" }
  ],

  // Academic Subject Notes & Study Materials (Classes 7 to 10)
  notes: [
    // Class 10 Notes
    {
      id: "note-10-1",
      title: "Real Numbers & Fundamental Theorem of Arithmetic",
      subject: "Mathematics",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Real Numbers",
      topic: "Euclid's Division Lemma & Prime Factorization HCF/LCM",
      addedDate: "2026-09-02",
      downloads: 48,
      readTime: "15 min read",
      summary: "Comprehensive guide covering Euclid's division algorithm, fundamental theorem of arithmetic, proving irrationality of root 2, root 3, root 5, and decimal expansions.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">1. Fundamental Theorem of Arithmetic</h4>
<p class="mb-3 text-slate-700">Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur.</p>

<div class="p-3 bg-emerald-50 rounded-lg border border-emerald-200 my-3 font-semibold text-emerald-900">
  Product Rule: HCF(a, b) &times; LCM(a, b) = a &times; b
</div>

<h4 class="font-bold text-lg text-emerald-800 mt-4 mb-2">2. Proving Irrationality (Standard Proof for &radic;2)</h4>
<ol class="list-decimal pl-5 space-y-1 my-2 text-slate-700">
  <li>Assume to the contrary that &radic;2 is rational: &radic;2 = a / b, where a and b are co-prime integers (b &ne; 0).</li>
  <li>Squaring both sides: 2 = a<sup>2</sup> / b<sup>2</sup> &rArr; 2b<sup>2</sup> = a<sup>2</sup>.</li>
  <li>Therefore, 2 divides a<sup>2</sup>, which means 2 divides a. Let a = 2c.</li>
  <li>Substituting: 2b<sup>2</sup> = 4c<sup>2</sup> &rArr; b<sup>2</sup> = 2c<sup>2</sup>. Thus 2 divides b.</li>
  <li>Hence, a and b share a common factor of 2. This contradicts our assumption of co-prime numbers!</li>
  <li><strong>Conclusion: &radic;2 is irrational.</strong></li>
</ol>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 my-4 text-blue-900 text-sm">
  <strong>Harish Sir's Board Exam Tip:</strong> Always clearly write <em>"where a and b are co-prime integers"</em>. CBSE board examiners check for this step explicitly!
</div>
`
    },
    {
      id: "note-10-2",
      title: "Chemical Reactions and Equations - Complete Revision Notes",
      subject: "Science",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Chemical Reactions and Equations",
      topic: "Types of Reactions, Balancing Equations & Redox Reactions",
      addedDate: "2026-09-04",
      downloads: 56,
      readTime: "20 min read",
      summary: "Quick revision mind-map of Combination, Decomposition, Displacement, Double Displacement, Oxidation-Reduction, Corrosion, and Rancidity with balanced equations.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">4 Main Types of Chemical Reactions</h4>
<ul class="list-disc pl-5 space-y-2 text-slate-700">
  <li><strong>Combination Reaction:</strong> CaO (s) + H<sub>2</sub>O (l) &rarr; Ca(OH)<sub>2</sub> (aq) + Heat <em>(Quicklime slaking - exothermic)</em></li>
  <li><strong>Thermal Decomposition:</strong> 2FeSO<sub>4</sub> (s) &rarr; Fe<sub>2</sub>O<sub>3</sub> (s) + SO<sub>2</sub> (g) + SO<sub>3</sub> (g) <em>(Green crystals turn reddish brown)</em></li>
  <li><strong>Displacement Reaction:</strong> Fe (s) + CuSO<sub>4</sub> (aq) &rarr; FeSO<sub>4</sub> (aq) + Cu (s) <em>(Blue solution turns pale green)</em></li>
  <li><strong>Double Displacement:</strong> Na<sub>2</sub>SO<sub>4</sub> (aq) + BaCl<sub>2</sub> (aq) &rarr; BaSO<sub>4</sub> &darr; (s) + 2NaCl (aq) <em>(White precipitate of BaSO4)</em></li>
</ul>

<h4 class="font-bold text-lg text-emerald-800 mt-4 mb-2">Redox Reactions Simplified</h4>
<p class="text-slate-700"><strong>Oxidation:</strong> Gain of oxygen or loss of hydrogen.</p>
<p class="text-slate-700"><strong>Reduction:</strong> Loss of oxygen or gain of hydrogen.</p>
`
    },
    {
      id: "note-10-3",
      title: "Quadratic Equations - Formula Method & Discriminant",
      subject: "Mathematics",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 4: Quadratic Equations",
      topic: "Nature of Roots & Word Problems on Speed and Time",
      addedDate: "2026-09-07",
      downloads: 41,
      readTime: "12 min read",
      summary: "Standard form ax^2 + bx + c = 0, quadratic formula, discriminant rules (D > 0, D = 0, D < 0) and step-by-step solutions for speed/time questions.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Standard Quadratic Form</h4>
<p class="text-slate-700 mb-2 font-mono">ax<sup>2</sup> + bx + c = 0 &nbsp;(a &ne; 0)</p>

<h4 class="font-bold text-lg text-emerald-800 mt-3 mb-2">Quadratic Formula (Sridharacharya Method)</h4>
<div class="p-3 bg-amber-50 border border-amber-200 rounded text-center text-amber-900 font-mono font-semibold">
  x = [ -b &plusmn; &radic;(b<sup>2</sup> - 4ac) ] / (2a)
</div>

<h4 class="font-bold text-lg text-emerald-800 mt-4 mb-2">Discriminant D = b<sup>2</sup> - 4ac</h4>
<ul class="list-disc pl-5 space-y-1 text-slate-700">
  <li>If <strong>D &gt; 0</strong>: Two distinct real roots.</li>
  <li>If <strong>D = 0</strong>: Two equal real roots (-b / 2a).</li>
  <li>If <strong>D &lt; 0</strong>: No real roots (Imaginary roots).</li>
</ul>
`
    },

    // Class 9 Notes
    {
      id: "note-09-1",
      title: "Force & Laws of Motion - Formula Sheet & Derivations",
      subject: "Science",
      classId: "class-9",
      className: "Class 9",
      chapter: "Chapter 9: Force and Laws of Motion",
      topic: "Newton's 3 Laws & Conservation of Linear Momentum",
      addedDate: "2026-09-03",
      downloads: 39,
      readTime: "18 min read",
      summary: "Complete derivations for F = ma and m1*u1 + m2*u2 = m1*v1 + m2*v2 with numerical problem walkthroughs and conceptual questions.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Newton's Three Laws:</h4>
<ol class="list-decimal pl-5 space-y-2 text-slate-700">
  <li><strong>First Law (Inertia):</strong> An object remains in its state of rest or uniform motion unless an unbalanced external force acts on it.</li>
  <li><strong>Second Law:</strong> Rate of change of momentum is directly proportional to applied force: <strong>F = m &times; a</strong>.</li>
  <li><strong>Third Law:</strong> To every action, there is an equal and opposite reaction acting on different bodies.</li>
</ol>

<h4 class="font-bold text-lg text-emerald-800 mt-4 mb-2">Conservation of Momentum:</h4>
<p class="font-mono bg-slate-100 p-2 rounded text-slate-800">m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub></p>
`
    },
    {
      id: "note-09-2",
      title: "Polynomials & Remainder Theorem Practice Sheet",
      subject: "Mathematics",
      classId: "class-9",
      className: "Class 9",
      chapter: "Chapter 2: Polynomials",
      topic: "Factorization by Splitting the Middle Term & Identities",
      addedDate: "2026-09-05",
      downloads: 35,
      readTime: "15 min read",
      summary: "Algebraic identities (x+y+z)^2, (x+y)^3, x^3+y^3+z^3-3xyz with solved examples and factor theorem applications.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Key Algebraic Identities:</h4>
<ul class="list-disc pl-5 space-y-1 text-slate-700">
  <li>(x + y + z)<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2xy + 2yz + 2zx</li>
  <li>(x + y)<sup>3</sup> = x<sup>3</sup> + y<sup>3</sup> + 3xy(x + y)</li>
  <li>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = (x + y + z)(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)</li>
  <li><strong>Special Identity:</strong> If x + y + z = 0, then x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz.</li>
</ul>
`
    },

    // Class 8 Notes
    {
      id: "note-08-1",
      title: "Linear Equations in One Variable - Word Problems Guide",
      subject: "Mathematics",
      classId: "class-8",
      className: "Class 8",
      chapter: "Chapter 2: Linear Equations",
      topic: "Solving Equations with Variables on Both Sides",
      addedDate: "2026-09-01",
      downloads: 28,
      readTime: "10 min read",
      summary: "Techniques for translating word problems (age problems, perimeter problems, coin problems) into single-variable algebraic equations.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Problem Solving Strategy:</h4>
<ol class="list-decimal pl-5 space-y-1 text-slate-700">
  <li>Identify the unknown and assign variable <strong>x</strong>.</li>
  <li>Express given relationships in terms of x.</li>
  <li>Equate expressions based on the problem condition.</li>
  <li>Solve for x and verify the answer.</li>
</ol>
`
    },
    {
      id: "note-08-2",
      title: "Cell Structure and Functions - Illustrated Summary",
      subject: "Science",
      classId: "class-8",
      className: "Class 8",
      chapter: "Chapter 8: Cell - Structure and Functions",
      topic: "Plant Cell vs Animal Cell & Organelles",
      addedDate: "2026-09-03",
      downloads: 32,
      readTime: "14 min read",
      summary: "Comparison diagram, nucleus, cytoplasm, cell membrane, plastids, cell wall differences, and prokaryotic vs eukaryotic cells.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Plant vs Animal Cell Comparison:</h4>
<ul class="list-disc pl-5 space-y-2 text-slate-700">
  <li><strong>Cell Wall:</strong> Present in plants (cellulose); Absent in animals.</li>
  <li><strong>Plastids/Chloroplasts:</strong> Present in green plant cells; Absent in animals.</li>
  <li><strong>Vacuole:</strong> Large central vacuole in plants; Small temporary vacuoles in animals.</li>
</ul>
`
    },

    // Class 7 Notes
    {
      id: "note-07-1",
      title: "Integers & Rules of Signs - Simplified Concept Sheet",
      subject: "Mathematics",
      classId: "class-7",
      className: "Class 7",
      chapter: "Chapter 1: Integers",
      topic: "Addition, Subtraction, Multiplication & Division Rules",
      addedDate: "2026-09-02",
      downloads: 24,
      readTime: "8 min read",
      summary: "Mastering sign conventions: (-) x (-) = (+), (+) x (-) = (-), number line visualizations and BODMAS practice.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Sign Rules for Integers:</h4>
<ul class="list-disc pl-5 space-y-1 text-slate-700">
  <li>(+) &times; (+) = (+) &nbsp;|&nbsp; (-) &times; (-) = (+)</li>
  <li>(+) &times; (-) = (-) &nbsp;|&nbsp; (-) &times; (+) = (-)</li>
  <li>Subtracting a negative number is the same as adding a positive: <strong>5 - (-3) = 5 + 3 = 8</strong>.</li>
</ul>
`
    },
    {
      id: "note-07-2",
      title: "Nutrition in Plants - Autotrophic & Heterotrophic Modes",
      subject: "Science",
      classId: "class-7",
      className: "Class 7",
      chapter: "Chapter 1: Nutrition in Plants",
      topic: "Photosynthesis, Stomata, Parasites & Saprotrophs",
      addedDate: "2026-09-04",
      downloads: 30,
      readTime: "12 min read",
      summary: "Photosynthesis equation, Cuscuta (parasitic), Pitcher plant (insectivorous), and Rhizobium symbiotic relationship.",
      content: `
<h4 class="font-bold text-lg text-emerald-800 mb-2">Photosynthesis Equation:</h4>
<div class="p-3 bg-green-50 border border-green-200 rounded font-mono text-center text-green-900 my-2">
  6CO<sub>2</sub> + 6H<sub>2</sub>O + Sunlight + Chlorophyll &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>
</div>
<p class="text-slate-700">Leaves are the food factories of plants. Stomata take in carbon dioxide from the air and release oxygen.</p>
`
    }
  ],

  // Curated Video Lectures (Classes 7 to 10)
  videos: [
    // Class 10 Videos
    {
      id: "vid-10-1",
      title: "Real Numbers & Euclid's Lemma - Full Concept Lecture",
      subject: "Mathematics",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Real Numbers",
      duration: "24:15",
      addedDate: "2026-09-02",
      youtubeId: "vBvFjhqNqW0",
      videoUrl: "https://www.youtube-nocookie.com/embed/vBvFjhqNqW0",
      instructor: "Harish Sir",
      views: 142,
      summary: "In-depth lecture on Euclid's division algorithm, step-by-step HCF calculation, and how to write textbook answers that score full 3/3 marks in board exams."
    },
    {
      id: "vid-10-2",
      title: "Chemical Reactions & Equations - Balancing Made Easy",
      subject: "Science",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 1: Chemical Reactions",
      duration: "18:40",
      addedDate: "2026-09-04",
      youtubeId: "2NXWj6j_n9k",
      videoUrl: "https://www.youtube-nocookie.com/embed/2NXWj6j_n9k",
      instructor: "Harish Sir",
      views: 189,
      summary: "Learn the foolproof algebraic and hit-and-trial methods to balance complex chemical equations in under 60 seconds."
    },
    {
      id: "vid-10-3",
      title: "Trigonometry - Trick to Memorize Table (0 to 90 deg)",
      subject: "Mathematics",
      classId: "class-10",
      className: "Class 10",
      chapter: "Chapter 8: Introduction to Trigonometry",
      duration: "15:20",
      addedDate: "2026-09-06",
      youtubeId: "t2uPYYW74n0",
      videoUrl: "https://www.youtube-nocookie.com/embed/t2uPYYW74n0",
      instructor: "Harish Sir",
      views: 210,
      summary: "Never forget sin, cos, tan values again! Simple left-hand finger technique for remembering all standard angle values."
    },

    // Class 9 Videos
    {
      id: "vid-09-1",
      title: "Newton's 3 Laws of Motion with Practical Real-Life Demos",
      subject: "Science",
      classId: "class-9",
      className: "Class 9",
      chapter: "Chapter 9: Force & Laws of Motion",
      duration: "22:10",
      addedDate: "2026-09-03",
      youtubeId: "kKKM8Y-u7ds",
      videoUrl: "https://www.youtube-nocookie.com/embed/kKKM8Y-u7ds",
      instructor: "Harish Sir",
      views: 115,
      summary: "Demonstrating inertia of rest, recoil of gun, catching cricket ball softly (2nd law), and rocket propulsion (3rd law)."
    },
    {
      id: "vid-09-2",
      title: "Polynomials - Factor Theorem & Middle Term Splitting",
      subject: "Mathematics",
      classId: "class-9",
      className: "Class 9",
      chapter: "Chapter 2: Polynomials",
      duration: "19:35",
      addedDate: "2026-09-05",
      youtubeId: "jIbQv8j6b98",
      videoUrl: "https://www.youtube-nocookie.com/embed/jIbQv8j6b98",
      instructor: "Harish Sir",
      views: 98,
      summary: "Mastering middle term splitting for quadratics with roots and negative coefficients."
    },

    // Class 8 Videos
    {
      id: "vid-08-1",
      title: "Linear Equations in One Variable - Step-by-Step",
      subject: "Mathematics",
      classId: "class-8",
      className: "Class 8",
      chapter: "Chapter 2: Linear Equations",
      duration: "16:45",
      addedDate: "2026-09-01",
      youtubeId: "f15zA0PhSek",
      videoUrl: "https://www.youtube-nocookie.com/embed/f15zA0PhSek",
      instructor: "Harish Sir",
      views: 86,
      summary: "Eliminating denominators easily and solving multi-term equations without sign confusion."
    },
    {
      id: "vid-08-2",
      title: "Microorganisms: Friend and Foe - Visual Chapter Tour",
      subject: "Science",
      classId: "class-8",
      className: "Class 8",
      chapter: "Chapter 2: Microorganisms",
      duration: "20:05",
      addedDate: "2026-09-04",
      youtubeId: "4Z8b3L34LGE",
      videoUrl: "https://www.youtube-nocookie.com/embed/4Z8b3L34LGE",
      instructor: "Harish Sir",
      views: 74,
      summary: "Bacteria, fungi, algae, protozoa, and viruses. Nitrogen cycle diagram and food preservation methods."
    },

    // Class 7 Videos
    {
      id: "vid-07-1",
      title: "Integers - Number Line Operations & Word Problems",
      subject: "Mathematics",
      classId: "class-7",
      className: "Class 7",
      chapter: "Chapter 1: Integers",
      duration: "14:50",
      addedDate: "2026-09-02",
      youtubeId: "0bL7u0cK0aY",
      videoUrl: "https://www.youtube-nocookie.com/embed/0bL7u0cK0aY",
      instructor: "Harish Sir",
      views: 65,
      summary: "Step-by-step number line movement for positive and negative jumps, temperature drops, and elevation problems."
    },
    {
      id: "vid-07-2",
      title: "Heat - Conduction, Convection & Radiation Explained",
      subject: "Science",
      classId: "class-7",
      className: "Class 7",
      chapter: "Chapter 4: Heat",
      duration: "17:15",
      addedDate: "2026-09-05",
      youtubeId: "vbfj378d1cA",
      videoUrl: "https://www.youtube-nocookie.com/embed/vbfj378d1cA",
      instructor: "Harish Sir",
      views: 72,
      summary: "Why clinical thermometers have a kink, sea breeze vs land breeze, and why thermos flasks keep liquids hot."
    }
  ],

  // Academic Test Marks & Performance Records
  tests: [
    {
      id: "test-101",
      title: "Unit Test 1: Real Numbers",
      subject: "Mathematics",
      classId: "class-10",
      date: "2026-08-25",
      maxMarks: 25,
      scores: [
        { studentId: "HTC-1001", marks: 23, grade: "A+", remarks: "Outstanding performance in irrationality proofs. Clean presentation." },
        { studentId: "HTC-1002", marks: 24, grade: "A+", remarks: "Near perfect score! Excellent clarity." },
        { studentId: "HTC-1003", marks: 18, grade: "B+", remarks: "Good effort. Practice prime factorization word problems once more." }
      ]
    },
    {
      id: "test-102",
      title: "Monthly Test: Chemical Reactions & Balancing",
      subject: "Science",
      classId: "class-10",
      date: "2026-09-05",
      maxMarks: 50,
      scores: [
        { studentId: "HTC-1001", marks: 46, grade: "A+", remarks: "Clear understanding of redox states. Well drawn diagrams." },
        { studentId: "HTC-1002", marks: 48, grade: "A+", remarks: "Topped the batch! Phenomenal mastery." },
        { studentId: "HTC-1003", marks: 37, grade: "B", remarks: "Need to memorize chemical state symbols (s, l, g, aq)." }
      ]
    },
    {
      id: "test-091",
      title: "Unit Test: Laws of Motion",
      subject: "Science",
      classId: "class-9",
      date: "2026-08-28",
      maxMarks: 30,
      scores: [
        { studentId: "HTC-0901", marks: 28, grade: "A+", remarks: "Derivations were mathematically precise." },
        { studentId: "HTC-0902", marks: 22, grade: "B+", remarks: "Conceptual understanding is good; practice numerical calculations." }
      ]
    },
    {
      id: "test-081",
      title: "Quiz: Linear Equations",
      subject: "Mathematics",
      classId: "class-8",
      date: "2026-09-02",
      maxMarks: 20,
      scores: [
        { studentId: "HTC-0801", marks: 19, grade: "A+", remarks: "Speed and accuracy are commendable!" },
        { studentId: "HTC-0802", marks: 16, grade: "A", remarks: "Good work. Watch out for minus sign transposition." }
      ]
    },
    {
      id: "test-071",
      title: "Introductory Test: Integers & Signs",
      subject: "Mathematics",
      classId: "class-7",
      date: "2026-08-30",
      maxMarks: 25,
      scores: [
        { studentId: "HTC-0701", marks: 24, grade: "A+", remarks: "Brilliant grasp of negative numbers and brackets." },
        { studentId: "HTC-0702", marks: 19, grade: "B+", remarks: "Good progress. Revise multiplication of two negative integers." }
      ]
    }
  ],

  // Centre Announcements & Notices
  announcements: [
    {
      id: "ann-1",
      title: "Class 10 Special Board Doubt Clearing Session",
      date: "2026-09-08",
      target: "Class 10 Students & Parents",
      badge: "Important",
      content: "Special 2-hour doubt clearing session for Mathematics (Quadratic Equations & Trigonometry) on Sunday, 10:00 AM. Bring previous year board question booklets."
    },
    {
      id: "ann-2",
      title: "Monthly Progress Report Cards Published",
      date: "2026-09-06",
      target: "All Parents (Classes 7 to 10)",
      badge: "Academic",
      content: "August-September unit test scores and attendance percentages have been updated in the Parent Portal. Parents are requested to log in and review their ward's remarks."
    },
    {
      id: "ann-3",
      title: "Science Practical Demonstration Day",
      date: "2026-09-03",
      target: "Classes 8, 9 & 10",
      badge: "Activity",
      content: "Hands-on demonstration of prism light spectrum, chemical precipitation, and microscope cell observation will be conducted this Saturday during regular batch hours."
    }
  ],

  // Daily curriculum coverage & Homework log (for parents)
  homework: [
    {
      classId: "class-10",
      className: "Class 10",
      subject: "Mathematics",
      date: "2026-09-10",
      topicTaught: "Exercise 4.3 - Quadratic formula application and nature of roots",
      homeworkAssigned: "Complete Exercise 4.3 Question 1 to 5 in homework notebook. Submit tomorrow.",
      dueBy: "2026-09-11"
    },
    {
      classId: "class-9",
      className: "Class 9",
      subject: "Science",
      date: "2026-09-10",
      topicTaught: "Third Law of Motion & Action-Reaction pairs",
      homeworkAssigned: "Write 3 everyday examples of Newton's third law and solve in-text question 3 on page 126.",
      dueBy: "2026-09-11"
    },
    {
      classId: "class-8",
      className: "Class 8",
      subject: "Mathematics",
      date: "2026-09-10",
      topicTaught: "Word problems on numbers & perimeter",
      homeworkAssigned: "Practice problems 4, 5, 6 from chapter worksheet.",
      dueBy: "2026-09-11"
    },
    {
      classId: "class-7",
      className: "Class 7",
      subject: "Science",
      date: "2026-09-10",
      topicTaught: "Photosynthesis in desert plants (Cactus) and Algae",
      homeworkAssigned: "Draw neat labeled diagram of stomata and write function of guard cells.",
      dueBy: "2026-09-11"
    }
  ]
};
