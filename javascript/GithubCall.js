document.onload = function() {
	githubCall = new XMLHttpRequest;

	githubCall.onreadystatechange=function() {
		if (githubCall.readyState == 4 && githubCall.status == 200) {
			document.getElementsByClassName('github-call')[0].innerHTML = eval(githubCall.response);
		}
	};

	githubCall.open('GET','https://api.github.com/users/ygkoumas/repos?callback=myjsonp');

	githubCall.send();

	myjsonp = function (res) {
		return res.data[0].name;
	};
};


