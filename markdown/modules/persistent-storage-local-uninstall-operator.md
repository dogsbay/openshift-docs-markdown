{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Local Storage Operator {id="local-storage-uninstall_{{ context }}"}

Safely uninstall the Local Storage Operator (LSO) when local storage persistent volumes (PVs) are no longer in use by removing all local volume resources, uninstalling the operator, deleting remaining PVs, and removing the project. {._abstract}


:::warning

Uninstalling the LSO while local storage PVs are still in use is not recommended. Although the PVs remain after removing the Operator, there might be indeterminate behavior if the Operator is uninstalled and reinstalled without removing the PVs and local storage resources.

:::


**Prerequisites**

*   Access to the {{ product_title }} web console.

**Procedure**

1.  Delete any local volume resources installed in the project, such as `localvolume`, `localvolumeset`, and `localvolumediscovery` by running the following commands:
    ```terminal
    $ oc delete localvolume --all --all-namespaces
    ```
    ```terminal
    $ oc delete localvolumeset --all --all-namespaces
    ```
    ```terminal
    $ oc delete localvolumediscovery --all --all-namespaces
    ```
1.  Uninstall the LSO from the {{ product_title }} web console.
    1.  Log in to the {{ product_title }} web console.
    1.  Go to **Ecosystem** → **Installed Operators**.
    1.  Type **Local Storage** into the filter box to locate the LSO.
    1.  Click the **Options** menu {{ kebab }} at the end of the LSO.
    1.  Click **Uninstall Operator**.
    1.  Click **Remove** in the window that appears.
1.  The PVs created by the LSO remain in the cluster until deleted. After these volumes are no longer in use, delete them by running the following command:
    ```terminal
    $ oc delete pv <pv-name>
    ```
1.  Delete the `openshift-local-storage` project by running the following command:
    ```terminal
    $ oc delete project openshift-local-storage
    ```