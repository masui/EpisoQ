function loadScript (qa) {
  return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = qa;
      script.onload = resolve;
      document.body.appendChild(script);
  });
}

async function aaa(){
    questions = qa.questions;
    n = questions.length;
    while (n) {
        const i = Math.floor(Math.random() * n--);
        [questions[i], questions[n]] = [questions[n], questions[i]];
    }
    //w = window.open();
    window.location.href = `http://EpisoPass.com/easy.html?questions=${qa.questions.slice(0,10).join(';')}&answers=${qa.answers.join(';')}`;
}

async function load (url) {
    await loadScript(url);
    await aaa();
}

$(function(){
    const args = {};
    document.location.search.substring(1).split('&').forEach((s) => {
	let [name, value] = s.split('=');
	args[name] = decodeURIComponent(value);
    });
    const qa = args['qa'];
    if (qa) {
	load(qa);
    }
});
