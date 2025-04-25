document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Previene que se envíe sin validaciones
  
      const cedula = document.getElementById('cedula').value.trim();
      const nombres = document.getElementById('nombres').value.trim();
      const apellidos = document.getElementById('apellidos').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const correo = document.getElementById('correoElectronico').value.trim();
  
      // Validaciones
      const errores = [];
  
      // Validar solo números en cédula
      if (!/^\d+$/.test(cedula)) {
        errores.push("La cédula solo debe contener números.");
      }
  
      // Validar solo letras en nombres y apellidos
      if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombres)) {
        errores.push("El nombre no debe contener números ni caracteres especiales.");
      }
  
      if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellidos)) {
        errores.push("El apellido no debe contener números ni caracteres especiales.");
      }
  
      // Validar número de teléfono con 10 dígitos
      if (!/^\d{10}$/.test(telefono)) {
        errores.push("El teléfono debe contener exactamente 10 números.");
      }
  
      // Validar correo que termine en @gmail.com
      if (!/^[\w.-]+@gmail\.com$/.test(correo)) {
        errores.push("El correo debe ser una cuenta @gmail.com válida.");
      }
  
      // Mostrar errores o mensaje de éxito
      if (errores.length > 0) {
        alert(errores.join('\n'));
      } else {
        alert("¡Formulario enviado correctamente!");
        form.reset(); // Limpia el formulario
      }
    });
  });