{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the NUMAResourcesOperator custom resource for {{ hcp }} {id="cnf-creating-nrop-cr-hosted-control-plane_{{ context }}"}

After you install the NUMA Resources Operator, create the `NUMAResourcesOperator` custom resource (CR). The CR instructs the NUMA Resources Operator to install all the cluster infrastructure that is needed to support the NUMA-aware scheduler on {{ hcp }}, including daemon sets and APIs. {._abstract}

{%- set FeatureName = "Creating the NUMAResourcesOperator custom resource for {{ hcp }}" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   Installed the {{ oc_first }}.
*   Logged in as a user with `cluster-admin` privileges.
*   Installed the NUMA Resources Operator.

**Procedure**

1.  Export the management cluster kubeconfig file by running the following command:
    ```terminal
    $ export KUBECONFIG=<path-to-management-cluster-kubeconfig>
    ```
1.  Find the `node-pool-name` for your cluster by running the following command:
    ```terminal
    $ oc --kubeconfig="$MGMT_KUBECONFIG" get np -A
    ```
    ```terminal title="Example output"
    NAMESPACE   NAME                     CLUSTER       DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
    clusters    democluster-us-east-1a   democluster   1               1               False         False        4.22.0    False             False
    ```

    The `node-pool-name` is the `NAME` field in the output. In this example, the `node-pool-name` is `democluster-us-east-1a`.
1.  Create a YAML file named `nrop-hcp.yaml` with at least the following content:
    ```yaml
    apiVersion: nodetopology.openshift.io/v1
    kind: NUMAResourcesOperator
    metadata:
      name: numaresourcesoperator
    spec:
      nodeGroups:
      - poolName: democluster-us-east-1a
    # ...
    ```
    *   `spec.nodeGroups.poolName`: Specifies the `poolName`. The example shows the `node-pool-name` pool name that was retrieved from a previous step.
1.  On the management cluster, run the following command to list the available secrets:
    ```terminal
    $ oc get secrets -n clusters
    ```
    ```terminal title="Example output"
    NAME                              TYPE                      DATA   AGE
    builder-dockercfg-25qpp           kubernetes.io/dockercfg   1      128m
    default-dockercfg-mkvlz           kubernetes.io/dockercfg   1      128m
    democluster-admin-kubeconfig      Opaque                    1      127m
    democluster-etcd-encryption-key   Opaque                    1      128m
    democluster-kubeadmin-password    Opaque                    1      126m
    democluster-pull-secret           Opaque                    1      128m
    deployer-dockercfg-8lfpd          kubernetes.io/dockercfg   1      128m
    ```
1.  Extract the `kubeconfig` file for the hosted cluster by running the following command:
    ```terminal
    $ oc get secret <SECRET_NAME> -n clusters -o jsonpath='{.data.kubeconfig}' | base64 -d > hosted-cluster-kubeconfig
    ```
    ```terminal title="Example"
    $ oc get secret democluster-admin-kubeconfig -n clusters -o jsonpath='{.data.kubeconfig}' | base64 -d > hosted-cluster-kubeconfig
    ```
1.  Export the hosted cluster `kubeconfig` file by running the following command:
    ```terminal
    $ export HC_KUBECONFIG=<path_to_hosted-cluster-kubeconfig>
    ```
1.  Create the `NUMAResourcesOperator` CR by running the following command on the hosted cluster:
    ```terminal
    $ oc create -f nrop-hcp.yaml
    ```

**Verification**

1.  Verify that the NUMA Resources Operator deployed successfully by running the following command:
    ```terminal
    $ oc get numaresourcesoperators.nodetopology.openshift.io
    ```
    ```terminal title="Example output"
    NAME                    AGE
    numaresourcesoperator   27s
    ```
1.  After a few minutes, run the following command to verify that the required resources deployed successfully:
    ```terminal
    $ oc get all -n openshift-numaresources
    ```
    ```terminal title="Example output"
    NAME                                                    READY   STATUS    RESTARTS   AGE
    pod/numaresources-controller-manager-7d9d84c58d-qk2mr   1/1     Running   0          12m
    pod/numaresourcesoperator-democluster-7d96r             2/2     Running   0          97s
    pod/numaresourcesoperator-democluster-crsht             2/2     Running   0          97s
    pod/numaresourcesoperator-democluster-jp9mw             2/2     Running   0          97s
    ```