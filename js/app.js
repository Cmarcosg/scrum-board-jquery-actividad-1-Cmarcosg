  $(document).ready(function () {
      const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}`
      const createListString = name =>
        `<div class="list" id="${generateId('list')}">
            <div class="listHeader">
                <h4 class="titulo">${name}</h4>
                <button>X</button>
            </div>
            <div class="addTask">
            <input type="text">
        </div>
            <div class="tasks">               
            </div>
        </div>`

        const createtaskstring = texto =>
            `<div class="task" id="${generateId('task')}">
                <div class="text">${texto}</div>
                <button class= "eliminar">X</button>
            </div>`

      const appendNewList = (valor) => {
          // creamos el nodo .list
          let list = $(createListString(valor));

          if (valor === '') {
              return
          }

          // añadimos el node al DOM
          $('.lists').append(list)
      }
      const appendnewtask = (event, valor) => {

        // creamos el nodo .task
        let task = $(createtaskstring(valor));

        if (valor === '') {
            return
        }

        // añadimos el node al DOM
        $(event.target.parentNode.parentNode.querySelector('.tasks')).append(task);
    }
      // Listeners
     $(document).on('keyup','.addListWrapper input', function (event) {
        if (event.keyCode === 13) {
              appendNewList(($(this).val()).trim());
              $(this).val('');
          }
      })

    //Boton listas
    $(document).on('click', '.task button', function (event) {
        let listnode = $(event.target);
        listnode.detach();
    });


      $('.lists').on('click', '.listHeader button', function (event) {
          let listNode = $(event.target.parentNode.parentNode);
          listNode.detach();
      });

      $(document).on('keyup','.addTask  input', function (event) {
        if (event.keyCode === 13) {
            appendnewtask(event,($(this).val()).trim());
            $(this).val('');
        }
    });
    $('.lists').on('click', '.eliminar', function(event) {
        let tarea = $(event.target.parentNode)
        tarea.detach();
        console.log('eliminando');
        console.log(event.target.parentNode.parentNode);
 })
  })