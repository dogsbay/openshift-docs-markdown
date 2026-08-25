{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding compliance and risk management {id="security-compliance-nist_{{ context }}"}

{%- if not openshift_origin %}
FIPS compliance is one of the most critical components required in highly secure environments to ensure that only supported cryptographic technologies are allowed on nodes. {._abstract}

{% include "./snippets/fips-snippet.md" %}
{% endif %}

To understand Red Hat’s view of {{ product_title }} compliance frameworks, refer to the Risk Management and Regulatory Readiness chapter of the OpenShift Security Guide Book.