dug({
  endpoint: 'https://api.github.com/users/jdcauley/repos',
  target: 'github',
  error: function(){
    console.log('error');
  },
  template: '<ul class="repos">\
              {{#data}}\
                <li><a href="http://github.com/{{full_name}}" target="_blank">{{name}}</a> <span>{{description}}</span></li>\
             {{/data}}\
             </ul>'
});

dug({
  endpoint: 'https://api.github.com/users/jdcauley',
  target: 'me',
  error: function(){
    console.log('error');
  },
  template:
  '<div>\
    <a href="{{data.url}}">\
       <img class="aside-profile-img aside-img" src="{{data.avatar_url}}">\
    </a>\
    <h4>{{data.name}}</h4>\
    <p>{{data.bio}}</p>\
  </div>'
});
