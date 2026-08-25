{%- set _mod_docs_content_type = "CONCEPT" %}
# About adding OLM-based Operators to a disconnected node {id="microshift-adding-OLM-Operators-to-disconnected-node_{{ context }}"}

You must mirror remote registries to a highly available container registry for Operators that are installed on a disconnected node. {._abstract}

By default, Operator Lifecycle Manager (OLM) requires full internet connectivity to access remote registries such as Red&#160;Hat-provided Operator catalogs. For a disconnected node, you must mirror remote registries to a highly available container registry.

The following steps are required to use OLM to install, manage, and lifecycle Operators in disconnected situations:

*   Include OLM in the container image list for your mirror registry.
*   Configure the system to use your mirror registry by updating your CRI-O configuration directly. `ImageContentSourcePolicy` is not supported in {{ microshift_short }}.
*   Add a `CatalogSource` object to the node so that the OLM catalog Operator can use the local catalog on the mirror registry.
*   Ensure that {{ microshift_short }} is installed to run in a disconnected capacity.
*   Ensure that the network settings are configured to run in disconnected mode.

After enabling OLM in a disconnected node, you can continue to use your internet-connected workstation to keep your local catalog sources updated as newer versions of Operators are released.