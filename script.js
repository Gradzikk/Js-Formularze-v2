function obliczSume() {
    var suma = 0;

    for (var i = 1; i <= 5; i++) {
        var poleTekstowe = document.getElementById('pole' + i);
        var checkbox = document.getElementById('checkbox' + i);

        if (checkbox.checked) {
            var liczba = parseInt(poleTekstowe.value) || 0;
            suma += liczba;
        }
    }

    document.getElementById('wynikSumy').innerHTML = "Suma liczb: " + suma;
}

function obliczKosztOgloszenia() {
    var iloscOgloszen = parseInt(document.getElementById('iloscOgloszen').value) || 0;
    var stalKlient = document.getElementById('stalKlient').checked;
    var kosztOgloszenia;

    if (iloscOgloszen <= 50) {
        kosztOgloszenia = 2 * iloscOgloszen;
    } else if (iloscOgloszen <= 100) {
        kosztOgloszenia = 1.5 * iloscOgloszen;
    } else {
        kosztOgloszenia = iloscOgloszen;
    }

    if (stalKlient) {
        kosztOgloszenia *= 0.8;
    }

    document.getElementById('wynikKosztu').innerHTML = "Koszt ogłoszenia: " + kosztOgloszenia + " zł";
}

function obliczKosztCegiel() {
    var iloscCegiel = parseInt(document.getElementById('iloscCegiel').value) || 0;
    var ceglaPremium = document.getElementById('ceglaPremium').checked;
    var iloscKm = parseInt(document.getElementById('iloscKm').value) || 0;
    var kosztCegiel, wagaCegiel, kosztTransportu;

    if (ceglaPremium) {
        kosztCegiel = 2.6 * iloscCegiel; 
        wagaCegiel = 1.75 * iloscCegiel;
    } else {
        kosztCegiel = 2 * iloscCegiel;
        wagaCegiel = 1.5 * iloscCegiel;
    }

    
    kosztTransportu = Math.ceil(wagaCegiel / 10) * iloscKm * 0.5; 

 
    document.getElementById('wynikZakupu').innerHTML =
        "Zakupiona ilość cegieł: " + iloscCegiel +
        ", cegła " + (ceglaPremium ? "premium" : "standardowa") +
        ", koszt zakupu cegieł: " + kosztCegiel + " zł" +
        ", waga cegieł: " + wagaCegiel + " kg" +
        ", koszt transportu: " + kosztTransportu + " zł";
}

function obliczKosztAquaparku() {
    var iloscBiletowNormalnych = parseInt(document.getElementById('iloscBiletowNormalnych').value) || 0;
    var iloscBiletowUlgowych = parseInt(document.getElementById('iloscBiletowUlgowych').value) || 0;
    var iloscGodzin = parseInt(document.getElementById('iloscGodzin').value) || 0;
    var kartaDuzejRodziny = document.getElementById('kartaDuzejRodziny').checked;
    var kosztNormalnych, kosztUlgowych, kosztCalodziennych, kosztKarty, kosztCalkowity;

    kosztNormalnych = 10 * iloscGodzin * iloscBiletowNormalnych;
    kosztUlgowych = 5 * iloscGodzin * iloscBiletowUlgowych;

    if (iloscGodzin > 4) {
        kosztCalodziennych = 50 * iloscBiletowNormalnych + 25 * iloscBiletowUlgowych;
    } else {
        kosztCalodziennych = 0;
    }

 
    if (kartaDuzejRodziny) {
        kosztKarty = (kosztNormalnych + kosztUlgowych + kosztCalodziennych) * 0.9;
    } else {
        kosztKarty = kosztNormalnych + kosztUlgowych + kosztCalodziennych;
    }


    var iloscBiletowGratis = Math.floor(iloscBiletowUlgowych / 15);
    kosztKarty -= iloscBiletowGratis * 10;

  
    document.getElementById('wynikKosztu').innerHTML =
        "Całkowity koszt wstępu do aquaparku: " + kosztKarty + " zł";
}