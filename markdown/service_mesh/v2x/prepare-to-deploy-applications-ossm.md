---
title: Enabling sidecar injection
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Enabling sidecar injection {id="deploying-applications-ossm"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "deploying-applications-ossm" %}

After adding the namespaces that contain your services to your mesh, the next step is to enable automatic sidecar injection in the Deployment resource for your application. You must enable automatic sidecar injection for each deployment.

If you have installed the Bookinfo sample application, the application was deployed and the sidecars were injected as part of the installation procedure. If you are using your own project and service, deploy your applications on {{ product_title }}.

{% if openshift_enterprise %}
For more information, see the {{ product_title }} documentation, [Understanding deployments](/applications/deployments/what-deployments-are).
{% endif %}


:::note

Traffic started by Init Containers, specialized containers that run before the application containers in a pod, cannot travel outside of the service mesh by default. Any action Init Containers perform that requires establishing a network traffic connection outside of the mesh fails.

For more information about connecting Init Containers to a service, see the Red Hat Knowledgebase solution [initContainer in CrashLoopBackOff on pod with Service Mesh sidecar injected](https://access.redhat.com/solutions/6653601)

:::


## Prerequisites {id="_prerequisites"}

*   [Services deployed to the mesh](/service_mesh/v2x/ossm-create-mesh#ossm-tutorial-bookinfo-overview_ossm-create-mesh), for example the Bookinfo sample application.
*   A Deployment resource file.

{% leveloffset +1 %}{% include "./modules/ossm-automatic-sidecar-injection.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-sidecar-validate-kiali.md" %}{% endleveloffset %}

For information about enabling Envoy access logs, see the [Troubleshooting](/service_mesh/v2x/ossm-troubleshooting-istio#enabling-envoy-access-logs) section.

For information about viewing Envoy logs, see [Viewing logs in the Kiali console](/service_mesh/v2x/ossm-observability#ossm-viewing-logs_observability).

{% leveloffset +1 %}{% include "./modules/ossm-sidecar-injection-env-var.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-update-app-sidecar.md" %}{% endleveloffset %}

## Next steps {id="_next_steps"}

Configure {{ SMProductName }} features for your environment.

*   [Security](/service_mesh/v2x/ossm-security#ossm-security)
*   [Traffic management](/service_mesh/v2x/ossm-traffic-manage#ossm-routing-traffic)
*   [Metrics, logs, and traces](/service_mesh/v2x/ossm-observability#ossm-observability)