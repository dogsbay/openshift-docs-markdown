{%- set _mod_docs_content_type = "REFERENCE" %}
# Network features {id="microshift-network-features_{{ context }}"}

Understand which networking feature are available and which are not for your {{ microshift_short }} deployments. {._abstract}

Networking features available with {{ microshift_short }} {{ product_version }} include:

*   Kubernetes network policy
*   Dynamic node IP
*   Custom gateway interface
*   Second gateway interface
*   Node network on specified host interface
*   Blocking external access to NodePort service on specific host interfaces

Networking features not available with {{ microshift_short }} {{ product_version }}:

*   Egress IP/firewall/QoS: disabled
*   Hybrid networking: not supported
*   IPsec: not supported
*   Hardware offload: not supported