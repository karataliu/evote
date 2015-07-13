#!/usr/bin/env node

var file    = 'data.txt';
var fs      = require('fs');
var data    = fs.readFileSync(file, 'utf-8');
var ho      = JSON.parse(data);


exports.add = function(key, name){
  if(!ho[key]){
    ho[key]   = [];
  }

  ho[key].push(name);
};

exports.get = function(){
  return ho;
};

exports.save = function(){
  fs.writeFileSync(file, JSON.stringify(ho));
}

exports.genForm = function()
{
  var form = '<form>\n';
  
  for(var key in ho){
    var list = ho[key];
    form += '<input type="radio" name="vote" value="' + key + '">' + key + " ";
    for(var i = 0; i < list.length; i++){
      form += list[i] + ' ';
    }
    form += '<br>\n';
  }

  form += '<input type="submit" value="Vote">';
  form += '</form>\n';

  return form;
}
