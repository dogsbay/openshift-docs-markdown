{%- set _mod_docs_content_type = "CONCEPT" %}
# About offline deployments with {{ op_system_ostree }} {id="microshift-about-offline-deployment-rhel-edge_{{ context }}"}

Embedding {{ microshift_short }} containers in an `rpm-ostree` commit means that you can run a node in disconnected or offline environments. {._abstract}

You can embed {{ product_title }} containers in a {{ op_system_ostree_first }} image so that container engines do not need to pull images over a network from a container registry. Workloads can start immediately without network connectivity.