var dmO = {
	cam: null,
	dev: null,
	cnv: null,
	ecn: null,
	feed: null,
	img: null,
	hpnl: null,
	ic: null,
	onload: function () {
		dmO.cam = document.getElementById('cam');
		dmO.ecn = document.getElementById('mix');
		dmO.cnv = dmO.ecn.getContext('2d');
		ic = 0;
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
			var h = dmO.cnv.height = dmO.cam.videoHeight;
			var w = dmO.cnv.width = dmO.cam.videoWidth;
			dmO.cnv.drawImage(dmO.cam, 0, 0, w, h, 0, 0, 300, 150);

		}
		//console.log(this.cnv, this.ecn);
	},
	save: function () {
		//dmO.img = dmO.cnv.getImageData(0, 0, 320, 240);
		//alert(JSON.stringify(dmO.img));
		var pic = dmO.ecn.toDataURL('image/png', 1.0);
		var im = document.createElement('img');
		im.src = pic;
		im.setAttribute('class', 'hi');
		dmO.hpnl = document.getElementById('history');
		dmO.hpnl.appendChild(im);
		//ic = 0;
		ic++;
		console.log(ic);
	}
};


