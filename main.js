                    // Make Frequently Asked Questions Clickable //

//select all headers, for each header add click event listener 
//set variable heading to be true
//expand body by removing hidden class 
//If user clicks a header while body is open, hide it 

const headers = document.querySelectorAll(".faq-header")

headers.forEach(header => {
    let hidden = true
    header.addEventListener("click", () => {
        if(hidden) {
            headers.forEach(head => {
                head.nextSibling.nextSibling.classList.add("hidden")
                head.children[1].innerHTML = "&#10011;"
            }) 
            header.nextSibling.nextSibling.classList.remove("hidden")
            header.children[1].innerHTML = "&#10005;"
            hidden = false
        } else { 
            header.nextSibling.nextSibling.classList.add("hidden")
            header.children[1].innerHTML = "&#10011;"
            hidden = true
        }
    })
})
