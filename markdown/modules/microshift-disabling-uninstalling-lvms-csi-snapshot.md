{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling and uninstalling LVMS CSI provider and CSI snapshot deployments {id="microshift-disabling-uninstalling-lvms-csi-snapshot_{{ context }}"}

To reduce the use of runtime resources, such as RAM, CPU, and storage, remove or disable the LVMS CSI provider and CSI snapshot deployments. This configuration optimizes system performance by eliminating storage components that are not required for your specific workload. {._abstract}


:::note

You can configure {{ microshift_short }} to disable CSI provider and CSI snapshot only before installing and running {{ microshift_short }}. After {{ microshift_short }} is installed and running, you must update the configuration file and uninstall the components.

:::


To reduce the use of runtime resources, you can remove or disable the following storage components:

*   You can configure {{ microshift_short }} to disable the built-in logical volume manager storage (LVMS) Container Storage Interface (CSI) provider.
*   You can configure {{ microshift_short }} to disable the Container Storage Interface (CSI) snapshot capabilities.
*   You can uninstall the installed CSI implementations using `oc` commands.


:::important

Automated uninstallation is not supported as this can cause orphaning of the provisioned volumes. Without the LVMS CSI driver, the node does not detect the underlying storage interface and cannot perform provisioning and deprovisioning or mounting and unmounting operations.

:::