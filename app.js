$(() => {
    $('#apply').on('click', (e) => {
        event.preventDefault();
        $('#container').slideToggle();
    })
})