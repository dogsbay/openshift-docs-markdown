{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data about your hosted control planes cluster for the PPC {id="gathering-data-about-your-hosted-cluster-using-must-gather_{{ context }}"}

The Performance Profile Creator (PPC) tool requires `must-gather` data. As a cluster administrator, run the `must-gather` command to capture information about your cluster. {._abstract}

**Prerequisites**

*   You have `cluster-admin` role access to the management cluster.
*   You installed the {{ oc_first }}.

**Procedure**

1.  Export the management cluster `kubeconfig` file by running the following command:
    ```terminal
    $ export MGMT_KUBECONFIG=<path_to_mgmt_kubeconfig>
    ```
1.  List all node pools across all namespaces by running the following command:
    ```terminal
    $ oc --kubeconfig="$MGMT_KUBECONFIG" get np -A
    ```
    ```terminal title="Example output"
    NAMESPACE   NAME                     CLUSTER       DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
    clusters    democluster-us-east-1a   democluster   1               1               False         False        4.17.0    False             True                          
    ```
    *   The output shows the namespace `clusters` in the management cluster where the `NodePool` resource is defined.
    *   The name of the `NodePool` resource, for example `democluster-us-east-1a`.
    *   The `HostedCluster` this `NodePool` belongs to. For example, `democluster`.
1.  On the management cluster, run the following command to list available secrets:
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
    $ oc get secret <secret_name> -n <cluster_namespace> -o jsonpath='{.data.kubeconfig}' | base64 -d > hosted-cluster-kubeconfig
    ```
    ```terminal title="Example"
    $ oc get secret democluster-admin-kubeconfig -n clusters -o jsonpath='{.data.kubeconfig}' | base64 -d > hosted-cluster-kubeconfig
    ```
1.  To create a `must-gather` bundle for the hosted cluster, open a separate terminal window and run the following commands:
    1.  Export the hosted cluster `kubeconfig` file:
        ```terminal
        $ export HC_KUBECONFIG=<path_to_hosted_cluster_kubeconfig>
        ```
        ```terminal title="Example"
        $ export HC_KUBECONFIG=~/hostedcpkube/hosted-cluster-kubeconfig
        ```
    1.  Navigate to the directory where you want to store the `must-gather` data.
    1.  Gather the troubleshooting data for your hosted cluster:
        ```terminal
        $ oc --kubeconfig="$HC_KUBECONFIG" adm must-gather
        ```
    1.  Create a compressed file from the `must-gather` directory that was just created in your working directory. For example, on a computer that uses a Linux operating system, run the following command:
        ```terminal
        $ tar -czvf must-gather.tar.gz must-gather.local.1203869488012141147
        ```