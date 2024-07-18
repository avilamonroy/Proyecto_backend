document.addEventListener('DOMContentLoaded', componerCartel);

const jueves = ["Arctic Monkeys", "M83", "Phoenix", "Jamie xx", "Pavement",
  "The Blaze", "Duki", "IDLES", "Florence and the Machine", "The Chemical Brothers"
];

const viernes = ["LCD Soundsystem", "J Balvin", "The Killers", "Placebo", "Moderat", "Bicep",
  "Nathy Peluso", "Caribou", "Kelly Lee Owens"
];

const sabado = ["The Strokes", "Bad Bunny", "Kendrick Lamar", "Pet Shop Boys", "Khalid", "Foals",
  "FKA twigs", "Arca", "Jorja Smith"
];


const dias = {
  "Jueves": jueves,
  "Viernes": viernes,
  "Sábado": sabado
};


function componerCartel() {
  const nombresGuardados = JSON.parse(localStorage.getItem('nombresGuardados')) || [];

  const cartelJueves = document.getElementById('columna-jueves');
  const cartelViernes = document.getElementById('columna-viernes');
  const cartelSabado = document.getElementById('columna-sabado');

  while (nombresGuardados.length > 0) {
    for (nombreDia of Object.keys(dias)) {
      const dia = dias[nombreDia];
      if (nombresGuardados.length !== 0) {
        dia.unshift(nombresGuardados.pop());
      }
    }
  }

  const columnas = {
    "Jueves": cartelJueves,
    "Viernes": cartelViernes,
    "Sábado": cartelSabado
  };

  const tamañoBase = 28;
  const tamañoPaso = 1;

  for (let dia in dias) {
    const tituloDia = document.createElement('h2');
    tituloDia.textContent = dia;
    columnas[dia].appendChild(tituloDia);
    dias[dia].forEach((nombre, index) => {
      const div = document.createElement('div');
      div.textContent = nombre;
      div.style.fontSize = `${tamañoBase - (index * tamañoPaso)}px`;
      if (index == 0) {
        div.style.fontWeight = 'bold';
      }
      columnas[dia].appendChild(div);
    });
  }
}