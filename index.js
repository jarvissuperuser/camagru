var dmO = {
	cam: null,
	dev: null,
	cnv: null,
	ecn: null,
	feed: null,
	onload: function () {
		dmO.cam = document.getElementById('cam');
		dmO.ecn = document.getElementById('mix');
		dmO.cnv = dmO.ecn.getContext('2d');

		if (navigator.webkitGetUserMedia)
		{
			dev = navigator.webkitGetUserMedia({video: true}, function (strm) {
				dmO.cam.src = window.URL.createObjectURL(strm);
				dmO.feed = true;
			}, function (e) {
				alert(e.toString());
			});
		}
	},
	take: function () {
		//alert('who' + this.feed);


		if (dmO.feed)
		{
			dmO.cnv.height = dmO.cam.videoHeight;
			dmO.cnv.width = dmO.cam.videoWidth;
			dmO.cnv.drawImage(dmO.cam, 0, 0, 300, 150);
		}
		//console.log(this.cnv, this.ecn);
	}
};


