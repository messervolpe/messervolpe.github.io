
let arcList = document.querySelector(".js-arc-list")
let btnOpen = document.querySelector(".js-open");
let monthAccordions = ""
let monthList = ""

fetch('json/archive.json')
.then(response => response.json())
.then(data => {document.querySelector(".js-arc-list")
    console.log("full data:", data);

    for (let month of data.months) {
        
        let monthName = month.name
        let categoryList = ""
        
        for (let category of month.categories) {

            let categoryName = category.name
            let entryList = ""

            for (let entry of category.entries) {
                let entryItem = "<li>" + entry + "</li>"
                entryList += entryItem
            }

            categoryList +=  `
                <div class="stack--xs flex--desk gap--s">
                    <h3 class="title--s" style="min-width:100px">${categoryName}</h3>
                    <ul>${entryList}</ul>
                </div>
            `
        }

        monthList += `
            <details class="stack--s">
            <summary><h2 class="title--m display--inline">${monthName}</h2></summary>
                ${categoryList}
            </details>
            `
    }

    let tpl = document.createElement("template");
    tpl.innerHTML = monthList;
    arcList.appendChild(tpl.content)

    let currentMonth = document.querySelector("details")
    currentMonth.setAttribute("open", "")

    monthAccordions = document.querySelectorAll("details")

    function toggleAccordions() {
    if (btnOpen.innerText === "open all") {
        for (let i = 0; i < monthAccordions.length; i++) {
        monthAccordions[i].setAttribute("open", "")
        btnOpen.innerText = "close all"
    }}
    else {
        for (let i = 0; i < monthAccordions.length; i++) {
        monthAccordions[i].removeAttribute("open", "")
        btnOpen.innerText = "open all"
        }
    }
        
    }

    btnOpen.addEventListener('click', toggleAccordions)

})