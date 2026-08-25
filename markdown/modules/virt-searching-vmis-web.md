{%- set _mod_docs_content_type = "PROCEDURE" %}
# Searching for standalone virtual machine instances by using the web console {id="virt-searching-vmis-web_{{ context }}"}

You can search for virtual machine instances (VMIs) by using the search bar on the **VirtualMachines** page. Use the advanced search to apply additional filters. {._abstract}

**Procedure**

1.  In the {{ product_title }} console, click **Virtualization** → **VirtualMachines** from the side menu.
1.  In the search bar at the top of the page, type a VM name, label, or IP address.
1.  In the suggestions list, choose one of the following options:
    *   Click a VM name to open its details page.
    *   Click **All search results found for ...** to view results on a dedicated page.
    *   Click a related suggestion to prefill search filters.
1.  Optional: To open advanced search options, click the sliders icon next to the search bar. Expand the ***Details*** section and specify one or more of the available filters: **Name**, **Project**, **Description**, **Labels**, **Date created**, **vCPU**, and **Memory**.
1.  Optional: Expand the ***Network*** section and enter an IP address to filter by.
1.  Click **Search**.
1.  Optional: If Advanced Cluster Management (ACM) is installed, use the **Cluster** dropdown to search across multiple clusters.
1.  Optional: Click the **Save search** icon to store your search in the `kubevirt-user-settings` ConfigMap.