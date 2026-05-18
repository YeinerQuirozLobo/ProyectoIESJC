// archivo: ./js/elements.js
const periodicBlocks = [
  {
    id: "bloque1",
    file: "./targets/bloque1.mind",
    elements: {
      0: { symbol: "H", name: "Hidrógeno", group: "No Metal", desc: "Gas altamente inflamable...", model: "./models/1H.glb" },
      1: { symbol: "He", name: "Helio", group: "Gas Noble", desc: "Gas inerte, incoloro...", model: "./models/2He.glb" },
      // ... del 0 al 39
    }
  },
  {
    id: "bloque2",
    file: "./targets/bloque2.mind",
    elements: {
      0: { symbol: "Nb", name: "Niobio", group: "Metal de Transición", desc: "Metal dúctil utilizado en...", model: "./models/41Nb.glb" },
      // ... del 0 al 39
    }
  },
  {
    id: "bloque3",
    file: "./targets/bloque3.mind",
    elements: {
      0: { symbol: "Tl", name: "Talio", group: "Metal del Bloque p", desc: "Metal blando y muy tóxico...", model: "./models/81Tl.glb" },
      // ... del 0 al 37
    }
  }
];