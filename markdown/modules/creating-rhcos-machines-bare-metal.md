{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating {{ op_system_first }} machines {id="creating-rhcos-machines-bare-metal"}

Before you add more compute machines to a cluster that you installed on bare metal infrastructure, you must create {{ op_system }} machines for it to use. You can either use an ISO image or network PXE booting to create the machines. {._abstract}


:::note

You must use the same ISO image that you used to install a cluster to deploy all new nodes in a cluster. It is recommended to use the same Ignition config file. The nodes automatically upgrade themselves on the first boot before running the workloads. You can add the nodes before or after the upgrade.

:::