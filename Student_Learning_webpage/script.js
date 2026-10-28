
const worlds = [
 {
  name:"Mathematics",emoji:"➗",color:"#fef3c7",
  desc:"Numbers, shapes, and simple math.",
  lesson:"Addition means putting groups together. Example: 2 + 3 = 5.",
  gradeLessons:{
   1:"Practice counting, adding small numbers, and spotting simple shapes.",
   2:"Practice addition, subtraction, place value, and number patterns.",
   3:"Explore multiplication, division, fractions, and measurement.",
   4:"Practice larger operations, equivalent fractions, and perimeter.",
   5:"Explore decimals, fractions, area, and multi-step problems.",
   6:"Practice ratios, percentages, integers, and multi-step calculations."
  },
  q:{
   early:[
    {q:"What is 4 + 3?",a:["6","7","8"],correct:1},
    {q:"What is 10 - 4?",a:["5","6","7"],correct:1},
    {q:"How many sides does a triangle have?",a:["3","4","5"],correct:0}
   ],
   middle:[
    {q:"What is 36 + 27?",a:["53","63","73"],correct:1},
    {q:"What is 8 × 7?",a:["54","56","64"],correct:1},
    {q:"What is the perimeter of a square with 5 cm sides?",a:["10 cm","20 cm","25 cm"],correct:1}
   ],
   upper:[
    {q:"What is 3/4 of 20?",a:["12","15","16"],correct:1},
    {q:"What is 2.5 × 4?",a:["8","10","12"],correct:1},
    {q:"A rectangle is 8 cm long and 5 cm wide. What is its area?",a:["13 cm²","26 cm²","40 cm²"],correct:2}
   ]
  }
 },
 {
  name:"Science",emoji:"🧪",color:"#dcfce7",
  desc:"Discover nature and our planet.",
  lesson:"Plants need sunlight, water, air, and nutrients to grow.",
  gradeLessons:{
   1:"Observe plants, animals, weather, and the five senses.",
   2:"Explore habitats, life cycles, materials, and seasonal changes.",
   3:"Study forces, life cycles, rocks, and Earth's resources.",
   4:"Explore energy, sound, ecosystems, and Earth's changing surface.",
   5:"Study matter, the solar system, adaptations, and food webs.",
   6:"Explore cells, ecosystems, forces, and how Earth's systems interact."
  },
  q:{
   early:[
    {q:"Which part of a plant absorbs water?",a:["Roots","Flower","Fruit"],correct:0},
    {q:"Which planet do we live on?",a:["Mars","Earth","Venus"],correct:1},
    {q:"What do humans breathe in to live?",a:["Oxygen","Smoke","Steam"],correct:0}
   ],
   middle:[
    {q:"What do plants use sunlight to make?",a:["Food","Soil","Rain"],correct:0},
    {q:"Which state of matter keeps its own shape?",a:["Solid","Liquid","Gas"],correct:0},
    {q:"What causes day and night on Earth?",a:["Earth's rotation","The Moon's orbit","Clouds"],correct:0}
   ],
   upper:[
    {q:"Which gas do plants take in during photosynthesis?",a:["Oxygen","Carbon dioxide","Nitrogen"],correct:1},
    {q:"What force pulls objects toward Earth?",a:["Friction","Gravity","Magnetism"],correct:1},
    {q:"Which is a renewable energy source?",a:["Coal","Wind","Natural gas"],correct:1}
   ]
  }
 },
 {
  name:"English",emoji:"📚",color:"#fce7f3",
  desc:"Build vocabulary and reading skills.",
  lesson:"A noun names a person, place, animal, or thing.",
  gradeLessons:{
   1:"Practice letter sounds, sight words, simple sentences, and reading.",
   2:"Build reading fluency, vocabulary, sentence writing, and punctuation.",
   3:"Explore story structure, paragraphs, grammar, and descriptive writing.",
   4:"Practice reading comprehension, vocabulary, grammar, and summaries.",
   5:"Analyze characters, themes, text evidence, and organized writing.",
   6:"Explore point of view, figurative language, argument, and revision."
  },
  q:{
   early:[
    {q:"Which word is a noun?",a:["Run","School","Quickly"],correct:1},
    {q:"Choose the plural of 'cat'.",a:["Cates","Cats","Cat's"],correct:1},
    {q:"Which word is an action word?",a:["Jump","Blue","Table"],correct:0}
   ],
   middle:[
    {q:"Which sentence uses a proper noun?",a:["We visited Manila.","We visited the city.","We visited yesterday."],correct:0},
    {q:"What is the past tense of 'carry'?",a:["Carryed","Carried","Carries"],correct:1},
    {q:"Which word is an adjective in 'The bright sun shone'?",a:["bright","sun","shone"],correct:0}
   ],
   upper:[
    {q:"Which word is a conjunction in 'I wanted to play, but it rained'?",a:["wanted","but","rained"],correct:1},
    {q:"Choose the correct subject-verb agreement.",a:["The team are ready.","The team is ready.","The team be ready."],correct:1},
    {q:"What is the prefix in 'preview'?",a:["pre-","view","-ew"],correct:0}
   ]
  }
 },
 {
  name:"Filipino",emoji:"🇵🇭",color:"#dbeafe",
  desc:"Practice Filipino words and grammar.",
  lesson:"Ang pangngalan ay ngalan ng tao, bagay, hayop, lugar, o pangyayari.",
  gradeLessons:{
   1:"Pag-aralan ang alpabeto, mga simpleng salita, at pangungusap.",
   2:"Magsanay sa pagbasa, pangngalan, pandiwa, at payak na pangungusap.",
   3:"Pag-aralan ang pang-uri, pandiwa, at pag-unawa sa kuwento.",
   4:"Magsanay sa panghalip, pang-abay, at pagsulat ng talata.",
   5:"Suriin ang mga elemento ng kuwento at wastong gamit ng wika.",
   6:"Pag-aralan ang tayutay, pangatnig, at pagsulat ng malinaw na paliwanag."
  },
  q:{
   early:[
    {q:"Ano ang pambansang wika ng Pilipinas?",a:["Filipino","Nihongo","Pranses"],correct:0},
    {q:"Alin ang pangngalan?",a:["Tumakbo","Masaya","Aklat"],correct:2},
    {q:"Ano ang kasalungat ng 'malaki'?",a:["Maliit","Mahaba","Mabigat"],correct:0}
   ],
   middle:[
    {q:"Alin ang pang-uri sa pangungusap na 'Mabait ang bata'?",a:["Mabait","ang","bata"],correct:0},
    {q:"Ano ang pangmaramihan ng 'bata'?",a:["bataan","mga bata","batang"],correct:1},
    {q:"Alin ang pandiwa?",a:["masaya","tumakbo","paaralan"],correct:1}
   ],
   upper:[
    {q:"Alin ang pang-abay sa 'Mabilis tumakbo si Lito'?",a:["Mabilis","tumakbo","Lito"],correct:0},
    {q:"Ano ang kasingkahulugan ng 'masigasig'?",a:["masipag","tamad","mahina"],correct:0},
    {q:"Alin ang pangatnig sa 'Nag-aral siya dahil may pagsusulit'?",a:["Nag-aral","dahil","pagsusulit"],correct:1}
   ]
  }
 },
 {
  name:"Computer Literacy",emoji:"💻",color:"#ede9fe",
  desc:"Learn about computers and technology.",
  lesson:"A keyboard is used to type letters, numbers, and commands.",
  gradeLessons:{
   1:"Learn computer parts, safe device habits, and simple keyboard skills.",
   2:"Practice using a mouse and keyboard and staying safe online.",
   3:"Explore files, basic typing, and how to be kind online.",
   4:"Learn about browsers, strong passwords, and trustworthy information.",
   5:"Explore digital research, privacy, and responsible technology use.",
   6:"Practice evaluating online sources, protecting accounts, and digital citizenship."
  },
  q:{
   early:[
    {q:"Which device is used for typing?",a:["Keyboard","Speaker","Monitor"],correct:0},
    {q:"Which part shows pictures and text?",a:["Mouse","Monitor","Printer"],correct:1},
    {q:"What should you keep private online?",a:["Password","Favorite color","Pet's name"],correct:0}
   ],
   middle:[
    {q:"Which is the strongest password?",a:["123456","Password1","River!Maple7"],correct:2},
    {q:"What does a web browser help you do?",a:["Visit websites","Charge a laptop","Print without a printer"],correct:0},
    {q:"What should you do with a suspicious link?",a:["Ask a trusted adult","Click it quickly","Share it with friends"],correct:0}
   ],
   upper:[
    {q:"What is phishing?",a:["A trick to steal personal information","A way to organize files","A type of computer screen"],correct:0},
    {q:"Why should you use different passwords for important accounts?",a:["So one exposed password cannot unlock them all","So they are easier to guess","To make the internet faster"],correct:0},
    {q:"Which source is usually most reliable for a school report?",a:["An identified expert or trusted institution","An anonymous comment","A message with no source"],correct:0}
   ]
  }
 }
];

const gradeWorlds=[
 {
  grade:1,name:"Shapes & Patterns",emoji:"🧩",color:"#fce7f3",
  desc:"Spot shapes, colors, and repeating patterns.",
  lesson:"A pattern repeats in a rule. For example: red, blue, red, blue.",
  q:[
   {q:"Which shape has three sides?",a:["Circle","Triangle","Square"],correct:1},
   {q:"What comes next: star, heart, star, heart, ...?",a:["Heart","Star","Circle"],correct:1},
   {q:"How many corners does a square have?",a:["3","4","5"],correct:1}
  ]
 },
 {
  grade:2,name:"Animals & Habitats",emoji:"🐾",color:"#dcfce7",
  desc:"Discover animals and the homes they need.",
  lesson:"A habitat provides animals with food, water, shelter, and space.",
  q:[
   {q:"Where does a fish live?",a:["In water","In a tree","In a desert"],correct:0},
   {q:"Which body covering keeps a bird warm?",a:["Scales","Feathers","Fur"],correct:1},
   {q:"What do all animals need to survive?",a:["Food and water","A toy","A computer"],correct:0}
  ]
 },
 {
  grade:3,name:"Our Community",emoji:"🏘️",color:"#fef3c7",
  desc:"Learn how people and places help a community.",
  lesson:"Communities have places and helpers that meet people's needs.",
  q:[
   {q:"Where can people borrow books?",a:["Library","Bakery","Garage"],correct:0},
   {q:"Who helps put out fires?",a:["Firefighter","Gardener","Pilot"],correct:0},
   {q:"Why do communities have rules?",a:["To help keep people safe","To stop people learning","To make roads disappear"],correct:0}
  ]
 },
 {
  grade:4,name:"Earth & Space",emoji:"🌎",color:"#dbeafe",
  desc:"Explore Earth's features and our solar system.",
  lesson:"Earth rotates once each day, creating day and night.",
  q:[
   {q:"What is the name of our galaxy?",a:["Milky Way","Solar Ring","Blue Cloud"],correct:0},
   {q:"What causes day and night?",a:["Earth's rotation","The Moon's light","Clouds moving"],correct:0},
   {q:"Which is the largest ocean on Earth?",a:["Pacific","Arctic","Indian"],correct:0}
  ]
 },
 {
  grade:5,name:"Ecosystems",emoji:"🌿",color:"#dcfce7",
  desc:"See how living things depend on one another.",
  lesson:"An ecosystem includes living things and the environment they interact with.",
  q:[
   {q:"What is a producer in a food chain?",a:["A plant that makes its own food","An animal that hunts","A rock"],correct:0},
   {q:"What can happen when a habitat is destroyed?",a:["Animals may lose food and shelter","Every animal gets more space","The weather stops"],correct:0},
   {q:"Which is a decomposer?",a:["Mushroom","Eagle","Grass"],correct:0}
  ]
 },
 {
  grade:6,name:"Digital Citizenship",emoji:"🛡️",color:"#ede9fe",
  desc:"Make thoughtful and safe choices online.",
  lesson:"A responsible digital citizen protects privacy and treats people respectfully online.",
  q:[
   {q:"What should you do before sharing someone else's photo?",a:["Ask their permission","Post it immediately","Add their location"],correct:0},
   {q:"What is a good response to a hurtful message?",a:["Save it and tell a trusted adult","Send a meaner message","Share it publicly"],correct:0},
   {q:"How can you check if an online claim is reliable?",a:["Compare it with trusted sources","Trust the first post","Check how many emojis it has"],correct:0}
  ]
 }
];
const allWorlds=[...worlds,...gradeWorlds];

const lessonExamples={
 "Mathematics":"If you have 2 blocks and get 3 more, count them together: 2 + 3 = 5.",
 "Science":"A plant near a sunny window can use light, water, and air to grow.",
 "English":"In “The dog runs,” dog names an animal, so dog is a noun.",
 "Filipino":"Sa pangungusap na “Masaya si Ana,” si Ana ang pangngalan dahil pangalan ito ng tao.",
 "Computer Literacy":"When you type a word, each letter you press on the keyboard appears on the screen.",
 "Shapes & Patterns":"In red, blue, red, blue, the colors repeat. After red comes blue.",
 "Animals & Habitats":"A pond gives a fish water to live in and a place to find food and shelter.",
 "Our Community":"A library helps a community by giving people a place to borrow books.",
 "Earth & Space":"As Earth rotates, the side facing the Sun has daytime while the other side has nighttime.",
 "Ecosystems":"In a garden, plants make food, bees visit flowers, and the soil provides a place to grow.",
 "Digital Citizenship":"Before posting a friend's photo, ask their permission and avoid sharing private details."
};

const progressKey='blocklearnProgress';
const teacherClassesKey='blocklearnTeacherClasses';
const enrollmentRequestsKey='blocklearnEnrollmentRequests';
const savedProgress=JSON.parse(localStorage.getItem(progressKey)||'{}');
let learnerGrade=Number(savedProgress.grade)||1;
let points=Number(savedProgress.points)||0;
let correctAnswers=Number(savedProgress.correctAnswers)||0;
let studentId=String(savedProgress.studentId||'');
const completed=new Set(Array.isArray(savedProgress.completed)?savedProgress.completed:[]);
let parentAgreementAccepted=Boolean(savedProgress.parentAgreementAccepted);
let signedIn=Boolean(savedProgress.signedIn&&savedProgress.grade&&parentAgreementAccepted&&String(savedProgress.studentId||'').trim());
let active=-1, questionIndex=0, roundCorrect=0, roundXP=0;
let audioUtterance=null, audioState='idle', audioRun=0;
let videoTimer=null, videoState='idle', videoStep=0, videoCaptions=[];

function getTeacherEnrolledIds(){
 try {
  const classes=JSON.parse(localStorage.getItem(teacherClassesKey)||'[]');
  if(!Array.isArray(classes))return [];
  return classes.flatMap(({studentIds=[]})=>Array.isArray(studentIds)?studentIds:[]);
 }catch{
  return [];
 }
}

function getEnrollmentRequests(){
 try {
  const requests=JSON.parse(localStorage.getItem(enrollmentRequestsKey)||'[]');
  return Array.isArray(requests)?requests:[];
 }catch{
  return [];
 }
}

function isStudentEnrolled(id){
 return getTeacherEnrolledIds().includes(String(id||'').trim());
}

function saveProgress(){
 localStorage.setItem(progressKey,JSON.stringify({
  grade:learnerGrade,points,correctAnswers,completed:[...completed],signedIn,parentAgreementAccepted,studentId
 }));
}

function getQuestions(world){
 if(world.grade===learnerGrade)return world.q;
 const band=learnerGrade<=2?'early':learnerGrade<=4?'middle':'upper';
 return world.q[band];
}

function getVisibleWorlds(){
 return worlds.map((world,index)=>({world,index}))
  .concat(gradeWorlds
   .map((world,index)=>({world,index:worlds.length+index}))
   .filter(({world})=>world.grade===learnerGrade));
}

function renderWorlds(){
 const visibleWorlds=getVisibleWorlds();
 document.getElementById('subjectsTitle').querySelector('.pill').textContent=
  `${visibleWorlds.length} subjects for Grade ${learnerGrade}`;
 document.getElementById('subjects').innerHTML=visibleWorlds.map(({world,index})=>
  `<a class="subject world-link" href="quiz.html?world=${index}" style="background:${world.color}">
   <span class="emoji">${world.emoji}</span>
   <h3>${world.name}</h3>
   <p>${world.desc}</p>
   <div class="bar"><span style="width:${completed.has(index)?'100%':'0%'}"></span></div>
   <p><b>${completed.has(index)?'Subject completed!':'Play this subject →'}</b></p>
  </a>`
 ).join('');
}

function initializeHome(){
 const loginPage=document.getElementById('loginPage');
 const appShell=document.getElementById('appShell');
 const loginForm=document.getElementById('loginForm');
 if(!loginPage)return;
 const loginEmail=document.getElementById('loginEmail');
 const loginPassword=document.getElementById('loginPassword');
 const studentIdInput=document.getElementById('StudentId');
 const enrollmentRequestForm=document.getElementById('enrollmentRequestForm');
 const requestStudentName=document.getElementById('requestStudentName');
 const requestStudentId=document.getElementById('requestStudentId');
 const requestGrade=document.getElementById('requestGrade');
 const requestClassName=document.getElementById('requestClassName');
 const requestClassSection=document.getElementById('requestClassSection');
 const enrollmentRequestStatus=document.getElementById('enrollmentRequestStatus');
 const emailFeedback=document.getElementById('emailFeedback');
 const passwordFeedback=document.getElementById('passwordFeedback');
 const idFeedback=document.getElementById('idFeedback');
 const parentAgreement=document.getElementById('parentAgreement');
 parentAgreement.checked=parentAgreementAccepted;

 function updateEmailFeedback(){
  const valid=loginEmail.validity.valid;
  emailFeedback.textContent=loginEmail.value
   ?valid?'Email looks valid.':'Enter a valid email address.'
   :'';
  emailFeedback.classList.toggle('is-valid',Boolean(loginEmail.value)&&valid);
  loginEmail.setAttribute('aria-invalid',String(Boolean(loginEmail.value)&&!valid));
 }

 function updateStudentIdFeedback(){
  const value=studentIdInput.value.trim();
  const valid=/^[0-9]{6,11}$/.test(value);
  idFeedback.textContent=value
   ?valid?'Student ID looks valid.':'Use a 6–11 digit student ID.'
   :'Enter a valid student ID with 6–11 digits.';
  idFeedback.classList.toggle('is-valid',Boolean(value)&&valid);
  studentIdInput.setAttribute('aria-invalid',String(Boolean(value)&&!valid));
 }

 function updatePasswordFeedback(){
  const valid=loginPassword.validity.valid;
  passwordFeedback.textContent=loginPassword.value
   ?valid?'Password looks good.':'Use at least 8 characters, including a letter and a number.'
   :'Use at least 8 characters, including a letter and a number.';
  passwordFeedback.classList.toggle('is-valid',valid);
  loginPassword.setAttribute('aria-invalid',String(Boolean(loginPassword.value)&&!valid));
 }

 loginEmail.addEventListener('input',updateEmailFeedback);
 studentIdInput.addEventListener('input',updateStudentIdFeedback);
 loginPassword.addEventListener('input',updatePasswordFeedback);

 enrollmentRequestForm.addEventListener('submit',event=>{
  event.preventDefault();
  const studentName=requestStudentName.value.trim();
  const newStudentId=requestStudentId.value.trim();
  const newGrade=requestGrade.value;
  const className=requestClassName.value.trim();
  const classSection=requestClassSection.value.trim();

  if(!studentName||!newStudentId||!newGrade||!className||!classSection){
   enrollmentRequestStatus.textContent='Please fill in all enrollment request fields.';
   enrollmentRequestStatus.classList.remove('is-valid');
   return;
  }
  if(!/^[0-9]{6,11}$/.test(newStudentId)){
   enrollmentRequestStatus.textContent='Student ID must be 6–11 digits.';
   enrollmentRequestStatus.classList.remove('is-valid');
   return;
  }

  const existingRequests=getEnrollmentRequests();
  const request={
   id:Date.now().toString(),
   studentName,
   studentId:newStudentId,
   grade:newGrade,
   className,
   classSection,
   createdAt:new Date().toISOString()
  };

  const updatedRequests=[request,...existingRequests.filter(item=>
   !(item.studentId===newStudentId && item.className.toLowerCase()===className.toLowerCase() && item.classSection.toLowerCase()===classSection.toLowerCase())
  )];
  localStorage.setItem(enrollmentRequestsKey,JSON.stringify(updatedRequests));

  enrollmentRequestStatus.textContent='Your enrollment request was sent to the teacher. Please wait for approval.';
  enrollmentRequestStatus.classList.add('is-valid');
  enrollmentRequestForm.reset();
 });

 if(signedIn && !isStudentEnrolled(studentId)){
  signedIn=false;
  studentId='';
  saveProgress();
 }
 if(signedIn){
  loginPage.classList.add('hidden');
  appShell.classList.remove('hidden');
 }
 loginForm.addEventListener('submit',event=>{
  event.preventDefault();
  updateEmailFeedback();
  updateStudentIdFeedback();
  updatePasswordFeedback();
  if(!loginForm.reportValidity())return;

  const inputStudentId=studentIdInput.value.trim();
  if(!isStudentEnrolled(inputStudentId)){
   idFeedback.textContent='Student ID is not enrolled yet. Ask your teacher to enroll your class before you can access the quiz.';
   idFeedback.classList.remove('is-valid');
   studentIdInput.setAttribute('aria-invalid','true');
   return;
  }

  parentAgreementAccepted=parentAgreement.checked;
  learnerGrade=Number(document.getElementById('loginGrade').value);
  studentId=inputStudentId;
  signedIn=true;
  saveProgress();
  loginPage.classList.add('hidden');
  appShell.classList.remove('hidden');
  updateHome();
  renderWorlds();
 });
 document.getElementById('logoutButton').addEventListener('click',()=>{
  signedIn=false;
  studentId='';
  saveProgress();
  appShell.classList.add('hidden');
  loginPage.classList.remove('hidden');
  loginForm.reset();
  parentAgreement.checked=parentAgreementAccepted;
  updateEmailFeedback();
  updateStudentIdFeedback();
  updatePasswordFeedback();
 });
 updateHome();
 renderWorlds();
}

function updateHome(){
 const visibleWorlds=getVisibleWorlds();
 const completedVisible=visibleWorlds.filter(({index})=>completed.has(index)).length;
 const gradeBadge=document.getElementById('gradeBadge');
 if(gradeBadge)gradeBadge.textContent='Grade '+learnerGrade;
 const topPoints=document.getElementById('topPoints');
 if(topPoints)topPoints.textContent=points;
 const completedCount=document.getElementById('lessonsDone');
 if(completedCount){
  completedCount.textContent=completedVisible+'/'+visibleWorlds.length;
 }
 const score=document.getElementById('quizScore');
 if(score)score.textContent=correctAnswers;
 const level=document.getElementById('level');
 const currentLevel=Math.floor(points/50)+1;
 if(level)level.textContent='Level '+currentLevel;
 const rewardLevel=document.getElementById('rewardLevel');
 if(rewardLevel)rewardLevel.textContent='Level '+currentLevel;
 const xpInLevel=points%50;
 const levelProgressTrack=document.querySelector('.level-progress-track');
 if(levelProgressTrack)levelProgressTrack.setAttribute('aria-valuenow',xpInLevel);
 const levelProgressBar=document.getElementById('levelProgressBar');
 if(levelProgressBar)levelProgressBar.style.width=(xpInLevel/50*100)+'%';
 const levelProgressText=document.getElementById('levelProgressText');
 if(levelProgressText)levelProgressText.textContent=xpInLevel+' / 50 XP to next level';
 const rewardIcon=document.getElementById('rewardIcon');
 const rewardHeadline=document.getElementById('rewardHeadline');
 const rewardMessage=document.getElementById('rewardMessage');
 if(rewardIcon&&rewardHeadline&&rewardMessage){
  if(completedVisible===visibleWorlds.length){
   rewardIcon.textContent='👑';
   rewardHeadline.textContent='You’re a learning champion!';
   rewardMessage.textContent='You completed every subject for your grade. That is amazing!';
  }else if(completedVisible>0){
   rewardIcon.textContent='🏆';
   rewardHeadline.textContent='Amazing work, subject explorer!';
   rewardMessage.textContent=`You’ve completed ${completedVisible} subject${completedVisible===1?'':'s'}. Pick another one and keep the fun going!`;
  }else if(points>=50){
   rewardIcon.textContent='🚀';
   rewardHeadline.textContent='You’re on a roll!';
   rewardMessage.textContent='You reached a new level. Keep collecting XP and exploring!';
  }else if(points>0){
   rewardIcon.textContent='⭐';
   rewardHeadline.textContent='You’re earning your first stars!';
   rewardMessage.textContent='Every correct answer earns XP. Keep going—you’re doing great!';
  }else{
   rewardIcon.textContent='🌟';
   rewardHeadline.textContent='Your adventure is just beginning!';
   rewardMessage.textContent='Play a subject, earn XP, and collect awesome badges!';
  }
 }
 const rewards=document.getElementById('rewards');
 if(rewards){
  let badges='<span class="reward">🌱 Beginner Learner</span>';
  if(points>=30)badges+='<span class="reward">⭐ Quiz Star</span>';
  if(completedVisible>=1)badges+='<span class="reward">🏅 World Explorer</span>';
  if(completedVisible===visibleWorlds.length)badges+='<span class="reward">👑 Learning Champion</span>';
  rewards.innerHTML=badges;
 }
}

function initializeGame(){
 const params=new URLSearchParams(location.search);
 const worldParam=params.get('world');
 active=worldParam===null?NaN:Number(worldParam);
 if(!Number.isInteger(active)||active<0||active>=allWorlds.length){
  location.replace('index.html');
  return;
 }
 if(!signedIn){
  location.replace('index.html');
  return;
 }

 const world=allWorlds[active];
 if(world.grade&&world.grade!==learnerGrade){
  location.replace('index.html');
  return;
 }
 document.getElementById('gradeBadge').textContent='Grade '+learnerGrade;
 document.getElementById('topPoints').textContent=points;
 document.getElementById('gameTitle').textContent=world.emoji+' '+world.name;
 document.getElementById('gameDescription').textContent=world.desc;
 document.getElementById('gameLevel').textContent='WORLD '+(active+1);
 document.getElementById('gradeLessonText').textContent=
  world.gradeLessons&&world.gradeLessons[learnerGrade]?
   world.gradeLessons[learnerGrade]:world.desc;
 document.getElementById('lessonText').textContent=world.lesson;
 document.getElementById('lessonExampleText').textContent=lessonExamples[world.name];
 initializeLessonMedia(world);
 document.getElementById('revealExampleButton').addEventListener('click',revealLessonExample);
 document.getElementById('nextBtn').addEventListener('click',nextQuestion);
 document.getElementById('beginQuizButton').addEventListener('click',beginQuiz);
 showQuestion();
}

function initializeLessonMedia(world){
 const audioPlayButton=document.getElementById('audioPlayButton');
 document.getElementById('audioPlayButton').addEventListener('click',toggleLessonAudio);
 document.getElementById('audioStopButton').addEventListener('click',stopLessonAudio);
 document.getElementById('videoPlayButton').addEventListener('click',toggleLessonVideo);
 document.getElementById('videoStopButton').addEventListener('click',resetLessonVideo);
 document.getElementById('videoSubject').textContent=world.emoji;
 videoCaptions=[
  document.getElementById('gradeLessonText').textContent,
  world.lesson,
  lessonExamples[world.name]
 ];
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
  audioPlayButton.disabled=true;
  document.getElementById('audioStatus').textContent='Audio narration is not supported by this browser.';
 }
}

function toggleLessonAudio(){
 const synthesis=window.speechSynthesis;
 if(audioState==='speaking'){
  synthesis.pause();
  audioState='paused';
  document.getElementById('audioPlayButton').textContent='▶ Resume audio';
  document.getElementById('audioStatus').textContent='Audio paused.';
  return;
 }
 if(audioState==='paused'){
  synthesis.resume();
  audioState='speaking';
  document.getElementById('audioPlayButton').textContent='Ⅱ Pause audio';
  document.getElementById('audioStatus').textContent='Lesson audio is playing.';
  return;
 }
 const text=[
  document.getElementById('gradeLessonText').textContent,
  document.getElementById('lessonText').textContent,
  document.getElementById('lessonExampleText').textContent
 ].join(' ');
 const utterance=new SpeechSynthesisUtterance(text);
 const run=++audioRun;
 audioUtterance=utterance;
 utterance.rate=0.9;
 utterance.onend=()=>finishLessonAudio(run,'Lesson audio finished.');
 utterance.onerror=event=>{
  if(event.error!=='canceled')finishLessonAudio(run,'Audio could not be played. Try again.');
 };
 audioState='speaking';
 document.getElementById('audioPlayButton').textContent='Ⅱ Pause audio';
 document.getElementById('audioStopButton').disabled=false;
 document.getElementById('audioStatus').textContent='Lesson audio is playing.';
 synthesis.speak(utterance);
}

function finishLessonAudio(run,message){
 if(run!==audioRun)return;
 audioState='idle';
 audioUtterance=null;
 document.getElementById('audioPlayButton').textContent='▶ Play audio';
 document.getElementById('audioStopButton').disabled=true;
 document.getElementById('audioStatus').textContent=message;
}

function stopLessonAudio(){
 audioRun++;
 window.speechSynthesis.cancel();
 audioState='idle';
 audioUtterance=null;
 document.getElementById('audioPlayButton').textContent='▶ Play audio';
 document.getElementById('audioStopButton').disabled=true;
 document.getElementById('audioStatus').textContent='Audio stopped.';
}

function toggleLessonVideo(){
 if(videoState==='playing'){
  clearInterval(videoTimer);
  videoTimer=null;
  videoState='paused';
  document.getElementById('videoScene').classList.remove('is-playing');
  document.getElementById('videoPlayButton').textContent='▶ Resume visual lesson';
  document.getElementById('videoStatus').textContent='Visual lesson paused.';
  return;
 }
 if(videoState==='paused'){
  videoState='playing';
  document.getElementById('videoScene').classList.add('is-playing');
  document.getElementById('videoPlayButton').textContent='Ⅱ Pause visual lesson';
  document.getElementById('videoStatus').textContent='Visual lesson is playing.';
  videoTimer=setInterval(advanceLessonVideo,4000);
  return;
 }
 videoState='playing';
 videoStep=0;
 document.getElementById('videoStopButton').disabled=false;
 document.getElementById('videoScene').classList.add('is-playing');
 document.getElementById('videoPlayButton').textContent='Ⅱ Pause visual lesson';
 document.getElementById('videoStatus').textContent='Visual lesson is playing.';
 showLessonVideoStep();
 videoTimer=setInterval(advanceLessonVideo,4000);
}

function showLessonVideoStep(){
 document.getElementById('videoCaption').textContent=videoCaptions[videoStep];
 document.getElementById('videoScene').setAttribute('aria-label',
  `Lesson scene ${videoStep+1} of ${videoCaptions.length}`);
}

function advanceLessonVideo(){
 if(videoStep<videoCaptions.length-1){
  videoStep++;
  showLessonVideoStep();
  return;
 }
 clearInterval(videoTimer);
 videoTimer=null;
 videoState='idle';
 document.getElementById('videoScene').classList.remove('is-playing');
 document.getElementById('videoPlayButton').textContent='▶ Play visual lesson';
 document.getElementById('videoStopButton').disabled=true;
 document.getElementById('videoStatus').textContent='Visual lesson complete. Play again anytime.';
}

function resetLessonVideo(){
 clearInterval(videoTimer);
 videoTimer=null;
 videoState='idle';
 videoStep=0;
 document.getElementById('videoScene').classList.remove('is-playing');
 document.getElementById('videoCaption').textContent='Press play to explore the lesson.';
 document.getElementById('videoPlayButton').textContent='▶ Play visual lesson';
 document.getElementById('videoStopButton').disabled=true;
 document.getElementById('videoStatus').textContent='A short visual recap of this lesson.';
}

function revealLessonExample(){
 document.getElementById('lessonExample').hidden=false;
 document.getElementById('revealExampleButton').disabled=true;
 const beginQuizButton=document.getElementById('beginQuizButton');
 beginQuizButton.disabled=false;
 beginQuizButton.textContent='I’m ready—start the quiz ➜';
}

function beginQuiz(){
 document.getElementById('lessonCard').classList.add('hidden');
 document.getElementById('gameCard').classList.remove('hidden');
 document.getElementById('question').focus();
}

function showQuestion(){
 const questions=getQuestions(allWorlds[active]), question=questions[questionIndex];
 const progress=Math.round((questionIndex+1)/questions.length*100);
 document.getElementById('questionCounter').textContent=`QUESTION ${questionIndex+1} / ${questions.length}`;
 document.getElementById('progressLabel').textContent=progress+'% complete';
 const progressBar=document.querySelector('.game-progress');
 progressBar.setAttribute('aria-valuenow',progress);
 document.getElementById('progressBar').style.width=progress+'%';
 document.getElementById('question').textContent=question.q;
 document.getElementById('choices').innerHTML=question.a.map((answer,index)=>
  `<button type="button" class="answer-choice"><span class="choice-key">${String.fromCharCode(65+index)}</span>${answer}</button>`
 ).join('');
 document.querySelectorAll('.answer-choice').forEach((button,index)=>{
  button.addEventListener('click',()=>chooseAnswer(index));
 });
 document.getElementById('feedback').textContent='';
 const nextButton=document.getElementById('nextBtn');
 nextButton.disabled=true;
 nextButton.textContent='Choose an answer';
}

function chooseAnswer(index){
 const questions=getQuestions(allWorlds[active]), question=questions[questionIndex];
 const buttons=[...document.querySelectorAll('.answer-choice')];
 if(buttons.some(button=>button.disabled))return;
 buttons.forEach(button=>button.disabled=true);
 const feedback=document.getElementById('feedback');
 if(index===question.correct){
  buttons[index].classList.add('correct');
  feedback.textContent='🎉 Great answer! +10 XP';
  points+=10;
  correctAnswers++;
  roundCorrect++;
  roundXP+=10;
  saveProgress();
  document.getElementById('topPoints').textContent=points;
 }else{
  buttons[index].classList.add('wrong');
  buttons[question.correct].classList.add('correct');
  feedback.textContent='Not quite! The answer is '+question.a[question.correct]+'. Keep going!';
 }
 const nextButton=document.getElementById('nextBtn');
 nextButton.disabled=false;
 nextButton.textContent=questionIndex===questions.length-1?'Finish adventure 🏆':'Next question ➜';
}

function nextQuestion(){
 const questions=getQuestions(allWorlds[active]);
 if(questionIndex<questions.length-1){
  questionIndex++;
  showQuestion();
  return;
 }

 completed.add(active);
 saveProgress();
 document.getElementById('gameCard').classList.add('hidden');
 const resultCard=document.getElementById('resultCard');
 resultCard.classList.remove('hidden');
 document.getElementById('resultTitle').textContent='Subject cleared! '+allWorlds[active].emoji;
 document.getElementById('resultMessage').textContent=
  `You got ${roundCorrect} out of ${questions.length} quiz questions correct and earned ${roundXP} XP, including your lesson warm-up. Great job, Grade ${learnerGrade} learner!`;
}

if(document.getElementById('subjects')){
 initializeHome();
}else{
 initializeGame();
}