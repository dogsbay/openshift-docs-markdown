{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ support_log_gather }} by using the web console {id="support-log-gather-install-console_{{ context }}"}

You can use the web console to install the {{ support_log_gather }}. {._abstract}

{%- set FeatureName = "Support Log Gather" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** -> **Software Catalog**.
1.  In the filter box, enter **{{ support_log_gather }}**.
1.  Select **{{ support_log_gather }}**.
1.  From **Version** list, select the {{ support_log_gather }} version, and click **Install**.
1.  On the **Install Operator** page, configure the installation settings:
    1.  Choose the **Installed Namespace** for the Operator.

        The default Operator namespace is `must-gather-operator`. The `must-gather-operator` namespace is created automatically if it does not exist.
    1.  Select an **Update approval** strategy:
        *   Select ***Automatic*** to have the Operator Lifecycle Manager (OLM) update the Operator automatically when a newer version is available.
        *   Select ***Manual*** if Operator updates must be approved by a user with appropriate credentials.
    1.  Click **Install**.

**Verification**

1.  Verify that the Operator is installed successfully:
    1.  Navigate to **Ecosystem** -> **Software Catalog**.
    1.  Verify that **{{ support_log_gather }}** is listed with a **Status** of **Succeeded** in the `must-gather-operator` namespace.
1.  Verify that {{ support_log_gather }} pods are running:
    1.  Navigate to **Workloads** -> **Pods**
    1.  Verify that the status of the {{ support_log_gather }} pods is **Running**.

        You can use the {{ support_log_gather }} only after the pods are up and running.