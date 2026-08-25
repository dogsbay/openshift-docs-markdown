{%- set _mod_docs_content_type = "REFERENCE" %}
# Planning your environment based on tested cluster maximums {id="planning-environment-cluster-maximums_{{ context }}"}

You can use tested cluster maximums when you size {{ product_title }} clusters and namespaces. These values are not hard limits or Red&#160;Hat supported ceilings for production. {._abstract}

The following tables summarize the latest published tested maximums for your architecture.


:::note

These numbers come from internal Red&#160;Hat tests on the latest {{ product_title }} clusters using default cluster tunings. Reaching or exceeding a number does not mean the cluster fails or degrade immediately.

Each value reflects limits for individual OpenShift resources measured with separate workloads that target a few resource types at a time. The workloads do not reproduce every production load, but they target patterns that stay close to common customer use cases. Tests used the Cloud Native Computing Foundation (CNCF) workload orchestrator. For more information, see [the project page for this orchestrator](https://www.cncf.io/projects/kube-burner/).

:::