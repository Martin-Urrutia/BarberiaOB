let sist = new Sistema();

ocultarTodo();
function ocultarTodo() {
  document.querySelector("#pResultado").innerHTML = "";
  ocultar("cBarberos");
}

// EVENTOS CLICK HEADERS
document
  .querySelector("#headerMostrarBarberos")
  .addEventListener("click", mostrarHeaderBarberos);

// HEADER
function mostrarHeaderBarberos() {
  ocultarTodo();
  mostrar("cBarberos");
  mostrarBarberos();
}

// FUNCIONES AUXILIARES
function mostrar(pId) {
  document.querySelector("#" + pId).style.display = "block";
}
function ocultar(pId) {
  document.querySelector("#" + pId).style.display = "none";
}
function limpiar(pId) {
  document.querySelector("#" + pId).value = "";
}

// Agregar obj a array
function mostrarServicios() {
  let cuerpoTabla = "";
  for (let i = 0; i < sist.servicios.length; i++) {
    let servicioActual = sist.servicios[i];
    cuerpoTabla += `
      <tr>
        <td>${servicioActual.nombre}</td>
        <td>${servicioActual.precio}</td>
        <td>
          <p>${servicioActual.descripcion}</p>
        </td>
        <td>
          <img src="${servicioActual.foto}" />
        </td>
      </tr>`;
  }
  document.querySelector("#cuerpoServicios").innerHTML = cuerpoTabla;
}

function mostrarBarberos() {
  let cuerpoTabla = "";
  for (let i = 0; i < sist.barberos.length; i++) {
    let barberoActual = sist.barberos[i];
    cuerpoTabla += `
      <tr>
        <td>${barberoActual.nombre + " " + barberoActual.apellido}</td>
        <td>${barberoActual.lema}</td>
        <td>
          <p>${barberoActual.descripcion}</p>
        </td>
        <td>
          <img src="${barberoActual.foto}" />
        </td>
      </tr>`;
  }
  document.querySelector("#cuerpoBarberos").innerHTML = cuerpoTabla;
}

function cargarImagenesServicios() {
  let combo = '<option value="-1">Seleccione...</option>';
  for (let i = 0; i < sist.servicios.length; i++) {
    let servicioActual = sist.servicios[i];

    combo += `<option value="${servicioActual.id}">${servicioActual.foto}</option>`;
  }

  document.querySelector("#slcImagenServicios").innerHTML = combo;
}

function cargarImagenesBarberos() {
  let combo = '<option value="-1">Seleccione...</option>';
  for (let i = 0; i < sist.barberos.length; i++) {
    let barberoActual = sist.barberos[i];

    combo += `<option value="${barberoActual.id}">${barberoActual.foto}</option>`;
  }

  document.querySelector("#slcImagenBarberos").innerHTML = combo;
}

// sistema.servicios.push(s1, s2, s3, s4, s5, s6);
// Convertir obj JSON
// let serviciosJSON = JSON.stringify(sistema.servicios);
// lo guardas a localstorage
//localStorage.setItem("servicios", serviciosJSON);

//
//localStorage.setItem("sistema", JSON.stringify(sistema));
