{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the web console to install the SR-IOV Network Operator {id="nw-sriov-installing-operator-web-console_{{ context }}"}

You can use the web console to install the SR-IOV Network Operator. By using the web console, you can deploy the Operator and manage SR-IOV network devices and attachments directly from a graphical interface without having to use the CLI. {._abstract}

**Prerequisites**

*   You have an account with `cluster-admin` privileges.
*   You installed a cluster on bare-metal hardware, and you ensured that cluster nodes have hardware that supports SR-IOV.

**Procedure**

1.  Install the SR-IOV Network Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Select **SR-IOV Network Operator** from the list of available Operators, and then click **Install**.
    1.  On the **Install Operator** page, under **Installed Namespace**, select **Operator recommended Namespace**.
    1.  Click **Install**.

**Verification**

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Ensure that **SR-IOV Network Operator** is listed in the **openshift-sriov-network-operator** project with a **Status** of **InstallSucceeded**.

    :::note

    During installation an Operator might display a **Failed** status. If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
    
    :::

1.  If the Operator does not show as installed, complete any of the following steps to troubleshoot the issue:
    *   Inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
    *   Navigate to the **Workloads** → **Pods** page and check the logs for pods in the `openshift-sriov-network-operator` project.
    *   Check the namespace of the YAML file. If the annotation is missing, you can add the annotation `workload.openshift.io/allowed=management` to the Operator namespace with the following command:
        ```terminal
        $ oc annotate ns/openshift-sriov-network-operator workload.openshift.io/allowed=management
        ```

        :::note

        For {{ sno }} clusters, the annotation `workload.openshift.io/allowed=management` is required for the namespace.
        
        :::