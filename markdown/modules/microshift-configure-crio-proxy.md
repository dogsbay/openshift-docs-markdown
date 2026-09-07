{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure HTTP or HTTPS proxy settings for CRI-O {id="microshift-configure-crio-proxy_{{ context }}"}

Configure an HTTP or HTTPS proxy for the CRI-O container runtime so that {{ microshift_short }} container engine traffic routes correctly through your network proxy. You define the proxy environment variables in a systemd drop-in file and restart the affected services to apply the settings.