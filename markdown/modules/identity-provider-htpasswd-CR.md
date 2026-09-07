{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample htpasswd CR {id="identity-provider-htpasswd-CR_{{ context }}"}

Review the custom resource fields and acceptable values for configuring an `htpasswd` identity provider in {{ product_title }}. {._abstract}

```yaml title="htpasswd CR"
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: my_htpasswd_provider
    mappingMethod: claim
    type: HTPasswd
    htpasswd:
      fileData:
        name: htpass-secret
```

where:


`spec.identityProviders.name`
:   Specifies the provider name, which is prefixed to provider usernames to form an identity name.

`spec.identityProviders.mappingMethod`
:   Specifies how mappings are established between identities from this provider and `User` objects.

`spec.identityProviders.htpasswd.fileData.name`
:   Specifies an existing secret containing a file generated using `htpasswd`. For more information, see "htpasswd".