$(() => {
    $('#cardSeeker').submit((e) => {
        e.preventDefault();
        var cards = $('#searchCards').val();
        $('#cardResults').html("");
        getRequest(cards);
    });

    function getRequest(cards) {
        var url = `https://api.magicthegathering.io/v1/cards.json?search=${cards}`;
        $.getJSON(url, (response) => {
            showResults(response)
        });
    };

    function showResults(cards) {
        $.each(cards.cards, (i, value) => { // cards.cards är en array.
            console.log(value);
            $('#cardResults').append(
                `<article class="cards">
                <img src="${value.imageUrl}">
                </article>`
            );
        });
    };
})