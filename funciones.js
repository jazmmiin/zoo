class CZooAnimal {
    constructor(n, cage, type, weight) {
      this.IdAnimal = Math.floor(Math.random() * 1000) + 1; // Generar un IdAnimal aleatorio
      this.name = n;
      this.cageNumber = cage;
      this.IdTypeAnimal = type;
      this.weight = weight;
    }
  }
  
  // Crear animales
  const animal1 = new CZooAnimal("Tigre", 5, 1, 150); // Felino
  const animal2 = new CZooAnimal("León", 2, 1, 180); // Felino
  const animal3 = new CZooAnimal("Águila", 3, 2, 2); // Ave
  const animal4 = new CZooAnimal("Serpiente", 4, 3, 80); // Reptil
  const animal5 = new CZooAnimal("Pantera", 5, 1, 100); // Felino
  
  const zooAnimals = [animal1, animal2, animal3, animal4, animal5];
  
  // a. Mostrar la cantidad de animales de la Jaula 5 cuyo peso sea menor a 3 kg.
  let countAnimalsInCage5Under3kg = zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
  console.log("Cantidad de animales en la Jaula 5 cuyo peso sea menor a 3 kg: " + countAnimalsInCage5Under3kg);
  
  // b. Listar cantidad de animales de tipo felinos que están entre las jaulas 2 a 5.
  let countFelineAnimalsBetweenCages2And5 = zooAnimals.filter(animal => animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
  console.log("Cantidad de animales de tipo felinos que están entre las jaulas 2 a 5: " + countFelineAnimalsBetweenCages2And5);
  
  // c. Listar el nombre del animal de la Jaula 4 cuyo peso sea menor a 120.
  let animalNameInCage4Under120 = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
  if (animalNameInCage4Under120) {
    console.log("Nombre del animal de la Jaula 4 cuyo peso sea menor a 120: " + animalNameInCage4Under120.name);
  } else {
    console.log("No se encontró ningún animal en la jaula 4 con peso menor a 120.");
  }
  