{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling default access to guest system logs with the web console {id="virt-enable-guest-log-default-web_{{ context }}"}

To troubleshoot issues more easily, you can enable default access to virtual machine (VM) guest system logs by using the web console. {._abstract}

**Procedure**

1.  From the side menu, click **Virtualization** → **Settings**.
1.  Click **Cluster** → **Guest management**.
1.  Set **Enable guest system log access** to on.
1.  Optional: If you want to hide the VM user credentials that were set by using cloud-init, set **Hide guest credentials for non-privileged users** to on.