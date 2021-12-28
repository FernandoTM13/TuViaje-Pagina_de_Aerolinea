function alerta(){
    Swal.fire({
        
        title: '¿Desea selecionar este asiento?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Felicidades!',
            'Tu asiento ha sido selecionado correctamente',
            'success'
          )
        }
      })
}

function ocupado(){
     Swal.fire({
        icon: 'error',
        title: 'Lo sentimos este asiento está ocupado'
      }) 
}