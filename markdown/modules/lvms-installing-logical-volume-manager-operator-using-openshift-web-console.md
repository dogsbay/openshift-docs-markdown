{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ lvms }} by using the web console {id="lvms-installing-lvms-with-web-console_{{ context }}"}

Install {{ lvms }} from the {{ product_title }} web console to dynamically provision local storage on clusters with limited resources. {._abstract}


:::note

The default namespace for the {{ lvms }} Operator is `openshift-lvm-storage`.

:::


**Prerequisites**

*   You have access to the cluster.
*   You have access to {{ product_title }} with `cluster-admin` and Operator installation permissions.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** -> **Software Catalog**.
1.  Click **LVM Storage** on the software catalog page.
1.  Set the following options on the **Operator Installation** page:
    1.  **Update Channel** as **stable-{{ product_version }}**.
    1.  **Installation Mode** as **A specific namespace on the cluster**.
    1.  **Installed Namespace** as **Operator recommended namespace openshift-storage**.
       If the `openshift-lvm-storage` namespace does not exist, it is created during the operator installation.
    1.  **Update approval** as **Automatic** or **Manual**.

        :::note

        If you select **Automatic** updates, the Operator Lifecycle Manager (OLM) automatically updates the running instance of {{ lvms }} without any intervention.

        If you select **Manual** updates, the OLM creates an update request.
        As a cluster administrator, you must manually approve the update request to update {{ lvms }} to a newer version.
        
        :::

1.  Optional: Select the **Enable Operator recommended cluster monitoring on this Namespace** checkbox.
1.  Click **Install**.

**Verification**

*   Verify that {{ lvms }} shows a green tick, indicating successful installation.