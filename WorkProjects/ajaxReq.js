ajax = function(form, event) {
  event.preventDefault();
  const formData = new FormData($(form)[0]);
  $.ajax({
    type:'POST',
    url:'http://localhost:3000/api/V1/register',
    data: formData,
    success: function(data) {

    },
    error: function(data) {

    }
  });
}