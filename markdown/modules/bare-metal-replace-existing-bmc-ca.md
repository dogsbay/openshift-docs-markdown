{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing an existing BMC CA certificate {id="bare-metal-replace-existing-bmc-ca_{{ context }}"}

You can replace the BMC CA certificate with your own local or self-signed CA certificate by editing the `bmc-verify-ca` ConfigMap in the `openshift-machine-api` namespace. Providing your own CA certificate gives you control over the secure communications between your cluster and BMC’s. {._abstract}

**Prerequisites**

*   You have installed a cluster on bare metal.
*   You configured a CA certificate for BMC communication when you installed the cluster.
*   You have a local or self-signed CA certificate.

**Procedure**

1.  Edit the `bmc-verify-ca` ConfigMap by running the following command:
    ```terminal
    $ oc edit configmap bmc-verify-ca -n openshift-machine-api
    ```
1.  Replace the contents of the `verify_ca.crt` stanza with your local or self-signed CA certificate, as in the following example:
    ```yaml
    apiVersion: v1
    data:
      verify_ca.crt: |
        -----BEGIN CERTIFICATE-----
        <self_signed_certificate_contents>
        -----END CERTIFICATE-----
    kind: ConfigMap
    ```

    where:

    `<self_signed_certificate_contents>`
    :   Specifies the contents of your local or self-signed CA certificate.