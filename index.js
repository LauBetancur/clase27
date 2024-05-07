const render =async () => {

//const nombre= sessionStorage.getItem('nombre');
//alert(nombre);
//sessionStorage.setItem('clave', 'algun valor');

// const persona = {
//     id:1,
//     nombre: 'laura',
// };
// console.log(typeof persona);

// const personaStr = JSON.stringify(persona);
// console.log(typeof personaStr);
// console.log(persona, personaStr);

// localStorage.setItem("persona", personaStr);

// const personaStorage = localStorage.getItem("persona");
// const personaObejeto = JSON.parse(personaStorage);
// console.log( typeof personaStorage , typeof personaObejeto);

const personas = [
    {
        nombre: "laura",
    },
    {
        nombre: "pedro",
    },
];

const personasStr = JSON.stringify(personas);
localStorage.setItem("personas", personasStr);

const personasStorage = JSON.parse (localStorage.getItem("personas"));
personasStorage.push({nombre: "juan"});

localStorage.setItem("personas", JSON.stringify(personasStorage));


};
document.addEventListener('DOMContentLoaded', render);