// Dom - (Document object model)
// querySelectorAll - бардык элементтерге доступ алып берет.
// querySelector - элементке доступ алып берет.
// getElementById - айдилерге иштеп берет.
// getElementByTagName - тегдерге иштеп берет.
// getElementByClassName - html деги класстарга иштеп берет.
// classList - класстарга иштейт, кошуп берет.
// addEventListener - события келгенде жардам берет.
//                    Кобунчо кнопкаларды иштетээрде колдонулат.



const block = document.querySelectorAll('.block')

block.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.add('bg-info')
    })
})

