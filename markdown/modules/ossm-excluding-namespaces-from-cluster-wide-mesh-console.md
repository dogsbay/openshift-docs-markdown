{%- set _mod_docs_content_type = "PROCEDURE" %}
# Including and excluding namespaces from a cluster-wide mesh by using the web console {id="ossm-excluding-namespaces-from-cluster-wide-mesh-console_{{ context }}"}

Using the {{ product_title }} web console, you can add discovery selectors to the `ServiceMeshControlPlane` resource in a cluster-wide mesh. Discovery selectors define the namespaces that the control plane can discover. The control plane ignores any namespace that does not match one of the discovery selectors, which excludes the namespace from the mesh.


:::note

If you install ingress or egress gateways in the control plane namespace, you must include the control plane namespace in the discovery selectors.

:::


**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   You have deployed a `ServiceMeshControlPlane` resource.
*   You are logged in as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you are logged in as a user with the `dedicated-admin` role.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the {{ SMProductName }} Operator.
1.  Click **Istio Service Mesh Control Plane**.
1.  Click the name of the control plane.
1.  Click **YAML**.
1.  Modify the YAML file so that the `spec.meshConfig` field of the `ServiceMeshControlPlane` resource includes the discovery selector. 

    :::note

    When configuring namespaces that the `Istiod` service can discover, exclude namespaces that might contain sensitive services that should not be exposed to the rest of the mesh.
    
    :::


    In the following example, the `Istiod` service discovers any namespace that is labeled `istio-discovery: enabled` or any namespace that has the name `bookinfo`, `httpbin` or `istio-system`:
    ```yaml
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata: 
      name: basic
    spec: 
      mode: ClusterWide
      meshConfig: 
        discoverySelectors:
        - matchLabels: 
            istio-discovery: enabled (1)
        - matchExpressions:
          - key: kubernetes.io/metadata.name (2)
            operator: In
            values:
            - bookinfo
            - httpbin
            - istio-system
    ```
    1.  Ensures that the mesh discovers namespaces that contain the label `istio-discovery: enabled`. 
    1.  Ensures that the mesh discovers namespaces `bookinfo`, `httpbin` and `istio-system`.

        If a namespace matches any of the discovery selectors, then the mesh discovers the namespace. The mesh excludes namespaces that do not match any of the discovery selectors.
1.  Save the file.