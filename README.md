<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/* Popup container - can be anything you want */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;} 
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
</head>
<body style="text-align:center">

<h2>Popup</h2>

<div class="popup" onclick="myFunction()">Click me to toggle the popup!
  <span class="popuptext" id="myPopup">A Simple Popup!</span>
</div>

<script>
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>

</body>
</html>










<body>

    <table class="tableizer-table" align="center">
    <thead><tr class="tableizer-firstrow"><th>No</th><th>Menu</th><th>Harga</th></tr></thead><tbody>
     <tr><td>1</td><td>Nasi Goreng</td><td>Rp12.000</td></tr>
     <tr><td>2</td><td>Mie Ayam</td><td>Rp12.000</td></tr>
     <tr><td>3</td><td>Basko </td><td>Rp12.000</td></tr>
     <tr><td>4</td><td>Mie Ayam Bakso</td><td>Rp20.000</td></tr>
     <tr><td>5</td><td>Kwetiau</td><td>Rp12.000</td></tr>
     <tr><td>6</td><td>Teh Manis Dingin</td><td>Rp7.000</td></tr>
     <tr><td>7</td><td>Jus Jeruk</td><td>Rp10.000</td></tr>
     <tr><td>8</td><td>Jus mangga</td><td>Rp10.000</td></tr>
     <tr><td>9</td><td>Jus Apel</td><td>Rp10.000</td></tr>
     <tr><td>10</td><td>Jus Buah Naga</td><td>Rp10.000</td></tr>
    </tbody></table>

    <h1>Masukan Pesanan Anda</h1>
    <div class="form-container">
        <input type="text" id="nama" placeholder="Masukkan pesanan anda" />
        <button onclick="tampilkanHasil()">Kirim</button>
    </div>

    <div id="hasil" class="hasil" style="display: none;"></div>

    <script src="psi.js"></script>

    <nav>
        <ul>
        <li><a href="/menu" class="nav-link"> Menu Makanan di Restoran Abadi</a></li>
        </ul>
    </nav>
    </div>
</body>