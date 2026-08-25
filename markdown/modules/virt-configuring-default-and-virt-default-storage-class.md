{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the default and virt-default storage classes {id="virt-configuring-default-and-virt-default-storage-class_{{ context }}"}

A storage class determines how persistent storage is provisioned for workloads. In {{ VirtProductName }}, the virt-default storage class takes precedence over the cluster default storage class and is used specifically for virtualization workloads. {._abstract}

Only one storage class should be set as virt-default or cluster default at a time. If multiple storage classes are marked as default, the virt-default storage class overrides the cluster default. To ensure consistent behavior, configure only one storage class as the default for virtualization workloads.


:::important

Boot sources are created using the default storage class. When the default storage class changes, old boot sources are automatically updated using the new default storage class. If your cluster does not have a default storage class, you must define one.

If boot source images were stored as volume snapshots and both the cluster default and virt-default storage class have been unset, the volume snapshots are cleaned up and new data volumes will be created. However the newly created data volumes will not start importing until a default storage class is set.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Patch the current virt-default or a cluster default storage class to false:
    1.  Identify all storage classes currently marked as virt-default by running the following command:
        ```terminal
        $ oc get sc -o json| jq '.items[].metadata|select(.annotations."storageclass.kubevirt.io/is-default-virt-class"=="true")|.name'
        ```
    1.  For each storage class returned, remove the virt-default annotation by running the following command:
        ```terminal
        $ oc patch storageclass <storage_class_name> -p '{"metadata": {"annotations": {"storageclass.kubevirt.io/is-default-virt-class": "false"}}}'
        ```
    1.  Identify all storage classes currently marked as cluster default by running the following command:
        ```terminal
        $ oc get sc -o json| jq '.items[].metadata|select(.annotations."storageclass.kubernetes.io/is-default-class"=="true")|.name'
        ```
    1.  For each storage class returned, remove the cluster default annotation by running the following command:
        ```terminal
        $ oc patch storageclass <storage_class_name> -p '{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "false"}}}'
        ```
1.  Set a new default storage class:
    1.  Assign the virt-default role to a storage class by running the following command:
        ```terminal
        $ oc patch storageclass <storage_class_name> -p '{"metadata": {"annotations": {"storageclass.kubevirt.io/is-default-virt-class": "true"}}}'
        ```
    1.  Alternatively, assign the cluster default role to a storage class by running the following command:
        ```terminal
        $ oc patch storageclass <storage_class_name> -p '{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "true"}}}'
        ```