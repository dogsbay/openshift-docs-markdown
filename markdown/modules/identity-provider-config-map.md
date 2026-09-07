{% if context == "configuring-github-identity-provider" %}
{%- set github = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ConfigMap {id="identity-provider-creating-configmap_{{ context }}"}

Create a `ConfigMap` object in the `openshift-config` namespace that contains the certificate authority bundle for the identity provider. {{ product_title }} uses this bundle to validate Transport Layer Security (TLS) connections to the identity provider. {._abstract}

{% if github %}

:::note

This procedure is required only for GitHub Enterprise.

:::

{% endif %}

**Procedure**

1.  Define an {{ product_title }} `ConfigMap` object containing the CA by running the following command:
    ```terminal
    $ oc create configmap ca-config-map --from-file=ca.crt=/path/to/ca -n openshift-config
    ```
1.  Optional: Apply the following YAML to create the config map:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ca-config-map
      namespace: openshift-config
    data:
      ca.crt: |
        <CA_certificate_PEM>
    ```

    The CA must be stored in the `ca.crt` key of the `ConfigMap` object.

{%- if context == "configuring-google-identity-provider" %}
{%- set github = "" -%}
{% endif %}