{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting expired offline access tokens {id="rosa-troubleshooting-expired-offline-access-tokens_{{ context }}"}

If you use the {{ product_title }} (ROSA) CLI, `rosa`, and your api.openshift.com offline access token expires, an error message is displayed. This happens when sso.redhat.com invalidates the token. {._abstract}

The following example shows the output:

```terminal
Can't get tokens ....
Can't get access tokens ....
```

**Procedure**

*   Generate a new offline access token at the following URL. The {{ cluster_manager_url }} URL generates a new offline access token every time you visit it.