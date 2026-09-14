{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPUCluster custom resource {id="nw-dpf-creating-dpucluster_{{ context }}"}

The `DPUCluster` resource tells the DPF Operator about the hosted cluster where DPU services will run. {._abstract}

Do not set the `spec.kubeconfig` field. After you create the hosted cluster, the DPF HCP Provisioner Operator automatically creates the admin kubeconfig secret in the `dpf-operator-system` namespace and sets the `spec.kubeconfig` field of this resource to reference it.

**Prerequisites**

*   You have set the environment variables described in "Hosted cluster provisioning environment variables".
*   You have installed the DPF Operator.

**Procedure**

1.  Create a file named `dpucluster.yaml` with the following content:
    ```yaml
    apiVersion: provisioning.dpu.nvidia.com/v1alpha1
    kind: DPUCluster
    metadata:
      name: $HOSTED_CLUSTER_NAME
      namespace: dpf-operator-system
    spec:
      type: static
      maxNodes: 10
    ```
1.  Apply the resource with variable substitution:
    ```terminal
    $ envsubst < dpucluster.yaml | oc apply -f -
    ```

**Verification**

*   Verify that the `DPUCluster` resource was created:
    ```terminal
    $ oc get dpucluster -n dpf-operator-system
    ```