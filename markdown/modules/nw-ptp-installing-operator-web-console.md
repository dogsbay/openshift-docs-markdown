{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the PTP Operator by using the web console {id="install-ptp-operator-web-console_{{ context }}"}

As a cluster administrator, you can install the PTP Operator by using the web console. {._abstract}


:::note

If you are installing by using the CLI, you must create the namespace and Operator group before installing the Operator.
If you are installing by using the web console, the Operator Lifecycle Manager (OLM) automatically creates the namespace.

:::


**Procedure**

1.  Install the PTP Operator using the {{ product_title }} web console:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Type `ptp` in the **Filter by keyword** box to find the PTP Operator.
    1.  Click the **PTP Operator** tile, and then click **Install**.
    1.  On the **Install Operator** page, ensure that **A specific namespace on the cluster** is selected and the **Operator recommended Namespace** `openshift-ptp` is shown. Click **Install**.
    1.  Wait for the installation to complete and then click **View installed Operators**.
1.  Optional: Verify that the PTP Operator installed successfully:
    1.  Navigate to **Ecosystem** → **Installed Operators**.
    1.  Ensure that **PTP Operator** is listed in the **openshift-ptp** project with a **Status** of **Succeeded**.

        :::note

        During installation an Operator might display a **Failed** status.
        If the installation later succeeds with an **Succeeded** message, you can ignore the **Failed** message.
        
        :::



        If the Operator does not appear as installed, to troubleshoot further:
        *   Go to the **Ecosystem** → **Installed Operators** page and inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
        *   Go to the **Workloads** → **Pods** page and check the logs for pods in the `openshift-ptp` project.