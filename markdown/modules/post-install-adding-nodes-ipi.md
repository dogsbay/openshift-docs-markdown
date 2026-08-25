{%- set _mod_docs_content_type = "REFERENCE" %}
# Adding worker nodes to installer-provisioned infrastructure clusters {id="adding-nodes-ipi_{{ context }}"}

Add worker nodes to installer-provisioned infrastructure clusters by scaling machine sets or provisioning bare-metal hosts. {._abstract}

For installer-provisioned infrastructure clusters, you can manually or automatically scale the `MachineSet` object to match the number of available bare-metal hosts.

To add a bare-metal host, you must configure all network prerequisites, configure an associated `baremetalhost` object, then provision the worker node to the cluster. You can add a bare-metal host manually or by using the web console.