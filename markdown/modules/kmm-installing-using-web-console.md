{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Kernel Module Management Operator using the web console {id="kmm-install-using-web-console_{{ context }}"}

To install the Kernel Module Management (KMM)Operator on {{ product_title }}, you can use the web console **Software Catalog** to deploy it into the `openshift-kmm` namespace. {._abstract}

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Install the Kernel Module Management Operator:
    1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
    1.  Select **Kernel Module Management Operator** from the list of available Operators, and then click **Install**.
    1.  From the **Installed Namespace** list, select the `openshift-kmm` namespace.
    1.  Click **Install**.

**Verification**

To verify that KMM Operator installed successfully:

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Ensure that **Kernel Module Management Operator** is listed in the **openshift-kmm** project with a **Status** of **InstallSucceeded**.

    :::note

    During installation, an Operator might display a **Failed** status. If the installation later succeeds with an **InstallSucceeded** message, you can ignore the **Failed** message.
    
    :::


**Troubleshooting**

1.  To troubleshoot issues with Operator installation:
    1.  Navigate to the **Ecosystem** → **Installed Operators** page and inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
    1.  Navigate to the **Workloads** → **Pods** page and check the logs for pods in the `openshift-kmm` project.