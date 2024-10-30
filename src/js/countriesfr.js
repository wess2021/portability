$(document).ready(function() {
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        method: 'GET',
        success: function(data) {
            data.forEach(country => {
                $('#pays').append(new Option(country.name.common, country.name.common));
            });
        },
        error: function(err) {
            console.error('Error fetching countries:', err);
        }
    });
    const governorates = [
        "Ariana",
        "Béja",
        "Ben Arous	",
        "Bizerte",
        "Gabès",
        "Gafsa",
        "Jendouba",
        "Kairouan",
        "Kasserine",
        "Kébili",
        "El Kef",
        "Mahdia",
        "Manouba",
        "Medenine",
        "Monastir",
        "Nabeul",
        "Sfax",
        "Sidi Bouzid	",
        "Siliana",
        "Sousse",
        "Tataouine",
        "Tozeur",
        "Tunis",
        "Zaghouan"
    ];
            $('#gouvernorat').html('<option value="">Sélectionnez un gouvernorat</option>'); 
            governorates.forEach(g => {
                $('#gouvernorat').append(new Option(g, g));
            });
    
});
