---
title: PTP events REST API v2 reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# PTP events REST API v2 reference {id="ptp-events-rest-api-reference-v2"}
{%- set context = "using-ptp-hardware-fast-events-framework-v2" %}

Use the following REST API v2 endpoints to subscribe the `cloud-event-consumer` application to Precision Time Protocol (PTP) events posted at `http://ptp-event-publisher-service-NODE_NAME.openshift-ptp.svc.cluster.local:9043/api/ocloudNotifications/v2` in the PTP events producer pod.

*   [`api/ocloudNotifications/v2/subscriptions`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloud-notifications-v2-subscriptions_{{ context }})
    *   `POST`: Creates a new subscription
    *   `GET`: Retrieves a list of subscriptions
    *   `DELETE`: Deletes all subscriptions
*   [`api/ocloudNotifications/v2/subscriptions/{{ subscription_id }}`{minja}](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloud-notifications-v2-subscriptions-subscription_id_{{ context }})
    *   `GET`: Returns details for the specified subscription ID
    *   `DELETE`: Deletes the subscription associated with the specified subscription ID
*   [`api/ocloudNotifications/v2/health`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloudnotifications-v2-health_{{ context }})
    *   `GET`: Returns the health status of `ocloudNotifications` API
*   [`api/ocloudNotifications/v2/publishers`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloudnotifications-v2-publishers_{{ context }})
    *   `GET`: Returns a list of PTP event publishers for the cluster node
*   [`api/ocloudnotifications/v2/{{ resource_address }}/CurrentState`{minja}](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#resource-address-current-state-v2_{{ context }})
    *   `GET`: Returns the current state of the event type specified by the `{{ resouce_address }}`{minja}.

{% leveloffset +1 %}{% include "./modules/cnf-fast-event-notifications-api-reference-v2.md" %}{% endleveloffset %}