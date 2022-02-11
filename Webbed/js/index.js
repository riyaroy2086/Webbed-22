function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function checkWithPass() {
    const pass = document.querySelector('#pass').value;
    const confirmPass = document.querySelector('#confirmPass').value;
    if (pass !== confirmPass) {
        alert('The passwords do not match');
        document.getElementById('confirmPass').value = '';
    }
    
}