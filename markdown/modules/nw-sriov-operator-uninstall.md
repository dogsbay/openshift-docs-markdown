{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the SR-IOV Network Operator {id="nw-sriov-operator-uninstall_{{ context }}"}

You can remove the SR-IOV Network Operator from your cluster by uninstalling the Operator. This ensures that the Operator and its associated resources are deleted when you no longer need to manage SR-IOV network devices. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have the SR-IOV Network Operator installed.

**Procedure**

1.  Delete all SR-IOV custom resources (CRs):
    ```terminal
    $ oc delete sriovnetwork -n openshift-sriov-network-operator --all
    ```
    ```terminal
    $ oc delete sriovnetworknodepolicy -n openshift-sriov-network-operator --all
    ```
    ```terminal
    $ oc delete sriovibnetwork -n openshift-sriov-network-operator --all
    ```
    ```terminal
    $ oc delete sriovoperatorconfigs -n openshift-sriov-network-operator --all
    ```
1.  Follow the instructions in the "Deleting Operators from a cluster" section to remove the SR-IOV Network Operator from your cluster.
1.  Delete the SR-IOV custom resource definitions that remain in the cluster after the SR-IOV Network Operator is uninstalled:
    ```terminal
    $ oc delete crd sriovibnetworks.sriovnetwork.openshift.io
    ```
    ```terminal
    $ oc delete crd sriovnetworknodepolicies.sriovnetwork.openshift.io
    ```
    ```terminal
    $ oc delete crd sriovnetworknodestates.sriovnetwork.openshift.io
    ```
    ```terminal
    $ oc delete crd sriovnetworkpoolconfigs.sriovnetwork.openshift.io
    ```
    ```terminal
    $ oc delete crd sriovnetworks.sriovnetwork.openshift.io
    ```
    ```terminal
    $ oc delete crd sriovoperatorconfigs.sriovnetwork.openshift.io
    ```
1.  Delete the SR-IOV Network Operator namespace:
    ```terminal
    $ oc delete namespace openshift-sriov-network-operator
    ```