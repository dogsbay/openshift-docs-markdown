{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting {{ ztp }} by validating the installation CRs {id="ztp-troubleshooting-ztp-gitops-installation-crs_{{ context }}"}

The ArgoCD pipeline uses the `ClusterInstance` and `PolicyGenerator` or `PolicyGentemplate` custom resources (CRs) to generate the cluster configuration CRs and {{ rh_rhacm_first }} policies. Use the following steps to troubleshoot issues that might occur during this process. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Check that the installation CRs were created by using the following command:
    ```terminal
    $ oc get AgentClusterInstall -n <cluster_name>
    ```

    If no object is returned, use the following steps to troubleshoot the ArgoCD pipeline flow from `ClusterInstance` files to the installation CRs.
1.  Verify that the `ManagedCluster` CR was generated using the `ClusterInstance` CR on the hub cluster:
    ```terminal
    $ oc get managedcluster
    ```
1.  If the `ManagedCluster` is missing, check if the `clusters` application failed to synchronize the files from the Git repository to the hub cluster:
    ```terminal
    $ oc get applications.argoproj.io -n openshift-gitops clusters -o yaml
    ```