$(document).ready(function() {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
    $('button').on('click', function() {
        $.ajax({
            dataType: 'json',
            url: url,
            success: function(data) {
                var result = "";
                var count = "";
                data.hits.forEach(el => {
                    if(count <5) {
                        result += `
                        <div class="card shadow-lg mt-5">
                            <div class="card-header">
                            <img src="${el.userImageURL}" style="border-radius:50%" width="40">
                                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#v${el.id}">View</button>
                                &nbsp;${el.user}
                            </div>
                            <div class="card-body">
                                <img src="${el.largeImageURL}" class="img-fluid">
                            </div>
                        </div>

                        <!-- The Modal -->
                        <div class="modal fade" id="v${el.id}">
                          <div class="modal-dialog">
                            <div class="modal-content">
                            
                              <!-- Modal Header -->
                              <div class="modal-header">
                                <h4 class="modal-title">${el.tags}</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                              </div>
                              
                              <!-- Modal body -->
                              <div class="modal-body">
                              <img src="${el.largeImageURL}" class="img-fluid">
                              <hr>
                              <ul class="list-group list-group-horizontal">
                              <li class="list-group-item">
                              &nbsp;<i class="material-icons float-left text-primary">thumb_up</i>
                              ${el.likes}
                              </li>
                              <li class="list-group-item">
                              &nbsp;<i class="material-icons float-left text-success">visibility_off</i>
                              ${el.views}
                              </li>
                              <li class="list-group-item">
                              &nbsp;<i class="material-icons float-left text-danger">favorite_border</i>
                              ${el.favorites}
                              </li>
                              <li class="list-group-item">
                              &nbsp;<i class="material-icons float-left text-info">comment</i>
                              ${el.comments}
                              </li>
                            </ul>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                       
                    `;
                    }
                   count ++;
                });
                $('#result').append(result);
            }
        });
    });
});