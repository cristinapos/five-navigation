document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.getElementsByClassName("menu-item");


    for(let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        menuItem.addEventListener("click", function() {
            for(let j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove("selected");
                menuItems[j].parentNode.classList.remove("active");
            }

            this.classList.add("selected");
            // sa te obisnuiesti sa iti cureti codul de console.log cand nu mai ai nevoie de ele
            console.log(this);

            this.parentNode.classList.add('active')
            
            const dataContent = this.dataset.content;
            // atentie la prea multe spatii, impacteaza gradul de readability in cod

            const dataLogo = this.dataset.logo;

            if (dataContent === 'reward-container' || dataContent === 'account-container' || dataContent === 'payment-container' || dataContent === 'details-container') {
                // ai aceeasi seletori in ramurile de if si else, iti recomand sa salvezi selectiile in constante
                document.querySelector('.title-sidebar').classList.remove('hidden');
                document.querySelector('.navbar-section').classList.remove('hidden');
            } else {
                document.querySelector('.title-sidebar').classList.add('hidden');
                document.querySelector('.navbar-section').classList.add('hidden');
            }

            if (dataContent === 'details-container') {
                document.querySelector('.selected-li').classList.add('active');
            }

            const contentElements = document.getElementsByClassName("content");
            for(let k = 0; k < contentElements.length; k++) {
                contentElements[k].classList.add("hidden");
            }

            const logoElements = document.getElementsByClassName("logo");
            for(let k = 0; k < logoElements.length; k++) {
                logoElements[k].classList.add("hidden");
            }


            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            document.getElementById(dataContent).classList.remove("hidden");
            document.getElementsByClassName(dataLogo)[0].classList.remove("hidden");
            document.getElementById(dataLogo).classList.remove("hidden");
        });
    }

    // atentie si aici la cod incomplet lasat
    const logo = document.getElementsByClassName
});
