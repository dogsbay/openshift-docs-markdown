{%- set _mod_docs_content_type = "CONCEPT" %}
# Install with a Kickstart file {id="microshift-install-with-kickstart_{{ context }}"}

You can automate the installation of {{ microshift_short }} by using a Kickstart file. Kickstart files let you pre-configure installation parameters so that the installation process runs without manual input. {{ microshift_short }} supports Kickstart-based installations for RPM packages, `rpm-ostree` (RHEL for Edge), and image mode for RHEL (bootc) targets.