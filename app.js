const startButton = document.getElementById("startButton");
const selector = document.getElementById("blockSelector");
const startScreen = document.getElementById("start-screen");
const arContainer = document.getElementById("ar-container");


// =========================================
// MODELOS
// =========================================

const MODELS = {

  // BLOQUE 1
  bloque1: [
    "1H","2He","3Li","4Be","5B","6C","7N","8O","9F","10Ne",
    "11Na","12Mg","13Al","14Si","15P","16S","17Cl","18Ar","19K","20Ca",
    "21Sc","22Ti","23V","24Cr","25Mn","26Fe","27Co","28Ni","29Cu","30Zn",
    "31Ga","32Ge","33As","34Se","35Br","36Kr","37Rb","38Sr","39Y","40Zr"
  ],

  // BLOQUE 2
  bloque2: [
    "41Nb","42Mo","43Tc","44Ru","45Rh","46Pd","47Ag","48Cd","49In","50Sn",
    "51Sb","52Te","53I","54Xe","55Cs","56Ba","57La","58Ce","59Pr","60Nd",
    "61Pm","62Sm","63Eu","64Gd","65Tb","66Dy","67Ho","68Er","69Tm","70Yb",
    "71Lu","72Hf","73Ta","74W","75Re","76Os","77Ir","78Pt","79Au","80Hg"
  ],

  // BLOQUE 3
  bloque3: [
    "81Tl","82Pb","83Bi","84Po","85At","86Rn","87Fr","88Ra","89Ac","90Th",
    "91Pa","92U","93Np","94Pu","95Am","96Cm","97Bk","98Cf","99Es","100Fm",
    "101Md","102No","103Lr","104Rf","105Db","106Sg","107Bh","108Hs","109Mt","110Ds",
    "111Rg","112Cn","113Nh","114Fl","115Mc","116Lv","117Ts","118Og"
  ]
};


// =========================================
// INICIAR
// =========================================

startButton.addEventListener("click", () => {

  const selectedBlock = selector.value;

  startScreen.style.display = "none";

  createARScene(selectedBlock);

});


// =========================================
// CREAR ESCENA
// =========================================

function createARScene(block) {

  const scene = document.createElement("a-scene");

  scene.setAttribute(
    "mindar-image",
    `imageTargetSrc: ./targets/${block}.mind;`
  );

  scene.setAttribute("color-space", "sRGB");
  scene.setAttribute("renderer", "colorManagement: true, physicallyCorrectLights");
  scene.setAttribute("vr-mode-ui", "enabled: false");
  scene.setAttribute("device-orientation-permission-ui", "enabled: false");

  scene.innerHTML = `
    <a-assets></a-assets>

    <a-camera
      position="0 0 0"
      look-controls="enabled: false">
    </a-camera>
  `;

  arContainer.appendChild(scene);

  const models = MODELS[block];

  models.forEach((modelName, index) => {

    const entity = document.createElement("a-entity");

    entity.setAttribute(
      "mindar-image-target",
      `targetIndex: ${index}`
    );

    // EVENTO CUANDO APARECE
    entity.addEventListener("targetFound", () => {

      if(entity.querySelector("a-gltf-model")) return;

      const model = document.createElement("a-gltf-model");

      model.setAttribute(
        "src",
        `./models/${modelName}.glb`
      );

      model.setAttribute(
        "position",
        "0 0 0"
      );

      model.setAttribute(
        "rotation",
        "0 0 0"
      );

      model.setAttribute(
        "scale",
        "0.5 0.5 0.5"
      );

      model.setAttribute(
        "animation-mixer",
        ""
      );

      entity.appendChild(model);

      console.log(`${modelName} cargado`);

    });

    // EVENTO CUANDO DESAPARECE
    entity.addEventListener("targetLost", () => {

      const model = entity.querySelector("a-gltf-model");

      if(model){

        model.remove();

        console.log(`${modelName} eliminado`);

      }

    });

    scene.appendChild(entity);

  });

}