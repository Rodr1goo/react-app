
const productos = [


    {
        id:'01',
        name: 'Anatómicos',
        description:"Cortes anatómicos - Ellis, Logan, Dixon.",
        img: '/img/anatomicos.png',
        stock: 5,
        category:'Anatomicos'
}, 
    {
        id:'02',
        name: 'Embriologia',
        description:"Langman 14° Edición",
        img:'/img/embrio.png',
        stock: 5,
        category:'Embriologia'
},


    {id:'03', name: 'Histología', description:"Histología, Texto y Atlas - Ross. Edición 8", img:'/img/histo.png', stock: 5, category:'Histologia'},
    {id:'04', name: 'Netter', description:"Netter para colorear. Edición 2.", img:'/img/netter2.png', stock: 5, category:'Netter'},
    {id:'05', name: 'Neuroanatomía', description:"Neuroanatomía humana", img:'/img/neuroanatomia.png', stock: 5, category:'Neuroanatomia'},
    {id:'06', name: 'Neuroanatomía', description:"Neuroanatomía humana 9° Edición", img:'/img/neuroanatomia9.png', stock: 5, category:'Neuroanatomia'},
    {id:'07', name: 'Nervios craneales', description:"PAUWELS 3ra Edición", img:'/img/pauwels.png', stock: 5, category:'Nervios craneales'},
    {id:'08', name: 'Anatomía humana', description:"Rouviere 11ma Edición", img:'/img/rouviere.png', stock: 5, category:'Anatomia humana'}

]

export const obtenerProductos = new Promise ((resolve, reject)=>{

    //aca se ponen las acciones a realizar
    let condition = true

    if  (condition) {
        setTimeout(() => {
            resolve (productos)
        }, 3000);
    }else {
        reject('no funciona')
    }



})