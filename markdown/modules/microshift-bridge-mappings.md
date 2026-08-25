{%- set _mod_docs_content_type = "REFERENCE" %}
# Bridge mappings {id="microshift-bridge-mappings_{{ context }}"}

Understand how provider network traffic reaches the physical network through bridge mappings. The following concepts apply: {._abstract}

*   Traffic leaves the provider network and arrives at the `br-int` bridge.
*   A patch port between `br-int` and `br-ex` then allows the traffic to traverse to and from the provider network and the edge network.
*   Kubernetes pods are connected to the `br-int` bridge through a virtual ethernet pair. One end of the virtual ethernet pair is attached to the pod namespace, and the other end is attached to the `br-int` bridge.