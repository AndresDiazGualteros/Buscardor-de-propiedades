const contacto = [
    {
        nombre: "Ronald",
        apellido: "Nav",
        numero: "313265498",
        gustos: ['pizza', 'programación', 'enseñar']
      
    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372684',
        gustos: ['Hogwarts', 'magia']
    },

    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['clases interesantes', 'violin']
    },
    {
        nombre: 'Goku',
        apellido: 'Kakaroto',
        numero: '123412523',
        gustos: ['Artes Marciales', 'Milk', 'Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: ['Correr superrapido', '	Iris West', 'Misterios']
    },
    {
        nombre: 'Tony',
        apellido: 'Star',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },
]
const resultado = document.getElementById("Resultado");
const propiedades = document.getElementById("propiedades");
const nombre = document.getElementById("Nombre");
nombre.addEventListener("click", () => {
    nombre.value = ""
    propiedades.selectedIndex = "0"
    resultado.value = ""

})

const buscar = document.getElementById("buscar");
buscar.addEventListener("click", buscarPropiedades);
function buscarPropiedades(){
    if(nombre.value === "" || propiedades.options[propiedades.selectedIndex].value==="0"){
        alert("No ingreso bien los datos");
    }else{
        seleccion()
    }
}

function seleccion(){
    contacto.forEach( i => {
        if(i.nombre.toLowerCase() === nombre.value.toLowerCase()){
            switch (propiedades.options[propiedades.selectedIndex].value) {
                case "1":
                    resultado.value = i.apellido
                    break;
                case "2":
                    resultado.value = i.numero
                    break;
                case "3":
                    resultado.value = i.gustos
                    break;
                case "4":
                    resultado.value = i.apellido+ "   "+i.numero+"   "+i.gustos
                default:
                    break;
            }
        }
    });
    if (resultado.value==""){
        alert("No esta el nombre en la base de datos")
    }
}