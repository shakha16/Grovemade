axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloa(res.data)
            reload(res.data)
        }
    })
    
// .catch(err => console.log(err))

let one = document.querySelector('.one')
let two = document.querySelector('.two')
function reload(arr) {
    for (let item of arr) {
        arr.splice(4) 
        let img = document.createElement('img')

        img.src = item.url
        img.style.width = "310px"
        img.style.height = "434px"

        one.append(img)
    }
}
function reloa(arr2){ 
    for (let item of arr2){
        arr2.splice(24)
        let img2 = document.createElement('img')

        img2.src = item.url
        img2.style.width = "203px"
        img2.style.height = "271px"

        two.append(img2)
    }
}
