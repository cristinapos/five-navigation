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

            this.parentNode.classList.add('active')
            
            const dataContent = this.dataset.content;
            const dataLogo = this.dataset.logo;

            const titleSidebar = document.querySelector('.title-sidebar');
            const navSection = document.querySelector('.navbar-section');

            if (dataContent === 'reward-container' || dataContent === 'account-container' || dataContent === 'payment-container' || dataContent === 'details-container') {
                titleSidebar.classList.remove('hidden');
                navSection.classList.remove('hidden');
            } else {
                titleSidebar.classList.add('hidden');
                navSection.classList.add('hidden');
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
});
