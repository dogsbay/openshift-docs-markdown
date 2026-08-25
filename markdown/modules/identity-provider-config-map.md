{% if context == "configuring-github-identity-provider" %}
{%- set github = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a 'ConfigMap' {id="identity-provider-creating-configmap_{{ context }}"}

Create a `ConfigMap` object in the `openshift-config` namespace to store the certificate authority bundle that identity providers use to validate secure connections to the remote authentication service. {._abstract}

{% if github %}

:::note

This procedure is required only for GitHub Enterprise.

:::

{% endif %}

**Procedure**

1.  Define an {{ product_title }} `ConfigMap` object containing the certificate authority by running the following command:
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

    The certificate authority must be stored in the `ca.crt` key of the `ConfigMap` object.

{%- if context == "configuring-google-identity-provider" %}
{%- set github = false -%}
{% endif %}