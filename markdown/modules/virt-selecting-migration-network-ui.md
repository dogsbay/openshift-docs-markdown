{%- set _mod_docs_content_type = "PROCEDURE" %}
# Selecting a dedicated network by using the web console {id="virt-selecting-migration-network-ui_{{ context }}"}

You can select a dedicated network for live migration by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You configured a Multus network for live migration.
*   You created a network attachment definition for the network.

**Procedure**

1.  Go to **Virtualization -> Settings** in the {{ product_title }} web console.
1.  On the **Cluster** tab, click **General settiings**.
1.  Click **Live Migration**.
1.  Select the network from the **Live migration network** list.