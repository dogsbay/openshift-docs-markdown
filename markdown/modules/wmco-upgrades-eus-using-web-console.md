{%- set _mod_docs_content_type = "PROCEDURE" %}
# WMCO Control Plane Only update by using the web console {id="wmco-upgrades-eus-using-web-console_{{ context }}"}

You can use the {{ product_title }} web console to perform a Control Plane Only update of the Windows Machine Config Operator (WMCO). {._abstract}

**Prerequisites**

*   The cluster must be running on a supported EUS version of {{ product_title }}.
*   All Windows nodes must be in a healthy state.
*   All Windows nodes must be running on the same version of the WMCO.
*   All the of the prerequisites of the Control Plane Only update are met, as described in "Performing a Control Plane Only update."

**Procedure**

1.  Uninstall WMCO operator by using the following the steps:

    :::important

    Delete the Operator only. Do not delete the Windows namespace or any Windows workloads.
    
    :::

    1.  Log in to the {{ product_title }} web console.
    1.  Navigate to **Ecosystem** → **Software Catalog**.
    1.  Use the **Filter by keyword** box to search for `Red Hat Windows Machine Config Operator`.
    1.  Click the **Red Hat Windows Machine Config Operator** tile. The Operator tile indicates it is installed.
    1.  In the **Windows Machine Config Operator** descriptor page, click **Uninstall**.
1.  Update {{ product_title }} by following the steps in "Performing a Control Plane Only update."
1.  Install the new WMCO version by following the steps in "Installing the Windows Machine Config Operator using the web console."