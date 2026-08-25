{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ lws_operator }} {id="lws-install-operator_{{ context }}"}

You can install the {{ lws_operator }} through the {{ product_title }} web console to begin managing distributed AI workloads. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   You have installed the {{ cert_manager_operator }}.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Verify that the {{ cert_manager_operator }} is installed.
1.  Install the {{ lws_operator }}.
    1.  Navigate to **Ecosystem** → **Software Catalog**.
    1.  Enter **{{ lws_operator }}** into the filter box.
    1.  Select the **{{ lws_operator }}** and click **Install**.
    1.  On the **Install Operator** page:
        1.  The **Update channel** is set to **stable-v1.0**, which installs the latest stable release of {{ lws_operator }} 1.0.
        1.  Under **Installation mode**, select **A specific namespace on the cluster**.
        1.  Under **Installed Namespace**, select **Operator recommended Namespace: openshift-lws-operator**.
        1.  Under **Update approval**, select one of the following update strategies:
            *   The **Automatic** strategy allows {{ olm_first }} to automatically update the Operator when a new version is available.
            *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
        1.  Click **Install**.
1.  Create the custom resource (CR) for the {{ lws_operator }}:
    1.  Navigate to **Installed Operators** → **{{ lws_operator }}**.
    1.  Under **Provided APIs**, click **Create instance** in the **LeaderWorkerSetOperator** pane.
    1.  Click **Create**.