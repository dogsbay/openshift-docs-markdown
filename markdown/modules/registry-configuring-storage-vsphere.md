{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring registry storage for VMware vSphere {id="registry-configuring-storage-vsphere_{{ context }}"}

As a cluster administrator, following installation you must configure your registry to use storage. {._abstract}

**Prerequisites**

*   Cluster administrator permissions.
*   A cluster on VMware vSphere.
*   Persistent storage provisioned for your cluster, such as {{ rh_storage_first }}.

    :::important

    {{ product_title }} supports `ReadWriteOnce` access for image registry storage when you have only one replica. `ReadWriteOnce` access also requires that the registry uses the `Recreate` rollout strategy. To deploy an image registry that supports high availability with two or more replicas, `ReadWriteMany` access is required.
    
    :::

*   Must have "100Gi" capacity.


:::important

Testing shows issues with using the NFS server on RHEL as storage backend for
core services. This includes the OpenShift Container Registry and Quay,
Prometheus for monitoring storage, and Elasticsearch for logging storage.
Therefore, using RHEL NFS to back PVs used by core services is not recommended.

Other NFS implementations on the marketplace might not have these issues.
Contact the individual NFS implementation vendor for more information on any
testing that was possibly completed against these {{ product_title }} core
components.

:::


**Procedure**

1.  Change the `spec.storage.pvc` field in the `configs.imageregistry/cluster` resource.

    :::note

    When you use shared storage, review your security settings to prevent outside access.
    
    :::

1.  Verify that you do not have a registry pod by running the following command:
    ```terminal
    $ oc get pod -n openshift-image-registry -l docker-registry=default
    ```
    ```terminal title="Example output"
    No resourses found in openshift-image-registry namespace
    ```

    :::note

    If you do have a registry pod in your output, you do not need to continue with this procedure.
    
    :::

1.  Check the registry configuration by running the following command:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io
    ```
    ```yaml title="Example output"
    storage:
      pvc:
        claim:
    ```

    Leave the `claim` field blank to allow the automatic creation of an `image-registry-storage` persistent volume claim (PVC). The PVC is generated based on the default storage class. However, be aware that the default storage class might provide ReadWriteOnce (RWO) volumes, such as a RADOS Block Device (RBD), which can cause issues when you replicate to more than one replica.
1.  Check the `clusteroperator` status by running the following command:
    ```terminal
    $ oc get clusteroperator image-registry
    ```
    ```terminal title="Example output"
    NAME             VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    image-registry   4.7       True        False         False      6h50m
    ```