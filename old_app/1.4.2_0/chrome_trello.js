var init = function() {

    var allCards = document.querySelectorAll("#board .list-cards");

    for(var i=0; i < allCards.length; i++) {
        var countCards = allCards[i].querySelectorAll('.list-card.js-member-droppable').length;
        //appendChild
        var listHeaderName = allCards[i].parentElement.getElementsByClassName('list-header-name')[0];

        if(!listHeaderName.getElementsByClassName('list-header-name-counter').length) {
            var node = document.createElement("span");
            node.innerText = countCards;
            node.className = 'list-header-name-counter';
            listHeaderName.appendChild(node);
        } else {
            listHeaderName.getElementsByClassName('list-header-name-counter')[0].innerText = countCards;
        }
    }

    var nodes = document.querySelectorAll('#board .list-header-name-counter');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.padding = '1px 5px';
        nodes[i].style.color = 'white';
        nodes[i].style.backgroundColor = 'green';
        nodes[i].style.float = 'right';
        nodes[i].style.marginRight = '3px';
        nodes[i].style.fontSize = '11px';
    }

    console.log('Counter for Trello started');
}

window.onclick = function() {
    init();
}

window.onload = function() {
    init();
}


function startTimer() {
    var timer = setTimeout(function() {
        console.log('startTimer');
        init();
        startTimer();
    }, 10000);
}
startTimer();
