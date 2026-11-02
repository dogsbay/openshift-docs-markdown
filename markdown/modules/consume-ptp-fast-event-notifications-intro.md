{%- set _mod_docs_content_type = "CONCEPT" %}
# Consume PTP fast event notifications {id="consume-ptp-fast-event-notifications-intro_{{ context }}"}

You can configure applications to consume PTP fast event notifications to react to changes in clock synchronization status with minimal latency. {._abstract}

**Prerequisites**

*   The PTP Operator is installed and the PTP fast event publisher is configured on the cluster.
*   Complete the "Configure PTP clock synchronization" job in the Networking category before consuming events from the publisher.

For the full list of publisher endpoints, see the "PTP events REST API v2 endpoints" section of this job.