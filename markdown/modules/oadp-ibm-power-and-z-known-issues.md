{%- set _mod_docs_content_type = "CONCEPT" %}
# Known issue of OADP using {{ ibm_power_name }} and {{ ibm_z_name }} platforms {id="oadp-ibm-power-and-z-known-issues_{{ context }}"}

Use only NFS storage with File System Backup (FSB) methods such as Kopia or Restic for {{ sno_caps }} clusters on {{ ibm_power_name }} and {{ ibm_z_name }} platforms. This helps you to avoid unsupported backup configurations on these platforms. {._abstract}

There is currently no workaround for this restriction.