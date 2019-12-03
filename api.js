$(() => {
    $('#jobSeeker').submit((e) => {
        e.preventDefault();
        var job = $('#search').val();
        $('#jobResults').html("");
        getRequest(job);
    });

    function getRequest(job) {
        var url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${job}`;
        $.getJSON(url, (response) => {
            showResults(response)
        });
    };

    function showResults(job) {
        $.each(job, (i, value) => {
            $('#jobResults').append(
                `<article class="jobs">
                <h3 class="type">${value.type}</h3>
                <h3 class="title">${value.title}</h3>
                <h3 class="date">${value.created_at}</h3>
                <h3 class="location">${value.location}</h3>

                </article>`
            );
        });
    };
})