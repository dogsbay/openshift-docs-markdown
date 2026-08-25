{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster on OpenStack {id="hcp-deploy-openstack-create_{{ context }}"}

You can create a hosted cluster on {{ rh_openstack_first }} by using the `hcp` CLI. {._abstract}

**Prerequisites**

*   You completed all prerequisite steps in "Preparing to deploy hosted control planes".
*   You reviewed "Prerequisites for OpenStack".
*   You completed all steps in "Preparing the management cluster for etcd local storage".
*   You have access to the management cluster.
*   You have access to the {{ rh_openstack }} cloud.

**Procedure**

*   Create a hosted cluster by running the `hcp create` command. For example, for a cluster that takes advantage of the performant etcd configuration detailed in "Preparing the management cluster for etcd local storage", enter:
    ```terminal
    $ hcp create cluster openstack \
      --name my-hcp-cluster \
      --openstack-node-flavor m1.xlarge \
      --base-domain example.com \
      --pull-secret /path/to/pull-secret.json \
      --release-image quay.io/openshift-release-dev/ocp-release:4.22.0-x86_64 \
      --node-pool-replicas 3 \
      --etcd-storage-class lvms-etcd-class
    ```

    :::note

    Many options are available at cluster creation. For {{ rh_openstack }}-specific options, see "Options for creating a Hosted Control Planes cluster on OpenStack". For general options, see the `hcp` documentation.
    
    :::


**Verification**

1.  Verify that the hosted cluster is ready by running the following command on it:
    ```terminal
    $ oc -n clusters-<cluster_name> get pods
    ```
    where:


    `<cluster_name>`
    :   Specifies the name of the cluster.

    After several minutes, the output should show that the hosted control plane pods are running.
    ```terminal title="Example output"
    NAME                                                  READY   STATUS    RESTARTS   AGE
    capi-provider-5cc7b74f47-n5gkr                        1/1     Running   0          3m
    catalog-operator-5f799567b7-fd6jw                     2/2     Running   0          69s
    certified-operators-catalog-784b9899f9-mrp6p          1/1     Running   0          66s
    cluster-api-6bbc867966-l4dwl                          1/1     Running   0          66s
    ...
    ...
    ...
    redhat-operators-catalog-9d5fd4d44-z8qqk              1/1     Running   0
    ```
1.  To validate the etcd configuration of the cluster:
    1.  Validate the etcd persistent volume claim (PVC) by running the following command:
        ```terminal
        $ oc get pvc -A
        ```
    1.  Inside the {{ hcp }} etcd pod, confirm the mount path and device by running the following command:
        ```terminal
        $ df -h /var/lib
        ```

        :::note

        The {{ rh_openstack }} resources that the cluster API provider creates are tagged with the label `openshiftClusterID=<infraID>`.

        You can define additional tags for the resources as values in the `HostedCluster.Spec.Platform.OpenStack.Tags` field of a YAML manifest that you use to create the hosted cluster. After you scale up the node pool, the tags apply to resources.
        
        :::