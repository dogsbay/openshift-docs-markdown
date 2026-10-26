---
title: Capture plain text from OpenSSL encrypted network traffic
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Capture plain text from OpenSSL encrypted network traffic {id="netobserv-cli-plaintext-capture"}
{%- set context = "netobserv-cli-plaintext-capture" %}

Use the Network Observability CLI to capture and view plain text content from OpenSSL-encrypted network packets. This CLI-only feature uses eBPF probes to intercept and display unencrypted data without requiring TLS certificates or Operator configuration. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-cli-plaintext-capture-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-cli-plaintext-env-preparation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-cli-plaintext-view-traffic.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Capture network packets with the CLI](/observability/network_observability/netobserv_cli/netobserv-cli-using#network-observability-cli-capturing-packets_netobserv-cli-using)
*   [Network Observability CLI reference](/observability/network_observability/netobserv_cli/netobserv-cli-reference#network-observability-netobserv-cli-reference_netobserv-cli-reference)