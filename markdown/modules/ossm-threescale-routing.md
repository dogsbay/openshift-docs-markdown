{%- set _mod_docs_content_type = "PROCEDURE" %}
# Routing service traffic through the adapter {id="ossm-threescale-routing_{{ context }}"}
Follow these steps to drive traffic for your service through the 3scale adapter.

**Prerequisites**

*   Credentials and service ID from your 3scale administrator.

**Procedure**

1.  Match the rule `destination.labels["service-mesh.3scale.net/credentials"] == "threescale"` that you previously created in the configuration, in the `kind: rule` resource.
1.  Add the above label to `PodTemplateSpec` on the Deployment of the target workload to integrate a service. the value, `threescale`, refers to the name of the generated handler. This handler stores the access token required to call 3scale.
1.  Add the `destination.labels["service-mesh.3scale.net/service-id"] == "replace-me"` label to the workload to pass the service ID to the adapter via the instance at request time.