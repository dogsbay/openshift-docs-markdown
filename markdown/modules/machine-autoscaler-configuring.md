{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring machine autoscalers {id="configuring-machineautoscaler_{{ context }}"}

After you deploy the cluster autoscaler, deploy `MachineAutoscaler` resources that reference the compute machine sets that are used to scale the cluster. {._abstract}


:::important

You must deploy at least one `MachineAutoscaler` resource after you deploy the `ClusterAutoscaler` resource.

:::



:::note

You must configure separate resources for each compute machine set. Remember that compute machine sets are different in each region, so consider whether you want to enable machine scaling in multiple regions. The compute machine set that you scale must have at least one machine in it.

:::