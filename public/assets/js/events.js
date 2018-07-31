toRegisterBtn.addEventListener('click', () => {
  welcome.classList.add('d-none');
  success.classList.add('d-none');
  register.classList.remove('d-none');
  registerVisitor.classList.remove('d-none');
});

loginAdmin.addEventListener('click', () => {
  loginAdmin.classList.add('d-none');
  logSection.classList.remove('d-none');
  toRegisterBtn.classList.add('d-none');
});

closeLogin.addEventListener('click', () => {
  loginAdmin.classList.remove('d-none');
  logSection.classList.add('d-none');
  toRegisterBtn.classList.remove('d-none');
});

closeRegister.addEventListener('click', () => {
  register.classList.add('d-none');
  success.classList.add('d-none');
  welcome.classList.remove('d-none');
  loginAdmin.classList.remove('d-none');
  toRegisterBtn.classList.remove('d-none');
});
