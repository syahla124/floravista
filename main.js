document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL KE ATAS
  ========================= */
  const backToTop = document.querySelector("footer a");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =========================
     GALERI - LIGHTBOX
  ========================= */
  const cards = document.querySelectorAll(".card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close");

  if (cards.length > 0 && lightbox) {
    cards.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        captionText.textContent = img.alt;
      });
    });

    closeBtn?.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  /* =========================
     ABOUT - SELENGKAPNYA
  ========================= */
  const btnMore = document.getElementById("btn-more");
  const moreText = document.getElementById("more-text");

  if (btnMore && moreText) {
    btnMore.addEventListener("click", () => {
      const hidden =
        moreText.style.display === "none" || moreText.style.display === "";
      moreText.style.display = hidden ? "block" : "none";
      btnMore.textContent = hidden ? "Sembunyikan" : "Selengkapnya";
    });
  }

  /* =========================
     CONTACT - VALIDASI FORM
  ========================= */
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        alert("Harap isi semua field sebelum mengirim!");
        return;
      }

      alert(
        `Terima kasih, ${name}! Pesan Anda telah terkirim.\nKami akan menghubungi Anda melalui email: ${email}.`
      );

      form.reset();
    });
  }

});
/* =========================
   FAKTA BUNGA
========================= */
function showDetail(bunga) {
  let content = "";

  if (bunga === "mawar") {
    content = `
      <h2>Mawar</h2>
      <img src="mawar.jpg">
      <p><strong>Nama Ilmiah:</strong> Rosa</p>
      <p><strong>Asal:</strong> Asia dan Eropa</p>
      <p><strong>Makna:</strong> Cinta dan keindahan</p>
    `;
  } 
  else if (bunga === "tulip") {
    content = `
      <h2>Tulip</h2>
      <img src="tulip.jpg">
      <p><strong>Nama Ilmiah:</strong> Tulipa</p>
      <p><strong>Asal:</strong> Asia Tengah</p>
      <p><strong>Makna:</strong> Cinta sejati</p>
    `;
  }
  else if (bunga === "anggrek") {
    content = `
      <h2>Anggrek</h2>
      <img src="anggrek.jpg">
      <p><strong>Nama Ilmiah:</strong> Orchidaceae</p>
      <p><strong>Asal:</strong> Daerah tropis</p>
      <p><strong>Makna:</strong> Keindahan dan kemewahan</p>
    `;
  }
  else if (bunga === "sakura") {
    content = `
      <h2>Sakura</h2>
      <img src="sakura.jpg">
      <p><strong>Nama Ilmiah:</strong> Prunus serrulata</p>
      <p><strong>Asal:</strong> Jepang</p>
      <p><strong>Makna:</strong> Keindahan dan kefanaan hidup</p>
    `;
  }
  else if (bunga === "lavender") {
    content = `
      <h2>Lavender</h2>
      <img src="lavender.jpg">
      <p><strong>Nama Ilmiah:</strong> Lavandula</p>
      <p><strong>Asal:</strong> Mediterania</p>
      <p><strong>Makna:</strong> Ketenangan</p>
    `;
  }
  else if (bunga === "peony") {
    content = `
      <h2>Peony</h2>
      <img src="peony.jpg">
      <p><strong>Nama Ilmiah:</strong> Paeonia</p>
      <p><strong>Asal:</strong> Asia, Eropa</p>
      <p><strong>Makna:</strong> Kemakmuran dan kebahagiaan</p>
    `;
  }
  else if (bunga === "daisy") {
    content = `
      <h2>Daisy</h2>
      <img src="daisy.jpg">
      <p><strong>Nama Ilmiah:</strong> Bellis perennis</p>
      <p><strong>Asal:</strong> Eropa</p>
      <p><strong>Makna:</strong> Kesucian dan kepolosan</p>
    `;
  }
  else if (bunga === "lily") {
    content = `
      <h2>Lili</h2>
      <img src="lily.jpg">
      <p><strong>Nama Ilmiah:</strong> Lilium</p>
      <p><strong>Asal:</strong> Belahan bumi utara</p>
      <p><strong>Makna:</strong> Kesucian dan keanggunan</p>
    `;
  }
  else if (bunga === "melati") {
    content = `
      <h2>Melati</h2>
      <img src="melati.jpg">
      <p><strong>Nama Ilmiah:</strong> Jasminum</p>
      <p><strong>Asal:</strong> Asia Selatan</p>
      <p><strong>Makna:</strong> Kesucian dan ketulusan</p>
    `;
  }
  else if (bunga === "kembang-sepatu") {
    content = `
      <h2>Kembang Sepatu</h2>
      <img src="kembang-sepatu.jpg">
      <p><strong>Nama Ilmiah:</strong> Hibiscus rosa-sinensis</p>
      <p><strong>Asal:</strong> Asia Timur</p>
      <p><strong>Makna:</strong> Keindahan dan keberanian</p>
    `;
  }
  else if (bunga === "matahari") {
    content = `
      <h2>Bunga Matahari</h2>
      <img src="matahari.jpg">
      <p><strong>Nama Ilmiah:</strong> Helianthus annuus</p>
      <p><strong>Asal:</strong> Amerika Utara</p>
      <p><strong>Makna:</strong> Keceriaan dan kesetiaan</p>
    `;
  }
  else if (bunga === "krisan") {
    content = `
      <h2>Krisan</h2>
      <img src="krisan.jpg">
      <p><strong>Nama Ilmiah:</strong> Chrysanthemum</p>
      <p><strong>Asal:</strong> Asia Timur</p>
      <p><strong>Makna:</strong> Umur panjang dan kebahagiaan</p>
    `;
  }

  const detail = document.getElementById("detail-content");
  if (detail) {
    detail.innerHTML = content;
  }
}

/* =========================
   DATA LIGHTBOX
========================= */
const flowerData = {
  mawar: {
    title: "Mawar",
    img: "mawar.jpg",
    desc: "Mawar melambangkan cinta yang tulus dan perasaan yang mendalam. Keindahannya sering dikaitkan dengan romantisme dan kasih sayang. Mawar telah dibudidayakan sejak ribuan tahun lalu dan berasal dari wilayah Asia, Eropa, serta Timur Tengah. Bunga ini tumbuh baik di daerah beriklim sedang dan telah menjadi simbol cinta di berbagai budaya dunia."
  },
  tulip: {
    title: "Tulip",
    img: "tulip.jpg",
    desc: "Tulip melambangkan cinta yang sederhana namun tulus. Bentuknya yang anggun mencerminkan keindahan dalam kesederhanaan. Tulip berasal dari Asia Tengah dan kemudian berkembang pesat di Eropa, terutama Belanda. Bunga ini tumbuh subur di daerah beriklim sejuk dan menjadi ikon musim semi."
  },
  anggrek: {
    title: "Anggrek",
    img: "anggrek.jpg",
    desc: "Anggrek dikenal sebagai simbol keindahan yang anggun dan eksotis. Bunga ini melambangkan kekuatan, kemewahan, dan keunikan. Anggrek banyak ditemukan di daerah tropis seperti Asia Tenggara, Amerika Selatan, dan Afrika. Kehidupannya sering bergantung pada lingkungan lembap dan sinar matahari yang cukup."
  },
  sakura: {
    title: "Sakura",
    img: "sakura.jpg",
    desc: "Sakura melambangkan keindahan hidup yang bersifat sementara. Mekarnya yang singkat mengingatkan kita untuk menghargai setiap momen. Bunga sakura berasal dari Jepang dan tumbuh di daerah beriklim sedang. Sakura hanya mekar beberapa minggu dalam setahun, menjadikannya simbol kefanaan hidup."
  },
  lavender: {
    title: "Lavender",
    img: "lavender.jpg",
    desc: "Lavender dikenal dengan aromanya yang menenangkan. Bunga ini melambangkan kedamaian dan keseimbangan batin. Lavender berasal dari kawasan Mediterania dan tumbuh di daerah kering dengan sinar matahari melimpah. Sejak dahulu, lavender digunakan untuk pengobatan dan aromaterapi."
  },
  peony: {
    title: "Peony",
    img: "peony.jpg",
    desc: "Peony melambangkan kemakmuran dan kebahagiaan. Kelopaknya yang indah mencerminkan kehangatan dan cinta. Bunga ini berasal dari Asia, terutama Tiongkok, dan telah dibudidayakan selama ribuan tahun. Peony tumbuh di daerah beriklim sejuk dan sering dikaitkan dengan keberuntungan."
  },
  daisy: {
    title: "Daisy",
    img: "daisy.jpg",
    desc: "Daisy melambangkan kepolosan dan ketulusan. Kesederhanaannya memberikan kesan ceria dan positif. Bunga ini berasal dari Eropa dan tumbuh liar di padang rumput. Daisy dikenal sebagai bunga yang kuat dan mampu bertahan di berbagai kondisi lingkungan."
  },
  lili: {
    title: "Lily",
    img: "lily.jpg",
    desc: "Lily mencerminkan kesucian dan keanggunan. Bentuknya yang elegan memberikan kesan ketenangan. Bunga lily berasal dari belahan bumi utara, termasuk Asia dan Eropa. Lily tumbuh di tanah yang subur dan sering digunakan dalam upacara simbolis."
  },
  melati: {
    title: "Melati",
    img: "melati.jpg",
    desc: "Melati melambangkan ketulusan dan kesederhanaan. Aromanya yang lembut menciptakan suasana tenang dan damai. Melati berasal dari Asia Selatan dan Asia Tenggara. Bunga ini tumbuh baik di daerah tropis dan sering digunakan dalam tradisi budaya."
  },
  "kembang-sepatu": {
    title: "Kembang Sepatu",
    img: "kembangsepatu.jpg",
    desc: "Kembang sepatu melambangkan keberanian dan keindahan yang mencolok. Warnanya yang cerah menunjukkan semangat dan energi. Bunga ini berasal dari Asia Timur dan tumbuh di daerah tropis. Kembang sepatu sering digunakan sebagai tanaman hias dan simbol nasional di beberapa negara."
  },
  matahari: {
    title: "Bunga Matahari",
    img: "matahari.jpg",
    desc: "Bunga matahari melambangkan kesetiaan dan optimisme. Selalu menghadap matahari, bunga ini menjadi simbol harapan dan semangat hidup. Bunga matahari berasal dari Amerika Utara dan tumbuh di daerah terbuka dengan sinar matahari penuh. Kehidupannya mencerminkan keteguhan dan kekuatan."
  },
  krisan: {
    title: "Krisan",
    img: "krisan.jpg",
    desc: "Krisan melambangkan kebahagiaan dan umur panjang. Bunga ini juga sering dikaitkan dengan ketulusan dan kejujuran. Krisan berasal dari Asia Timur, terutama Tiongkok dan Jepang. Krisan tumbuh di daerah beriklim sedang dan memiliki nilai budaya tinggi."
  }
};

function openLightbox(bunga) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = flowerData[bunga].img;
  document.getElementById("lightbox-title").innerText = flowerData[bunga].title;
  document.getElementById("lightbox-desc").innerText = flowerData[bunga].desc;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
