document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.getElementsByClassName("menu-item");


    for(let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        menuItem.addEventListener("click", function() {
            // for(let j = 0; j < menuItems.length; j++) {
            //     if(menuItems[j].classList.contains("selected")) {
            //         menuItems[j].classList.remove("selected");
            //     } else {
            //         continue;
            //     }
            // }
            // menuItem.classList.add("selected");
            for(let j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove("selected");
            }

            this.classList.add("selected");
            
            const dataContent = this.dataset.content;

            if (dataContent === 'reward-container' || dataContent === 'account-container' || dataContent === 'payment-container' || dataContent === 'details-container') {
                document.querySelector('.title-sidebar').classList.remove('hidden');
                document.querySelector('.navbar-section').classList.remove('hidden');
            } else {
                document.querySelector('.title-sidebar').classList.add('hidden');
                document.querySelector('.navbar-section').classList.add('hidden');
            }

            if (dataContent === 'details-container') {
                // let select = document.getElementsByClassName('menu-item')[0];
                // select.classList.add("selected");

            }

            const contentElements = document.getElementsByClassName("content");
            for(let k = 0; k < contentElements.length; k++) {
                contentElements[k].classList.add("hidden");
            }


            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            document.getElementById(dataContent).classList.remove("hidden");
        });
    }
});