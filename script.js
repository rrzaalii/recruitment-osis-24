const students = {
    X: [
        "ABIYASA ARI HANGGORO",
        "ACHMAD MIRZA AFANDI",
        "AJI ALIFFENDRI ANAN VIKY",
        "AMEERA NINDITA AYU RAMADHANI",
        "ARFA YUDISTIRA WASKITO",
        "ARKAN ATTAYA ROMADHON",
        "ASY-SYIFA AMATULLAH AL BAHRI",
        "AZALLEA ATHAYA ZAHVA ZETA",
        "AZKA SHAULA LATHIFA",
        "DYORA QUINSA CAHYONO",
        "HAFIZHUDDIN AHMAD ZUHDI AL AZZAM",
        "M FARDAD ABDILLAH D",
        "MICHA ANARGYA HARYOKO",
        "NAILA TSABITA TAMIMY",
        "PUTRA ABIMANYU",
        "AIKO AISYAH MAZAYA",
        "ARCHIE EMIR RADITYO",
        "AURORA PUTRI HERLISA",
        "NELDARAIN SHABIRA",
        "QUINSHA JUSTITIA RAMADHANI",
        "RAFAA HAMISENO",
        "RYU REVANDA ISLAMAY CAHYONO",
        "SAMARA AVANIE KHADIJAH",
        "SHAMAN ARUNDAYA",
        "ZARA AAQILLA ASSADIYA",
        "ZATHALAREZEL ALEXANDER BRAHMANSUSETYA"
    ],
    XI: [
        "AFFAN NABIHAN FARZAN",
        "MUSA BARICH ARBIANSYAH",
        "BIMADHIA ZAFRI RAMADHAN",
        "DEVA ANDROMEDA AKBAR PUTRA",
        "ELMO KYO HASMORO",
        "JANITRANA NAFISA DJATMIKO",
        "KEVIN AVIERY PUTRA NUGROHO",
        "KEANU IBRAHIM"
    ]
};

const rejectedStudents = [
    "ARFA YUDISTIRA WASKITO",
    "ASY-SYIFA AMATULLAH AL BAHRI",
    "RAFAA HAMISENO",
    "AFFAN NABIHAN FARZAN",
    "ELMO KYO HASMORO",
    "KEANU IBRAHIM"
];

const classSelect = document.getElementById('classSelect');
const studentSelect = document.getElementById('studentSelect');
const loadingDiv = document.getElementById('loading');

classSelect.addEventListener('change', function() {
    const selectedClass = this.value;
    studentSelect.innerHTML = '<option value="">--Pilih Nama--</option>';
    if (selectedClass) {
        students[selectedClass].forEach(student => {
            const option = document.createElement('option');
            option.value = student;
            option.textContent = student;
            studentSelect.appendChild(option);
        });
    }
});

document.getElementById('selectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedStudent = studentSelect.value;
    let loadingText = 'Memeriksa hasil';
    loadingDiv.textContent = loadingText;
    loadingDiv.style.display = 'block';

    let loadingInterval = setInterval(() => {
        if (loadingText.endsWith('...')) {
            loadingText = 'Memeriksa hasil';
        } else {
            loadingText += '.';
        }
        loadingDiv.textContent = loadingText;
    }, 150);

    setTimeout(() => {
        clearInterval(loadingInterval);
        loadingDiv.style.display = 'none';

        // Check current date and time
        const currentDate = new Date();
        const releaseDate = new Date('2024-08-26T19:00:00+07:00'); // WIB time zone offset

        if (currentDate < releaseDate) {
            alert('Hasil seleksi OSIS hanya bisa diakses setelah 26 Agustus 2024 pukul 19:00 WIB.');
            return;
        }

        if (rejectedStudents.includes(selectedStudent)) {
            window.location.href = 'not-accepted.html';
        } else {
            window.location.href = 'accepted.html';
        }
    }, 2400);
});
