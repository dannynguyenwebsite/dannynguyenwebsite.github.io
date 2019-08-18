// var userFeed = new Instafeed({
//   get: 'user',
//   userId: '5533940204',
//   clientId: 'a88e61a7303d454aafd15efb46099152',
//   accessToken: '5533940204.a88e61a.6d3eece880a04e0ba45104136145bebb',
//   resolution: 'standard_resolution',
//   template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
//   sortBy: 'most-recent',
//   limit: 20,
//   links: false
// });
// userFeed.run();
//clientid
//a88e61a7303d454aafd15efb46099152

//client secret
// bbced435de9846c49aea7a1996d91a51

//access token
//5533940204.a88e61a.6d3eece880a04e0ba45104136145bebb

//to get token
//go to https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code
//replace clientid and redirect uri

var userFeed = new Instafeed({
  
  get: 'user',
  userId: '5533940204',
  clientId: 'a88e61a7303d454aafd15efb46099152',
  accessToken: '5533940204.a88e61a.6d3eece880a04e0ba45104136145bebb',
  resolution: 'standard_resolution',
  template: 
  '<div class="col-md-3 m-1"><img onclick="clickTodo(this.id)" id="{{id}}" src="{{image}}" style="width:100%; height:100%"><!-- The Modal --><div id="myModal{{id}}" class="modal"><span class="close{{id}}">&times;</span><div class="row"><div class="col-md-6 modal-content"><img class="modal-content" id="img01{{id}}"></div><!--end of col-md-6--><div class="col-md-6 modal-content"><p class="modal-content" id="text{{id}}"><br>{{caption}}</p></div><!--end of col-md-6--><div id="caption{{id}}"></div></div><!--end of row--></div><!--end of myModal--></div><!--end of col-md-3-->',
  sortBy: 'most-recent',
  limit: 4,
  links: false
});
userFeed.run();

//'<div class="col-md-3 m-1"><img onclick="clickTodo(this.id)" id="{{id}}" src="{{image}}" style="width:100%;max-width:300px"><!-- The Modal --><div id="myModal{{id}}" class="modal"><span class="close{{id}}">&times;</span><div class="row"><div class="col-md-6 modal-content"><img class="modal-content" id="img01{{id}}"></div><!--end of col-md-6--><div class="col-md-6 modal-content"><p class="modal-content" id="text{{id}}">{{comments}}<br>{{caption}}</p></div><!--end of col-md-6--><div id="caption{{id}}"></div></div><!--end of row--></div><!--end of myModal--></div><!--end of col-md-3-->',
  

