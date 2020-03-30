/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tbody = table.querySelector('tbody');
  let trs = tbody.getElementsByTagName('tr');

  for (let tr of trs) {
   let status = tr.childNodes[7] ;

   if (!status.hasAttribute('data-available')) {
    tr.hidden = true;
    } else {
        if (status.getAttribute('data-available') ==='true') {
          tr.classList.add('available');
      } else {
          tr.classList.add('unavailable');
      }
    }


    let gender = tr.childNodes[5] ;
    if (gender.textContent === "m") {
        tr.classList.add('male');
    } else {
      tr.classList.add('female');
    }

    let age = tr.childNodes[3] ;
    if (age.textContent < 18) {
        tr.style.textDecoration = 'line-through';
    }
  }
}
