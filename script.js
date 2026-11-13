const themeBtn =
document.getElementById("themeBtn");
themeBtn.addEventListener("click",
    function(){
    document .body .classList .toggle("light");
    if
    (document.body.classList.contains("light")){
        themeBtn.innerHTML="☀️";
    }
    else{
        themeBtn.innerHTML="🌙"
    }
    });
    const contactForm=
    document.getElementById("contactForm");
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        const name=
        document .getElementById("name").value ;
        const response=
        document.getElementById("response");
        response.innerHTML="Thank you " + name + "! form submitted SUCCESSFULLY.";
        response.style.color="#00d9ff";
        contactForm.reset();


    });

