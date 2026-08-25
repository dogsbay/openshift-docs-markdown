---
title: PTP events REST API v2 reference
---

# PTP events REST API v2 reference {#ptp-events-rest-api-reference-v2}

Use the following REST API v2 endpoints to subscribe the `cloud-event-consumer` application to Precision Time Protocol (PTP) events posted at `http://ptp-event-publisher-service-NODE_NAME.openshift-ptp.svc.cluster.local:9043/api/ocloudNotifications/v2` in the PTP events producer pod.

- [`api/ocloudNotifications/v2/subscriptions`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloud-notifications-v2-subscriptions_using-ptp-hardware-fast-events-framework-v2)

  - `POST`: Creates a new subscription
  - `GET`: Retrieves a list of subscriptions
  - `DELETE`: Deletes all subscriptions
- [`api/ocloudNotifications/v2/subscriptions/{{ subscription_id }}`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloud-notifications-v2-subscriptions-subscription_id_using-ptp-hardware-fast-events-framework-v2)

  - `GET`: Returns details for the specified subscription ID
  - `DELETE`: Deletes the subscription associated with the specified subscription ID
- [`api/ocloudNotifications/v2/health`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloudnotifications-v2-health_using-ptp-hardware-fast-events-framework-v2)

  - `GET`: Returns the health status of `ocloudNotifications` API
- [`api/ocloudNotifications/v2/publishers`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#api-ocloudnotifications-v2-publishers_using-ptp-hardware-fast-events-framework-v2)

  - `GET`: Returns a list of PTP event publishers for the cluster node
- [`api/ocloudnotifications/v2/{{ resource_address }}/CurrentState`](/networking/networking/advanced_networking/ptp/ptp-events-rest-api-reference-v2#resource-address-current-state-v2_using-ptp-hardware-fast-events-framework-v2)

  - `GET`: Returns the current state of the event type specified by the `{{ resouce_address }}`.
