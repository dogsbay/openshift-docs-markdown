---
title: Performing advanced reference configuration customization
---

# Performing advanced reference configuration customization {#advanced-ref-config-customization}

For scenarios where you want to allow temporary deviations from the reference design, you can apply more advanced customizations.

> [!WARNING]
> These customizations override the default matching process that the `cluster-compare` plugin uses during a comparison. Use caution when applying these advanced customizations as it can lead to unintended consequences, such as excluding consequential information from a cluster comparison.

Some advanced tasks to dynamically customize your reference configuration include the following:

- **Manual matching**: Configure a user configuration file to manually match a custom resource from the cluster to a template in the reference configuration.
- **Patching the reference**: Patch a reference to configure a reference configuration by using a patch option with the `cluster-compare` command.
