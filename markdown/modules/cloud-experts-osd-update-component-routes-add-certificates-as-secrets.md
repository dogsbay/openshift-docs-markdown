{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding the certificates to the cluster as secrets {id="cloud-experts-osd-update-component-routes-add-certificates-as-secrets_{{ context }}"}

Add the Transport Layer Security (TLS) certificates to your cluster as secrets in the `openshift-config` namespace to reference them when updating component routes. {._abstract}

**Procedure**

*   Create three TLS secrets in the `openshift-config` namespace.

    These become your secret reference when you update the component routes.
    ```bash
    $ oc create secret tls console-tls --cert=cert-console.pem --key=key-console.pem -n openshift-config
    $ oc create secret tls downloads-tls --cert=cert-downloads.pem --key=key-downloads.pem -n openshift-config
    $ oc create secret tls oauth-tls --cert=cert-oauth.pem --key=key-oauth.pem -n openshift-config
    ```

**Verification**

*   Verify that the TLS secrets were created:
    ```bash
    $ oc get secrets -n openshift-config | grep -E 'console-tls|downloads-tls|oauth-tls'
    ```

    The output shows the three TLS secrets.