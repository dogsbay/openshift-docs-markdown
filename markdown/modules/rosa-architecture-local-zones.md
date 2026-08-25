{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ product_title }} with Local Zones {id="rosa-architecture-local-zones_{{ context }}"}

{{ product_title }} supports the use of AWS Local Zones, which are metropolis-centralized availability zones where customers can place latency-sensitive application workloads within a VPC. Local Zones are extensions of AWS Regions and are not enabled by default. When Local Zones are enabled and configured, the traffic is extended into the Local Zones for greater flexibility and lower latency. For more information, see "Configuring machine pools in Local Zones".

The following diagram displays a {{ product_title }} cluster without traffic routed into a Local Zone.

**Figure 1. {{ product_title }} cluster without traffic routed into Local Zones**

![{{ product_title }} cluster without traffic routed into Local Zones](/_assets/images/354_OpenShift_ROSA_Local_Zones_0923_1.png)

The following diagram displays a {{ product_title }} cluster with traffic routed into a Local Zone.

**Figure 2. {{ product_title }} cluster with traffic routed into Local Zones**

![{{ product_title }} cluster with traffic routed into Local Zones](/_assets/images/354_OpenShift_ROSA_Local_Zones_0923_2.png)