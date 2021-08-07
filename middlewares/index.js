const mainMiddleware = require("./app");

const middleware = {
    main: (app) => {
        return mainMiddleware(app);
    },
    auth: () => {
        console.log('auth');
    }
}

module.exports = middleware;