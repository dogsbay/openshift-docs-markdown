{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify hosted cluster creation {id="nw-dpf-verifying-hosted-cluster_{{ context }}"}

After creating the `DPFHCPProvisioner` resource, you can monitor its status to verify that the hosted cluster is provisioned and becomes ready.
The provisioning process can take up to 30 minutes. {._abstract}

**Prerequisites**

*   You have created the `DPFHCPProvisioner` resource in the clusters namespace.

**Procedure**

1.  Monitor the `DPFHCPProvisioner` status:
    ```terminal
    $ oc get dpfhcpprovisioner -n ${CLUSTERS_NAMESPACE}
    ```
    ```terminal title="Example output"
    NAME         PHASE          READY   HOSTEDCLUSTER   AGE
    dpf-hosted   Provisioning   False   dpf-hosted      2m
    ```
1.  Wait for the `DPFHCPProvisioner` to reach the `Ready` phase:
    ```terminal
    $ oc wait dpfhcpprovisioner ${HOSTED_CLUSTER_NAME} -n ${CLUSTERS_NAMESPACE} \
        --for=jsonpath='{.status.phase}'=Ready --timeout=30m
    ```
    ```terminal title="Example output"
    dpfhcpprovisioner.provisioning.dpu.hcp.io/dpf-hosted condition met
    ```

**Verification**

*   Confirm that the `DPUCluster` is ready by entering the following command:
    ```terminal
    $ oc get dpucluster ${HOSTED_CLUSTER_NAME} -n dpf-operator-system
    ```

    A `Ready` status indicates that the Operator injected the hosted cluster kubeconfig into the `DPUCluster` resource and that the hosted cluster API is reachable, which is the prerequisite for DPU worker nodes to join
*   Confirm that the admin kubeconfig secret referenced by the `DPUCluster` was created in the `dpf-operator-system` namespace:
    ```terminal
    $ oc get secret ${HOSTED_CLUSTER_NAME}-admin-kubeconfig -n dpf-operator-system
    ```
    ```terminal title="Example output"
    NAME                          TYPE     DATA   AGE
    dpf-hosted-admin-kubeconfig   Opaque   1      10m
    ```