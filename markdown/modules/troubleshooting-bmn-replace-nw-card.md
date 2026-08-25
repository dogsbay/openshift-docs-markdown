{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster network card replacement {id="troubleshooting-bmn-replace-nw-card_{{ context }}"}

When you replace a network card, the MAC address changes.
The MAC address can be part of the DHCP or SR-IOV Operator configuration, router configuration, firewall rules, or cloud-native application configuration.
Before you bring back a node online after replacing a network card, you must verify that these configurations are up-to-date. {._abstract}


:::important

If you do not have specific procedures for MAC address changes within the network, contact your network administrator or network hardware vendor.

:::