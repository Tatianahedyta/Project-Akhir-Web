function validasi() {

    if (document.formlogin.username.value == "" ) {
        alert("Username Tidak Boleh Kosong!");
        document.formlogin.username.focus();
        return false;
    }
    if (document.formlogin.password.value == "" ) {
        alert("Password Tidak Boleh Kosong!");
        document.formlogin.password.focus();
        return false;
    }
    return alert('Login Berhasil!');


}