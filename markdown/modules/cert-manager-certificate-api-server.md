{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating certificates for the API server {id="cert-manager-certificate-api-server_{{ context }}"}

To secure interactions with the cluster control plane, create TLS certificates for the API server by using the {{ cert_manager_operator }}. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed version 1.13.0 or later of the {{ cert_manager_operator }}.

**Procedure**

1.  Create an issuer. For more information, see "Configuring an issuer" in the "Additional resources" section.
1.  Create a certificate:
    1.  Create a YAML file, for example, `certificate.yaml`, that defines the `Certificate` object:
        ```yaml
        apiVersion: cert-manager.io/v1
        kind: Certificate
        metadata:
          name: <tls_cert>
          namespace: openshift-config
        spec:
          isCA: false
          commonName: "api.<cluster_base_domain>"
          secretName: <secret_name>
          dnsNames:
          - "api.<cluster_base_domain>"
          issuerRef:
            name: <issuer_name>
            kind: Issuer
        ```

        where:

        `<tls_cert>`
        :   Specifies a name for the certificate.

        `<cluster_base_domain>`
        :   Specifies the common name (CN).

        `<secret_name>`
        :   Specifies the name of the secret to create that contains the certificate.

        `<issuer_name>`
        :   Specifies the name of the issuer.

    1.  Create the `Certificate` object by running the following command:
        ```terminal
        $ oc create -f certificate.yaml
        ```
1.  Add the API server named certificate. For more information, see "Adding an API server named certificate" section in the "Additional resources" section.

    :::note

    To ensure the certificates are updated, run the `oc login` command again after the certificate is created.
    
    :::


**Verification**

*   Verify that the certificate is created and ready to use by running the following command:
    ```terminal
    $ oc get certificate -w -n openshift-config
    ```

    Once certificate is in `Ready` status, API server on your cluster can start using the generated certificate secret.