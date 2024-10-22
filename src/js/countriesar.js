$(document).ready(function() {
    // Fetch countries from the API
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        method: 'GET',
        success: function(data) {
            data.forEach(country => {
                const arabicName = country.translations && country.translations.ara ? country.translations.ara.common : country.name.common;
                $('#pays').append(new Option(arabicName, arabicName));
            });
        },
        error: function(err) {
            console.error('Error fetching countries:', err);
        }
    });
    function fetchPoiList() {
        const apiUrl = "https://mp-mdd.com/o/ws/poi/list/en_US"; // Define the API URL
    
        $.ajax({
            url: apiUrl,
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*', // This will NOT help with CORS issues in browsers
                'Content-Type': 'application/json' // Just as an example
            },
            success: function(data) {
                console.log(data);
                renderPoiList(data.poiList);
            },
            error: function(err) {
                console.error('Error fetching POI List:', err);
            }
        });
    }
    
    // Call the function to fetch the POI list
    fetchPoiList();
    const governorates = [
        "أريانة",
        "باجة",
        "بن عروس",
        "بنزرت",
        "قابس",
        "قفصة",
        "جندوبة",
        "القيروان",
        "القصرين",
        "قبلي",
        "الكاف",
        "المهدية",
        "منوبة",
        "مدنين",
        "المهدية",
        "نابل",
        "صفاقس",
        "سيدي بوزيد",
        "سيلينا",
        "سوسة",
        "تطاوين",
        "توزر",
        "تونس",
        "زغوان"
    ];
    $('#pays').change(function() {
        const selectedCountry = $(this).val();
        if (selectedCountry === "تونس") {
            $('#gouvernorat').html('<option value="">اختر المحافظة</option>'); 
            governorates.forEach(g => {
                $('#gouvernorat').append(new Option(g, g));
            });
        } else {
            $('#gouvernorat').html('<option value="">اختر المحافظة</option>');
        }
    });
});
