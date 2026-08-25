---
title: Developing PTP events consumer applications with the REST API v2
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set ptp_events_rest_api = "v2" %}
# Developing PTP events consumer applications with the REST API {{ ptp_events_rest_api }} {id="ptp-cloud-events-consumer-dev-reference-{{ ptp_events_rest_api }}"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ptp-consumer" %}

When developing consumer applications that make use of Precision Time Protocol (PTP) events on a bare-metal cluster node, you deploy your consumer application in a separate application pod.
The consumer application subscribes to PTP events by using the PTP events REST API {{ ptp_events_rest_api }}.


:::note

The following information provides general guidance for developing consumer applications that use PTP events.
A complete events consumer application example is outside the scope of this information.

:::


**Additional resources**

*   [PTP events REST API v2 reference](/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#ptp-events-rest-api-reference-v2)

{% leveloffset +1 %}{% include "./modules/cnf-about-ptp-fast-event-notifications-framework.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-about-ptp-events-using-ptp-event-producer-with-o-ran-api.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-the-ptp-fast-event-publisher.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring linuxptp services as ordinary clock](/networking/advanced_networking/ptp/configuring-ptp#configuring-linuxptp-services-as-ordinary-clock_configuring-ptp)

{% leveloffset +1 %}{% include "./modules/ptp-events-consumer-application-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ptp-reference-deployment-and-service-crs-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ptp-subscribing-consumer-app-to-events.md" %}{% endleveloffset %}

**Additional resources**

*   [api/ocloudNotifications/v2/subscriptions](/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloud-notifications-v2-subscriptions_using-ptp-hardware-fast-events-framework-v2)

{% leveloffset +1 %}{% include "./modules/ptp-verifying-events-consumer-app-is-receiving-events-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-monitoring-fast-events-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing metrics as a developer](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-a-developer)

{% leveloffset +1 %}{% include "./modules/nw-ptp-operator-metrics-reference.md" %}{% endleveloffset %}