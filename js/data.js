document.addEventListener('DOMContentLoaded', function (){ 

    var dato = localStorage.getItem("data");
    

    document.getElementById('data').textContent = dato;
})
