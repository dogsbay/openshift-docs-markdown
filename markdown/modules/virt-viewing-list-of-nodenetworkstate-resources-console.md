{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the list of NodeNetworkState resources {id="virt-viewing-list-of-nodenetworkstate-resources-console_{{ context }}"}

As an administrator, you can use the {{ product_title }} web console to view the list of `NodeNetworkState` resources and network interfaces, and access network details. {._abstract}

**Procedure**

1.  Navigate to **Networking** → **Node Network Configuration**.
1.  Click the **List** icon.

    You can now view the list of `NodeNetworkState` resources and the corresponding interfaces that are created on the nodes.
    *   You can use **Filter** based on **Interface state**, **Interface type**, and **IP**, or the search bar based on criteria **Name** or **Label**, to narrow down the displayed `NodeNetworkState` resources.
    *   To access the detailed information about a `NodeNetworkState` resource, click the `NodeNetworkState` resource name listed in the **Name** column .
    *   To expand and view the **Network Details** section for the `NodeNetworkState` resource, click the greater than (**>**) symbol . Alternatively, you can click on each interface type under the **Network interface** column to view the network details.