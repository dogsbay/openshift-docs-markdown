{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample htpasswd CR {id="identity-provider-htpasswd-CR_{{ context }}"}

The following custom resource (CR) shows the parameters and acceptable values for an
htpasswd identity provider.

```yaml title="htpasswd CR"
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: my_htpasswd_provider (1)
    mappingMethod: claim (2)
    type: HTPasswd
    htpasswd:
      fileData:
        name: htpass-secret (3)
```
1.  This provider name is prefixed to provider user names to form an identity
name.
1.  Controls how mappings are established between this provider’s identities and `User` objects.
1.  An existing secret containing a file generated using
[`htpasswd`](http://httpd.apache.org/docs/2.4/programs/htpasswd.html).