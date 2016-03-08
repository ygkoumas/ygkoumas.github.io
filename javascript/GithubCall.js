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
		var string = '<ul>'
		for (i in res.data) {
			string += '<li>'+res.data[i].name+'</li>'
		}
		string += '</ul>'
		return string;
	};
};


window.onload = function() {
	window.setTimeout(main, 2000);
}