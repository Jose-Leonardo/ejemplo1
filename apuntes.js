let users = [
    { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
    { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
    { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
    { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
    ];
    
  function application(num1){
    let aux = []
    aux = num1.filter(Element => Element.application != null)
      //*.reduce(a, y) crea un acumulador y un iterador
      //*el 3er declara el valor inicial del acumulador "total = {} o 0"
      //* lo que hace es eliminar los nombres repetidos y meterlos a un arreglo como objetos
    let filtro = aux.reduce((total, cadavalor) => {
      if (total[cadavalor.channel]) {
        total[cadavalor.channel]++
      }else{
        total[cadavalor.channel] = 1
      }
      return total
    }, {})//* aqui se aprecia mejor
   return filtro
  } 

  console.log(application(users))
  console.log(" ")
  var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
    return a.concat(b);
  });

  console.log(integrado);