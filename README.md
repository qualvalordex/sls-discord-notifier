# Discord notifier for AWS S3 uploads

## How to use it

First of all you need to clone this repository to your pc:
```
$ git clone git@github.com:qualvalordex/sls-discord-notifier.git
```

So you can run `npm install` to download project dependencies and then you need to set your Discord webhook credentials at `serverless.yml`.

After that, you need to configure your AWS credentials using serverless framework. Execute the following:
```
$ sls config credentials --provider aws --key [YOUR AWS KEY] --secret [YOUR AWS SECRET]
```

Now you are able to deploy the service to your AWS environment. Just type:
```
$ sls deploy
```
and enjoy!