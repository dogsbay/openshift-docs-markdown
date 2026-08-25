{%- set _mod_docs_content_type = "PROCEDURE" %}
# WMCO Control Plane Only update by using the CLI {id="wmco-upgrades-eus-using-cli_{{ context }}"}

You can use the {{ oc_first }} to perform a Control Plane Only update of the Windows Machine Config Operator (WMCO). {._abstract}

**Prerequisites**

*   The cluster must be running on a supported EUS version of {{ product_title }}.
*   All Windows nodes must be in a healthy state.
*   All Windows nodes must be running on the same version of the WMCO.
*   All the of the prerequisites of the Control Plane Only update are met, as described in "Performing a Control Plane Only update."

**Procedure**

1.  Uninstall the WMCO Operator from the cluster by following the steps in "Deleting Operators from a cluster using the CLI."

    :::important

    Delete the Operator only. Do not delete the Windows namespace or any Windows workloads.
    
    :::

1.  Update {{ product_title }} by following the steps in "Performing a Control Plane Only update."
1.  Install the new WMCO version by following the steps in "Installing the Windows Machine Config Operator using the CLI."

**Verification**

*   On the Verify that the **Status** shows **Succeeded** to confirm successful installation of the WMCO.