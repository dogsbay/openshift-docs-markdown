{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the eBPF Manager Operator using the web console {id="nw-bpfman-operator-installing-console_{{ context }}"}

To manage eBPF programs across your cluster nodes, you can install the eBPF Manager Operator by using the {{ product_title }} web console. You can use the eBPF Manager Operator to enable node-level networking and observability tools through the OperatorHub interface. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have an account with administrator privileges.

**Procedure**

1.  Install the eBPF Manager Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Select **eBPF Manager Operator** from the list of available Operators, and if prompted to **Show community Operator**, click **Continue**.
    1.  Click **Install**.
    1.  On the **Install Operator** page, under **Installed Namespace**, select **Operator recommended Namespace**.
    1.  Click **Install**.
1.  Verify that the eBPF Manager Operator is installed successfully:
    1.  Navigate to the **Ecosystem** → **Installed Operators** page.
    1.  Ensure that **eBPF Manager Operator** is listed in the **openshift-ingress-node-firewall** project with a **Status** of **InstallSucceeded**.

        :::note

        During installation an Operator might display a **Failed** status.
        If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
        
        :::


        If the Operator does not have a **Status** of **InstallSucceeded**, troubleshoot using the following steps:
        *   Inspect the **Operator Subscriptions** and **Install Plans** tabs for any failures or errors under **Status**.
        *   Navigate to the **Workloads** → **Pods** page and check the logs for pods in the `bpfman` project.