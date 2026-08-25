{%- set _mod_docs_content_type = "CONCEPT" %}
# Workflow of the Node Observability Operator {id="workflow-node-observability-operator_{{ context }}"}

The following workflow outlines on how to query the profiling data using the Node Observability Operator: {._abstract}

1.  Install the Node Observability Operator in the {{ product_title }} cluster.
1.  Create a NodeObservability custom resource to enable the CRI-O profiling on the worker nodes of your choice.
1.  Run the profiling query to generate the profiling data.