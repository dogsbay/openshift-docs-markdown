{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample GitLab CR {id="identity-provider-gitlab-CR_{{ context }}"}

The following custom resource (CR) shows the parameters and acceptable values for a
GitLab identity provider.

```yaml title="GitLab CR"
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: gitlabidp (1)
    mappingMethod: claim (2)
    type: GitLab
    gitlab:
      clientID: {...} (3)
      clientSecret: (4)
        name: gitlab-secret
      url: https://gitlab.com (5)
      ca: (6)
        name: ca-config-map
```
1.  This provider name is prefixed to the GitLab numeric user ID to form an
identity name. It is also used to build the callback URL.
1.  Controls how mappings are established between this provider’s identities and `User` objects.
1.  The client ID of a
[registered GitLab OAuth application](https://docs.gitlab.com/ce/api/oauth2.html).
The application must be configured with a callback URL of
`https://oauth-openshift.apps.<cluster-name>.<cluster-domain>/oauth2callback/<idp-provider-name>`.
1.  Reference to an {{ product_title }} `Secret` object containing the client secret
issued by GitLab.
1.  The host URL of a GitLab provider. This could either be `https://gitlab.com/`
or any other self hosted instance of GitLab.
1.  Optional: Reference to an {{ product_title }} `ConfigMap` object containing the
PEM-encoded certificate authority bundle to use in validating server
certificates for the configured URL.