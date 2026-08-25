{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a root CA issuer for the Istio-CSR agent {id="cert-manager-istio-creating-issuer_{{ context }}"}

To enable certificate signing for the Istio-CSR agent, configure a root CA issuer using the {{ cert_manager_operator }}. You can establish a trusted root by using the {{ cert_manager_operator }} to ensure secure communication between workloads. {._abstract}


:::note

Other supported issuers can be used, except for the ACME issuer, which is not supported. For more information, see "{{ cert_manager_operator }} issuer providers".

:::


**Procedure**

1.  Create a YAML file that defines the `Issuer` and `Certificate` objects by using the following example configuration:
    ```yaml
    apiVersion: cert-manager.io/v1
    kind: Issuer
    metadata:
      name: selfsigned
      namespace: <istio_project_name>
    spec:
      selfSigned: {}
    ---
    apiVersion: cert-manager.io/v1
    kind: Certificate
    metadata:
      name: istio-ca
      namespace: <istio_project_name>
    spec:
      isCA: true
      duration: 87600h # 10 years
      secretName: istio-ca
      commonName: istio-ca
      privateKey:
        algorithm: ECDSA
        size: 256
      subject:
        organizations:
          - cluster.local
          - cert-manager
      issuerRef:
        name: selfsigned
        kind: Issuer
        group: cert-manager.io
    ---
    apiVersion: cert-manager.io/v1
    kind: Issuer
    metadata:
      name: istio-ca
      namespace: <istio_project_name>
    spec:
      ca:
        secretName: istio-ca
    ```

    where:

    `Issuer`
    :   Specifies the `Issuer` or `ClusterIssuer`.

    `<istio_project_name>`
    :   Specifies the name of the Istio project.

**Verification**

*   Verify that the Issuer is created and ready to use by running the following command:
    ```terminal
    $ oc get issuer istio-ca -n <istio_project_name>
    ```
    ```terminal title="Example output"
    NAME       READY   AGE
    istio-ca   True    3m
    ```