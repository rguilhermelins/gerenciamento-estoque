


export default function categories  () { 
    fetch('http://localhost:8000/categorias')
    .then(response => response.json())
    .then(dados => {
        dados.map(cat => {
            table_categories.innerHTML +=`
            <tr>
                <td>${cat.id}</td>
                <td>${cat.nome}</td>
                <td>${cat.descricao}</td>
                <td><img src="${cat.foto}"></td>
                <td>
                <button class="btn btn-outline-warning">Editar</button>
                <button data-bs-toggle="modal" data-bs-target="#modalExcluir" onclick="abrirModal(${cat.id})" class="btn btn-outline-danger">Excluir</button>
                </td>

            </tr>`

           

        })
    });

   
    return`
    <h1>listar categorias</h1>

    <hr>

    <table id="table_categories" class="table table-hover table-striped">

    <thead class="table-dark"> 

        <tr>
            <th>#ref</th>
            <th>#Nome</th>
            <th>#Descrição</th>
            <th>#Foto</th>    
            <th>#Ações</th>
        </tr>    
    
    </thead  
    <tbody id="table_categories">

    </tbody>
    </table>
    

    <!-- Modal -->
    <div class="modal fade" id="modalExcluir" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Tem certeza que deseja excluir?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        voce não poderá desfazer essa ação.

        <input id="input_excluir">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button onclick="removeCategory()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Sim, excluir</button>
      </div>
    </div>
  </div>
</div>
    `;
}
