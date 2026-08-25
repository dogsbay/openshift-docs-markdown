{%- set _mod_docs_content_type = "CONCEPT" -%}

{% if context == "rosa-hcp-service-definition" %}
{%- set rosa_with_hcp = true -%}
{% endif %}

# Local Zones {id="rosa-sdpolicy-am-local-zones_{{ context }}"}

{% if openshift_rosa_hcp %}
{{ hcp_title_first }} does not support the use of AWS Local Zones.
{% endif %}
{% if not openshift_rosa_hcp %}
{{ product_title }} supports the use of AWS Local Zones, which are metropolis-centralized availability zones where customers can place latency-sensitive application workloads. Local Zones are extensions of AWS Regions that have their own internet connection. For more information about AWS Local Zones, see the AWS documentation [How Local Zones work](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html).
{% endif %}

{% if context == "rosa-hcp-service-definition" %}
{%- set rosa_with_hcp = "" -%}
{% endif %}