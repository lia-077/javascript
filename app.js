// Función para actualizar la lista de usuarios
function updateUsersList() {
    const usersListElement = document.getElementById("usersList");
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    usersListElement.innerHTML = "";
  
    // Mostrar los últimos 5 usuarios guardados
    const lastFiveUsers = users.slice(-5);
  
    lastFiveUsers.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.nombre} ${user.apellido}, ${user.edad} años, ${user.correo}, ${user.direccion}, ${user.ciudad}`;
      usersListElement.appendChild(listItem);
    });
  }
  
  // Asignar evento a mostrar registro
  document.getElementById("showUsersButton").addEventListener("click", function () {
    const usersListElement = document.getElementById("usersList");
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.length === 0) {
      usersListElement.innerHTML = "<li>No hay usuarios guardados</li>";
    } else {
      // Mostrar los ultimos usuarios
      const lastFiveUsers = users.slice(-5);
  
      usersListElement.innerHTML = "";
  
      lastFiveUsers.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.nombre} ${user.apellido}, ${user.edad} años, ${user.correo}, ${user.direccion}, ${user.ciudad}`;
        usersListElement.appendChild(listItem);
      });
    }
  });
  
  //  guardar los usuarios en LocalStorage
  document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
  
    const newUser = {
      nombre,
      apellido,
      edad,
      correo,
      direccion,
      ciudad,
    };
  
    // Obtener usuarios guardados
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Agregar el nuevo usuario
    users.push(newUser);
  
    // Guardar la lista actualizada en el LocalStorage
    localStorage.setItem("users", JSON.stringify(users));
  
    // Limpiar el formulario
    document.getElementById("userForm").reset();
  
    // Actualizar la lista de usuarios
    updateUsersList();
  });
  