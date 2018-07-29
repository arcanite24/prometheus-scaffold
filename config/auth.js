module.exports = {

  /*
    Define all the routes that will ignore the authentication, by default all the routes will be passed
    by authentication.

    ignoreAuth also could be a string containing a '*', meaning that all routes will be ignoring authentication

    The strings on the array needs to be req.path similar. For example:
    A route in the UserController.js file called 'getAllUsers' should be the following
      ['/user/getAllUsers']

    There is no need to use the API Prefix defined in the config/server.js file

  */
  ignoreAuth: [
    '/user/login',
    '/user/register'
  ],

  // Authentication method, by default 'jwt' is selected
  // Also, authMethod can be a function for a custom auth method, read the docs for more info
  authMethod: 'jwt',

  // authConfig sometimes is needed for the authentication methods, in this case (jwt) is needed for
  // all the credentails and the data that is incluided in the token
  authConfig: {
    secretKey: process.env.JWT_SECRET,
  }

}