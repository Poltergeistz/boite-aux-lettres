function Courriers(adresse, courrier){
    this.adresse = adresse;
    this.courrier = courrier;
  }
  
  courrier1 = new Courriers("Chemin des développeurs", "letter");
  console.log(courrier1);
  courrier2 = new Courriers("Route de St go", "ad");
  console.log(courrier2);
  courrier3 = new Courriers("Chemin du Javascript", "letter and ad");
  console.log(courrier3);
  courrier4 = new Courriers("Boulevard du code", "bill");
  console.log(courrier4);
  
  
  function Habitation(adresse){
      this.adresse = adresse;
      this.bal = {
          courriers: [],
          deposerCourrier: function(courrier){
              this.courriers.push(courrier)
            return ("C'est l'heure de la pause !");
          },
          retirerCourrier: function(){
            this.courriers.shift(courrier);
          }
      }
  }
  maison1 = new Habitation("Chemin des développeurs");
  console.log(maison1);
  maison2 = new Habitation("Route de St go");
  console.log(maison2);
  maison3 = new Habitation("Chemin du Javascript");
  console.log(maison3);
  maison4 = new Habitation("Boulevard du code"); 
  console.log(maison4);
  
  // maison1 expect a letter.
  // maison2 expect an ad.
  // maison3 expect a letter and an ad.
  // maison4 expect a bill.