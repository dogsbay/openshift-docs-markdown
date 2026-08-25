{%- set _mod_docs_content_type = "REFERENCE" %}
# Excluding individual pods from a cluster-wide mesh by using the web console {id="ossm-excluding-individual-pods-from-cluster-wide-mesh-console_{{ context }}"}

A pod receives sidecar injection if it has the `sidecar.istio.io/inject: true` annotation applied, and the pod exists in a namespace that matches either the label selector or the members list defined in the `ServiceMeshMemberRoll` resource. 

If a pod does not have the `sidecar.istio.io/inject` annotation applied, it cannot receive sidecar injection.

**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   You have deployed a `ServiceMeshControlPlane` resource with the `mode: ClusterWide` annotation.
*   You are logged in as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you are logged in as a user with the `dedicated-admin` role.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Workloads** → **Deployments**.
1.  Click the name of the deployment.
1.  Click **YAML**.
1.  Modify the YAML file to deploy one application that receives sidecar injection and one that does not, as shown in the following example:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
    spec:
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          annotations:
            sidecar.istio.io/inject: 'true' (1)
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-without-sidecar
    spec:
      selector:
        matchLabels:
          app: nginx-without-sidecar 
      template:
        metadata:
          labels:
            app: nginx-without-sidecar (2)
        spec:
          containers:
          - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
    ```
    1.  This pod has the `sidecar.istio.io/inject` annotation applied, so it receives sidecar injection.
    1.  This pod does not have the annotation, so it does not receive sidecar injection.
1.  Save the file.