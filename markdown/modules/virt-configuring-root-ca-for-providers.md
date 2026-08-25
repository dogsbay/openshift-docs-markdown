{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the root certificate authority for providers {id="virt-configuring-root-ca-for-providers_{{ context }}"}

You must configure an {{ product_title }} provider for each cluster that you are including in a migration, and each provider requires a certificate authority (CA) for the cluster. Configure the root CA for the entire cluster to avoid CA expiration, which causes the provider to fail. {._abstract}

**Procedure**

1.  Run the following command against the cluster for which you are creating the provider:
    ```terminal
    $ oc get cm kube-root-ca.crt -o=jsonpath={.data.ca\\.crt}
    ```
1.  Copy the printed certificate.
1.  In the {{ mtv_first }} web console, create a provider and select **{{ VirtProductName }}**.
1.  Paste the certificate into the **CA certificate** field, as shown in the following example:
    ```terminal
    -----BEGIN CERTIFICATE-----
    <CA_certificate_content>
    -----END CERTIFICATE-----
    ```