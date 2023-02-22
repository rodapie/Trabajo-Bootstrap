document.addEventListener("DOMContentLoaded", function() {
    fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json")
      .then(response => response.json())
      .then(data => {
        const tabla = document.querySelector("table tbody");
        data.forEach(cliente => {
          const row = tabla.insertRow();
          row.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td><span class="badge bg-primary">${cliente.sexo}</span></td>
            <td>${cliente.edad}</td>
            <td>${cliente.altura}</td>
            <td>${cliente.peso}</td>
            <td><span class="badge bg-secondary">${cliente.actividad}</span></td>
            <td>${calcularGET(cliente.sexo,cliente.peso,cliente.altura,cliente.edad,cliente.actividad)}</td>
            <td>${calcularGER(cliente.sexo,cliente.peso,cliente.altura,cliente.edad)}</td>
          `;
        });
      })
      .catch(error => console.error(error));
  });

  


  const btnCargar = document.querySelector("#btnAñadir");

btnCargar.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json")
    .then(response => response.json())
    .then(data => {
      const tabla = document.querySelector("table tbody");
      data.forEach(cliente => {
        const row = tabla.insertRow();
        row.innerHTML = `
          <td>${cliente.nombre}</td>
          <td>${cliente.apellidos}</td>
          <td><span class="badge bg-primary">${cliente.sexo}</span></td>
          <td>${cliente.edad}</td>
          <td>${cliente.altura}</td>
          <td>${cliente.peso}</td>
          <td><span class="badge bg-secondary">${cliente.actividad}</span></td>
          <td>${calcularGET(cliente.sexo,cliente.peso,cliente.altura,cliente.edad,cliente.actividad)}</td>
          <td>${calcularGER(cliente.sexo,cliente.peso,cliente.altura,cliente.edad)}</td>
        `;
      });
    })
    .catch(error => console.log(error));
});

document.querySelector("#clienteGuardado").addEventListener("click", function(){
const edad = document.querySelector("#edad").value;
const altura = document.querySelector("#altura").value;
const peso = document.querySelector("#peso").value;
const sexo = document.querySelector("#sexo").value;
const actividad = document.querySelector("#actividad").value;
document.getElementById("tabla principal").insertRow(-1).innerHTML= `
          <td>${document.querySelector("#nombre").value}</td> 
          <td>${document.querySelector("#apellidos").value}</td>
          <td><span class="badge bg-primary">${sexo}</span></td>
          <td>${edad}</td>
          <td>${altura}</td>
          <td>${peso}</td>
          <td><span class="badge bg-secondary">${actividad}</span></td>
          <td>${calcularGET(sexo,peso,altura,edad,actividad)}</td>
          <td>${calcularGER(sexo,peso,altura,edad)}</td>

        `;
               

});


function calcularGER(sexo,peso,altura,edad){

    if(sexo == "hombre"){
    return (66.473+(13.751*peso) + (5.0033*altura) - (6.7550*edad)).toFixed(2);
    }else{
    return (655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad)).toFixed(2);
    }
}

function calcularGET(sexo,peso,altura,edad,actividad){
  
  if(sexo = "hombre"){
    if (actividad == "sedentaria"){
      var GER = (66.473+(13.751*peso) + (5.0033*altura) - (6.7550*edad));
      GER = GER * 1.3;
      return GER.toFixed(2);
    }else if (actividad == "ligera"){
      var GER = (66.473+(13.751*peso) + (5.0033*altura) - (6.7550*edad)) ;
      GER = GER * 1.6;
      return GER.toFixed(2);
    }else if (actividad == "moderada"){
      var GER = (66.473+(13.751*peso) + (5.0033*altura) - (6.7550*edad)) ;
      GER = GER * 1.7;
      return GER.toFixed(2);
    }else if (actividad == "intensa"){
      var GER = (66.473+(13.751*peso) + (5.0033*altura) - (6.7550*edad));
      GER = GER * 2.1;
      return GER.toFixed(2);
    }

  }else{
    if (actividad == "sedentaria"){
        var GER = (655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad));
        GER = GER * 1.3;
        return GER.toFixed(2);
      }else if (actividad == "ligera"){
        var GER = (655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad)) * 1.5;
        GER = GER * 1.5;
        return GER.toFixed(2);
      }else if (actividad == "moderada"){
        var GER = (655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad)) * 1.6;
        GER = GER * 1.6;
        return GER.toFixed(2);
      }else if (actividad == "intensa"){
        var GER = (655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad));
        GER = GER * 1.9;
        return GER.toFixed(2);
      }
  }
 
}