function validar() {
  var correo, telefono, expresion;
  
  correo = document.getElementById('txtEmail').value;
  telefono = document.getElementById('txtTelefono').value;
  expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

  // Validar correo
  if (!expresion.test(correo)) {
    alert("El correo no es válido");
    return false;
  }

  // Validar telefono
  if (telefono.length != 10) {
    alert("El teléfono no es correcto");
    return false;
  } else if (isNaN(telefono)) {
    alert("El teléfono ingresado no es un número");
    return false;
  }

  // Si todo es correcto
  alert("Datos ingresados correctamente");


  //Cambiar el mensaje que muestra el botón. Del original "Enviar" a "Enviando datos..."
  var boton = document.getElementById('btnEnviar');
  //desabilitar boton
  boton.disabled = true;
  boton.value = "Enviando datos.......";

  // Enviar el formulario con this.form.submit()
  boton.form.submit();
}
