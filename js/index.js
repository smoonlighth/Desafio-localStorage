document.addEventListener('DOMContentLoaded', function (){ 
    document.getElementById('buttonText').addEventListener('click', function() {
        var data = document.getElementById('inputText').value;

        localStorage.setItem('data', data);
    })

})
