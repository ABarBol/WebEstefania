const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
function change(a) {
    if (a == 'a') {
        form1.classList.add('quitDisplay');
        form2.classList.remove('quitDisplay');
    } else {
        form2.classList.add('quitDisplay');
        form1.classList.remove('quitDisplay');
    }

}
