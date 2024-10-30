$(document).ready(function() {
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
            $('#gouvernorat').html('<option value="">اختر المحافظة</option>'); 
            governorates.forEach(g => {
                $('#gouvernorat').append(new Option(g, g));
            });    

});
