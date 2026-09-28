{%- set _mod_docs_content_type = "CONCEPT" %}
# Connect workloads to additional networks {id="connect-workloads-to-additional-networks-con_{{ context }}"}

A secondary network gives a pod an extra interface for traffic that should not share the default cluster network, such as separating the data plane from the control plane. Attaching and detaching workloads from those networks lets you move that traffic without disturbing ordinary cluster connectivity.