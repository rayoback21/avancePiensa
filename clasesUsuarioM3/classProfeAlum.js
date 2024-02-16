"use strict";

class Nivel {
  constructor(descripcion, puntajeNecesario) {
    this.descripcion = descripcion;
    this.puntajeNecesario = puntajeNecesario;
  }

  puntajeAlcanzado(puntajeActual) {
    return puntajeActual >= this.puntajeNecesario;
  }

  avanzarNivel(estudiante) {
    if (this.puntajeAlcanzado(estudiante.puntaje)) {
      alert(`¡Felicidades! ${estudiante.usuario} ha alcanzado el nivel ${this.descripcion}`);
      estudiante.nivelActual = this;
    } else {
      alert(`¡${estudiante.usuario} todavía no ha alcanzado el puntaje necesario para el nivel ${this.descripcion}`);
    }
  }
}

class Profesor {
  constructor(nombre, materia) {
    this.nombre = nombre;
    this.materia = materia;
  }

  asignarNivel(estudiante, nivel) {
    estudiante.nivelActual = nivel;
  }

  calificarExamen(estudiante, puntaje) {
    estudiante.puntaje = puntaje;
    if (nivel.puntajeAlcanzado(puntaje)) {
      alert(`¡Felicidades! ${estudiante.usuario} ha aprobado el examen de ${nivel.descripcion} con un puntaje de ${puntaje}`);
    } else {
      alert(`Lo siento, ${estudiante.usuario} no ha aprobado el examen de ${nivel.descripcion} con un puntaje de ${puntaje}`);
    }
  }
}

class Estudiante {
  constructor(usuario, contraseña, logros, nivelActual, puntaje) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.logros = logros;
    this.nivelActual = nivelActual;
    this.puntaje = puntaje;
  }

  login(usuario, contraseña) {
    if (usuario === this.usuario && contraseña === this.contraseña) {
      alert("¡Bienvenid@ al TEC!");
      // Mensaje de bienvenida personalizado
      alert(`¡Hola ${this.usuario}! Bienvenid@ al INSTITUTO TEC SUDAMERICANO.`);
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
      alert(`¡${this.usuario} no ha visitado nuestras instalaciones!`);
    }
  }

  agregarLogro(nuevoLogro) {
    this.logros.push(nuevoLogro);
    alert(`¡Felicidades! Se ha agregado el logro "${nuevoLogro}" a tu perfil.`);
    this.showAchievements();
  }
}

// Ejemplo de uso
let nivel1 = new Nivel("Principiante", 30);
let nivel2 = new Nivel("Intermedio", 60);
let nivel3 = new Nivel("Avanzado", 90);

let profesor = new Profesor("MARCO GUAMAN", "Metodologia");

let estudiante1 = new Estudiante("Estudiante1", "2116", ["Estudiante de Desarrollo de Software"], nivel1, 40);
let estudiante2 = new Estudiante("Estudiante2", "2116", ["Experto en DESARROLLO EN PROGRAMACION"], nivel2, 70);

estudiante1.login("Estudiante1", "2116");

// Mostrar logros
estudiante1.showAchievements();

estudiante1.agregarLogro("Ganador del Hackathon Cuenca 2024");

profesor.asignarNivel(estudiante1, nivel2);

profesor.calificarExamen(estudiante1, 85);
