{%- set _mod_docs_content_type = "REFERENCE" %}
# Glossary of network environment terms {id="rosa-glossary-disconnected_{{ context }}"}

The {{ product_title }} documentation uses several terms to describe network environments with limited or no internet connectivity. These environments differ from a standard network and might require additional configuration. {._abstract}

The following table describes the different terms used to refer to environments without a full internet connection:

**Disconnected environment terms**

| Term | Description |
| --- | --- |
| Air-gapped network | An environment or network that is completely isolated from an external network.<br>This isolation depends on a physical separation, or an "air gap", between machines on the internal network and any part of an external network. Air-gapped environments are often used in industries with strict security or regulatory requirements. |
| Disconnected environment | An environment or network that has some level of isolation from an external network.<br>This isolation could be enabled by physical or logical separation between machines on the internal network and an external network. A cluster in a disconnected environment does not have access to Red&#160;Hat public services and requires additional setup to maintain full cluster functionality. |
| Restricted network | An environment or network with limited connection to an external network.<br>A physical connection might exist between machines on the internal network and an external network, but network traffic is limited by additional configurations, such as firewalls and proxies. |