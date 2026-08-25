{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ servicebinding_title }} using the web console {id="op-installing-sbo-operator-using-the-web-console_{{ context }}"}

You can install {{ servicebinding_title }} using the {{ product_title }} software catalog. When you install the {{ servicebinding_title }}, the custom resources (CRs) required for the service binding configuration are automatically installed along with the Operator.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Use the **Filter by keyword** box to search for `{{ servicebinding_title }}`{minja} in the catalog. Click the **{{ servicebinding_title }}** tile.
1.  Read the brief description about the Operator on the **{{ servicebinding_title }}** page. Click **Install**.
1.  On the **Install Operator** page:
    1.  Select **All namespaces on the cluster (default)** for the **Installation Mode**. This mode installs the Operator in the default `openshift-operators` namespace, which enables the Operator to watch and be made available to all namespaces in the cluster.
    1.  Select **Automatic** for the **Approval Strategy**. This ensures that the future upgrades to the Operator are handled automatically by the Operator Lifecycle Manager (OLM). If you select the **Manual** approval strategy, OLM creates an update request. As a cluster administrator, you must then manually approve the OLM update request to update the Operator to the new version.
    1.  Select an **Update Channel**.
        *   By default, the **stable** channel enables installation of the latest stable and supported release of the {{ servicebinding_title }}.
1.  Click **Install**.

    :::note

    The Operator is installed automatically into the `openshift-operators` namespace.
    
    :::

1.  On the **Installed Operator -- ready for use** pane, click **View Operator**. You will see the Operator listed on the **Installed Operators** page.
1.  Verify that the **Status** is set to **Succeeded**  to confirm successful installation of {{ servicebinding_title }}.