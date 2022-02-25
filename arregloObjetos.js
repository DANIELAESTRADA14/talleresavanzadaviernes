let personas = [
    {nombre:"Daniela", edad:26},
    {nombre:"Manuela", edad:21},
    {nombre:"Estefania", edad:19},
    {nombre:"Mateo", edad:20},
    {nombre:"Daniel", edad:32}

]

//Filtrar
let filtrado = personas.filter (persona => persona.edad>20)

console.log(filtrado);

//Mapeado
let mapeado = personas.map (persona => persona.nombre + " de Medallo")

console.log(mapeado);

//forEach 
personas.forEach(persona => persona.nombre = "nn")

console.log(personas);