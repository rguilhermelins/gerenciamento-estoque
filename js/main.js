import login from "./pages/login.js"
import addBranch from "./pages/addBranch.js"
import branches from "./pages/branches.js"
import categories from "./pages/categories.js"
import pagina01 from "./pages/pagina01.js"
import addCategory from "./pages/addCategory.js"

let pages = {
    'addBranch': addBranch,
    'branches': branches,
    'categories': categories,
    'pagina01': pagina01,
    'login': login,
    'addCategory': addCategory,
}


document.querySelectorAll('[data-action="menu"]').forEach(  (item) => {
    item.addEventListener('click', () => {
        content.innerHTML = pages[item.dataset.content] ()

    } )
}  )


