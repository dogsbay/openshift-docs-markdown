{%- set _mod_docs_content_type = "CONCEPT" %}
# Adjust worker nodes {id="post-install-adjust-worker-nodes_{{ context }}"}

Resize worker nodes by creating new compute machine sets, scaling them up, and scaling down the original machine set before removal. {._abstract}

If you incorrectly sized the worker nodes during deployment, adjust them by creating one or more new compute machine sets, scale them up, then scale the original compute machine set down before removing them.