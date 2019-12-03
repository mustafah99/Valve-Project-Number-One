$(() => {
    $('#apply').on('click', (e) => {
        event.preventDefault();
        $('#container').slideToggle(700);
        $("#apply").toggleClass('white');
    });

    $('#games').on('click', (e) => {
        event.preventDefault();
        $('#cardContainer').slideToggle(700);
        $('#cardContainer').toggleClass('flexbox');
        $("#games").toggleClass('white');
    });

    $('#aboutUs').on('click', (e) => {
        event.preventDefault();
        $('#aboutUsContainer').slideToggle(700);
        $("#aboutUs").toggleClass('white');
    });
 
});