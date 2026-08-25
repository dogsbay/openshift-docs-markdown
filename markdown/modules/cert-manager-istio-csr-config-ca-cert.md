{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the CA certificate for the Istio server {id="cert-manager-istio-csr-config-ca-cert_{{ context }}"}

You can configure the `ConfigMap` that contains the CA bundle used by Istio workloads to verify the Istio server certificate. If not configured, the {{ cert_manager_operator }} looks for the CA certificate in the configured issuer and in the Kubernetes Secret that contains the Istio certificates. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `IstioCSR` custom resource (CR).

**Procedure**

1.  Edit the `IstioCSR` CR by running the following command:
    ```terminal
    $ oc edit istiocsrs.operator.openshift.io default -n <istio_csr_project_name>
    ```

    Replace `<istio_csr_project_name>` with the namespace where you created the `IstioCSR` CR.
1.  Configure the CA bundle by editing the `spec.istioCSRConfig.certManager` section. See the following example:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: IstioCSR
    ...
    spec:
      istioCSRConfig:
        certManager:
          istioCACertificate:
            key: <key_in_the_configmap>
            name: <configmap_name>
            namespace: <configmap_namespace>
    ```

    where:

    `<key_in_the_configmap>`
    :   Specifies the key name in the `ConfigMap` that contains the CA bundle.

    `<configmap_name>`
    :   Specifies the name of the `ConfigMap`. Ensure that the referenced `ConfigMap` and key exist before you update this field.

    `<configmap_namespace>`
    :   Optional. Specifies the namespace where the `ConfigMap` exists. If you do not set this field, the {{ cert_manager_operator }} searches for the `ConfigMap` in the namespace where you have installed the `IstioCSR` CR.

    :::note

    Whenever the CA certificate is rotated, you must manually update the `ConfigMap` with the latest certificate.
    
    :::


1.  Save and close the editor to apply your changes. After the changes are applied, the cert-manager Operator updates the CA bundle for the `istio-csr` operand.