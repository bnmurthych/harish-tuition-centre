// Harish Tuition Centre - Main Application Logic
// State Management & Reactive UI

// Initialize State from localStorage or default seed data
const STORAGE_KEY = 'HTC_APP_DATA_V1';

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saved state, resetting to initial data', e);
    }
  }
  return JSON.parse(JSON.stringify(window.INITIAL_DATA));
}

let appState = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

// Current Application View & Role State
let currentView = 'public'; // 'public' | 'admin' | 'student' | 'parent'
let currentAdminTab = 'attendance';
let currentStudentTab = 'notes';
let activeStudentId = 'HTC-1001'; // Default: Rahul Verma (Class 10)
let activeParentStudentId = 'HTC-1001'; // Default: Suresh Verma (Parent of Rahul)
let activeNoteFilter = 'all';

// ============================================================================
// INITIALIZATION ON PAGE LOAD
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Set default date picker to today (2026-09-10)
  const dateInput = document.getElementById('attendance-date-input');
  if (dateInput) {
    dateInput.value = '2026-09-10';
  }

  // Render initial UI components
  renderPublicLanding();
  renderAdminKPIs();
  populateDropdowns();
  renderAttendanceSheet();
  renderStudentView();
  renderParentView();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ============================================================================
// VIEW & NAVIGATION ROUTING
// ============================================================================
function switchView(viewName) {
  currentView = viewName;

  // Hide all view containers
  const views = ['view-public', 'view-admin', 'view-student', 'view-parent'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.classList.add('hidden');
  });

  // Show target view container
  const activeEl = document.getElementById(`view-${viewName}`);
  if (activeEl) {
    activeEl.classList.remove('hidden');
  }

  // Update Nav links
  const navBtns = ['public', 'admin', 'student', 'parent'];
  navBtns.forEach(name => {
    const btn = document.getElementById(`nav-btn-${name}`);
    if (btn) {
      if (name === viewName) {
        btn.className = 'px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 bg-white text-emerald-700 shadow-sm border border-slate-200';
      } else {
        btn.className = 'px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 text-slate-700 hover:text-emerald-700';
      }
    }
  });

  // Update Top Role Badge
  const roleLabel = document.getElementById('current-role-label');
  const roleBadge = document.getElementById('current-role-badge');
  if (roleLabel && roleBadge) {
    if (viewName === 'public') {
      roleLabel.textContent = 'Public Website';
      roleBadge.className = 'hidden sm:flex items-center gap-2 bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-semibold';
    } else if (viewName === 'admin') {
      roleLabel.textContent = 'Harish Sir (Teacher / Admin)';
      roleBadge.className = 'hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-semibold';
    } else if (viewName === 'student') {
      const student = appState.students.find(s => s.id === activeStudentId) || appState.students[0];
      roleLabel.textContent = `Student: ${student.name} (${student.className})`;
      roleBadge.className = 'hidden sm:flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1.5 rounded-full text-xs font-semibold';
    } else if (viewName === 'parent') {
      const ward = appState.students.find(s => s.id === activeParentStudentId) || appState.students[0];
      roleLabel.textContent = `Parent: ${ward.parentName} (${ward.name})`;
      roleBadge.className = 'hidden sm:flex items-center gap-2 bg-purple-50 text-purple-800 border border-purple-200 px-3 py-1.5 rounded-full text-xs font-semibold';
    }
  }

  // Refresh view specific components
  if (viewName === 'public') renderPublicLanding();
  if (viewName === 'admin') {
    renderAdminKPIs();
    renderAttendanceSheet();
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
  // 1. Classes 7th to 10th Grid
  const classesContainer = document.getElementById('public-classes-container');
  if (classesContainer) {
    classesContainer.innerHTML = appState.classes.map(cls => {
      const studentCount = appState.students.filter(s => s.classId === cls.id).length;
      return `
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                ${cls.name}
              </span>
              <span class="text-xs font-semibold text-slate-500 font-mono">${cls.batchTime}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">${cls.name} Comprehensive Batch</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">${cls.description}</p>
            
            <div class="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
              <div class="font-bold text-slate-800">Subjects Included:</div>
              <div class="flex flex-wrap gap-1">
                ${cls.subjects.map(sub => `<span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-[11px] font-medium">${sub}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
            <span class="text-xs text-slate-500 font-medium">${studentCount} Active Students</span>
            <button onclick="switchView('student')" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
              View Syllabus & Notes <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Announcements
  const annContainer = document.getElementById('public-announcements-container');
  if (annContainer) {
    annContainer.innerHTML = appState.announcements.map(ann => {
      let badgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
      if (ann.badge === 'Important') badgeColor = 'bg-red-100 text-red-800 border-red-200';
      if (ann.badge === 'Activity') badgeColor = 'bg-amber-100 text-amber-800 border-amber-200';

      return `
        <div class="bg-white/80 p-5 rounded-2xl border border-slate-200 hover-lift">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}">${ann.badge}</span>
            <span class="text-[11px] text-slate-400 font-mono">${ann.date}</span>
          </div>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5 leading-snug">${ann.title}</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${ann.content}</p>
          <div class="text-[11px] text-emerald-700 font-semibold mt-3 pt-2 border-t border-slate-100">
            Target: ${ann.target}
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
  const tabs = ['attendance', 'reports', 'notes', 'videos', 'students', 'tests', 'homework'];

  tabs.forEach(t => {
    const panel = document.getElementById(`admin-panel-${t}`);
    const btn = document.getElementById(`admin-tab-${t}`);
    if (panel) {
      if (t === tabName) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
    if (btn) {
      if (t === tabName) btn.className = 'tab-btn active px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all';
      else btn.className = 'tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2 transition-all';
    }
  });

  if (tabName === 'attendance') renderAttendanceSheet();
  if (tabName === 'reports') renderAttendanceReports();
  if (tabName === 'notes') renderAdminNotes();
  if (tabName === 'videos') renderAdminVideos();
  if (tabName === 'students') renderAdminStudents();
  if (tabName === 'tests') renderAdminTests();
  if (tabName === 'homework') renderAdminHomework();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderAdminKPIs() {
  document.getElementById('stat-total-students').textContent = appState.students.length;
  document.getElementById('stat-total-notes').textContent = appState.notes.length;
  document.getElementById('stat-total-videos').textContent = appState.videos.length;
  document.getElementById('stat-total-tests').textContent = appState.tests.length;

  // Calculate today's attendance (using 2026-09-10)
  const today = '2026-09-10';
  const todayRecords = appState.attendance.filter(a => a.date === today);
  const presentCount = todayRecords.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const absentCount = todayRecords.filter(a => a.status === 'Absent').length;
  const totalMarked = todayRecords.length;

  const percent = totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0;
  document.getElementById('stat-today-attendance').textContent = `${percent}%`;
  document.getElementById('stat-attendance-counts').textContent = `${presentCount} Present / ${absentCount} Absent`;
}

// Attendance Register rendering
let pendingAttendanceMap = {}; // Maps studentId -> { status, arrivalTime, remarks }

function renderAttendanceSheet() {
  const classSelect = document.getElementById('attendance-class-select');
  const dateInput = document.getElementById('attendance-date-input');
  const tbody = document.getElementById('attendance-table-body');

  if (!classSelect || !dateInput || !tbody) return;

  const selectedClass = classSelect.value;
  const selectedDate = dateInput.value || '2026-09-10';

  // Filter students belonging to this class
  const classStudents = appState.students.filter(s => s.classId === selectedClass);
  pendingAttendanceMap = {};

  if (classStudents.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-slate-400">No students enrolled in this class yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = classStudents.map(student => {
    // Check if an existing record exists for this date and student
    const existing = appState.attendance.find(a => a.date === selectedDate && a.studentId === student.id);
    const status = existing ? existing.status : 'Present';
    const arrivalTime = existing ? existing.arrivalTime : (selectedClass === 'class-10' ? '7:28 PM' : selectedClass === 'class-9' ? '6:28 PM' : selectedClass === 'class-8' ? '5:28 PM' : '4:28 PM');
    const remarks = existing ? existing.remarks : 'Attentive, participated well';

    pendingAttendanceMap[student.id] = { status, arrivalTime, remarks };

    return `
      <tr class="hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4">
          <div class="flex items-center gap-3">
            <img src="${student.avatar}" class="w-9 h-9 rounded-xl object-cover border border-slate-200">
            <div>
              <div class="font-bold text-slate-900">${student.name}</div>
              <div class="text-[11px] text-slate-500">Roll: <span class="font-mono font-bold">${student.rollNo}</span> &bull; <span class="font-mono text-emerald-700">${student.id}</span></div>
            </div>
          </div>
        </td>
        
        <td class="py-3 px-4">
          <div class="text-xs font-semibold text-slate-800">${student.parentName}</div>
          <div class="text-[11px] text-slate-500 font-mono">${student.parentPhone}</div>
        </td>

        <td class="py-3 px-4 text-center">
          <div class="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200 text-xs font-bold">
            <button type="button" onclick="setStudentAttendanceStatus('${student.id}', 'Present')" id="btn-status-${student.id}-Present" class="px-3 py-1.5 rounded-lg transition-all ${status === 'Present' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-emerald-700'}">
              Present
            </button>
            <button type="button" onclick="setStudentAttendanceStatus('${student.id}', 'Absent')" id="btn-status-${student.id}-Absent" class="px-3 py-1.5 rounded-lg transition-all ${status === 'Absent' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-red-700'}">
              Absent
            </button>
            <button type="button" onclick="setStudentAttendanceStatus('${student.id}', 'Late')" id="btn-status-${student.id}-Late" class="px-3 py-1.5 rounded-lg transition-all ${status === 'Late' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:text-amber-700'}">
              Late
            </button>
          </div>
        </td>

        <td class="py-3 px-4">
          <input type="text" id="arrival-${student.id}" value="${arrivalTime}" onchange="updateAttendanceField('${student.id}', 'arrivalTime', this.value)" class="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 font-mono w-28 outline-none focus:ring-1 focus:ring-emerald-500">
        </td>

        <td class="py-3 px-4">
          <input type="text" id="remark-${student.id}" value="${remarks}" onchange="updateAttendanceField('${student.id}', 'remarks', this.value)" placeholder="e.g. Attentive, finished HW" class="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 w-full outline-none focus:ring-1 focus:ring-emerald-500">
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setStudentAttendanceStatus(studentId, newStatus) {
  if (!pendingAttendanceMap[studentId]) {
    pendingAttendanceMap[studentId] = {};
  }
  pendingAttendanceMap[studentId].status = newStatus;

  // Update button visual styles
  ['Present', 'Absent', 'Late'].forEach(st => {
    const btn = document.getElementById(`btn-status-${studentId}-${st}`);
    if (btn) {
      if (st === newStatus) {
        if (st === 'Present') btn.className = 'px-3 py-1.5 rounded-lg transition-all bg-emerald-600 text-white shadow-sm';
        if (st === 'Absent') btn.className = 'px-3 py-1.5 rounded-lg transition-all bg-red-600 text-white shadow-sm';
        if (st === 'Late') btn.className = 'px-3 py-1.5 rounded-lg transition-all bg-amber-600 text-white shadow-sm';
      } else {
        btn.className = 'px-3 py-1.5 rounded-lg transition-all text-slate-600 hover:text-slate-900';
      }
    }
  });

  // If marked absent, clear arrival time or set to '-'
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
  if (!pendingAttendanceMap[studentId]) {
    pendingAttendanceMap[studentId] = {};
  }
  pendingAttendanceMap[studentId][field] = value;
}

function markAllAttendance(status) {
  Object.keys(pendingAttendanceMap).forEach(studentId => {
    setStudentAttendanceStatus(studentId, status);
  });
  showToast(`All students marked as ${status}`, 'info');
}

function saveAttendanceRecords() {
  const dateInput = document.getElementById('attendance-date-input');
  const selectedDate = dateInput ? dateInput.value : '2026-09-10';

  Object.keys(pendingAttendanceMap).forEach(studentId => {
    const entry = pendingAttendanceMap[studentId];
    // Remove any existing record for this date + student
    appState.attendance = appState.attendance.filter(a => !(a.date === selectedDate && a.studentId === studentId));

    // Push new entry
    appState.attendance.push({
      date: selectedDate,
      studentId: studentId,
      status: entry.status || 'Present',
      arrivalTime: entry.arrivalTime || (entry.status === 'Absent' ? '-' : '7:28 PM'),
      remarks: entry.remarks || 'Regular'
    });
  });

  saveState();
  renderAdminKPIs();
  showToast(`Attendance saved for ${Object.keys(pendingAttendanceMap).length} students!`, 'success');

  // Immediately refresh parent and student views in case user switches
  renderParentView();
  renderStudentView();
}

// Attendance Cumulative Reports
function renderAttendanceReports() {
  const filter = document.getElementById('report-class-filter')?.value || 'all';
  const tbody = document.getElementById('attendance-report-table-body');
  if (!tbody) return;

  let students = appState.students;
  if (filter !== 'all') {
    students = students.filter(s => s.classId === filter);
  }

  tbody.innerHTML = students.map(student => {
    const records = appState.attendance.filter(a => a.studentId === student.id);
    const total = records.length;
    const present = records.filter(a => a.status === 'Present' || a.status === 'Late').length;
    const absent = records.filter(a => a.status === 'Absent').length;
    const rate = total > 0 ? Math.round((present / total) * 100) : 100;

    let statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">Excellent</span>`;
    if (rate < 75) {
      statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200">Alert (&lt; 75%)</span>`;
    } else if (rate < 85) {
      statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Needs Care</span>`;
    }

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
          <img src="${student.avatar}" class="w-7 h-7 rounded-lg object-cover">
          ${student.name}
        </td>
        <td class="py-3 px-4 font-semibold text-slate-600">${student.className}</td>
        <td class="py-3 px-4 font-mono font-bold text-slate-700">${student.rollNo}</td>
        <td class="py-3 px-4 text-center font-bold text-emerald-700">${present}</td>
        <td class="py-3 px-4 text-center font-bold text-red-600">${absent}</td>
        <td class="py-3 px-4 text-center font-extrabold text-sm ${rate >= 80 ? 'text-emerald-600' : 'text-red-600'}">
          ${rate}%
        </td>
        <td class="py-3 px-4 text-right">
          ${statusBadge}
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
  a.setAttribute('href', url);
  a.setAttribute('download', `harish_tuition_attendance_${new Date().toISOString().slice(0, 10)}.csv`);
  a.click();
  showToast('Attendance report exported as CSV!', 'success');
}

// Notes Management in Admin
function renderAdminNotes() {
  const container = document.getElementById('admin-notes-grid');
  if (!container) return;

  container.innerHTML = appState.notes.map(note => {
    return `
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              ${note.className} &bull; ${note.subject}
            </span>
            <span class="text-[11px] text-slate-400 font-mono">${note.addedDate}</span>
          </div>

          <h4 class="font-bold text-slate-900 text-base mb-1 font-display leading-snug">${note.title}</h4>
          <div class="text-xs text-slate-500 font-medium mb-3">${note.chapter}</div>
          <p class="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">${note.summary}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button onclick="openNoteModal('${note.id}')" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Read & Preview
          </button>
          <button onclick="deleteNote('${note.id}')" class="text-xs text-red-500 hover:text-red-700 font-semibold p-1">
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

function deleteNote(noteId) {
  if (confirm('Are you sure you want to delete this subject note?')) {
    appState.notes = appState.notes.filter(n => n.id !== noteId);
    saveState();
    renderAdminNotes();
    renderAdminKPIs();
    renderStudentView();
    showToast('Note deleted successfully', 'info');
  }
}

// Videos Management in Admin
function renderAdminVideos() {
  const container = document.getElementById('admin-videos-grid');
  if (!container) return;

  container.innerHTML = appState.videos.map(vid => {
    return `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover-lift flex flex-col justify-between">
        <div class="relative bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer" onclick="openVideoModal('${vid.id}')">
          <img src="https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500'" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
          <div class="absolute w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i data-lucide="play" class="w-5 h-5 ml-0.5"></i>
          </div>
          <span class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded font-mono">
            ${vid.duration}
          </span>
        </div>

        <div class="p-5 flex-grow flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                ${vid.className} &bull; ${vid.subject}
              </span>
              <span class="text-[11px] text-slate-400 font-mono">${vid.views} views</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm mb-1 font-display line-clamp-2">${vid.title}</h4>
            <p class="text-xs text-slate-500 line-clamp-2 mt-1">${vid.summary}</p>
          </div>

          <div class="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
            <button onclick="openVideoModal('${vid.id}')" class="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <i data-lucide="play-circle" class="w-3.5 h-3.5"></i> Play Video
            </button>
            <button onclick="deleteVideo('${vid.id}')" class="text-xs text-red-500 hover:text-red-700 font-semibold p-1">
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

function deleteVideo(vidId) {
  if (confirm('Are you sure you want to remove this video lecture?')) {
    appState.videos = appState.videos.filter(v => v.id !== vidId);
    saveState();
    renderAdminVideos();
    renderAdminKPIs();
    renderStudentView();
    showToast('Video lecture deleted', 'info');
  }
}

// Student Directory in Admin
function renderAdminStudents() {
  const tbody = document.getElementById('student-directory-table-body');
  if (!tbody) return;

  tbody.innerHTML = appState.students.map(student => {
    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4">
          <div class="flex items-center gap-3">
            <img src="${student.avatar}" class="w-9 h-9 rounded-xl object-cover border border-slate-200">
            <div>
              <div class="font-bold text-slate-900">${student.name}</div>
              <div class="text-[11px] font-mono text-emerald-700 font-semibold">${student.id}</div>
            </div>
          </div>
        </td>
        <td class="py-3 px-4 font-semibold text-slate-700">${student.className}</td>
        <td class="py-3 px-4">
          <div class="font-medium text-slate-900 text-xs">${student.parentName}</div>
          <div class="text-[11px] text-slate-500 font-mono">${student.parentPhone}</div>
        </td>
        <td class="py-3 px-4 text-center font-mono font-bold text-slate-800">${student.parentPin}</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${student.feeStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${student.feeStatus}
          </span>
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="loginAsStudent('${student.id}')" class="text-xs text-blue-600 hover:underline font-semibold mr-3">
            View Student
          </button>
          <button onclick="deleteStudent('${student.id}')" class="text-red-500 hover:text-red-700">
            <i data-lucide="trash-2" class="w-4 h-4 inline"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function filterStudentDirectory() {
  const query = document.getElementById('student-search-input')?.value.toLowerCase() || '';
  const rows = document.querySelectorAll('#student-directory-table-body tr');

  rows.forEach(r => {
    const text = r.textContent.toLowerCase();
    r.style.display = text.includes(query) ? '' : 'none';
  });
}

function deleteStudent(studentId) {
  if (confirm(`Remove student ${studentId}? All attendance records will be removed.`)) {
    appState.students = appState.students.filter(s => s.id !== studentId);
    appState.attendance = appState.attendance.filter(a => a.studentId !== studentId);
    saveState();
    renderAdminStudents();
    renderAdminKPIs();
    populateDropdowns();
    showToast('Student removed from tuition roster', 'info');
  }
}

// Tests & Evaluation in Admin
function renderAdminTests() {
  const container = document.getElementById('admin-tests-list');
  if (!container) return;

  container.innerHTML = appState.tests.map(test => {
    return `
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
              ${test.classId.toUpperCase()} &bull; ${test.subject}
            </span>
            <h4 class="text-base font-bold text-slate-900 font-display mt-1">${test.title}</h4>
          </div>
          <div class="text-right text-xs text-slate-500">
            <div>Date: <span class="font-mono font-bold">${test.date}</span></div>
            <div>Max Marks: <span class="font-bold text-slate-800">${test.maxMarks}</span></div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          ${test.scores.map(sc => {
            const student = appState.students.find(s => s.id === sc.studentId);
            return `
              <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs space-y-1">
                <div class="flex items-center justify-between font-bold text-slate-900">
                  <span>${student ? student.name : sc.studentId}</span>
                  <span class="text-purple-700">${sc.marks} / ${test.maxMarks} (${sc.grade})</span>
                </div>
                <p class="text-[11px] text-slate-500 italic">"${sc.remarks}"</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Homework in Admin
function renderAdminHomework() {
  const container = document.getElementById('admin-homework-list');
  if (!container) return;

  container.innerHTML = appState.homework.map(hw => {
    return `
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            ${hw.className} &bull; ${hw.subject}
          </span>
          <span class="text-xs text-slate-400 font-mono">Date: ${hw.date}</span>
        </div>

        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Topics Taught Today</div>
          <p class="text-sm font-semibold text-slate-800">${hw.topicTaught}</p>
        </div>

        <div class="p-3 bg-amber-50/70 rounded-2xl border border-amber-200">
          <div class="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">Homework Assigned</div>
          <p class="text-xs text-slate-700 leading-relaxed">${hw.homeworkAssigned}</p>
          <div class="text-[11px] text-amber-700 font-bold mt-2">Due by: ${hw.dueBy}</div>
        </div>
      </div>
    `;
  }).join('');
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
      else btn.className = 'tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-2 transition-all';
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function switchStudentAccount(studentId) {
  activeStudentId = studentId;
  activeParentStudentId = studentId; // also sync with parent selector for convenience
  renderStudentView();
  renderParentView();
  showToast(`Switched account to student ${studentId}`, 'info');
}

function loginAsStudent(studentId) {
  switchStudentAccount(studentId);
  switchView('student');
}

function renderStudentView() {
  const student = appState.students.find(s => s.id === activeStudentId) || appState.students[0];
  if (!student) return;

  // Populate hero details
  document.getElementById('student-view-name').textContent = student.name;
  document.getElementById('student-view-class-badge').textContent = `${student.className} (${student.board})`;
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
  document.getElementById('student-attendance-detail').textContent = `${presentCount} Present • ${absentCount} Absent`;

  // Today's Status
  const todayRecord = appState.attendance.find(a => a.studentId === student.id && a.date === '2026-09-10');
  const todayStatusEl = document.getElementById('student-today-status');
  const todayTimeEl = document.getElementById('student-today-time');

  if (todayRecord) {
    if (todayRecord.status === 'Present') {
      todayStatusEl.innerHTML = `<span class="w-3 h-3 rounded-full bg-emerald-500 live-dot"></span> Present`;
      todayTimeEl.textContent = `Checked in at ${todayRecord.arrivalTime} (${todayRecord.remarks})`;
    } else if (todayRecord.status === 'Late') {
      todayStatusEl.innerHTML = `<span class="w-3 h-3 rounded-full bg-amber-500 live-dot"></span> Late`;
      todayTimeEl.textContent = `Arrived at ${todayRecord.arrivalTime}`;
    } else {
      todayStatusEl.innerHTML = `<span class="w-3 h-3 rounded-full bg-red-500"></span> Absent`;
      todayTimeEl.textContent = todayRecord.remarks || 'No arrival recorded';
    }
  } else {
    todayStatusEl.innerHTML = `<span class="w-3 h-3 rounded-full bg-slate-400"></span> Pending`;
    todayTimeEl.textContent = 'Class begins at batch time';
  }

  // Render Student Notes
  renderStudentNotes(student.classId);

  // Render Student Videos
  renderStudentVideos(student.classId);

  // Render Student Tests
  renderStudentTests(student.id);

  // Render Student Attendance Log
  renderStudentAttendanceLog(student.id);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function filterStudentNotes(subject) {
  activeNoteFilter = subject;
  const buttons = document.querySelectorAll('.note-filter-btn');
  buttons.forEach(btn => {
    if (btn.textContent.includes(subject === 'all' ? 'All' : subject)) {
      btn.className = 'note-filter-btn active px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white';
    } else {
      btn.className = 'note-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700';
    }
  });

  const student = appState.students.find(s => s.id === activeStudentId) || appState.students[0];
  renderStudentNotes(student.classId);
}

function renderStudentNotes(classId) {
  const container = document.getElementById('student-notes-grid');
  if (!container) return;

  let notes = appState.notes.filter(n => n.classId === classId);
  if (activeNoteFilter !== 'all') {
    notes = notes.filter(n => n.subject === activeNoteFilter);
  }

  if (notes.length === 0) {
    container.innerHTML = `<div class="col-span-3 text-center py-12 text-slate-400">No notes currently posted for this subject in ${classId}.</div>`;
    return;
  }

  container.innerHTML = notes.map(note => {
    return `
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover-lift flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              ${note.subject}
            </span>
            <span class="text-[11px] text-slate-400 font-mono">${note.readTime}</span>
          </div>
          <h4 class="font-bold text-slate-900 text-base mb-1 font-display">${note.title}</h4>
          <div class="text-xs text-slate-500 font-medium mb-3">${note.chapter}</div>
          <p class="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">${note.summary}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button onclick="openNoteModal('${note.id}')" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-4 h-4"></i> Read Notes
          </button>
          <button onclick="downloadNoteContent('${note.id}')" class="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> PDF
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

  if (videos.length === 0) {
    container.innerHTML = `<div class="col-span-3 text-center py-12 text-slate-400">No video lectures uploaded for ${classId} yet.</div>`;
    return;
  }

  container.innerHTML = videos.map(vid => {
    return `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover-lift flex flex-col justify-between">
        <div class="relative bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer" onclick="openVideoModal('${vid.id}')">
          <img src="https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
          <div class="absolute w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i data-lucide="play" class="w-5 h-5 ml-0.5"></i>
          </div>
          <span class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded font-mono">
            ${vid.duration}
          </span>
        </div>

        <div class="p-5 flex-grow flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                ${vid.subject}
              </span>
              <span class="text-xs text-slate-500 font-medium">${vid.instructor}</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm mb-1 font-display line-clamp-2">${vid.title}</h4>
            <p class="text-xs text-slate-500 line-clamp-2 mt-1">${vid.summary}</p>
          </div>

          <div class="pt-4 border-t border-slate-100 mt-4">
            <button onclick="openVideoModal('${vid.id}')" class="w-full bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors">
              <i data-lucide="play-circle" class="w-4 h-4"></i> Watch Lecture Now
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
    const score = test.scores.find(s => s.studentId === studentId);
    if (score) {
      testRows.push({
        title: test.title,
        subject: test.subject,
        date: test.date,
        maxMarks: test.maxMarks,
        marks: score.marks,
        grade: score.grade,
        remarks: score.remarks
      });
    }
  });

  if (testRows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-400">No test results recorded yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = testRows.map(t => {
    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 font-bold text-slate-900">${t.title}</td>
        <td class="py-3 px-4 font-semibold text-slate-600">${t.subject}</td>
        <td class="py-3 px-4 text-xs font-mono text-slate-500">${t.date}</td>
        <td class="py-3 px-4 text-center font-extrabold text-slate-900">${t.marks} / ${t.maxMarks}</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 font-mono">${t.grade}</span>
        </td>
        <td class="py-3 px-4 text-xs text-slate-700 italic">"${t.remarks}"</td>
      </tr>
    `;
  }).join('');
}

function renderStudentAttendanceLog(studentId) {
  const container = document.getElementById('student-attendance-log-container');
  if (!container) return;

  const logs = appState.attendance.filter(a => a.studentId === studentId).sort((a, b) => b.date.localeCompare(a.date));

  if (logs.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-slate-400">No attendance records on file.</div>`;
    return;
  }

  container.innerHTML = logs.map(l => {
    let pill = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">Present</span>`;
    if (l.status === 'Absent') pill = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">Absent</span>`;
    if (l.status === 'Late') pill = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Late</span>`;

    return `
      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 text-xs">
        <div class="flex items-center gap-3">
          <span class="font-mono font-bold text-slate-800">${l.date}</span>
          ${pill}
        </div>
        <div class="text-slate-500 font-mono">Time: ${l.arrivalTime}</div>
        <div class="text-slate-600 italic">"${l.remarks}"</div>
      </div>
    `;
  }).join('');
}

// ============================================================================
// PARENT ACCESS PORTAL LOGIC
// ============================================================================
function switchParentWard(studentId) {
  activeParentStudentId = studentId;
  renderParentView();
  showToast(`Switched ward to ${studentId}`, 'info');
}

function renderParentView() {
  const ward = appState.students.find(s => s.id === activeParentStudentId) || appState.students[0];
  if (!ward) return;

  // Profile
  document.getElementById('parent-ward-name').textContent = ward.name;
  document.getElementById('parent-ward-class').textContent = `${ward.className} (${ward.board})`;
  document.getElementById('parent-ward-roll').textContent = ward.rollNo;
  document.getElementById('parent-ward-id').textContent = ward.id;
  document.getElementById('parent-ward-avatar').src = ward.avatar;

  document.getElementById('parent-guardian-name').textContent = ward.parentName;
  document.getElementById('parent-guardian-phone').textContent = ward.parentPhone;

  // Batch Timing
  const classObj = appState.classes.find(c => c.id === ward.classId);
  if (classObj) {
    document.getElementById('parent-ward-timing').textContent = `${classObj.batchTime} (Mon-Sat)`;
  }

  // Fee Status
  const feeBadge = document.getElementById('parent-fee-badge');
  if (feeBadge) {
    if (ward.feeStatus === 'Paid') {
      feeBadge.className = 'px-2.5 py-0.5 rounded-full font-bold text-emerald-800 bg-emerald-100';
      feeBadge.textContent = `Paid (${ward.feeAmount})`;
    } else {
      feeBadge.className = 'px-2.5 py-0.5 rounded-full font-bold text-amber-800 bg-amber-100';
      feeBadge.textContent = `Pending (${ward.feeAmount})`;
    }
  }

  // Live Today's Attendance
  const todayRecord = appState.attendance.find(a => a.studentId === ward.id && a.date === '2026-09-10');
  const statusText = document.getElementById('parent-live-status-text');
  const timeText = document.getElementById('parent-live-time-text');
  const remarkText = document.getElementById('parent-live-remark-text');

  if (todayRecord) {
    statusText.textContent = todayRecord.status;
    timeText.textContent = todayRecord.status === 'Absent' ? 'Marked Absent by Teacher' : `Checked in at ${todayRecord.arrivalTime}`;
    remarkText.textContent = `Teacher note: "${todayRecord.remarks}"`;
  } else {
    statusText.textContent = 'Batch Scheduled Today';
    timeText.textContent = 'Attendance will be marked upon arrival at tuition';
    remarkText.textContent = 'Punctuality is strictly monitored';
  }

  // Overall Attendance %
  const records = appState.attendance.filter(a => a.studentId === ward.id);
  const total = records.length;
  const presentCount = records.filter(a => a.status === 'Present' || a.status === 'Late').length;
  const absentCount = records.filter(a => a.status === 'Absent').length;
  const rate = total > 0 ? Math.round((presentCount / total) * 100) : 100;

  document.getElementById('parent-stat-percentage').textContent = `${rate}%`;
  document.getElementById('parent-stat-absent-count').textContent = `${absentCount} Day${absentCount === 1 ? '' : 's'}`;

  // Today's Homework
  renderParentHomework(ward.classId);

  // Ward Tests
  renderParentTests(ward.id);

  // Materials preview
  renderParentMaterialsPreview(ward.classId);

  if (window.lucide) {
    window.lucide.createIcons();
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
    return `
      <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 space-y-2 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-bold text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded-md">${hw.subject}</span>
          <span class="font-mono text-slate-500">Date: ${hw.date}</span>
        </div>
        <div>
          <div class="font-bold text-slate-700">Taught in class:</div>
          <p class="text-slate-600">${hw.topicTaught}</p>
        </div>
        <div class="pt-1">
          <div class="font-bold text-amber-800">Homework to complete tonight:</div>
          <p class="text-slate-800 font-medium">${hw.homeworkAssigned}</p>
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
    const score = test.scores.find(s => s.studentId === studentId);
    if (score) {
      testRows.push({
        title: test.title,
        subject: test.subject,
        date: test.date,
        maxMarks: test.maxMarks,
        marks: score.marks,
        grade: score.grade,
        remarks: score.remarks
      });
    }
  });

  if (testRows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-400">No test marks published yet for your child.</td></tr>`;
    return;
  }

  tbody.innerHTML = testRows.map(t => {
    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 font-bold text-slate-900">${t.title}</td>
        <td class="py-3 px-4 font-semibold text-slate-600">${t.subject}</td>
        <td class="py-3 px-4 text-xs font-mono text-slate-500">${t.date}</td>
        <td class="py-3 px-4 text-center font-extrabold text-slate-900">${t.marks} / ${t.maxMarks}</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 font-mono">${t.grade}</span>
        </td>
        <td class="py-3 px-4 text-xs text-slate-700 italic">"${t.remarks}"</td>
      </tr>
    `;
  }).join('');
}

function renderParentMaterialsPreview(classId) {
  const container = document.getElementById('parent-materials-preview-grid');
  if (!container) return;

  const notes = appState.notes.filter(n => n.classId === classId).slice(0, 3);

  container.innerHTML = notes.map(n => {
    return `
      <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">${n.subject}</span>
          <span class="text-slate-400 font-mono">${n.readTime}</span>
        </div>
        <div class="font-bold text-slate-900 line-clamp-1">${n.title}</div>
        <p class="text-slate-500 line-clamp-2">${n.summary}</p>
        <button onclick="openNoteModal('${n.id}')" class="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1">
          Inspect Study Note <i data-lucide="arrow-right" class="w-3 h-3"></i>
        </button>
      </div>
    `;
  }).join('');
}

// Print official student report card
function printStudentReportCard() {
  const student = appState.students.find(s => s.id === (currentView === 'parent' ? activeParentStudentId : activeStudentId));
  if (!student) return;

  showToast(`Generating report card for ${student.name}...`, 'info');
  setTimeout(() => {
    window.print();
  }, 300);
}

// ============================================================================
// POPULATE DROPDOWNS & ACCOUNT SWITCHERS
// ============================================================================
function populateDropdowns() {
  // 1. Student Portal Switcher
  const stuSwitch = document.getElementById('student-account-switcher');
  if (stuSwitch) {
    stuSwitch.innerHTML = appState.students.map(s => {
      return `<option value="${s.id}" ${s.id === activeStudentId ? 'selected' : ''}>${s.name} (${s.className})</option>`;
    }).join('');
  }

  // 2. Parent Portal Ward Switcher
  const parSwitch = document.getElementById('parent-student-select');
  if (parSwitch) {
    parSwitch.innerHTML = appState.students.map(s => {
      return `<option value="${s.id}" ${s.id === activeParentStudentId ? 'selected' : ''}>${s.parentName} &rarr; Ward: ${s.name} (${s.className})</option>`;
    }).join('');
  }
}

// ============================================================================
// MODAL CONTROLS & FORMS
// ============================================================================

// Role Switcher Modal
function openRoleModal() {
  document.getElementById('modal-role').classList.remove('hidden');
}
function closeRoleModal() {
  document.getElementById('modal-role').classList.add('hidden');
}

// Video Modal
function openVideoModal(vidId) {
  const vid = appState.videos.find(v => v.id === vidId);
  if (!vid) return;

  document.getElementById('modal-video-title').textContent = vid.title;
  document.getElementById('modal-video-subject-badge').textContent = `${vid.className} • ${vid.subject}`;
  document.getElementById('modal-video-summary').textContent = vid.summary;
  document.getElementById('modal-video-iframe').src = `https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1`;

  document.getElementById('modal-video').classList.remove('hidden');
}
function closeVideoModal() {
  document.getElementById('modal-video-iframe').src = '';
  document.getElementById('modal-video').classList.add('hidden');
}

// Note Modal
let currentViewingNoteId = null;
function openNoteModal(noteId) {
  const note = appState.notes.find(n => n.id === noteId);
  if (!note) return;

  currentViewingNoteId = noteId;
  document.getElementById('modal-note-title').textContent = note.title;
  document.getElementById('modal-note-class-badge').textContent = note.className;
  document.getElementById('modal-note-subject').textContent = note.subject;
  document.getElementById('modal-note-time').textContent = `${note.readTime} • Chapter: ${note.chapter}`;
  document.getElementById('modal-note-body').innerHTML = note.content;

  document.getElementById('modal-note').classList.remove('hidden');
}
function closeNoteModal() {
  document.getElementById('modal-note').classList.add('hidden');
}

function downloadNoteContent(noteId) {
  const id = noteId || currentViewingNoteId;
  const note = appState.notes.find(n => n.id === id);
  if (!note) return;

  const content = `HARISH TUITION CENTRE - OFFICIAL STUDY NOTES\nClass: ${note.className} | Subject: ${note.subject}\nChapter: ${note.chapter}\nTitle: ${note.title}\n\nSUMMARY:\n${note.summary}\n\n---\nCreated by Harish R., M.Sc., B.Ed. (Harish Tuition Centre)`;
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

function handleCreateStudent(event) {
  event.preventDefault();
  const name = document.getElementById('new-student-name').value;
  const classId = document.getElementById('new-student-class').value;
  const rollNo = document.getElementById('new-student-roll').value;
  const board = document.getElementById('new-student-board').value;
  const parentName = document.getElementById('new-student-parent').value;
  const parentPhone = document.getElementById('new-student-phone').value;
  const parentPin = document.getElementById('new-student-pin').value;

  const classNames = { 'class-7': 'Class 7', 'class-8': 'Class 8', 'class-9': 'Class 9', 'class-10': 'Class 10' };
  const numId = Math.floor(100 + Math.random() * 900);
  const newId = `HTC-${classId.slice(6)}${numId}`;

  const newStudent = {
    id: newId,
    name,
    rollNo,
    classId,
    className: classNames[classId],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    parentName,
    parentPhone,
    parentPin,
    parentEmail: `${name.toLowerCase().replace(/\s+/g, '')}@example.com`,
    board,
    feeStatus: 'Paid',
    feeAmount: classId === 'class-10' ? '₹2,500/month' : classId === 'class-9' ? '₹2,200/month' : classId === 'class-8' ? '₹2,000/month' : '₹1,800/month',
    joinedDate: new Date().toISOString().slice(0, 10)
  };

  appState.students.push(newStudent);
  saveState();
  populateDropdowns();
  renderAdminStudents();
  renderAdminKPIs();
  renderAttendanceSheet();
  closeAddStudentModal();
  showToast(`Enrolled ${name} successfully with ID ${newId}!`, 'success');
}

// Add Note Modal
function openAddNoteModal() {
  document.getElementById('modal-add-note').classList.remove('hidden');
}
function closeAddNoteModal() {
  document.getElementById('modal-add-note').classList.add('hidden');
}

function handleCreateNote(event) {
  event.preventDefault();
  const title = document.getElementById('new-note-title').value;
  const classId = document.getElementById('new-note-class').value;
  const subject = document.getElementById('new-note-subject').value;
  const chapter = document.getElementById('new-note-chapter').value;
  const summary = document.getElementById('new-note-summary').value;
  const content = document.getElementById('new-note-content').value;

  const classNames = { 'class-7': 'Class 7', 'class-8': 'Class 8', 'class-9': 'Class 9', 'class-10': 'Class 10' };

  const newNote = {
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
  };

  appState.notes.unshift(newNote);
  saveState();
  renderAdminNotes();
  renderAdminKPIs();
  renderStudentView();
  closeAddNoteModal();
  showToast(`Subject Note "${title}" published!`, 'success');
}

// Add Video Modal
function openAddVideoModal() {
  document.getElementById('modal-add-video').classList.remove('hidden');
}
function closeAddVideoModal() {
  document.getElementById('modal-add-video').classList.add('hidden');
}

function handleCreateVideo(event) {
  event.preventDefault();
  const title = document.getElementById('new-video-title').value;
  const classId = document.getElementById('new-video-class').value;
  const subject = document.getElementById('new-video-subject').value;
  const chapter = document.getElementById('new-video-chapter').value || 'Unit Lecture';
  const duration = document.getElementById('new-video-duration').value || '20:00';
  const rawUrl = document.getElementById('new-video-url').value;
  const summary = document.getElementById('new-video-summary').value;

  // Extract YouTube ID
  let youtubeId = rawUrl;
  if (rawUrl.includes('v=')) {
    youtubeId = rawUrl.split('v=')[1].split('&')[0];
  } else if (rawUrl.includes('youtu.be/')) {
    youtubeId = rawUrl.split('youtu.be/')[1].split('?')[0];
  }

  const classNames = { 'class-7': 'Class 7', 'class-8': 'Class 8', 'class-9': 'Class 9', 'class-10': 'Class 10' };

  const newVideo = {
    id: `vid-${Date.now()}`,
    title,
    subject,
    classId,
    className: classNames[classId],
    chapter,
    duration,
    addedDate: new Date().toISOString().slice(0, 10),
    youtubeId,
    videoUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
    instructor: 'Harish Sir',
    views: 1,
    summary
  };

  appState.videos.unshift(newVideo);
  saveState();
  renderAdminVideos();
  renderAdminKPIs();
  renderStudentView();
  closeAddVideoModal();
  showToast(`Video Lecture published!`, 'success');
}

// Add Test Modal
function openAddTestModal() {
  renderTestScoreInputs();
  document.getElementById('modal-add-test').classList.remove('hidden');
}
function closeAddTestModal() {
  document.getElementById('modal-add-test').classList.add('hidden');
}

function renderTestScoreInputs() {
  const classId = document.getElementById('modal-test-class')?.value || 'class-10';
  const container = document.getElementById('modal-test-students-container');
  if (!container) return;

  const students = appState.students.filter(s => s.classId === classId);
  container.innerHTML = students.map(s => {
    return `
      <div class="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
        <div class="w-36 shrink-0 font-bold text-slate-800 text-xs truncate">${s.name} (${s.rollNo})</div>
        <input type="number" id="test-score-${s.id}" placeholder="Marks" class="w-20 bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs outline-none">
        <input type="text" id="test-remarks-${s.id}" placeholder="Evaluation remarks (e.g. Good concept grasp)" class="flex-grow bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs outline-none">
      </div>
    `;
  }).join('');
}

function saveTestScores() {
  const classId = document.getElementById('modal-test-class').value;
  const subject = document.getElementById('modal-test-subject').value;
  const title = document.getElementById('modal-test-title').value;
  const maxMarks = parseInt(document.getElementById('modal-test-max').value, 10) || 25;

  const students = appState.students.filter(s => s.classId === classId);
  const scores = [];

  students.forEach(s => {
    const marksInput = document.getElementById(`test-score-${s.id}`);
    const remarksInput = document.getElementById(`test-remarks-${s.id}`);
    const marks = marksInput && marksInput.value ? parseInt(marksInput.value, 10) : Math.round(maxMarks * 0.8);
    const remarks = remarksInput && remarksInput.value ? remarksInput.value : 'Good effort. Keep practicing.';

    let grade = 'B';
    const pct = (marks / maxMarks) * 100;
    if (pct >= 90) grade = 'A+';
    else if (pct >= 75) grade = 'A';
    else if (pct >= 60) grade = 'B+';

    scores.push({
      studentId: s.id,
      marks,
      grade,
      remarks
    });
  });

  appState.tests.unshift({
    id: `test-${Date.now()}`,
    title,
    subject,
    classId,
    date: new Date().toISOString().slice(0, 10),
    maxMarks,
    scores
  });

  saveState();
  renderAdminTests();
  renderAdminKPIs();
  renderStudentView();
  renderParentView();
  closeAddTestModal();
  showToast(`Test results for "${title}" published to Students & Parents!`, 'success');
}

// Data Backup & Reset
function exportDataBackup() {
  const json = JSON.stringify(appState, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `harish_tuition_centre_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  showToast('Complete data backup exported!', 'success');
}

function resetToDefaultData() {
  if (confirm('Reset all records to initial demo data? Any newly added records will be replaced with default seed data.')) {
    localStorage.removeItem(STORAGE_KEY);
    appState = JSON.parse(JSON.stringify(window.INITIAL_DATA));
    saveState();
    location.reload();
  }
}

// Toast Notifications
function showToast(message, type = 'info') {
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
  toast.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 shrink-0"></i> <span>${message}</span>`;

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
