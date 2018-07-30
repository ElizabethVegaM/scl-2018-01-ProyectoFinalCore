firebase.database().ref('visitors')
  .limitToLast(100)
  .on('child_added', (newVisitor) => {
    const time = new Date(newVisitor.val().time);
    bodyDashboard.innerHTML += `
      <tr>
        <td>
          <img class="avatar-pic" id="avatarPic" src="${newVisitor.val().photo}"></img>
          <p>${newVisitor.val().name}/</p>
          <p>${newVisitor.val().company.toUpperCase()}</p>
        </td>
        <td>
          <p>${time.getDate()}/${time.getMonth()}</p> 
          <p>${time.getHours()}:${time.getMinutes()}</p>
        </td>
        <td>
          <p>${newVisitor.val().companyToVisit}</p>
        </td>
        <td>${newVisitor.val().reason}</td>
       </tr>
    `;
  });
