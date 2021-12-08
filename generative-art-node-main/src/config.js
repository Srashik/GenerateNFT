const layersOrder = [
    { name: 'Backgrounds', number: 10 },
    { name: 'BlackLine', number: 10 },
    { name: 'BlueLine', number: 10 },
    { name: 'GreenLine', number: 10 },
    { name: 'OrangeLine', number: 10 },
    { name: 'PinkLine', number: 10 },
    { name: 'PurpleLine', number: 10 },
    { name: 'RedLine', number: 10 },
    { name: 'WhiteLine', number: 10 },
    { name: 'YellowLine', number: 10 },
   
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10000000000;


// const layers = [{

//     id: 1,
//     name: "Backgrounds",
//     location: `${dir}/Backgrounds/`,
//     elements: getElements(`${dir}/Backgrounds/`),
//     position: {x : 0, y : 0},
//     size: {width: width, height: height},
// },
// {

//     id: 1,
//     name: "Body",
//     location: `${dir}/Body/`,
//     elements: getElements(`${dir}/Body/`),
//     position: {x : 0, y : 0},
//     size: {width: width, height: height},
// },
// {

//     id: 1,
//     name: "Eyes",
//     location: `${dir}/Eyes/`,
//     elements: getElements(`${dir}/Eyes/`),
//     position: {x : 0, y : 0},
//     size: {width: width, height: height},
// },
// {

//     id: 1,
//     name: "Hats",
//     location: `${dir}/Hats/`,
//     elements: getElements(`${dir}/Hats/`),
//     position: {x : 0, y : 0},
//     size: {width: width, height: height},
// },
// {

//     id: 1,
//     name: "Mouths",
//     location: `${dir}/Mouths/`,
//     elements: getElements(`${dir}/Mouths/`),
//     position: {x : 0, y : 0},
//     size: {width: width, height: height},
// }];

module.exports = { layersOrder, format, rarity, defaultEdition };