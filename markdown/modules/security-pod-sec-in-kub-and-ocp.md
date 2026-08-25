{%- set _mod_docs_content_type = "CONCEPT" %}
# Advancement of pod security in Kubernetes and {{ product_title }} {id="security-pod-sec-in-kub-and-ocp_{{ context }}"}

Kubernetes initially had limited pod security. When {{ product_title }} integrated Kubernetes, Red Hat added pod security through Security Context Constraints (SCCs). In Kubernetes version 1.3, `PodSecurityPolicy` (PSP) was introduced as a similar feature. However, Pod Security Admission (PSA) was introduced in Kubernetes version 1.21, which resulted in the deprecation of PSP in Kubernetes version 1.25. {._abstract}

PSA also became available in {{ product_title }} version 4.11. While PSA improves pod security, it lacks features provided by SCCs that are still necessary for certain use cases. Therefore, {{ product_title }} continues to support both PSA and SCCs.