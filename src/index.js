// 1
// add javascript that:
//on page load, fetches the images using the url : const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// parses the response as `JSON`
// adds image elements to the DOM **for each** 🤔 image in the array
// 2
//add JavaScript that:
////on page load, fetches all the dog breeds using the url : const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//adds the breeds to the page in the `<ul>` provided in `index.html`

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    const container = document.querySelector('div#dog-image-container')
    const breedList = document.querySelector('ul#dog-breeds')

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        console.log(images.message)
        images.message.forEach(image => {
            const img = document.createElement('img')
            img.setAttribute('src', image)
            container.appendChild(img)
        })
    })

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.message)
        for (const breed in data.message){
            if (data.message[breed][0] === undefined) {
                const newListItem = document.createElement('li')
                newListItem.innerText= `${breed}`
                breedList.appendChild(newListItem)
                newListItem.addEventListener('click', (e) =>{
                    e.target.style.color = 'red'
                })
            }
        else if(data.message[breed][0] !== undefined){
            const mainBreed = document.createElement('li')
            mainBreed.innerText=`${breed}`
            breedList.appendChild(mainBreed)
            const subBreedList = document.createElement('ul')
            mainBreed.appendChild(subBreedList)
            
            data.message[breed].forEach(subBreedz => {
                const subBreed = document.createElement('il')
                subBreed.innerText = `${subBreedz}`
                subBreedList.appendChild(subBreed)
            })
            mainBreed.addEventListener('click', (e) =>{
                e.target.style.color = 'red'
            })
        }
        }
    })

})

