{%- set _mod_docs_content_type = "CONCEPT" %}
# Kickstart files for embedding {{ microshift_short }} with a {{ op_system_base }} installation {id="microshift-rhel-kickstart_{{ context }}"}

Kickstart files automate {{ op_system_base }} installation and can embed {{ microshift_short }} on the same host. You can use a Kickstart file to provision virtual machines or complete edge deployments when the file meets {{ microshift_short }} storage and pull-secret requirements. {._abstract}

By using a Kickstart file, you automate a typical {{ op_system_base_full }} installation by creating a single file containing all of the information required for success.

*   You can also automate your {{ microshift_short }} installation by including {{ microshift_short }} in the Kickstart file for the {{ op_system_base }} type that you choose.
*   You can use a Kickstart file to provision virtual machines (VMs) or to complete a regular {{ op_system_base }} installation for deployment on edge devices.

For {{ microshift_short }}, your Kickstart file must include information to provision the {{ op_system_base }} system to meet the following requirements:

*   A {{ op_system_base }} system you provision must meet the requirements for installing {{ microshift_short }}.
*   The {{ op_system_base }} file system must have a logical volume manager (LVM) volume group (VG) with sufficient capacity for the persistent volumes (PVs) of your workload.
*   A pull secret from the Red Hat Hybrid Cloud Console must be present as `/etc/crio/openshift-pull-secret` and have root user-only read/write permissions. See "Red Hat Hybrid Cloud Console pull secret" for more information.