Pebble.addEventListener('ready', function() {
  console.log('PebbleKit JS ready!');
});

Pebble.addEventListener('showConfiguration', function() {
  var url = 'https://cdn.rawgit.com/redlegoman/RLM-SIMPLE-WATCH/master/web/index.html';
  
  /*
  
  Above URL is on github (https://github.com/redlegoman/Colour-RLM-Simple-Watch-w-Config) and RELIES
  ON IT BEING THERE - DO NOT DELETE IT!
  
  */
  console.log('Showing configuration page: ' + url);

  Pebble.openURL(url);
});

Pebble.addEventListener('webviewclosed', function(e) {
  var configData = JSON.parse(decodeURIComponent(e.response));
  console.log('Configuration page returned: ' + JSON.stringify(configData));

  var inverse = configData['inverse'];
  
  var dict = {};
//  if(configData['inverse'] === true) {
    dict['KEY_INVERSE'] = configData['inverse'] ? 1 : 0;  // Send a boolean as an integer
//  } 
    
  // Send to watchapp
  Pebble.sendAppMessage(dict, function() {
    console.log('Send successful: ' + JSON.stringify(dict));
  }, function() {
    console.log('Send failed!');
  });
});