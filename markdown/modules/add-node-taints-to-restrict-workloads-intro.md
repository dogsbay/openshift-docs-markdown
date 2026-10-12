{%- set _mod_docs_content_type = "CONCEPT" %}
# Add node taints to restrict workloads {id="add-node-taints-to-restrict-workloads-intro_{{ context }}"}

You can add taints for compute nodes in a machine pool to control which pods are scheduled to them. When you apply a taint to a machine pool, the scheduler cannot place a pod on the nodes in the pool unless the pod specification includes a toleration for the taint.