{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Windows Machine Config Operator using the web console {id="installing-wmco-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to install the Windows Machine Config Operator (WMCO). {._abstract}


:::note

Dual NIC is not supported on WMCO-managed Windows instances.

:::


**Procedure**

1.  From the **Administrator** perspective in the {{ product_title }} web console, navigate to the **Ecosystem** -> **Software Catalog** page.
1.  Use the **Filter by keyword** box to search for `Windows Machine Config Operator` in the catalog. Click the **Windows Machine Config Operator** tile.
1.  Review the information about the Operator and click **Install**.
1.  On the **Install Operator** page:
    1.  Select the **stable** channel as the **Update Channel**. The **stable** channel enables the latest stable release of the WMCO to be installed.
    1.  The **Installation Mode** is preconfigured because the WMCO must be available in a single namespace only.
    1.  Choose the **Installed Namespace** for the WMCO. The default Operator recommended namespace is `openshift-windows-machine-config-operator`.
    1.  Click the **Enable Operator recommended cluster monitoring on the Namespace** checkbox to enable cluster monitoring for the WMCO.
    1.  Select an **Approval Strategy**.
        *   The **Automatic** strategy allows Operator Lifecycle Manager (OLM) to automatically update the Operator when a new version is available.
        *   The **Manual** strategy requires a user with appropriate credentials to approve the Operator update.
1.  Click **Install**. The WMCO is now listed on the **Installed Operators** page.

    :::note

    The WMCO is installed automatically into the namespace you defined, like `openshift-windows-machine-config-operator`.
    
    :::

1.  Verify that the **Status** shows **Succeeded** to confirm successful installation of the WMCO.