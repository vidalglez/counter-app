const getPuzzle = callback => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      //console.log(data);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback('An error has ocurred', undefined);
      //console.log('An error has ocurred');
    }
  });

  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2');
  request.send();
};
