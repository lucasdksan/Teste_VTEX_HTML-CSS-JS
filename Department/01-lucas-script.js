$('.searchResultsTime').remove();
$('.compare').remove();
let elements = document.querySelectorAll('.bread-crumb ul li a');
elements.forEach(item => item.append(" / "));