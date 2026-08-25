{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying cluster compatibility {id="multi-architecture-verifying-cluster-compatibility_{{ context }}"}

Before you can start adding compute nodes of different architectures to your cluster, you must verify that your cluster is multi-architecture compatible. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   {{ ibm_power_title }} only: Ensure that you meet the following prerequisites:
    *   When using multiple architectures, hosts for {{ product_title }} nodes must share the same storage layer. If they do not have the same storage layer, use a storage provider such as `nfs-provisioner`.
    *   You should limit the number of network hops between the compute and control plane as much as possible.

**Procedure**

1.  Log in to the {{ oc_first }}.
1.  You can check that your cluster uses the architecture payload by running the following command:
    ```terminal
    $ oc adm release info -o jsonpath="{ .metadata.metadata}"
    ```

**Verification**

*   If you see the following output, your cluster is using the multi-architecture payload:
    ```terminal
    {
     "release.openshift.io/architecture": "multi",
     "url": "https://access.redhat.com/errata/<errata_version>"
    }
    ```

    You can then begin adding multi-arch compute nodes to your cluster.
*   If you see the following output, your cluster is not using the multi-architecture payload:
    ```terminal
    {
     "url": "https://access.redhat.com/errata/<errata_version>"
    }
    ```

    :::important

    To migrate your cluster so the cluster supports multi-architecture compute machines, see "Migrating to a cluster with multi-architecture compute machines".
    
    :::