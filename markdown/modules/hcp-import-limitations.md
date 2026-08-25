{%- set _mod_docs_content_type = "CONCEPT" %}
# Limitations of managing imported hosted clusters {id="hcp-import-limitations_{{ context }}"}

Hosted clusters are automatically imported into the local {{ mce }}, unlike a standalone {{ product_title }} or third-party clusters. Hosted clusters run some of their agents in the _hosted mode_ so that the agents do not use the resources of your cluster. {._abstract}

If you choose to automatically import hosted clusters, you can update node pools and the control plane in hosted clusters by using the `HostedCluster` resource on the management cluster. To update node pools and a control plane, see "Updating node pools in a hosted cluster" and "Updating a control plane in a hosted cluster".

You can import hosted clusters into a location other than the local {{ mce_short }} by using the {{ rh_rhacm_first }}. For more information, see "Discovering {{ mce }} hosted clusters in {{ rh_rhacm_title }}".

In this topology, you must update your hosted clusters by using the command-line interface or the console of the local {{ mce }} where the cluster is hosted. You cannot update the hosted clusters through the {{ rh_rhacm }} hub cluster.