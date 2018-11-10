function loadScript (url) {
  return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      document.body.appendChild(script);
  });
}

async function openEpisoPassWindow(){
    questions = qa.questions;
    n = questions.length;
    while (n) {
        const i = Math.floor(Math.random() * n--);
        [questions[i], questions[n]] = [questions[n], questions[i]];
    }
    window.location.href = `http://EpisoPass.com/easy.html?questions=${qa.questions.slice(0,10).join(';')}&answers=${qa.answers.join(';')}`;
}

async function episoQ (qa) {
    await loadScript(qa);
    await openEpisoPassWindow();
}

function ready () {
    const args = {};
    document.location.search.substring(1).split('&').forEach((s) => {
	let [name, value] = s.split('=');
	args[name] = decodeURIComponent(value);
    });
    const qa = args['qa'];
    if (qa) {
	episoQ(qa);
    }
}

if (document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}
