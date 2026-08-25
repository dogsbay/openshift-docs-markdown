{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift Update Service Operator by using the web console {id="update-service-install-web-console_{{ context }}"}

You can use the web console to install the OpenShift Update Service Operator. {._abstract}

**Procedure**

1.  In the web console, click **Ecosystem** → **Software Catalog**.

    :::note

    Enter `Update Service` into the **Filter by keyword...** field to find the Operator faster.
    
    :::

1.  Choose **OpenShift Update Service** from the list of available Operators, and click **Install**.
    1.  Select an **Update channel**.
    1.  Select a **Version**.
    1.  Select **A specific namespace on the cluster** under **Installation Mode**.
    1.  Select a namespace for **Installed Namespace** or accept the recommended namespace `openshift-update-service`.
    1.  Select an **Update approval** strategy:
        *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a cluster administrator to approve the Operator update.
    1.  Click **Install**.
1.  Go to **Ecosystem** → **Installed Operators** and verify that the OpenShift Update Service Operator is installed.
1.  Ensure that **OpenShift Update Service** is listed in the correct namespace with a **Status** of **Succeeded**.