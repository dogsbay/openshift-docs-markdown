---
title: Installing the web terminal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Installing the web terminal {id="installing-web-terminal"}

{%- set context = "installing-web-terminal" %}

You can install the web terminal by using the {{ web_terminal_op }} listed in the {{ product_title }} software catalog. When you install the {{ web_terminal_op }}, the custom resource definitions (CRDs) that are required for the command line configuration, such as the `DevWorkspace` CRD, are automatically installed. The web console creates the required resources when you open the web terminal. {._abstract}

## Prerequisites {id="prerequisites_installing-web-terminal"}

*   You are logged into the {{ product_title }} web console.
*   You have cluster administrator permissions.

## Procedure {id="installing-web-terminal-procedure"}

1.  In the **Administrator** perspective of the web console, navigate to **Ecosystem** → **Software Catalog**.
1.  Use the **Filter by keyword** box to search for the {{ web_terminal_op }} in the catalog, and then click the **Web Terminal** tile.
1.  Read the brief description about the Operator on the **Web Terminal**  page, and then click **Install**.
1.  On the **Install Operator** page, retain the default values for all fields.
    *   The **fast** option in the **Update Channel** menu enables installation of the latest release of the {{ web_terminal_op }}.
    *   The **All namespaces on the cluster** option in the **Installation Mode** menu  enables the Operator to watch and be available to all namespaces in the cluster.
    *   The **openshift-operators** option in the **Installed Namespace** menu installs the Operator in the default `openshift-operators` namespace.
    *   The **Automatic** option in the **Approval Strategy** menu ensures that the future upgrades to the Operator are handled automatically by the Operator Lifecycle Manager.
1.  Click **Install**.
1.  In the **Installed Operators** page, click the **View Operator** to verify that the Operator is listed on the **Installed Operators** page.

    :::note

    The {{ web_terminal_op }} installs the DevWorkspace Operator as a dependency.
    
    :::

1.  After the Operator is installed, refresh your page to see the command-line terminal icon (![title="web terminal icon"](/_assets/images/odc-wto-icon.png)) in the masthead of the console.