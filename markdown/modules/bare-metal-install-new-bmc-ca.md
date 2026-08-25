{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing a new BMC CA certificate {id="bare-metal-install-new-bmc-ca_{{ context }}"}

You can install a local or self-signed BMC CA certificate on a cluster which was installed without a BMC CA certificate. Providing your own BMC CA certificate secures the communication between your cluster and BMC’s. {._abstract}

**Prerequisites**

*   You installed a cluster on bare metal without a BMC CA certificate.
*   You have a local or self-signed CA certificate.

**Procedure**

1.  Create a file called `bmc-verify-ca.yaml` using a text editor, with the following contents:
    ```yaml
    apiVersion: v1
    data:
      verify_ca.crt: |
        -----BEGIN CERTIFICATE-----
        <self_signed_certificate_contents>
        -----END CERTIFICATE-----
    kind: ConfigMap
    metadata:
      name: bmc-verify-ca
      namespace: openshift-machine-api
    ```

    where:

    `<self_signed_certificate_contents>`
    :   Specifies the contents of your local or self-signed CA certificate.

1.  Apply the ConfigMap by running the following command:
    ```terminal
    $ oc apply -f bmc-verify-ca.yaml
    ```
1.  Verify that the ConfigMap has been mounted in the Ironic container by running the following command:
    ```terminal
    $ oc exec -n openshift-machine-api \
      $(oc get pods -n openshift-machine-api -l app=metal3 -o jsonpath='{.items[0].metadata.name}') \
      -c metal3-ironic -- ls -l /certs/ca/bmc
    ```

    If successful, the command should display the certificate file.
1.  For each bare metal host in your cluster that you want to secure BMC communications with, follow the procedure titled _Editing a BareMetalHost resource_ and ensure that the `disableCertificateVerification` parameter is set to `false`.