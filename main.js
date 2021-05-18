/* Creare uno slider di immagini: potete usare le immagini che desiderate.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (usate created o mounted!).
Consiglio del giorno:
Come sempre è importante usare la documentazione di Vuejs per scoprire/rinfrescare memoria sul cosa potrebbe esserci utile.
 */


const app = new Vue({
    el:"#app",
    data:{
        counter:0,
        images:[
            "https://ilbolive.unipd.it/sites/default/files/2019-08/adobestock_231409227.jpg",
            "https://www.positanonews.it/photogallery_new/images/2010/11/sistema-solare-jpg-101095.660x368.jpg",
            "https://cdn.rtl.it/RTLFM/News/Article/600x600/universo-in-forte-espansione-creata-una-gigantesca-mappa-in-2d-per-studiare-laenergia-oscura-square-site-qr0tm.jpg",
            "https://cdnit1.img.sputniknews.com/img/475/55/4755573_0:24:1920:1062_1000x541_80_0_0_38d340ba32441c96f83d4c6ca8491eac.jpg"
        ]

    },
    methods:{
        prev(){
            console.log('cliccato su prev');
            if(this.counter == 0){
                return this.counter = this.images.length - 1;
            }
            return this.counter -= 1;
        },
        next(){
            console.log('cliccato su next');
            if(this.counter == this.images.length - 1){
                return this.counter = 0;
            }
            return this.counter +=1;

        }
         
       
   
    }
});

document.addEventListener("keyup", function(event){
            var keyPressed = event.key;
            if(keyPressed== "ArrowRight"){
                console.log("hai cliccato destra");
                
            
            }else if(keyPressed == "ArrowLeft"){
                console.log("hai cliccato sinistra");
                
            }
})
    
   


