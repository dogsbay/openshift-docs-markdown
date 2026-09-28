{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable specific troubleshooting tools by configuring SELinux permissive mode {id="enable-specific-troubleshooting-tools-by-configuring-selinux-permissive-mode-con_{{ context }}"}

You can put nodes into SELinux permissive mode by adding the `enforcing=0` kernel argument with a machine config. Permissive mode logs SELinux denials instead of blocking them, so troubleshooting tools can run while you diagnose a problem.