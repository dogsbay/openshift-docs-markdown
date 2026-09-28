{%- set _mod_docs_content_type = "CONCEPT" %}
# Assign secondary networks to VRF and chain CNI plugins {id="assign-secondary-networks-to-vrf-and-chain-cni-plugins-con_{{ context }}"}

The CNI VRF plugin associates a secondary network with a virtual routing and forwarding domain on a specified physical interface. CNI plugin chaining runs additional plugins, such as `route-override`, after the main plugin so that you can adjust the resulting interface.