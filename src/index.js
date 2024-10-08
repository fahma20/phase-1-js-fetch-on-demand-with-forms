const init = () => {
    const inputform = (document.querySelector ("form"))
    //add eventListener to an input
    inputform.addEventListener ("submit", (event) => {
        event.preventDefault ()

        const input = document.querySelector ("input#searchByID")
        console.log (input.value)
        fetch (`http://localhost:3000/movies/${input.value}`)
        .then ((resp) => resp.json ())
        .then ((data) => {
            const title =document.querySelector("section#movieDetails")
            //console.log (title)
            console.log(data.title)
            title.textContent = data.title
        })
      
    })
};
  


document.addEventListener('DOMContentLoaded', init);