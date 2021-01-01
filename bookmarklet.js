javascript:(function(){
  var nquestions = 10;
  var project = scrapbox.Project.name;
  var page = scrapbox.Page.title;

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
    window.location.href = `http://EpisoPass.com/episopass.html?questions=${qa.questions.slice(0,nquestions).join(';')}&answers=${qa.answers.join(';')}`;
  }

  async function episoQ (url) {
    await loadScript(url);
    await openEpisoPassWindow();
  }
  
  for(var line of scrapbox.Page.lines){
    var m = line.text.match(/^code:(.*)$/);
    if(m){
      script = m[1];
      url = `https://scrapbox.io/api/code/${project}/${page}/${script}`;
      episoQ(url);
    }
  }
})();
