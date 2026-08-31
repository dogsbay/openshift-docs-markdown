{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample GitLab custom resource {id="identity-provider-gitlab-CR_{{ context }}"}

Review the sample GitLab `OAuth` custom resource (CR) to understand provider parameters and acceptable values before you configure the identity provider in your cluster. {._abstract}

```yaml
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: gitlabidp
    mappingMethod: claim
    type: GitLab
    gitlab:
      clientID: {...}
      clientSecret:
        name: gitlab-secret
      url: https://gitlab.com
      ca:
        name: ca-config-map
```

where:


`spec.identityProviders.name`
:   Specifies that the provider name is prefixed to the GitLab numeric user ID to form an identity name. It is also used to build the callback URL.

`spec.identityProviders.mappingMethod`
:   Specifies how mappings are established between identities from this provider and `User` objects.

`spec.identityProviders.gitlab.clientID`
:   Specifies the client ID of a registered GitLab OAuth application. The application must be configured with a callback URL of `https://oauth-openshift.apps.<cluster-name>.<cluster-domain>/oauth2callback/<idp-provider-name>`.

`spec.identityProviders.gitlab.clientSecret`
:   Specifies a reference to an {{ product_title }} `Secret` object containing the client secret issued by GitLab.

`spec.identityProviders.gitlab.url`
:   Specifies the host URL of a GitLab provider. This could either be `https://gitlab.com/` or any other self-hosted instance of GitLab.

`spec.identityProviders.gitlab.ca`
:   Specifies a reference to an {{ product_title }} `ConfigMap` object containing the PEM-encoded certificate authority bundle to use in validating server certificates for the configured URL. This value is optional.