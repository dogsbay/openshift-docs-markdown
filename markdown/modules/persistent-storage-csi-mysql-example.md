{%- set _mod_docs_content_type = "PROCEDURE" %}
# Example using the CSI driver {id="csi-example-usage_{{ context }}"}

Deploy a MySQL application using Container Storage Interface (CSI) persistent storage to demonstrate dynamic volume provisioning. This example shows CSI drivers automatically creating and binding persistent volume claims to dynamically provisioned volumes without manual intervention. {._abstract}

**Prerequisites**

*   The CSI driver has been deployed.
*   A storage class has been created for dynamic provisioning.

**Procedure**

*   Create the MySQL template:
    ```terminal
    # oc new-app mysql-persistent
    ```
    ```terminal title="Example output"
    --> Deploying template "openshift/mysql-persistent" to project default
    ...
    ```
    ```terminal
    # oc get pvc
    ```
    ```terminal title="Example output"
    NAME           STATUS         VOLUME                                   CAPACITY ACCESS MODES   STORAGECLASS   AGE
    mysql          Bound          kubernetes-dynamic-pv-3271ffcb4e1811e8   1Gi      RWO            gp3-csi        3s
    ```