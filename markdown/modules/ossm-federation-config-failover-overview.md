{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a federated mesh for failover {id="ossm-federation-config-failover-overview_{{ context }}"}

Failover is the ability to switch automatically and seamlessly to a reliable backup system, for example another server. In the case of a federated mesh, you can configure a service in one mesh to failover to a service in another mesh.

You configure Federation for failover by setting the `importAsLocal` and `locality` settings in an `ImportedServiceSet` resource and then configuring a `DestinationRule` that configures failover for the service to the locality specified in the `ImportedServiceSet`.

**Prerequisites**

*   Two or more {{ product_title }} 4.6 or above clusters already networked and federated.
*   `ExportedServiceSet` resources already created for each mesh peer in the federated mesh.
*   `ImportedServiceSet` resources already created for each mesh peer in the federated mesh.
*   An account with the `cluster-admin` role.