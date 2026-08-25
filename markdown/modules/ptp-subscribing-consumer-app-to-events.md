{%- set _mod_docs_content_type = "REFERENCE" %}
# Subscribing to PTP events with the REST API {{ ptp_events_rest_api }} {id="ptp-subscribing-consumer-app-to-events-{{ ptp_events_rest_api }}_{{ context }}"}

{% if ptp-events-rest-api == "v2" %}
Deploy your `cloud-event-consumer` application container and subscribe the `cloud-event-consumer` application to PTP events posted by the `cloud-event-proxy` container in the pod managed by the PTP Operator.

Subscribe consumer applications to PTP events by sending a `POST` request to `http://ptp-event-publisher-service-NODE_NAME.openshift-ptp.svc.cluster.local:9043/api/ocloudNotifications/v2/subscriptions` passing the appropriate subscription request payload.


:::note

`9043` is the default port for the `cloud-event-proxy` container deployed in the PTP event producer pod.
You can configure a different port for your application as required.

:::

{% endif %}

{% if ptp-events-rest-api == "v1" %}
Deploy your `cloud-event-consumer` application container and `cloud-event-proxy` sidecar container in a separate application pod.

Subscribe the `cloud-event-consumer` application to PTP events posted by the `cloud-event-proxy` container at `http://localhost:8089/api/ocloudNotifications/v1/` in the application pod.


:::note

`9089` is the default port for the `cloud-event-consumer` container deployed in the application pod.
You can configure a different port for your application as required.

:::

{% endif %}