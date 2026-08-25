{%- set _mod_docs_content_type = "CONCEPT" %}
# Red&#160;Hat OpenShift API Management {id="osd-rhoam_{{ context }}"}

The Red&#160;Hat OpenShift API Management (OpenShift API Management) service is available as an add-on to your {{ product_title }} on AWS cluster. OpenShift API Management is a managed API traffic control and API program management solution. It is based on the 3scale API Management platform and implements single sign-on for Red&#160;Hat solutions to secure and protect your APIs.

This OpenShift API Management entitlement provides:

{% if openshift_rosa %}
*   Availability to any cluster that meets the resource requirements listed in the Red&#160;Hat OpenShift API Management service definition.
{% endif %}
{% if openshift_dedicated %}
*   Availability to any cluster that meets the resource requirements listed in the {{ product_title }} service definition.
{%- endif %}
*   Full production-level support.
*   No time limits on usage.
*   100K quota, or calls per day. Customers have the option to pay for an OpenShift API Management subscription with higher quotas.