{%- set _mod_docs_content_type = "CONCEPT" %}
# Impact of IPsec {id="ipsec-impact_{{ context }}"}

Encrypting and decrypting node hosts uses CPU power so performance is affected both in throughput and CPU usage on the nodes when encryption is enabled, regardless of the IP security system being used. To account for performance overhead, review the impact of enabling IPsec. {._abstract}

IPSec encrypts traffic at the IP payload level, before it hits the NIC, protecting fields that would otherwise be used for NIC offloading. This means that some NIC acceleration features might not be usable when IPSec is enabled. This situation leads to decreased throughput and increased CPU usage.