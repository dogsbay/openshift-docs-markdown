{%- set _mod_docs_content_type = "CONCEPT" %}
# Control workload placement on nodes {id="control-workload-placement-on-nodes-intro_{{ context }}"}

You can control how workloads are scheduled onto the compute nodes of your cluster by adding labels and taints to a machine pool. Labels let you target nodes for specific workloads, and taints let you repel pods from nodes unless the pod includes a matching toleration.