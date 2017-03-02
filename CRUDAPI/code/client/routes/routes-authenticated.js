/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/



Router.route('apiKey', {
  path: '/api-key',
  template: 'apiKey'
});


Router.route('index', {
    path: '/',
    template: 'index'
});

Router.route('landing', {
    path: '/landing',
    template: 'landing'
});



Router.route('tacos', {
    path: '/tacos',
    template: 'tacos'
});


Router.route('addTaco', {
    path: '/addTaco',
    template: 'addTaco'
});





Router.route('requestlist', {
    path: '/requestlist',
    template: 'requestlist'
});

Router.route('updatecandidate', {
    path: '/updatecandidate',
    template: 'updatecandidate'
});



Router.route('newcandidate', {
    path: '/newcandidate',
    template: 'newcandidate'
});


Router.route('staffing', {
    path: '/staffing',
    template: 'staffing'
});









Router.route('adminlogin', {
    path: '/adminlogin',
    template: 'adminlogin'
});

Router.route('candidateadmin', {
    path: '/candidateadmin',
    template: 'candidateadmin'
});









