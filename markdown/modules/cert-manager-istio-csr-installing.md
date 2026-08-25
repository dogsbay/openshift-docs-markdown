{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the `IstioCSR` custom resource {id="cert-manager-istio-csr-installing_{{ context }}"}

To secure your communications, install the Istio-CSR agent by creating the `IstioCSR` custom resource through the {{ cert_manager_operator }}. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have enabled the Istio-CSR feature.
*   You have created the `Issuer` or `ClusterIssuer` resources required for generating certificates for the Istio-CSR agent.

    :::note

    If you are using `Issuer` resource, create the `Issuer` and `Certificate` resources in the {{ SMProductName }} or `Istiod` namespace. Certificate requests are generated in the same namespace, and role-based access control (RBAC) is configured accordingly.
    
    :::


**Procedure**

1.  Create a new project for installing Istio-CSR by running the following command. If you have an existing project for installing Istio-CSR, skip this step.
    ```terminal
    $ oc new-project <istio_csr_project_name>
    ```
1.  Create the `IstioCSR` custom resource to enable Istio-CSR agent managed by the {{ cert_manager_operator }} for processing Istio workload and control plane certificate signing requests.

    :::note

    Only one `IstioCSR` custom resource (CR) is supported at a time. If multiple `IstioCSR` CRs are created, only one will be active. Use the `status` sub-resource of `IstioCSR` to check if a resource is unprocessed.

    *   If multiple `IstioCSR` CRs are created simultaneously, none will be processed.
    *   If multiple `IstioCSR` CRs are created sequentially, only the first one will be processed.
    *   To prevent new requests from being rejected, delete any unprocessed `IstioCSR` CRs.
    *   The Operator does not automatically remove objects created for `IstioCSR`. If an active `IstioCSR` resource is deleted and a new one is created in a different namespace without removing the previous deployments, multiple `istio-csr` deployments may remain active. This behavior is not recommended and is not supported.
    
    :::

    1.  Create a YAML file that defines the `IstioCSR` object by using the following example:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: IstioCSR
        metadata:
          name: default
          namespace: <istio_csr_project_name>
        spec:
          istioCSRConfig:
            certManager:
              issuerRef:
                name: istio-ca
                kind: Issuer
                group: cert-manager.io
            istiodTLSConfig:
              trustDomain: cluster.local
            istio:
              namespace: <istio_project_name>
        ```

        where:

        `name`
        :   Specifies the `Issuer` or `ClusterIssuer` name. It should be the same name as the CA issuer defined in the `issuer.yaml` file.

        `kind`
        :   Specifies the `Issuer` or `ClusterIssuer` kind. It should be the same kind as the CA issuer defined in the `issuer.yaml` file.

    1.  Create the `IstioCSR` custom resource by running the following command:
        ```terminal
        $ oc create -f IstioCSR.yaml
        ```

**Verification**

1.  Verify that the Istio-CSR deployment is ready by running the following command:
    ```terminal
    $ oc get deployment -n <istio_csr_project_name>
    ```
    ```terminal title="Example output"
    NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
    cert-manager-istio-csr   1/1     1            1           24s
    ```
1.  Verify that the Istio-CSR pods are running by running the following command:
    ```terminal
    $ oc get pod -n <istio_csr_project_name>
    ```
    ```terminal title="Example output"
    NAME                                  	 READY   STATUS	  RESTARTS    AGE
    cert-manager-istio-csr-5c979f9b7c-bv57w  1/1     Running  0           45s
    ```
    *   Verify that the Istio-CSR pod is not reporting any errors in the logs by running the following command:
        ```terminal
        $ oc -n <istio_csr_project_name> logs <istio_csr_pod_name>
        ```
    *   Verify that the {{ cert_manager_operator }} pod is not reporting any errors by running the following command:
        ```terminal
        $ oc -n cert-manager-operator logs <cert_manager_operator_pod_name>
        ```