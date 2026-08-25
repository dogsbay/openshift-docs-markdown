# Removing a service from the federated mesh {id="ossm-federation-remove-service_{{ context }}"}

If you need to remove a service from the federated mesh, for example if it has become obsolete or has been replaced by a different service, you can do so.

## To remove a service from a single mesh {id="_to_remove_a_service_from_a_single_mesh"}

Remove the entry for the service from the `ImportedServiceSet` resource for the mesh peer that no longer should access the service.

## To remove a service from the entire federated mesh {id="_to_remove_a_service_from_the_entire_federated_mesh"}

Remove the entry for the service from the `ExportedServiceSet` resource for the mesh that owns the service.