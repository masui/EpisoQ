javascript: (() => {
  const a = location.href.split('/');
  if(a[2] != 'scrapbox.io') return;
  const project = a[3];
  const page = a[4];
  const url = `https://scrapbox.io/api/code/${project}/${page}/episopass.json`;
  $.ajax({
    url: url,
    async: false,
    success: (data) => {
      questions = data.questions;
      n = questions.length;
      while (n) {
        const i = Math.floor(Math.random() * n--);
        [questions[i], questions[n]] = [questions[n], questions[i]]
      }
      w = window.open();
      w.location.href = `http://EpisoPass.com/easy.html?questions=${data.questions.slice(0,10).join(';')}&answers=${data.answers.join(';')}`
    }
  });
})();


      
      w = window.open();
      w.document.write("<pre>"+data.questions.slice(0,10).join("\n")+"</pre>");
      w.document.write("<pre>"+data.answers.join("\n")+"</pre>");





