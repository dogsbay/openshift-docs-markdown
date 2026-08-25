{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring the advanced options for the Topology view {id="network-observability-configuring-options-topology_{{ context }}"}

Review the available advanced options in the **Topology** view to customize display settings, configure component grouping and layouts, and export the network graph as an image. {._abstract}

You can customize and export the view by using **Show advanced options**. The advanced options view has the following features:

*   **Find in view**: To search the required components in the view.
*   **Display options**: To configure the following options:
    *   **Edge labels**: To show the specified measurements as edge labels. The default is to show the **Average rate** in **Bytes**.
    *   **Scope**: To select the scope of components between which the network traffic flows. The default value is **Namespace**.
    *   **Groups**: To enhance the understanding of ownership by grouping the components. The default value is **None**.
    *   **Layout**: To select the layout of the graphical representation. The default value is **ColaNoForce**.
    *   **Show**: To select the details that need to be displayed. All the options are checked by default. The options available are: **Edges**, **Edges label**, and **Badges**.
    *   **Truncate labels**: To select the required width of the label from the drop-down list. The default value is **M**.
    *   **Collapse groups**: To expand or collapse the groups. The groups are expanded by default. This option is disabled if **Groups** has the value of **None**.

## Exporting the topology view {id="network-observability-cao-export-topology_{{ context }}"}
To export the view, click **Export topology view**. The view is downloaded in PNG format.