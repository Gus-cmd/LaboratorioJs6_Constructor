class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
/*hasta aquí hemos creado un constructor con los requisitos que nos piden*/
    promedio() {
        return (this.nota1 * 0.15) + (this.nota2 * 0.20) + (this.nota3 * 0.25) + (this.nota4 * 0.40);
    }

    condicion() {
        const promedio = this.promedio();
        return promedio >= 12 ? 'Aprobado' : 'Desaprobado';
    }

    obsequio() {
        const promedio = this.promedio();
        return promedio > 17 ? 'Mochila' : 'Sin obsequio';
    }

    /*luego hemos creado todas las condiciones que nos piden*/
}

document.getElementById('alumnoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const alumno = new Alumno(codigo, nombre, nota1, nota2, nota3, nota4);

    document.getElementById('promedio').textContent = `Promedio: ${alumno.promedio().toFixed(2)}`;
    document.getElementById('condicion').textContent = `Condición: ${alumno.condicion()}`;
    document.getElementById('obsequio').textContent = `Obsequio: ${alumno.obsequio()}`;
    /*hasta aqui hemos dado funcionalidad al formulario para calcular los proemdios con las condiciones que tenemos*/
});
