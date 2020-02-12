// SpaceX KOE
//
// Elon Musk ingin kamu, salah satu engineer di SpaceX, membuat roket dengan kriteria berikut.
// 
// - Ketika membuat Rocket,tiga data harus ada yaitu nama roket, versi, dan kru astronot yang akan menaikinya. 
// - Khusus parameter astronot menerima array string. jika tidak ada astronot, set dengan array kosong
// 
// Hint : javascript OOP, lihat test case.

class Rocket {
  constructor(name, version, astronauts) {
   
  }
}

const apolloEleven = new Rocket('Apollo Eleven', 11);
console.log(apolloEleven.getRocketInfo()); // Rocket name : Apollo Eleven, Version : 11, Astronauts : 0 person

apolloEleven.setRocketName('Apollo Evelen Udpate X');

console.log(apolloEleven.getRocketInfo()); // Rocket name : Apollo Evelen Udpate X, Version : 11, Astronauts : 0 person

apolloEleven.addRocketCrew('Diky'); //Diky
apolloEleven.addRocketCrew('Arga'); //Arga

console.log(apolloEleven.getRocketInfo()); //Rocket name : Apollo Evelen Udpate X, Version : 11, Astronauts : 2 person

console.log(apolloEleven.getAstronautsNames()); //Diky, Arga
