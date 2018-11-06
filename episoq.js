javascript: (() => {
  const a = location.href.split('/');
  const project = a[3];
  const page = a[4];
  const url = `https://scrapbox.io/api/pages/${project}/${page}/text`;
  $.ajax({
    url: url,
    async: false,
    success: (data) => {
      lines = data.split(/\n/);
      lines = lines.filter(line => line.match(/^ /));
      lines = lines.map(line => line.replace(/^ /,''));
      n = lines.length;
      while (n) {
        const i = Math.floor(Math.random() * n--);
        [lines[i], lines[n]] = [lines[n], lines[i]]
      }
      w = window.open();
      w.document.write("<pre>"+lines.slice(0,10).join("\n")+"</pre>");
    }
  });
})();




