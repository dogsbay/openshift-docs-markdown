{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Shielded VMs {id="installation-gcp-enabling-shielded-vms_{{ context }}"}

You can use Shielded VMs when installing your cluster. Shielded VMs have extra security features including secure boot, firmware and integrity monitoring, and rootkit detection. For more information, see Google’s documentation on [Shielded VMs](https://cloud.google.com/shielded-vm).


:::note

Shielded VMs are currently not supported on clusters with 64-bit ARM infrastructures.

:::


**Procedure**

*   Use a text editor to edit the `install-config.yaml` file prior to deploying your cluster and add one of the following stanzas:
    1.  To use shielded VMs for only control plane machines:
        ```yaml
        controlPlane:
          platform:
            gcp:
               secureBoot: Enabled
        ```
    1.  To use shielded VMs for only compute machines:
        ```yaml
        compute:
        - platform:
            gcp:
               secureBoot: Enabled
        ```
    1.  To use shielded VMs for all machines:
        ```yaml
        platform:
          gcp:
            defaultMachinePlatform:
               secureBoot: Enabled
        ```