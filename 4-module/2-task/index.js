/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let tables = document.body.firstElementChild;

    for (let i = 0; i < tables.rows.length; i++) {
      let row = tables.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
}
