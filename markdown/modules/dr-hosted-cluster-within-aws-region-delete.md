{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a hosted cluster from your source management cluster {id="dr-hosted-cluster-within-aws-region-delete_{{ context }}"}

After you back up your hosted cluster and restore it to your destination management cluster, you shut down and delete the hosted cluster on your source management cluster. {._abstract}

**Prerequisites**

*   You backed up your data and restored it to your source management cluster.


:::tip

Ensure that the `kubeconfig` file of the destination management cluster is placed as it is set in the `KUBECONFIG` variable or, if you use the script, in the `MGMT_KUBECONFIG` variable. Use `export KUBECONFIG=<Kubeconfig FilePath>` or, if you use the script, use `export KUBECONFIG=${{ MGMT_KUBECONFIG }}`.

:::


**Procedure**

1.  Scale the `deployment` and `statefulset` objects by entering these commands:

    :::important

    Do not scale the stateful set if the value of its `spec.persistentVolumeClaimRetentionPolicy.whenScaled` field is set to `Delete`, because this could lead to a loss of data.

    As a workaround, update the value of the `spec.persistentVolumeClaimRetentionPolicy.whenScaled` field to `Retain`. Ensure that no controllers exist that reconcile the stateful set and would return the value back to `Delete`, which could lead to a loss of data.
    
    :::

    ```terminal
    $ export KUBECONFIG=${MGMT_KUBECONFIG}
    ```
    ```terminal title="Scale down deployment commands"
    $ oc scale deployment -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} --replicas=0 --all
    ```
    ```terminal
    $ oc scale statefulset.apps -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} --replicas=0 --all
    ```
    ```terminal
    $ sleep 15
    ```
1.  Delete the `NodePool` objects by entering these commands:
    ```terminal
    NODEPOOLS=$(oc get nodepools -n ${HC_CLUSTER_NS} -o=jsonpath='{.items[?(@.spec.clusterName=="'${HC_CLUSTER_NAME}'")].metadata.name}')
    if [[ ! -z "${NODEPOOLS}" ]];then
        oc patch -n "${HC_CLUSTER_NS}" nodepool ${NODEPOOLS} --type=json --patch='[ { "op":"remove", "path": "/metadata/finalizers" }]'
        oc delete np -n ${HC_CLUSTER_NS} ${NODEPOOLS}
    fi
    ```
1.  Delete the `machine` and `machineset` objects by entering these commands:
    ```terminal
    # Machines
    for m in $(oc get machines -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} -o name); do
        oc patch -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} ${m} --type=json --patch='[ { "op":"remove", "path": "/metadata/finalizers" }]' || true
        oc delete -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} ${m} || true
    done
    ```
    ```terminal
    $ oc delete machineset -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} --all || true
    ```
1.  Delete the cluster object by entering these commands:
    ```terminal
    $ C_NAME=$(oc get cluster -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} -o name)
    ```
    ```terminal
    $ oc patch -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} ${C_NAME} --type=json --patch='[ { "op":"remove", "path": "/metadata/finalizers" }]'
    ```
    ```terminal
    $ oc delete cluster.cluster.x-k8s.io -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} --all
    ```
1.  Delete the AWS machines (Kubernetes objects) by entering these commands. Do not worry about deleting the real AWS machines. The cloud instances will not be affected.
    ```terminal
    for m in $(oc get awsmachine.infrastructure.cluster.x-k8s.io -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} -o name)
    do
        oc patch -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} ${m} --type=json --patch='[ { "op":"remove", "path": "/metadata/finalizers" }]' || true
        oc delete -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} ${m} || true
    done
    ```
1.  Delete the `HostedControlPlane` and `ControlPlane` HC namespace objects by entering these commands:
    ```terminal title="Delete HostedControlPlane and ControlPlane HC NS commands"
    $ oc patch -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} hostedcontrolplane.hypershift.openshift.io ${HC_CLUSTER_NAME} --type=json --patch='[ { "op":"remove", "path": "/metadata/finalizers" }]'
    ```
    ```terminal
    $ oc delete hostedcontrolplane.hypershift.openshift.io -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} --all
    ```
    ```terminal
    $ oc delete ns ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME} || true
    ```
1.  Delete the `HostedCluster` and HC namespace objects by entering these commands:
    ```terminal title="Delete HC and HC Namespace commands"
    $ oc -n ${HC_CLUSTER_NS} patch hostedclusters ${HC_CLUSTER_NAME} -p '{"metadata":{"finalizers":null}}' --type merge || true
    ```
    ```terminal
    $ oc delete hc -n ${HC_CLUSTER_NS} ${HC_CLUSTER_NAME}  || true
    ```
    ```terminal
    $ oc delete ns ${HC_CLUSTER_NS} || true
    ```

**Verification**

*   To verify that everything works, enter these commands:
    ```terminal title="Validations commands"
    $ export KUBECONFIG=${MGMT2_KUBECONFIG}
    ```
    ```terminal
    $ oc get hc -n ${HC_CLUSTER_NS}
    ```
    ```terminal
    $ oc get np -n ${HC_CLUSTER_NS}
    ```
    ```terminal
    $ oc get pod -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME}
    ```
    ```terminal
    $ oc get machines -n ${HC_CLUSTER_NS}-${HC_CLUSTER_NAME}
    ```
    ```terminal title="Commands for inside the HostedCluster"
    $ export KUBECONFIG=${HC_KUBECONFIG}
    ```
    ```terminal
    $ oc get clusterversion
    ```
    ```terminal
    $ oc get nodes
    ```

**Next steps**

Delete the OVN pods in the hosted cluster so that you can connect to the new OVN control plane that runs in the new management cluster:

1.  Load the `KUBECONFIG` environment variable with the hosted cluster’s `kubeconfig` path.
1.  Enter this command:
    ```terminal
    $ oc delete pod -n openshift-ovn-kubernetes --all
    ```