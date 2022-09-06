document.querySelectorAll('[data-action="menu"]').forEach(  (item) => {
    item.addEventListener('click', () => {
        content.innerHTML = window[item.dataset.content] ()

    } )
}  )



