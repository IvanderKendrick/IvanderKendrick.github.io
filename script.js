// Fungsi validasi untuk melihat apakah shape yang dipilih adalah persegi atau persegi panjang
function showHideInput() {
  // Menangkap input dengan Id untuk disimpan ke variabel agar bisa diolah oleh JS
  var shape = document.getElementById("shape").value;
  var lengthInput = document.getElementById("lengthInput");
  var widthInput = document.getElementById("widthInput");

  if (shape === "square") {
    lengthInput.style.display = "block";
    widthInput.style.display = "none";
  } else if (shape === "rectangle") {
    lengthInput.style.display = "block";
    widthInput.style.display = "block";
  }
  //   Jika shape merupakan square maka widthInput akan dihide
  //   Jika shape merupakan rectangle maka kedua input akan ditampilkan
}

// Membuat fungsi calculate untuk menghitung luas dan keliling
function calculate() {
  var shape = document.getElementById("shape").value;
  //   Menggunakan parseFloat untuk mengubah tipe data dari string agar bisa dilakukan operasi matematika
  var length = parseFloat(document.getElementById("length").value);
  var width = parseFloat(document.getElementById("width").value);

  //   Proses validasi jika input panjang atau lebar <= 0, maka akan mengirimkan alert berupa tidak validnya input user
  if (length <= 0 || width <= 0) {
    alert("Input tidak valid. Masukkan nilai yang lebih besar dari 0.");
    return;
  }

  //   Proses validasi apabila shape adalah square maka akan dieksekusi dengan rumus luas dan keliling persegi
  if (shape === "square") {
    var output_luas = length * length;
    var output_keliling = 4 * length;
    //   Proses validasi apabila shape adalah rectangle maka akan dieksekusi dengan rumus luas dan keliling persegi panjang
  } else if (shape === "rectangle") {
    var output_luas = length * width;
    var output_keliling = 2 * (length + width);
  }

  //   Menangkap elemen html dengan id kemudian dimanipulasi agar elemen html menampilkan pesan yang kita mau dan juga hasil dari perhitungan
  document.getElementById("output_luas").innerHTML =
    "Luas : " + output_luas + "cm";
  document.getElementById("output_keliling").innerHTML =
    "Keliling : " + output_keliling + "cm";
}
