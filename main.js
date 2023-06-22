$(document).ready(function() {
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecodatarefa = $('#tarefa').val();
        const novatarefa = $('<li></li>');

        $(`
            <div class="subtarefa">
                <label for="concluiddo" >${enderecodatarefa}</label>
            </div>
        `).appendTo(novatarefa);
        $(novatarefa).appendTo('ul');
        $('#tarefa').val('');

        novatarefa.on('click', function() {
            $(this).addClass('concluido');
        });
    });
});


