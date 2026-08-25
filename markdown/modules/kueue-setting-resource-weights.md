{%- set _mod_docs_content_type = "CONCEPT" %}
# Set resource weights {id="setting-resource-weights_{{ context }}"}

Resources measured in bytes, like memory, require scaled-down `resourceWeights` values. Kubernetes
represents memory in bytes, creating values that are billions of times larger than CPU core
counts.  {._abstract}

This numeric difference makes CPU weights ineffective unless you scale memory weights
down. Without this adjustment, the raw byte value of these resources will numerically dominate human-scale resources, such as CPU cores, by several orders of magnitude, effectively making their weights meaningless.

For example, if you want to achieve an effective memory weight of `1.0`, you would need to instead specify `9.31e-10`, which corresponds to `1.0 / 1,073,741,824`.