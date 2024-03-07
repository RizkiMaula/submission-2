// Random Quotes
let x = 0;

document.getElementById('button').onclick = () => {
  x = Math.floor(Math.random() * 10 + 1);

  if (x === 1) document.getElementById('home').innerHTML = 'Living is easy with eyes closed, Missunderstanding all You see.';
  else if (x === 2) document.getElementById('home').innerHTML = `Help Me if you can, I'm feeling down.`;
  else if (x === 3) document.getElementById('home').innerHTML = 'Imagine all the peoeple living live in peace.';
  else if (x === 4) document.getElementById('home').innerHTML = 'Number 9 Number 9 Number 9 Number 9.';
  else if (x === 5) document.getElementById('home').innerHTML = 'Take a sad song and make it better.';
  else if (x === 6) document.getElementById('home').innerHTML = `All you need is love`;
  else if (x === 7) document.getElementById('home').innerHTML = `Sunrise doesn't last all morning a cloudbust doesn't last all day.`;
  else if (x === 8) document.getElementById('home').innerHTML = 'Dear Prudence, open up your eyes. Dear Prudence, see the sunny skies';
  else if (x === 9) document.getElementById('home').innerHTML = `She's leaving home after living alone for so many years.`;
  else document.getElementById('home').innerHTML = 'And in the end the love you take is equal to love you make';
};

// Multilanguage

const translation = {
  // English

  en: {
    judul: 'The Beatles Members',
    subjudul: 'Who Were the Fab Four?',

    // John Lennon

    namaJ: 'Name: John Winston Lennon',
    ttlJ: 'Date of Birth: October 9, 1940',
    lahirJ: 'Placebirth: Liverpool',
    par1J: `John Lennon, born on October 9, 1940, in Liverpool, England, was a British musician, singer, and songwriter. He is best known as a founding member of the legendary rock band, The Beatles. In 1960, Lennon, along with Paul McCartney, George Harrison, and Ringo Starr, formed The Beatles.`,
    par2J: `Their unprecedented success revolutionized popular music and culture during the 1960s. Lennon's songwriting contributions were pivotal, with hits like “Imagine", “Hey Jude,” and “Let It Be.” The creative synergy between Lennon and McCartney defined an era. In 1970, The Beatles disbanded, and Lennon pursued a solo career. His music continued to address themes of peace, love, and social justice.`,
    par3J: `Tragically, on December 8, 1980, Lennon was shot and killed outside his New York City apartment by Mark David Chapman. Despite his untimely death, John Lennon's legacy endures through his timeless music, activism, and profound impact on the world. His vision of a better, more peaceful world remains an inspiration to generations of artists and dreamers.`,

    // Paul McCartney

    namaP: 'Name: Sir James Paul McCartney',
    ttlP: 'Date of Birth: June 18, 1942',
    lahirP: 'Placebirth: Liverpool',
    par1P: `Paul McCartney, born on June 18, 1942, in Liverpool, England, is a British musician, singer, and songwriter. He gained worldwide fame as a founding member of The Beatles. In 1957, McCartney joined The Quarrymen, which later evolved into The Beatles. As the bass guitarist and vocalist, he contributed to iconic hits like “Hey Jude,” “Let It Be,” and “Yesterday.”`,
    par2P: `After The Beatles disbanded in 1970, McCartney embarked on a successful solo career. He formed the band Wings with his first wife, Linda McCartney, releasing several albums. McCartney collaborated with artists like Michael Jackson and Stevie Wonder. His legacy includes multiple Grammy Awards and induction into the Rock and Roll Hall of Fame. McCartney remains an influential figure in the music industry, spanning decades of creativity and impact.`,

    // George Harrison

    namaG: 'Name: George Harrison',
    ttlG: 'Date of Birth: Febuary 25, 1943',
    lahirG: 'Placebirth: Liverpool',
    par1G: `George Harrison, born on February 25, 1943, in Liverpool, England, was a British musician, songwriter, and lead guitarist of The Beatles. In 1958, Harrison joined The Quarrymen, which later transformed into The Beatles. His distinctive guitar playing and songwriting contributions enriched the band's sound.`,
    par2G: `As a member of The Beatles, Harrison co-wrote hits like “Something,” “Here Comes the Sun,” and “While My Guitar Gently Weeps.” His spiritual journey led him to explore Indian music and culture, influencing the band's later work.`,
    par3G: `After The Beatles disbanded, Harrison pursued a successful solo career, releasing albums like “All Things Must Pass.” He organized the historic Concert for Bangladesh in 1971, showcasing his philanthropic efforts.`,
    par4G: `Harrison's legacy extends beyond music. He was a film producer, philanthropist, and advocate for peace. His passing in 2001 marked the end of an era, but his impact on music and humanity remains timeless.`,

    // Ringo Starr

    namaR: 'Name: Sir Richard Starkey',
    ttlR: 'Date of Birth: July 17, 1940',
    lahirR: 'Placebirth: Liverpool',
    par1R: `Ringo Starr, born Richard Starkey on July 7, 1940, in Liverpool, England, is a British musician, singer, and actor. He is best known as the drummer for the legendary band The Beatles.`,
    par2R: `Starr joined The Beatles in 1962, replacing their previous drummer, Pete Best. His steady rhythm and unique style contributed to the band's iconic sound. He sang lead vocals on songs like “Yellow Submarine” and “With a Little Help from My Friends.”`,
    par3R: `After The Beatles disbanded in 1970, Starr pursued a solo career, releasing successful albums like “Ringo” and “Goodnight Vienna.” He also acted in films and TV shows.`,
    par4R: `Throughout his life, Starr remained connected to music, collaborating with fellow musicians and touring with his All-Starr Band. His induction into the Rock and Roll Hall of Fame and his humanitarian efforts reflect his enduring impact on music and society.`,

    // George Martin

    judulM: 'The Fifth Beatle',
    parM: `George Martin, born on January 3, 1926, was a British record producer, composer, and musician. He is best known for his pivotal role in shaping the sound of The Beatles. In 1962, Martin signed The Beatles to Parlophone Records, a subsidiary of EMI. He recognized their potential and worked closely with the band to refine their sound. Martin's innovative production techniques, such as double-tracking vocals and incorporating orchestral elements, elevated The Beatles music to new heights. Throughout the 1960s, Martin produced many of The Beatles iconic albums, including “Please Please Me,” “Rubber Soul,” and “Sgt. Pepper's Lonely Hearts Club Band.” His collaboration with the band was instrumental in their global success. After The Beatles disbanded in 1970, Martin continued his successful career as a producer, working with artists like Elton John, Celine Dion, and Jeff Beck. He received numerous awards and honors for his contributions to music. George Martin passed away on March 8, 2016, leaving behind a lasting legacy as the “Fifth Beatle” and a true pioneer in the music industry.`,
  },

  // Bahasa Indonesia

  id: {
    judul: 'Anggota The Beatles',
    subjudul: 'Siapa Mereka?',

    // John Lennon

    namaJ: 'Nama: John Winston Lennon',
    ttlJ: 'Tanggal Lahir: October 9, 1940',
    lahirJ: 'Tempat Lahir: Liverpool',
    par1J: `John Lennon, lahir pada 9 Oktober 1940 di Liverpool, Inggris, adalah seorang musisi, penyanyi, dan penulis lagu asal Inggris. Ia dikenal sebagai salah satu anggota pendiri The Beatles.`,
    par2J: `Kesuksesan mereka yang luar biasa mengubah dunia musik populer dan budaya selama tahun 1960-an. Kontribusi Lennon dalam menulis lagu sangat penting, dengan hits seperti “Imagine”, “Hey Jude”, dan “Let It Be”. Sinergi kreatif antara Lennon dan McCartney mendefinisikan sebuah era. Pada tahun 1970, The Beatles bubar, dan Lennon melanjutkan karier solonya. Musiknya terus mengangkat tema perdamaian, cinta, dan keadilan sosial.`,
    par3J: `Tragisnya, pada 8 Desember 1980, Lennon ditembak dan tewas di luar apartemennya di New York City oleh Mark David Chapman. Meskipun wafat secara tragis, warisan John Lennon tetap hidup melalui musiknya yang abadi, aktivisme, dan dampak mendalam pada dunia. Visinya tentang dunia yang lebih baik dan damai tetap menjadi inspirasi bagi generasi seniman dan pemimpi.`,

    // Paul McCartney

    namaP: 'Nama: Sir James Paul McCartney',
    ttlP: 'Tanggal Lahir: June 18, 1942',
    lahirP: 'Tempat Lahir: Liverpool',
    par1P: `Paul McCartney, lahir pada 18 Juni 1942 di Liverpool, Inggris, adalah seorang musisi, penyanyi, dan penulis lagu asal Britania Raya. Ia dikenal sebagai salah satu pendiri The Beatles. Pada tahun 1957, McCartney bergabung dengan The Quarrymen, yang kemudian bermetamorfosis menjadi The Beatles. Sebagai pemain gitar bass dan vokalis, ia berkontribusi pada hits ikonik seperti “Hey Jude,” “Let It Be,” dan “Yesterday.”`,
    par2P: `Setelah The Beatles bubar pada tahun 1970, McCartney memulai karier solo yang sukses. Ia membentuk band Wings bersama istri pertamanya, Linda McCartney, dan merilis beberapa album. McCartney juga berkolaborasi dengan seniman seperti Michael Jackson dan Stevie Wonder. Warisannya termasuk beberapa Grammy Awards dan induksi ke dalam Rock and Roll Hall of Fame. McCartney tetap menjadi figur berpengaruh dalam industri musik, melintasi dekade kreativitas.`,

    // George Harrison

    namaG: 'Nama: George Harrison',
    ttlG: 'Tanggal Lahir: Febuary 25, 1943',
    lahirG: 'Tempat Lahir: Liverpool',
    par1G: `George Harrison, lahir pada 25 Februari 1943 di Liverpool, Inggris, adalah seorang musisi, penulis lagu, dan gitaris utama The Beatles. Pada tahun 1958, Harrison bergabung dengan The Quarrymen, yang kemudian bermetamorfosis menjadi The Beatles. Permainan gitarnya yang khas dan kontribusi dalam menulis lagu memperkaya suara band.`,
    par2G: `Sebagai anggota The Beatles, Harrison turut menulis hits seperti “Something,” “Here Comes the Sun,” dan “While My Guitar Gently Weeps.” Perjalanan spiritualnya membawanya menjelajahi musik dan budaya India, memengaruhi karya band di kemudian hari.`,
    par3G: `Setelah The Beatles bubar, Harrison mengejar karier solo yang sukses, merilis album seperti “All Things Must Pass.” Ia juga mengorganisir Concert for Bangladesh pada tahun 1971, memperlihatkan upayanya dalam bidang filantropi.`,
    par4G: `Peninggalan Harrison tidak hanya musik. Ia adalah seorang produser film, filantropis, dan advokat perdamaian. Wafatnya pada tahun 2001 menandai akhir sebuah era, namun dampaknya pada musik dan kemanusiaan tetap abadi.`,

    // Ringo Starr

    namaR: 'Nama: Sir Richard Starkey',
    ttlR: 'Tanggal Lahir: July 17, 1940',
    lahirR: 'Tempat Lahir: Liverpool',
    par1R: `Ringo Starr, lahir dengan nama Richard Starkey pada 7 Juli 1940 di Liverpool, Inggris, adalah seorang musisi, penyanyi, dan aktor asal Britania Raya. Ia dikenal sebagai drummer dari band legendaris The Beatles.`,
    par2R: `Starr bergabung dengan The Beatles pada tahun 1962, menggantikan drummer sebelumnya, Pete Best. Ritme stabil dan gaya uniknya berkontribusi pada suara ikonik band. Ia juga menyanyikan vokal utama pada lagu-lagu seperti “Yellow Submarine” dan “With a Little Help from My Friends”.`,
    par3R: `Setelah The Beatles bubar pada tahun 1970, Starr mengejar karier solo yang sukses, merilis album seperti “Ringo” dan “Goodnight Vienna.” Ia juga berakting dalam film dan acara TV.`,
    par4R: `Sepanjang hidupnya, Starr tetap terhubung dengan musik, berkolaborasi dengan sesama musisi, dan tur dengan All-Starr Band-nya. Induksinya ke dalam Rock and Roll Hall of Fame dan upayanya dalam bidang kemanusiaan mencerminkan dampak abadinya pada musik dan masyarakat.`,

    // George Martin

    judulM: 'Beatle kelima',
    parM: `George Martin, lahir pada 3 Januari 1926, adalah seorang produser rekaman, komposer, dan musisi asal Inggris. Ia dikenal karena peran pentingnya dalam membentuk suara The Beatles. Pada 1962, Martin menandatangani kontrak The Beatles dengan Parlophone Records, anak perusahaan EMI. Ia mengenali potensi mereka dan bekerja erat dengan band tersebut untuk menyempurnakan suara mereka. Teknik produksi inovatif Martin, seperti double-tracking vokal dan menggabungkan elemen orkestra, mengangkat musik The Beatles ke tingkat baru. Sepanjang tahun 1960-an, Martin memproduseri banyak album ikonik The Beatles, termasuk “Please Please Me,” “Rubber Soul,” dan “Sgt. Pepper's Lonely Hearts Club Band.” Kolaborasinya dengan band ini berperan penting dalam kesuksesan global mereka. Setelah The Beatles bubar pada tahun 1970, Martin melanjutkan karier suksesnya sebagai produser, bekerja dengan artis seperti Elton John, Celine Dion, dan Jeff Beck. Ia menerima banyak penghargaan dan kehormatan atas kontribusinya pada musik. George Martin wafat pada 8 Maret 2016, meninggalkan warisan abadi sebagai “Beatle kelima”.`,
  },
};

const languageSelect = document.querySelector('select');
let judul = document.getElementById('judul');
let subJudul = document.getElementById('subjudul');
// John Lennon
let liNamaJ = document.getElementById('nama-john');
let liTtlJ = document.getElementById('ttl-john');
let liLahirJ = document.getElementById('lahir-john');
let par1J = document.getElementById('par1-john');
let par2J = document.getElementById('par2-john');
let par3J = document.getElementById('par3-john');
// Paul McCartney
let liNamaP = document.getElementById('nama-paul');
let liTtlP = document.getElementById('ttl-paul');
let liLahirP = document.getElementById('lahir-paul');
let par1P = document.getElementById('par1-paul');
let par2P = document.getElementById('par2-paul');
let par3P = document.getElementById('par3-john');
// George Harrison
let liNamaG = document.getElementById('nama-george');
let liTtlG = document.getElementById('ttl-george');
let liLahirG = document.getElementById('lahir-george');
let par1G = document.getElementById('par1-george');
let par2G = document.getElementById('par2-george');
let par3G = document.getElementById('par3-george');
let par4G = document.getElementById('par4-george');
// Ringo Starr
let liNamaR = document.getElementById('nama-ringo');
let liTtlR = document.getElementById('ttl-ringo');
let liLahirR = document.getElementById('lahir-ringo');
let par1R = document.getElementById('par1-ringo');
let par2R = document.getElementById('par2-ringo');
let par3R = document.getElementById('par3-ringo');
let par4R = document.getElementById('par4-ringo');
// George Martin
let judul5 = document.getElementById('judul-5');
let parM = document.getElementById('par-martin');

languageSelect.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

const setLanguage = (language) => {
  // if using english
  if (language === 'en') {
    // Title
    judul.innerText = translation.en.judul;
    subJudul.innerText = translation.en.subjudul;
    // John Lennon
    liNamaJ.innerText = translation.en.namaJ;
    liTtlJ.innerText = translation.en.ttlJ;
    liLahirJ.innerText = translation.en.lahirJ;
    par1J.innerText = translation.en.par1J;
    par2J.innerText = translation.en.par2J;
    par3J.innerText = translation.en.par3J;
    // Paul McCartney
    liNamaP.innerText = translation.en.namaP;
    liTtlP.innerText = translation.en.ttlP;
    liLahirP.innerText = translation.en.lahirP;
    par1P.innerText = translation.en.par1P;
    par2P.innerText = translation.en.par2P;
    // George Harrison
    liNamaG.innerText = translation.en.namaG;
    liTtlG.innerText = translation.en.ttlG;
    liLahirG.innerText = translation.en.lahirG;
    par1G.innerText = translation.en.par1G;
    par2G.innerText = translation.en.par2G;
    par3G.innerText = translation.en.par3G;
    par4G.innerText = translation.en.par4G;
    // Ringo Starr
    liNamaR.innerText = translation.en.namaR;
    liTtlR.innerText = translation.en.ttlR;
    liLahirR.innerText = translation.en.lahirR;
    par1R.innerText = translation.en.par1R;
    par2R.innerText = translation.en.par2R;
    par3R.innerText = translation.en.par3R;
    par4R.innerText = translation.en.par4R;
    // George Martin
    judul5.innerText = translation.en.judulM;
    parM.innerText = translation.en.parM;

    // Kalau pakai bahasa indonesia
  } else if (language === 'id') {
    // Judul
    judul.innerText = translation.id.judul;
    subJudul.innerText = translation.id.subjudul;
    // John Lennon
    liNamaJ.innerText = translation.id.namaJ;
    liTtlJ.innerText = translation.id.ttlJ;
    liLahirJ.innerText = translation.id.lahirJ;
    par1J.innerText = translation.id.par1J;
    par2J.innerText = translation.id.par2J;
    par3J.innerText = translation.id.par3J;
    // Paul McCartney
    liNamaP.innerText = translation.id.namaP;
    liTtlP.innerText = translation.id.ttlP;
    liLahirP.innerText = translation.id.lahirP;
    par1P.innerText = translation.id.par1P;
    par2P.innerText = translation.id.par2P;
    // George Harrison
    liNamaG.innerText = translation.id.namaG;
    liTtlG.innerText = translation.id.ttlG;
    liLahirG.innerText = translation.id.lahirG;
    par1G.innerText = translation.id.par1G;
    par2G.innerText = translation.id.par2G;
    par3G.innerText = translation.id.par3G;
    par4G.innerText = translation.id.par4G;
    // Ringo Starr
    liNamaR.innerText = translation.id.namaR;
    liTtlR.innerText = translation.id.ttlR;
    liLahirR.innerText = translation.id.lahirR;
    par1R.innerText = translation.id.par1R;
    par2R.innerText = translation.id.par2R;
    par3R.innerText = translation.id.par3R;
    par4R.innerText = translation.id.par4R;
    // George Martin
    judul5.innerText = translation.id.judulM;
    parM.innerText = translation.id.parM;
  }
};
