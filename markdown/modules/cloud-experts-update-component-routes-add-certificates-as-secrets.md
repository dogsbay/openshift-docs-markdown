{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the certificates to the cluster as secrets {id="cloud-experts-update-component-routes-add-certificates-as-secrets_{{ context }}"}

You can use the {{ oc_first }} tool to add the certificates to your created cluster as secrets. {._abstract}

**Procedure**

1.  Create three TLS secrets in the `openshift-config` namespace.

    These become your secret reference when you update the component routes later in this guide.
    ```bash
    $ oc create secret tls console-tls --cert=cert-console.pem --key=key-console.pem -n openshift-config
    $ oc create secret tls downloads-tls --cert=cert-downloads.pem --key=key-downloads.pem -n openshift-config
    $ oc create secret tls oauth-tls --cert=cert-oauth.pem --key=key-oauth.pem -n openshift-config
    ```