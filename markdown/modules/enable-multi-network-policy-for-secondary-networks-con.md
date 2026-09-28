{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable multi-network policy for secondary networks {id="enable-multi-network-policy-for-secondary-networks-con_{{ context }}"}

`NetworkPolicy` objects apply only to the default pod network, so traffic on secondary interfaces is unrestricted until you enable multi-network policy. Enabling it cluster-wide activates the `MultiNetworkPolicy` API, after which you can write policy that applies to secondary network attachments.