{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding an API server named certificate for the first time {id="customize-certificates-api-add-named_{{ context }}"}

The default API server certificate is issued by an internal {{ product_title }} cluster Certificate Authority (CA). You can add alternative certificates that the API server will return based on the fully qualified domain name (FQDN) requested by the client, for example when a reverse proxy or load balancer is used. {._abstract}


:::note

Adding a custom API server named certificate for the first time triggers the `kube-apiserver-operator` to roll out a new revision of the API server pods. Node reboots are not required.

:::


**Prerequisites**

*   You must have a certificate for the FQDN and its corresponding private key. Each should be in a separate PEM format file.
*   The private key must be unencrypted.
*   The certificate must include the `subjectAltName` extension showing the FQDN.
*   The certificate file can contain one or more certificates in a chain. The certificate for the API server FQDN must be the first certificate in the file, followed by intermediate certificates, and ending with the root CA certificate.


:::warning

Do not provide a named certificate for the internal load balancer (host name `api-int.<cluster_name>.<base_domain>`). Doing so will leave your cluster in a degraded state.

:::


**Procedure**

1.  Log in to the CLI as the `kubeadmin` user:
    ```terminal
    $ oc login -u kubeadmin -p <password> https://<fqdn>:6443
    ```

    where:

    `<password>`
    :   Specifies your cluster administrative password.

    `<fqdn>`
    :   Specifies the fully qualified domain name of the internal cluster API endpoint.
1.  Create a secret that contains the certificate chain and private key in the `openshift-config` namespace:
    ```terminal
    $ oc create secret tls <secret_name> \
         --cert=<path_to_certificate_file> \
         --key=<path_to_private_key_file> \
         -n openshift-config
    ```

    where:

    `<secret_name>`
    :   Specifies the name of the new secret resource that will contain the cryptographic key pair.

    `<path_to_certificate_file>`
    :   Specifies the absolute local path to your custom certificate chain file.

    `<path_to_private_key_file>`
    :   Specifies the absolute local path to the unencrypted private key file associated with the certificate.
1.  Update the API server to reference the created secret resource:
    ```terminal
    $ oc patch apiserver cluster --type=merge -p '
    {
      "spec": {
        "servingCerts": {
          "namedCertificates": [
            {
              "names": ["<fqdn>"],
              "servingCertificate": {
                "name": "<secret_name>"
              }
            }
          ]
        }
      }
    }'
    ```

    where:

    `<fqdn>`
    :   Specifies the fully qualified domain name for which the API server serves this custom certificate. Do not include a port number.

    `<secret_name>`
    :   Specifies the name of the secret you created in the previous step.
1.  Verify that a new revision of the Kubernetes API server rolls out by checking the operator status:
    ```terminal
    $ oc get clusteroperators kube-apiserver
    ```

    :::note

    The `PROGRESSING` status column will change to `True` while the API server operator deploys the new pod revision configured with your custom certificate. Do not interrupt the process or apply additional configuration updates while the rollout is underway. Continue only after the status returns to `False` and `AVAILABLE` reads `True`.
    
    :::