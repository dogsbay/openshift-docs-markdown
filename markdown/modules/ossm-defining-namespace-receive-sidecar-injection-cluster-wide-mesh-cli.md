{%- set _mod_docs_content_type = "PROCEDURE" %}
# Defining which namespaces receive sidecar injection in a cluster-wide mesh by using the CLI {id="ossm-defining-namespace-receive-sidecar-injection-cluster-wide-mesh-cli_{{ context }}"}

By default, the {{ SMProductName }} Operator uses member selectors to identify which namespaces receive sidecar injection. Namespaces that do not match the `istio-injection=enabled` label as defined in the `ServiceMeshMemberRoll` resource do not receive sidecar injection.


:::note

Using discovery selectors to determine which namespaces the mesh can discover has no effect on sidecar injection. Discovering namespaces and configuring sidecar injection are separate operations.

:::


**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   You have deployed a `ServiceMeshControlPlanae` resource with the `mode: ClusterWide` annotation.
*   You are logged in as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you are logged in as a user with the `dedicated-admin` role.

**Procedure**

1.  Log in to the {{ product_title }} CLI.
1.  Edit the `ServiceMeshMemberRoll` resource.
    ```terminal
    $ oc edit smmr -n <controlplane-namespace>
    ```
1.  Modify the `spec.memberSelectors` field in the `ServiceMeshMemberRoll` resource by adding a member selector that matches the `inject` label. The following example uses `istio-injection: enabled`:
    ```yaml
    apiVersion: maistra.io/v1
    kind: ServiceMeshMemberRoll
    metadata: 
      name: default
    spec: 
      memberSelectors: 
      - matchLabels: 
          istio-injection: enabled (1)
    ```
    1.  Ensures that the namespace receives sidecar injection. 
1.  Save the file and exit the editor.