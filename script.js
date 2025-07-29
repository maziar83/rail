const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.querySelector('.close-btn');

loginBtn.onclick = () => {
  document.getElementById('authTitle').innerText = "ورود به حساب";
  authModal.style.display = 'flex';
};

signupBtn.onclick = () => {
  document.getElementById('authTitle').innerText = "ثبت‌نام";
  authModal.style.display = 'flex';
};

closeBtn.onclick = () => {
  authModal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == authModal) {
    authModal.style.display = 'none';
  }
};
