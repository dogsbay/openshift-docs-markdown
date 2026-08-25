{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the PersistentReservation feature gate by using the web console {id="virt-enabling-persistentreservation-feature-gate-web_{{ context }}"}

You must enable the PersistentReservation feature gate to allow a LUN-backed block mode virtual machine (VM) disk to be shared among multiple virtual machines. Enabling the feature gate requires cluster administrator privileges. {._abstract}

**Procedure**

1.  Click **Virtualization** → **Settings** in the web console.
1.  Select **Cluster**.
1.  Expand **SCSI persistent reservation** and set **Enable persistent reservation** to on.