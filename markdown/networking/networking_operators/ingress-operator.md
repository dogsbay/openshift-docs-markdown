---
title: Ingress Operator in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Ingress Operator in {{ product_title }} {id="configuring-ingress"}
{%- if openshift_enterprise %}
{% include "./_attributes/common-attributes.md" %}
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "configuring-ingress" %}

The Ingress Operator implements the `IngressController` API and is the component responsible for enabling external access to {{ product_title }} cluster services.

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
This Operator is installed on {{ product_title }} clusters by default.
{% endif %}

{% leveloffset +1 %}{% include "./modules/nw-ne-openshift-ingress.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nw-installation-ingress-config-asset.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-controller-configuration-parameters.md" %}{% endleveloffset %}

### Ingress Controller TLS security profiles {id="configuring-ingress-controller-tls"}

TLS security profiles provide a way for servers to regulate which ciphers a connecting client can use when connecting to the server.

{% leveloffset +3 %}{% include "./modules/tls-profiles-understanding.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/tls-profiles-ingress-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-mutual-tls-auth.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-view.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-operator-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-operator-logs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-controller-status.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nw-create-custom-ingress-controller.md" %}{% endleveloffset %}

## Configuring the Ingress Controller {id="configuring-ingress-controller"}

{% leveloffset +2 %}{% include "./modules/nw-ingress-setting-a-custom-default-certificate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-custom-default-certificate-remove.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-autoscaling-ingress-controller.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing the custom metrics autoscaler](/nodes/cma/nodes-cma-autoscaling-custom-install#nodes-cma-autoscaling-custom-install_nodes-cma-autoscaling-custom-install)
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Understanding custom metrics autoscaler trigger authentications](/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth)
*   [Understanding custom metrics autoscaler triggers](/nodes/cma/nodes-cma-autoscaling-custom-trigger#nodes-cma-autoscaling-custom-prometheus)
*   [Understanding how to add custom metrics autoscalers](/nodes/cma/nodes-cma-autoscaling-custom-adding#nodes-cma-autoscaling-custom-adding)

{% leveloffset +2 %}{% include "./modules/nw-scaling-ingress-controller.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configure-ingress-access-logging.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Capturing Original Client IP from the X-Forwarded-For Header in Ingress and Application Logs](https://access.redhat.com/solutions/7096271)

{% leveloffset +2 %}{% include "./modules/nw-ingress-setting-thread-count.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-setting-internal-lb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-controller-configuration-gcp-global-access.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-controller-config-tuningoptions-healthcheckinterval.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-default-internal.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-route-admission-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/using-wildcard-routes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-http-header-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-set-or-delete-http-headers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-using-ingress-forwarded.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-http2-haproxy.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-enable-http2.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-disable-http2.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-controller-configuration-proxy-protocol.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Ingress access logging](/networking/networking_operators/ingress-operator#nw-configure-ingress-access-logging_configuring-ingress)

{% leveloffset +2 %}{% include "./modules/nw-ingress-configuring-application-domain.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-converting-http-header-case.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configuring-router-compression.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-exposing-router-metrics.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-customize-ingress-error-pages.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-setting-max-connections.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/sd-ingress-responsibilities.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/osd-cluster-create-application-ingress-settings.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/osd-create-cluster-exclude-namespace-selector-day1-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/osd-create-cluster-exclude-namespace-selector-day2-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/osd-cluster-create-application-ingress-selector-day1-ui.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/osd-cluster-create-application-ingress-selector-day2-ui.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/osd-ingress-excluded-namespaces-ocm-cli.md" %}{% endleveloffset %}
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
## Additional resources {id="_additional_resources" ._additional-resources}

{% if not openshift_dedicated %}
*   [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
{% endif %}
{% if openshift_dedicated %}
*   [Creating a Workload Identity Federation cluster using {{ cluster_manager }}](/osd_gcp_clusters/creating-a-gcp-cluster-with-workload-identity-federation#osd-creating-a-cluster-on-gcp-with-workload-identity-federation)
*   [Creating a cluster on Google Cloud with a Red Hat cloud account using {{ cluster_manager }}](/osd_gcp_clusters/creating-a-gcp-cluster-redhat-account#osd-creating-a-gcp-cluster-rh-account)
*   [Creating a cluster with Service Account authentication using {{ cluster_manager }}](/osd_gcp_clusters/creating-a-gcp-cluster-sa#osd-creating-a-cluster-on-gcp-sa)
{% endif %}
{% endif %}