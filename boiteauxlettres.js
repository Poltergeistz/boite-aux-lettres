function Courriers(adresse, courrier){
    this.adresse = adresse;
    this.courrier = courrier;
  }
  
  courrier1 = new Courriers("Chemin des développeurs", "letter");
  courrier2 = new Courriers("Route de St go", "ad");
  courrier3 = new Courriers("Chemin du Javascript", "letter and ad");
  courrier4 = new Courriers("Boulevard du code", "bill");
  
  
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
  maison2 = new Habitation("Route de St go");
  maison3 = new Habitation("Chemin du Javascript");
  maison4 = new Habitation("Boulevard du code");
  
  Habitation.deposerCourrier()
  console.log(Habitation.deposerCourrier)
  
  // maison1 expect a letter.
  // maison2 expect an ad.
  // maison3 expect a letter and an ad.
  // maison4 expect a bill.