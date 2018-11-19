var env; 
if(!process.env.NODE_ENV){
	env = 'development';
}else{
	env = 'test';
}

if (env === 'development' || env == 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
