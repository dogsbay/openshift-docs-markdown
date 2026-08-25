{%- set _mod_docs_content_type = "REFERENCE" %}
# Example OIDC provider configuration for CLI clients only {id="external-auth-cli_{{ context }}"}

In {{ product_title }} clusters where the web console is disabled, you can configure direct authentication with an external OIDC provider for a CLI client only. In these cases, users must authenticate with the cluster directly through the {{ oc_first }} instead of through the web console. {._abstract}

The following example OIDC provider configuration shows how to configure a CLI client without defining a web console client:

```yaml title="OIDC provider configuration with only a CLI client"
apiVersion: config.openshift.io/v1
kind: Authentication
metadata:
# ...
spec:
  type: OIDC
  webhookTokenAuthenticator: null
  oidcProviders:
  - claimMappings:
      groups:
        claim: groups
        prefix: 'oidc-groups-test:'
      username:
        claim: email
        prefixPolicy: Prefix
        prefix:
          prefixString: 'oidc-user-test:'
    issuer:
      audiences:
      - my-cli-client-id
      issuerURL: my-issuer-url
    name: my-oidc-provider-name
```