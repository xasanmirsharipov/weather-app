const name = (id) => {
   if(id > 199 && id < 233){
       return 'thunderstorm'
   }
   else if(id > 299 && id < 322){
       return 'drizzle'
   }
   else if(id > 499 && id < 532){
       return 'rain'
   }
   else if(id > 599 && id < 632){
       return 'snow'
   }
   else if(id > 700 && id < 782){
       return 'atmosphere'
   }
   else if(id === 800){
       return 'clear'
   }
   else if(id > 800 && id < 805){
       return 'clouds'
   }
   else {
       return 'default-img'
   }
};

export default {
    name
}