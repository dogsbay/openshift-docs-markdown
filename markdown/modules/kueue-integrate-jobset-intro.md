{%- set _mod_docs_content_type = "CONCEPT" %}
# Integrate the {{ js_operator }} with {{ kueue_name }} {id="kueue-integrate-jobset-intro_{{ context }}"}

You can integrate the {{ js_operator }} with {{ kueue_name }} to apply {{ kueue_name }} scheduling and resource management to large-scale, coordinated workloads such as high-performance computing (HPC) and AI training.  {._abstract}

The {{ js_operator }} models a distributed batch workload as a group of Kubernetes jobs, so you can specify different pod templates for distinct groups of pods.