toRegisterBtn.addEventListener('click', () => {
  welcome.classList.add('d-none');
  register.classList.remove('d-none');
});

loginAdmin.addEventListener('click', () => {
  loginAdmin.classList.add('d-none');
  logSection.classList.remove('d-none');
  toRegisterBtn.classList.add('d-none');
})

closeLogin.addEventListener('click', () => {
  loginAdmin.classList.remove('d-none');
  logSection.classList.add('d-none');
  toRegisterBtn.classList.remove('d-none');
})
