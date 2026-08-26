{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the certificates to the cluster as secrets {id="cloud-experts-update-component-routes-add-certificates-as-secrets_{{ context }}"}

Add the Transport Layer Security (TLS) certificates to your cluster as secrets by using the {{ oc_first }} tool. Store the certificates as secrets in the `openshift-config` namespace so that you can reference them when you update the component routes later. {._abstract}

**Procedure**

*   Create three TLS secrets in the `openshift-config` namespace.

    These become your secret reference when you update the component routes.
    ```terminal
    $ oc create secret tls console-tls --cert=cert-console.pem --key=key-console.pem -n openshift-config
    ```
    ```terminal
    $ oc create secret tls downloads-tls --cert=cert-downloads.pem --key=key-downloads.pem -n openshift-config
    ```
    ```terminal
    $ oc create secret tls oauth-tls --cert=cert-oauth.pem --key=key-oauth.pem -n openshift-config
    ```