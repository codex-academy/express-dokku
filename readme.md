# Testing Dokku

Small express app to test Dokku.

To deploy to dokku - add a git remote to `dokku@git.apps.projectcodex.net:express-101`

Using this command:

```
git remote add dokku dokku@git.apps.projectcodex.net:express-dokku
```

You can change the name after the colon to change your app name.

Before you will be able to push to dokku you will need to add your `ssh` on the `git.apps.projectcodex.net` server. For that we will need your public ssh key. Please email your public ssh key to `mentors@projectcodex.co`. See the instruction below to create it.

Follow these [instructions from GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to create an ssh key. Be sure to select the appropriate platform for Windows or Linux instructions.

You can use the same ssh key for GitHub but that is a different concept all together, currently. And not needed to deploy to Dokku.

> **Note:** you could use a `main` branch as well.


### Adding a user as a Dokku user

The codeX dokku admin will add you are a user by running this command on the server:


Create the `username.pub` file username being the user who is deploying or logging in onto the server:

```
touch username.pub
```

Open the `username.pub` file and paste the public key into this file.

And run the command below.

```
dokku ssh-keys:add user_name ./user_name.pub
```

The user should noe be able to deploy to `Dokku`.

## Deploy

Once your public key has been added to Dokku you should be able to deploy.

Deploy the app using this command:

```
git push dokku master
```

## Usefull commands

We used these commands when we tested out Dokku.

```
  dokku proxy:ports express-101
  dokku proxy-remove express-101
  dokku proxy:ports-remove express-101
  dokku proxy:ports express-101
  dokku proxy-remove express-101 http:80:5000
  dokku proxy:ports-remove express-101 http:80:5000
  dokku proxy:ports-set express-101 http:80:4007
  dokku report express-101
  clear
  dokku
  dokku config:set express-101 PORT=7001
  dokku proxy:ports-remove express-101 http:80:4007
  dokku proxy:ports-set express-101 http:80:7001
```

## Usefull documentation

https://dokku.com/docs/deployment/remote-commands/
