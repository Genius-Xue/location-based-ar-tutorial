// window.onload = () => {
//     const button1 = document.querySelector('button1[data-action="change"]');
//     button1.innerText = 'Scenario1';

//     const button2 = document.querySelector('button2[data-action="change"]');
//     button2.innerText = 'Scenario2';

//     let places = staticLoadPlaces();
//     renderPlaces(places);
// };

// function staticLoadPlaces() {
//     return [
//         {
//             name: 'Pokèmon',
//             location: {
//                 lat: 47.407440,
//                 lng: 8.504920,
//             },
//         },
//     ];
// }

// var models = [
//     {
//         url: './assets/magnemite/scene.gltf',
//         scale: '0.5 0.5 0.5',
//         info: 'Magnemite emit electromagnetic energy from its horseshoe magnets in order to keep afloat',
//         rotation: '0 180 0',
//     },
//     {
//         url: './assets/articuno/scene.gltf',
//         scale: '0.2 0.2 0.2',
//         rotation: '0 180 0',
//         info: 'Articuno, a large avian Pokémon with predominantly sky blue plumage and wings said to be made of ice',
//     },
//     {
//         url: './assets/dragonite/scene.gltf',
//         scale: '0.08 0.08 0.08',
//         rotation: '0 180 0',
//         info: 'Dragonite, Lv. 99, HP 150/150',
//     },
// ];

// var modelIndex = 0;
// var setModel = function (model, entity) {
//     if (model.scale) {
//         entity.setAttribute('scale', model.scale);
//     }

//     if (model.rotation) {
//         entity.setAttribute('rotation', model.rotation);
//     }

//     if (model.position) {
//         entity.setAttribute('position', model.position);
//     }

//     entity.setAttribute('gltf-model', model.url);

//     const div = document.querySelector('.instructions');
//     div.innerText = model.info;
// };

// function renderPlaces(places) {
//     let scene = document.querySelector('a-scene');

//     places.forEach((place) => {
//         let latitude = place.location.lat;
//         let longitude = place.location.lng;

//         let model = document.createElement('a-entity');
//         model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

//         setModel(models[modelIndex], model);

//         model.setAttribute('animation-mixer', '');

//         document.querySelector('button[data-action="change"]').addEventListener('click', function () {
//             var entity = document.querySelector('[gps-entity-place]');
//             modelIndex++;
//             var newIndex = modelIndex % models.length;
//             setModel(models[newIndex], entity);
//         });

//         scene.appendChild(model);
//     });
// }