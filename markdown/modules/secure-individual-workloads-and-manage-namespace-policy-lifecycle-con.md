{%- set _mod_docs_content_type = "CONCEPT" %}
# Secure individual workloads and manage namespace policy lifecycle {id="secure-individual-workloads-and-manage-namespace-policy-lifecycle-con_{{ context }}"}

`NetworkPolicy` objects define the ingress and egress connections allowed for selected pods, which is how you microsegment applications inside a namespace. Treating creation, review, change, and retirement of those policies as one lifecycle keeps segmentation practical as services evolve.