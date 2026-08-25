{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster API resources migration to Machine API resources {id="capi-to-mapi-migration-overview_{{ context }}"}

On clusters that support migrating between the Cluster API and Machine API resources, the two-way synchronization controller supports converting a Cluster API resource to a Machine API resource. {._abstract}


:::note

The two-way synchronization controller only operates on clusters with the `MachineAPIMigration` feature gate in the `TechPreviewNoUpgrade` feature set enabled.

:::


You can migrate resources that you originally migrated from the Machine API to the Cluster API, or resources that you created as Cluster API resources initially.
Migrating an original Machine API resource to a Cluster API resource and then migrating it back provides an opportunity to verify that the migration process works as expected.


:::note

You can only migrate some resources on supported infrastructure types.

:::


**Supported resource conversions**

| Infrastructure | Compute machine | Compute machine set | Machine health check | Control plane machine set | Cluster autoscaler |
| --- | --- | --- | --- | --- | --- |
| {{ aws_short }} | Technology Preview | Technology Preview | Not Available | Not Available | Not Available |
| All other infrastructure types | Not Available | Not Available | Not Available | Not Available | Not Available |