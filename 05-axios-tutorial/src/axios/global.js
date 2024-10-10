import axios from 'axios';

/**
 * DO not forget to import global axios settings to wherever used
 * in this case -> App.js
 *
 * To make sure it's correctly set you can go in Networks browser tab and see the Request Headers!
 *
 * Be careful when setting globally, for example we wouldn't want to set JWT globally
*/
axios.defaults.headers.common['Accept'] = 'application/json';