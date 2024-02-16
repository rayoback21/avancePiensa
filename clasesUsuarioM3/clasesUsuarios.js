"use strict";

class Estudiante {
  constructor(usuario, contraseña, logros) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.logros = logros;
  }

  login(usuario, contraseña) {
    if (usuario === this.usuario && contraseña === this.contraseña) {
      alert("¡Bienvenid@ a CUENCA LA ATENAS DE ECUADOR!");
      // Mensaje de bienvenida personalizado
      alert(`¡Hola ${this.usuario}! Bienvenid@ a tu ciudad actual, CUENCA CIUDAD DE LA CAPITAL CULTURAL DEL ECUADOR.`);
    } else {
      alert("Usuario o Contraseña Incorrecta");
    }
  }

  showAchievements() {
    if (this.logros.length > 0) {
      alert(`Logros de ${this.usuario}:`);
      this.logros.forEach((logro, index) => {
        alert(`${index + 1}. ${logro}`);
      });
    } else {
      alert(`¡${this.usuario} no has visitado nuestras instalaciones todavía!`);
    }
  }
}

let estudiante = new Estudiante("Bryan", "2116", ["Estudiante de Desarrollo de Software"]);
estudiante.login("Bryan", "2116");

estudiante.logros.push("Experto en DESARROLLADOR EN PROGRAMACION");
estudiante.showAchievements();
