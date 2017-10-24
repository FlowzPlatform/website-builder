var progress = $('progressbar').attr('progress');
$(document).ready(function() {
console.log("Progress",progress)
$('.progress-bar').attr('aria-valuenow', progress);
$('.progress-bar').css('width', progress+ "%");
$('.progress-bar').text(progress + "%")
});
