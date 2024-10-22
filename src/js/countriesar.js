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
