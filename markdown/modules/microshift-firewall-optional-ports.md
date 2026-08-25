{%- set _mod_docs_content_type = "REFERENCE" %}
# Optional ports {id="microshift-firewall-optional-ports_{{ context }}"}

The following table lists the optional ports that are available for use with the {{ microshift_short }} firewall service. {._abstract}

**Optional ports**

| Port(s) | Protocol(s) | Description |
| --- | --- | --- |
| 80 | TCP | HTTP port used to serve applications through the {{ ocp }} router. |
| 443 | TCP | HTTPS port used to serve applications through the {{ ocp }} router. |
| 5353 | UDP | mDNS service to respond for {{ ocp }} route mDNS hosts. |
| 30000-32767 | TCP | Port range reserved for NodePort services; can be used to expose applications on the LAN. |
| 30000-32767 | UDP | Port range reserved for NodePort services; can be used to expose applications on the LAN. |
| 6443 | TCP | HTTPS API port for the {{ product_title }} API. |