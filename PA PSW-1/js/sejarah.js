const cardImages = document.querySelectorAll(".card-img-top");
cardImages.forEach((img) => {
  img.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.2)";
    this.style.transition = "transform 0.3s ease"; // Tambahkan efek transisi
  });

  img.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"; // Kembalikan ukuran gambar saat kursor meninggalkan gambar
    this.style.transition = "transform 0.3s ease"; // Tambahkan efek transisi
  });
});
