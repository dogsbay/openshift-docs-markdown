{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DPUCluster custom resource {id="nw-dpf-creating-dpucluster_{{ context }}"}

The `DPUCluster` resource tells the DPF Operator about the hosted cluster where DPU services will run.
The DPF HCP Provisioner Operator automatically injects the kubeconfig into this resource after the hosted cluster is created. {._abstract}

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
      kubeconfig: ${HOSTED_CLUSTER_NAME}-admin-kubeconfig
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