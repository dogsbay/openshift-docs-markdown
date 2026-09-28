{%- set _mod_docs_content_type = "CONCEPT" %}
# Distribute image registry pods across availability zones {id="availability-zone-distribution-con_{{ context }}"}

On cloud platforms, the Image Registry Operator spreads registry pods across availability zones so that the loss of a single zone does not take the registry offline. You can change the topology spread constraints to control how strictly the pods are distributed.