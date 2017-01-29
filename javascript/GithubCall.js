main = function() {

	githubCall = new XMLHttpRequest;

	githubCall.onreadystatechange=function() {
		if (githubCall.readyState == 4 && githubCall.status == 200) {
			document.getElementsByClassName('github-call')[0].innerHTML = eval(githubCall.response);
		}
	};

	githubCall.open('GET','https://api.github.com/users/ygkoumas/repos?callback=myjsonp');

	githubCall.send();

	myjsonp = function (res) {
		var string = '<ul>';
		for (i in res.data) {
			var data = res.data[i];
			if (data.description == null) {
				data.description = '';
			}

			var link = '<a title="'+data.description+'" href="'+data.html_url+'">'+data.name+'</a>';
			var description = '<span>'+data.description+' - language: '+data.language+'</span>';

			string += '<li>' + link + description + '</li>';
		}
		string += '</ul>';
		return string;
	};
};


window.onload = function() {
	window.setTimeout(main, 2000);
}