var feed = new Instafeed({
		get: 'user',
		userId: 1280170021,
		accessToken: '1280170021.1677ed0.e9a6e8b385dc4002a5218422f3c5bb64',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>',
		target: 'instagram',
		resolution: 'standard_resolution',
		after: function() {}
});

window.onload = function() {
	feed.run();

};
