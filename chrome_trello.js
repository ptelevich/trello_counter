$(function() {
    var init = function() {

        var allCards = document.querySelectorAll("#board .list-cards");

        for(var i=0; i < allCards.length; i++) {
            var thisCard = $(allCards[i]).find('.list-card');
            var countCards = thisCard.length;

            var listWrapper = allCards[i].parentElement;
            var listHeaderName = listWrapper.getElementsByClassName('list-header-name')[0];

            if(!listWrapper.getElementsByClassName('list-header-name-counter').length) {
                var node = document.createElement("span");
                node.innerText = countCards;
                node.className = 'list-header-name-counter';
                insertAfter(node, listHeaderName);
            } else {
                listWrapper.getElementsByClassName('list-header-name-counter')[0].innerText = countCards;
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

        debug_message('Counter for Trello started');
    };

    function insertAfter( node, referenceNode ) {
        if ( !node || !referenceNode ) return;
        var parent = referenceNode.parentNode, nextSibling = referenceNode.nextSibling;
        if ( nextSibling && parent ) {
            parent.insertBefore(node, referenceNode.nextSibling);
        } else if ( parent ) {
            parent.appendChild( node );
        }
    }

    init();
    $(document).on('DOMNodeInserted DOMNodeRemoved', '.list-cards', function(e){
        init();
    });
});

function debug_message(title, data)
{
    return true;
    console.log(title+' - ', data);
}
