{%- set _mod_docs_content_type = "CONCEPT" %}
# Provision Multus secondary networks and addressing {id="provision-multus-secondary-networks-and-addressing-con_{{ context }}"}

Secondary networks based on Multus need three things to work reliably: a plugin-specific network definition, an IP address management (IPAM) scheme, and a correctly configured host interface. Planning them together avoids attachments that come up without usable addressing.