let count = 0
const btnOpenModal = document.getElementById('btn');
//const btnOpenModal = document.querySelector('#btn')
function modalw() {
    let modal = document.createElement('div')
    let modalContent = document.createElement('div')
    //header
    let modalHeader = document.createElement('div')
    let modalHeaderTitle = document.createElement('h2')
    let closeW = document.createElement('span')
    //body
    let modalBody = document.createElement('div')
    let modalBodyContent = document.createElement('p')
    //fotter
    let modalFotter = document.createElement('div')
    let modalFotterContent = document.createElement('h3')
    // adding styles 
    modal.className = 'modal'
    modal.id = 'div'
    modalContent.className = "modal-content"
    modalHeader.className = "modal-header"
    modalBodyContent.className = "modal-body"
    modalFotter.className = "modal-footer"
    closeW.id = "cls"
    closeW.className = "close"
    // adding content
    closeW.innerHTML = "&times;"
    modalHeaderTitle.textContent = "Modal Header"
    modalBodyContent.textContent = "Hello Word!!"
    modalFotterContent.textContent = "Modal Footer"
    // creating modal window
    modalHeader.append(closeW, modalHeaderTitle) // added as string
    modalBody.append(modalBodyContent)
    modalFotter.append(modalFotterContent)
    modalContent.append(modalHeader, modalBody, modalFotter)
    modal.appendChild(modalContent) //added as html

    closeW.addEventListener('click', (e) => { modal.parentNode.removeChild(modal) })
    document.body.appendChild(modal)
}
btnOpenModal.addEventListener('click', modalw)