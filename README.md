# config-service-reference
A reference repo to show how configuration services are made or used

# Welcome

We will look at ways to store secrets and database connection credentials in this tutorial.

# Setup

* Have node ready
* Check out this repo
* Run a local mysql instance (with brew or docker)
* Make sure you can connect into the instance (with datagrip or with cli mysql)

# node-starthere

Go to this folder to see what it looks like if we do not use any configuration service or patterns.

# node-with-config-service

Go to this folder to see a config service that loads from environment variables

# ts-with-config-service

Go to this folder to see how typescript can help us capture bad ENVIRONMENT variable values on startup.

# nestjs-with-config-service

Go to this folder to see how to dynamically load additional configurations from S3 or db.

 