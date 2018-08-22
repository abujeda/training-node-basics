const Hapi = require('hapi');

const server = Hapi.server({
    port: 9000,
    host: 'localhost'
});

server.route({
    method:'GET',
    path:'/hello/{name}',
    handler:function(request, res) {

        return `hello ${request.params.name}`;
    }
});

server.start((error) => {
    console.log(`Hapi started: ${server.info.uri}`);
});