{%- set _mod_docs_content_type = "CONCEPT" %}
# Choosing what to harden in {{ op_system }} {id="security-hardening-what_{{ context }}"}

{% if openshift_origin %}
You can review the information on how to approach security for any {{ op_system_base }} system, in the "Security" category of the Red&#160;Hat Enterprise Linux 9 documentation to determine how to harden systems in  {{ op_system }}. {._abstract}

Use these documents to learn about managing security updates, security hardening, securing networks, and other security measures.
{% endif %}
{% if openshift_enterprise or openshift_webscale or openshift_aro %}
You can review the information on how to approach security for any {{ op_system_base }} system in the Red&#160;Hat Enterprise Linux 9 Security Hardening guide.

Use this guide to learn how to approach cryptography, evaluate vulnerabilities, and assess threats to various services. Likewise, you can learn how to scan for compliance standards, check file integrity, perform auditing, and encrypt storage devices.
{% endif %}

With the knowledge of what features you want to harden, you can then decide how to harden them in {{ op_system }}.