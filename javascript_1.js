
function init() {



    let form = document.getElementById('form-page');
    let images = document.querySelectorAll(".brighten > img");
    let close = document.getElementById("modal-close")
    let modal = document.getElementById("modal");
    
    images.forEach(image =>
        image.onclick = () => {
            image_modal = document.createElement('img');
            image_modal.src = image.src;
            console.log(image_modal.src)
            image_modal.style.height = "800px";
            image_modal.style.width = "800px";
            modal.appendChild(image_modal);
            modal.style.display = "block";
            close.style.display = "block";
            
            close.onclick = () => {
                modal.removeChild(image_modal);
                modal.style.display = "none";
            }
        })
        //----------Модальное окно------------//
        

    function valid_email(email) {                           
        let re = new RegExp("^[a-z]+@[a-z]+.[a-z]+$");  
        let valid = re.test(email);
        return valid;
    }

    

    form.addEventListener('submit', (event) => {            //Логика формы
        event.preventDefault();
        let nickname = document.getElementById("name-form");
        let mail = document.getElementById("mail-form");
        let text = document.getElementById("msg-form");
        console.log(mail.value);
        
        if(!valid_email(mail.value)){
            window.alert("Почта не валидна");
            mail.text = "";
        }

        else{
            screen_after = document.querySelector(".screen_7_before_Form");
            screen_after.innerHtml += "nickname";
            screen_before = document.querySelector(".screen_7");
            
            screen_before.classList.add('hidden');
            screen_after.classList.add('hidden_1');
            console.log("otdushi brat");
        }
        
    })


}




window.onload = init;
