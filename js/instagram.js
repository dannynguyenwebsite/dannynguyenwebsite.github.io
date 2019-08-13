var userFeed = new Instafeed({
  get: 'user',
  userId: '5533940204',
  clientId: 'a88e61a7303d454aafd15efb46099152',
  accessToken: '5533940204.a88e61a.6d3eece880a04e0ba45104136145bebb',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  sortBy: 'most-recent',
  limit: 20,
  links: false
});
userFeed.run();
//clientid
//a88e61a7303d454aafd15efb46099152

//client secret
// bbced435de9846c49aea7a1996d91a51

//access token
//5533940204.a88e61a.6d3eece880a04e0ba45104136145bebb

//to get token
//go to https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code
//replace clientid and redirect uri