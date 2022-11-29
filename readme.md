# Testing Dokku

Small express app to test Dokku.

To deploy to dokku - add a git remote to `dokku@git.apps.projectcodex.net:express-101`

Using this command:

```
git add remote dokku dokku@git.apps.projectcodex.net:express-dokku
```

You can change the name after the colon to change your app name.


Before you will be able to push to dokku we will need to add you are a dokku user on the `git.apps.projectcodex.net` server. For that we will need you public ssh key.

Follow these [instructions from GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to create an ssh key. You can use the same ssh key for GitHub but that is a different concept all together, currently. And not needed to deploy to Dokku.

## Commands we tested on the server

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
