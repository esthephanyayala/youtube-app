
 let nextToken ;
 let previousToken ;

function ejecutarAPI(videoInput){
    $.ajax({
        
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyADh0DX-Vb_ZDSPgNhuYc17j4dPsHWcezw',
            q: videoInput,
            part: 'snippet',
            maxResults: 10,
            type: 'video',
           
        },
        method: 'GET',
        dataType: "json",
        success: function (responseJSON){
           // alert("Success");
            console.log(responseJSON);
            for (let values of responseJSON.items){ //no es let in, es let of
                let videoUrl = 'https://www.youtube.com/watch?v=' + values.id.videoId;
           $("#videos").append(`<li class = "videoItem">
                                    <div>
                                    <a href= "${videoUrl}" target="_blank"> 
                                    <h3> ${values.snippet.title} </h3>
                                    </a>
                                    <div>
                                    <a href="${videoUrl}" class="hyv-thumb-link" target="_blank">
                                    <span class="hyv-simple-thumb-wrap">
                                    <img src="${values.snippet.thumbnails.default.url}" width="300" height="150" >
                                    </span>
                                    </a>
                                    </div>
                                    </li>`);
            }
            
            nextToken = responseJSON.nextPageToken;
            previousToken = responseJSON.previousPageToken;
           
        },
        error: function(err){
            alert("Error: '(")
        }
      });
}


function next(videoInput){
    $.ajax({
        
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyADh0DX-Vb_ZDSPgNhuYc17j4dPsHWcezw',
            q: videoInput,
            part: 'snippet',
            maxResults: 10,
            type: 'video',
            pageToken: nextToken
           
        },
        method: 'GET',
        dataType: "json",
        success: function (responseJSON){
            // alert("Success");
             console.log(responseJSON);
             $("#videos").empty();
             for (let values of responseJSON.items){ //no es let in, es let of
                 let videoUrl = 'https://www.youtube.com/watch?v=' + values.id.videoId;
            $("#videos").append(`<li class = "videoItem">
                                     <div>
                                     <a href= "${videoUrl}" target="_blank"> 
                                     <h3> ${values.snippet.title} </h3>
                                     </a>
                                     <div>
                                     <a href="${videoUrl}" class="hyv-thumb-link" target="_blank">
                                     <span class="hyv-simple-thumb-wrap">
                                     <img src="${values.snippet.thumbnails.default.url}" width="300" height="150" >
                                     </span>
                                     </a>
                                     </div>
                                     </li>`);
             }
             
             nextToken = responseJSON.nextPageToken;
             previousToken = responseJSON.previousPageToken;
            
         },
         error: function(err){
             alert("Error: '(")
         }
       });

}

function previous(videoInput){
    $.ajax({
        
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyADh0DX-Vb_ZDSPgNhuYc17j4dPsHWcezw',
            q: videoInput,
            part: 'snippet',
            maxResults: 10,
            type: 'video',
            pageToken: previousToken
           
        },
        method: 'GET',
        dataType: "json",
        success: function (responseJSON){
            // alert("Success");
             console.log(responseJSON);
             $("#videos").empty();
             for (let values of responseJSON.items){ //no es let in, es let of
                 let videoUrl = 'https://www.youtube.com/watch?v=' + values.id.videoId;
            $("#videos").append(`<li class = "videoItem">
                                     <div>
                                     <a href= "${videoUrl}" target="_blank"> 
                                     <h3> ${values.snippet.title} </h3>
                                     </a>
                                     <div>
                                     <a href="${videoUrl}" class="hyv-thumb-link" target="_blank">
                                     <span class="hyv-simple-thumb-wrap">
                                     <img src="${values.snippet.thumbnails.default.url}" width="300" height="150" >
                                     </span>
                                     </a>
                                     </div>
                                     </li>`);
             }
             
             nextToken = responseJSON.nextPageToken;
             previousToken = responseJSON.previousPageToken;
            
         },
         error: function(err){
             alert("Error: '(")
         }
       });

}

function buscar(){
    

    $("#searchbtn").on("click", function(event) {
        event.preventDefault();
        videoInput = $("#inputVideo").val();
        ejecutarAPI (videoInput);
        $("#next").attr("hidden", false);
        $("#previous").attr("hidden", false);
    });

    $("#next").on("click", function(event){
        event.preventDefault();
        videoInput = $("#inputVideo").val();
        next(videoInput);
    });

    $("#previous").on("click", function(event){
        event.preventDefault();
        videoInput = $("#inputVideo").val();
        previous(videoInput);
    });
    
   

}


buscar();