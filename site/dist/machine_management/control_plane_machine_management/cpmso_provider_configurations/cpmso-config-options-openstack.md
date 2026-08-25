---
title: Control plane configuration options for {{ rh_openstack_first }}
---

# Control plane configuration options for {{ rh_openstack_first }} {#cpmso-config-options-openstack}

You can update your control plane machines to reflect changes in your infrastructure or environment by editing values in the control plane machine set specification.

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy. For more information, see "Updating the control plane configuration".

The following example YAML snippets show provider specification and failure domain configurations for an {{ rh_openstack }} cluster.

## Additional resources {#additional-resources_cpmso-config-options-openstack}

- [Updating the control plane configuration](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
- [Configuring {{ rh_openstack }} features for control plane machines](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-supported-features-openstack#cpmso-supported-features-openstack)
