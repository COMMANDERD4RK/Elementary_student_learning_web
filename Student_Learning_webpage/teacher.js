const teacherLoginForm = document.getElementById('teacherLoginForm');
const teacherDashboard = document.getElementById('teacherDashboard');
const teacherLoginView = document.getElementById('teacherLoginView');
const teacherGreeting = document.getElementById('teacherGreeting');
const teacherSummary = document.getElementById('teacherSummary');
const classEnrollmentForm = document.getElementById('classEnrollmentForm');
const classList = document.getElementById('classList');
const requestList = document.getElementById('requestList');
const teacherNameInput = document.getElementById('teacherName');
const teacherEmailInput = document.getElementById('teacherEmail');
const teacherPasswordInput = document.getElementById('teacherPassword');
const teacherEmailFeedback = document.getElementById('teacherEmailFeedback');
const teacherPasswordFeedback = document.getElementById('teacherPasswordFeedback');
const enrollmentStatus = document.getElementById('enrollmentStatus');
const logoutTeacherButton = document.getElementById('logoutTeacherButton');

const teacherSessionKey = 'blocklearnTeacherSession';
const teacherClassesKey = 'blocklearnTeacherClasses';
const enrollmentRequestsKey = 'blocklearnEnrollmentRequests';

function getStoredClasses(){
  try {
    const classes = JSON.parse(localStorage.getItem(teacherClassesKey) || '[]');
    return Array.isArray(classes) ? classes : [];
  } catch {
    return [];
  }
}

function saveStoredClasses(classes){
  localStorage.setItem(teacherClassesKey, JSON.stringify(classes));
}

function getStoredRequests(){
  try {
    const requests = JSON.parse(localStorage.getItem(enrollmentRequestsKey) || '[]');
    return Array.isArray(requests) ? requests : [];
  } catch {
    return [];
  }
}

function saveStoredRequests(requests){
  localStorage.setItem(enrollmentRequestsKey, JSON.stringify(requests));
}

function updateTeacherEmailFeedback(){
  const value = teacherEmailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  teacherEmailFeedback.textContent = value
    ? valid ? 'Email looks valid.' : 'Enter a valid email address.'
    : '';
  teacherEmailFeedback.classList.toggle('is-valid', Boolean(value) && valid);
  teacherEmailInput.setAttribute('aria-invalid', String(Boolean(value) && !valid));
}

function updateTeacherPasswordFeedback(){
  const value = teacherPasswordInput.value;
  const valid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
  teacherPasswordFeedback.textContent = value
    ? valid ? 'Password looks good.' : 'Use at least 8 characters, including a letter and a number.'
    : 'Use at least 8 characters, including a letter and a number.';
  teacherPasswordFeedback.classList.toggle('is-valid', valid);
  teacherPasswordInput.setAttribute('aria-invalid', String(Boolean(value) && !valid));
}

function normalizeStudentIds(rawValue){
  return [...new Set(rawValue
    .split(/[\n,\s]+/)
    .map(value => value.trim())
    .filter(value => /^[0-9]{6,11}$/.test(value)))];
}

function showTeacherDashboard(name){
  teacherGreeting.textContent = name || 'Teacher';
  teacherSummary.textContent = `Welcome back, ${name || 'Teacher'}. Enroll your class and track student IDs for this learning demo.`;
  teacherLoginView.classList.add('hidden');
  teacherDashboard.classList.remove('hidden');
  renderClassList();
}

function showTeacherLogin(){
  teacherDashboard.classList.add('hidden');
  teacherLoginView.classList.remove('hidden');
}

function renderClassList(){
  const classes = getStoredClasses();
  if (!classes.length) {
    classList.innerHTML = '<p class="empty-state">No classes enrolled yet. Add your first class to get started.</p>';
  } else {
    classList.innerHTML = classes.map(item => `
      <article class="class-item">
        <div class="class-item-header">
          <h3>${item.className}</h3>
          <span class="pill">Grade ${item.grade}</span>
        </div>
        <p><strong>Section:</strong> ${item.section}</p>
        <p><strong>Students enrolled:</strong> ${item.studentIds.length}</p>
        <p class="student-ids"><strong>IDs:</strong> ${item.studentIds.join(', ') || 'No students enrolled yet.'}</p>
      </article>
    `).join('');
  }

  renderRequestList();
}

function renderRequestList(){
  const requests = getStoredRequests();
  if (!requests.length) {
    requestList.innerHTML = '<p class="empty-state">No enrollment requests yet. Students can request to join a class from the student sign-in page.</p>';
    return;
  }

  requestList.innerHTML = requests.map(request => `
    <article class="class-item">
      <div class="class-item-header">
        <h3>${request.studentName}</h3>
        <span class="pill">ID ${request.studentId}</span>
      </div>
      <p><strong>Grade:</strong> ${request.grade} · <strong>Class:</strong> ${request.className}</p>
      <p><strong>Section:</strong> ${request.classSection}</p>
      <div class="request-actions">
        <button class="green" type="button" data-approve-request="${request.id}">Approve</button>
        <button type="button" data-decline-request="${request.id}">Reject</button>
      </div>
    </article>
  `).join('');

  requestList.querySelectorAll('[data-approve-request]').forEach(button => {
    button.addEventListener('click', event => {
      const requestId = event.currentTarget.getAttribute('data-approve-request');
      approveEnrollmentRequest(requestId);
    });
  });

  requestList.querySelectorAll('[data-decline-request]').forEach(button => {
    button.addEventListener('click', event => {
      const requestId = event.currentTarget.getAttribute('data-decline-request');
      declineEnrollmentRequest(requestId);
    });
  });
}

function approveEnrollmentRequest(requestId){
  const requests = getStoredRequests();
  const request = requests.find(item => item.id === requestId);
  if (!request) return;

  const classes = getStoredClasses();
  const matchingClass = classes.find(item =>
    String(item.grade) === String(request.grade) &&
    item.className.trim().toLowerCase() === request.className.trim().toLowerCase() &&
    item.section.trim().toLowerCase() === request.classSection.trim().toLowerCase()
  );

  if (matchingClass) {
    matchingClass.studentIds = [...new Set([...(matchingClass.studentIds || []), request.studentId])];
  } else {
    classes.unshift({
      id: Date.now().toString(),
      className: request.className,
      grade: String(request.grade),
      section: request.classSection,
      studentIds: [request.studentId]
    });
  }

  saveStoredClasses(classes);
  saveStoredRequests(requests.filter(item => item.id !== requestId));
  renderClassList();
  enrollmentStatus.textContent = `Approved ${request.studentName} for ${request.className} (${request.classSection}).`;
  enrollmentStatus.classList.add('is-valid');
}

function declineEnrollmentRequest(requestId){
  const requests = getStoredRequests();
  const request = requests.find(item => item.id === requestId);
  if (!request) return;

  saveStoredRequests(requests.filter(item => item.id !== requestId));
  renderRequestList();
  enrollmentStatus.textContent = `Rejected ${request.studentName}'s enrollment request.`;
  enrollmentStatus.classList.remove('is-valid');
}

function restoreTeacherSession(){
  try {
    const session = JSON.parse(localStorage.getItem(teacherSessionKey) || 'null');
    if (!session || !session.signedIn || !session.teacherName) {
      showTeacherLogin();
      return;
    }
    showTeacherDashboard(session.teacherName);
  } catch {
    showTeacherLogin();
  }
}

teacherEmailInput.addEventListener('input', updateTeacherEmailFeedback);
teacherPasswordInput.addEventListener('input', updateTeacherPasswordFeedback);

teacherLoginForm.addEventListener('submit', event => {
  event.preventDefault();
  updateTeacherEmailFeedback();
  updateTeacherPasswordFeedback();

  if (!teacherLoginForm.reportValidity()) return;

  const teacherName = teacherNameInput.value.trim() || 'Teacher';
  localStorage.setItem(teacherSessionKey, JSON.stringify({
    signedIn: true,
    teacherName,
    teacherEmail: teacherEmailInput.value.trim()
  }));

  showTeacherDashboard(teacherName);
});

classEnrollmentForm.addEventListener('submit', event => {
  event.preventDefault();
  const className = document.getElementById('className').value.trim();
  const grade = document.getElementById('classGrade').value;
  const section = document.getElementById('classSection').value.trim();
  const studentIds = normalizeStudentIds(document.getElementById('studentIds').value);

  if (!className || !grade || !section || !studentIds.length) {
    enrollmentStatus.textContent = 'Add a class name, a grade, a section, and at least one valid student ID.';
    enrollmentStatus.classList.remove('is-valid');
    return;
  }

  const classes = getStoredClasses();
  const existing = classes.find(item =>
    item.className.trim().toLowerCase() === className.toLowerCase() &&
    String(item.grade) === String(grade) &&
    item.section.trim().toLowerCase() === section.toLowerCase()
  );

  if (existing) {
    existing.studentIds = [...new Set([...existing.studentIds, ...studentIds])];
    saveStoredClasses(classes);
  } else {
    classes.unshift({
      id: Date.now().toString(),
      className,
      grade,
      section,
      studentIds
    });
    saveStoredClasses(classes);
  }

  classEnrollmentForm.reset();
  enrollmentStatus.textContent = 'Class enrollment saved successfully.';
  enrollmentStatus.classList.add('is-valid');
  renderClassList();
});

logoutTeacherButton.addEventListener('click', () => {
  localStorage.removeItem(teacherSessionKey);
  teacherLoginForm.reset();
  teacherPasswordFeedback.textContent = 'Use at least 8 characters, including a letter and a number.';
  teacherPasswordFeedback.classList.remove('is-valid');
  teacherEmailFeedback.textContent = '';
  teacherEmailFeedback.classList.remove('is-valid');
  showTeacherLogin();
});

restoreTeacherSession();
