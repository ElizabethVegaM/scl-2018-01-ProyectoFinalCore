// Tabla Dashboard
firebase.database().ref('visitors').orderByChild('time')
  .limitToLast(100)
  .on('child_added', (newVisitor) => {
    const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const time = new Date(newVisitor.val().time);
    bodyDashboard.innerHTML += `
      <tr>
        <td class="button modal-button" data-target="#a${newVisitor.key}">
          <img class="avatar-pic" id="avatarPic" src="${newVisitor.val().photo}"></img>
          <p>${newVisitor.val().name}</p>
          <p>"${newVisitor.val().company.toUpperCase()}"</p>
        </td>
        <td>
          <p>${time.getDate()}/${month[time.getMonth()]}</p> 
          <p>${time.getHours()}:${time.getMinutes()}</p>
        </td>
        <td>
          <p>${newVisitor.val().companyToVisit}</p>
        </td>
        <td>${newVisitor.val().reason}</td>
      </tr>
      <div id="a${newVisitor.key}" class="modal modal-fx-fadeInScale">
      <div class="modal-background"></div>
      <div class="modal-content"> 
        <p>Correo: ${newVisitor.val().email}</p>
        <p>RUT: ${newVisitor.val().rut}</p>
        <p>Patente: ${newVisitor.val().licensePlate}</p>
      <button class="modal-close is-large" aria-label="close"><i class="fas fa-times" id="closeLogin"></i></button>
      </div>
      </div>
    `;
  });

// Agregar coleccion residentes
addResident.addEventListener('click', () => {
  let newResident = firebase.database().ref().child('residents').push().key;
  firebase.database().ref(`residents/${newResident}`).set({
    company: newComapny.value,
    emailCompany: newEmail.value,
  });
});

firebase.database().ref('residents')
  .on('child_added', (newResident) => { 
    newComapny.value = '';
    newEmail.value = '';
    residentSuccess.innerHTML += `
  <div class="sectionInfoResident">
  <p class="new">Residente: <span>${newResident.val().company}</span></p>
  <p class="new">Correo Corporativo: <span>${newResident.val().emailCompany}</span></p>
  <i id="${newResident.key}-trash" class="fas fa-trash" data-id="${newResident.key}" onclick="deleteResident(event)"></i>
  <hr>
  </div>
  `; 
  });        

function deleteResident(event) {
  if (confirm('¿Estás seguro de eliminar este Residente?')) {
    event.stopPropagation();
    const residentId = event.target.getAttribute('data-id');
    const residentRef = firebase.database().ref('residents').child(residentId);
    residentRef.remove();
    residentSuccess.removeChild(residentSuccess.childNodes[0] && residentSuccess.childNodes[1]);
  } else {
  }
}

function drawChart() {
  let dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'date',
    id: 'Date' });
  dataTable.addColumn({ type: 'number',
    id: 'Won/Loss' });
  dataTable.addRows([
    [ new Date(2012, 3, 13), 37032 ],
    [ new Date(2012, 3, 14), 38024 ],
    [ new Date(2012, 3, 15), 38024 ],
    [ new Date(2012, 3, 16), 38108 ],
    [ new Date(2012, 3, 17), 38229 ],
  ]);

  let chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

  let options = {
    title: 'Visitas Diarias',
    height: 350,
  };

  chart.draw(dataTable, options);
}
