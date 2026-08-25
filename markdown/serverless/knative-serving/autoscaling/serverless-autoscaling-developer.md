{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Autoscaling {id="serverless-autoscaling-developer"}
{%- set context = "serverless-autoscaling-developer" %}

Knative Serving provides automatic scaling, or _autoscaling_, for applications to match incoming demand. For example, if an application is receiving no traffic, and scale-to-zero is enabled, Knative Serving scales the application down to zero replicas. If scale-to-zero is disabled, the application is scaled down to the minimum number of replicas configured for applications on the cluster. Replicas can also be scaled up to meet demand if traffic to the application increases.

{% if openshift_enterprise %}
Autoscaling settings for Knative services can be global settings that are configured by cluster administrators, or per-revision settings that are configured for individual services.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
Autoscaling settings for Knative services can be global settings that are configured by cluster or dedicated administrators, or per-revision settings that are configured for individual services.
{% endif %}

You can modify per-revision settings for your services by using the {{ product_title }} web console, by modifying the YAML file for your service, or by using the Knative (`kn`) CLI.


:::note

Any limits or targets that you set for a service are measured against a single instance of your application. For example, setting the `target` annotation to `50` configures the autoscaler to scale the application so that each revision handles 50 requests at a time.

:::