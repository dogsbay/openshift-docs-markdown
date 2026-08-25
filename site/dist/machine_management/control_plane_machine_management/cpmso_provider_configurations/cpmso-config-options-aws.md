---
title: Control plane configuration options for {{ aws_full }}
---

# Control plane configuration options for {{ aws_full }} {#cpmso-config-options-aws}

You can update your control plane machines to reflect changes in your infrastructure or environment by editing values in the control plane machine set specification.

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy. For more information, see "Updating the control plane configuration".

The following example YAML snippets show provider specification and failure domain configurations for an {{ aws_short }} cluster.

## Additional resources {#additional-resources_cpmso-config-options-aws}

- [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
- [Configuring {{ aws_full }} features for control plane machines](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-supported-features-aws#cpmso-supported-features-aws)
