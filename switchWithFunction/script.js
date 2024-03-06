const peopleLikes = names => {
     switch (names.length) {
       case 0:
         return 'Ninguém curtiu isso'
       case 1:
         return `${names[0]} curtiu isso`
       case 2:
         return `${names[0]} e ${names[1]} curtiram isso`
       case 3:
         return `${names[0]}, ${names[1]} e ${names[2]} curtiram isso`
       case 4:
         return `${names[0]}, ${names[1]} e mais ${names.length - 2} pessoas curtiram isso`
     }
   }
   
   console.log(peopleLikes(['Dione']))
   console.log(peopleLikes(['Dione', 'Matheus']))
   console.log(peopleLikes(['Dione', 'Matheus', 'Joao']))
   console.log(peopleLikes(['Dione', 'Matheus', 'Joao', 'Carlos']))