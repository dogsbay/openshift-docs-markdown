{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator colocation and Operator groups {id="olm-colocation_{{ context }}"}

Operator Lifecycle Manager (OLM) handles OLM-managed Operators that are installed in the same namespace, meaning their `Subscription` resources are colocated in the same namespace, as related Operators. Even if they are not actually related, OLM considers their states, such as their version and update policy, when any one of them is updated.