
const Welkom = function () {
    let Naam = prompt
        ("Welkom! Wat is je naam?")
    alert("Hey " + Naam + "!");
}

const Spel = function () {
    let som = prompt
        ("Noem een getal tussen de 0 en de 25.")
    alert(som);

    var y = Math.floor(Math.random() * 25 + 1); //willekeurig nummer wordt gemaakt.

    var guess = 1; //Aantal gokken worden geteld

    var x = random.Math;


    if(x == y) 
    {     
        alert("GEFELICITEERD!!! Je hebt er "
                + guess + " keer over gedaan. Het spel is nu klaar! tot de volgende keer! "); 
    } 
    else if(x > y) /* Als het getal is dan het gegeven getal.*/ 
    {     
        guess++; 
        alert("SORRY!! Probeer een KLEINER getal."); 

    } 

    else //Als het gegeven getal kleiner is.
    { 
        guess++; 
        alert("SORRY!! Probeer een GROTER getal.") ;
    
    } 
}


Welkom();
Spel();

