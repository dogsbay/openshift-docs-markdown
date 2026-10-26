{%- set _mod_docs_content_type = "CONCEPT" %}
# Local Zones {id="rosa-sdpolicy-am-local-zones_{{ context }}"}

{% if openshift_rosa_hcp %}
{{ product_title }} does not support the use of AWS Local Zones.
{% endif %}
{% if not openshift_rosa_hcp %}
{{ product_title }} supports the use of AWS Local Zones, which are metropolis-centralized availability zones where customers can place latency-sensitive application workloads. Local Zones are extensions of AWS Regions that have their own internet connection. {._abstract}

**Additional resources**
{._additional-resources}

*   [How Local Zones work (AWS documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html)
{% endif %}