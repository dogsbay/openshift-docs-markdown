# Credential selection {id="op-understanding-credential-selection_{{ context }}"}

A pipeline run or task run might require multiple authentications to access different Git repositories. Annotate each secret with the domains where {{ pipelines_shortname }} can use its credentials.

A credential annotation key for Git secrets must begin with `tekton.dev/git-`, and its value is the URL of the host for which you want {{ pipelines_shortname }} to use that credential.

In the following example, {{ pipelines_shortname }} uses a `basic-auth` secret, which relies on a username and password, to access repositories at `github.com` and `gitlab.com`.

```yaml title="Example: Multiple credentials for basic authentication"
apiVersion: v1
kind: Secret
metadata:
  annotations:
    tekton.dev/git-0: github.com
    tekton.dev/git-1: gitlab.com
type: kubernetes.io/basic-auth
stringData:
  username: <username> (1)
  password: <password> (2)
```
1.  Username for the repository
1.  Password or personal access token for the repository

You can also use an `ssh-auth` secret (private key) to access a Git repository.

```yaml title="Example: Private key for SSH based authentication"
apiVersion: v1
kind: Secret
metadata:
  annotations:
    tekton.dev/git-0: https://github.com
type: kubernetes.io/ssh-auth
stringData:
  ssh-privatekey: (1)
```
1.  The content of the SSH private key file.