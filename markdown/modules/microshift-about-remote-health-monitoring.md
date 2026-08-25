{%- set _mod_docs_content_type = "CONCEPT" %}
# About remote health monitoring with {{ microshift_short }} {id="microshift-about-remote-health-monitoring_{{ context }}"}

Remote health monitoring is conducted in {{ microshift_short }} by the collection of telemetry and configuration data about your node that is reported to Red&#160;Hat with the Telemeter API. A node that reports Telemetry to Red&#160;Hat is considered a _connected node_. {._abstract}

**Telemetry** is the term that Red&#160;Hat uses to describe the information being sent to Red&#160;Hat by the {{ microshift_short }} Telemeter API. Lightweight attributes are sent from a connected node to Red&#160;Hat to monitor the health of a node.

Telemetry provides the following benefits:

*   **Enhanced identification and resolution of issues**. Events that might seem normal to an end-user can be observed by Red&#160;Hat from a broader perspective. Some issues can be more rapidly identified from this point of view and resolved without an end-user needing to open a support case or file a [Jira issue](https://issues.redhat.com/secure/CreateIssueDetails!init.jspa?pid=12332330&summary=Summary&issuetype=1&priority=10200&versions=12385624).
*   **Targeted prioritization of new features and functionality**. The data collected provides information about system capabilities and usage characteristics. With this information, Red&#160;Hat can focus on developing the new features and functionality that have the greatest impact for our customers.

Telemetry sends a carefully chosen subset of the node monitoring metrics to Red&#160;Hat. The Telemeter API fetches the metrics values every hour and uploads the data to Red&#160;Hat. This stream of data is used by Red&#160;Hat to monitor nodes over time.

This debugging information is available to Red&#160;Hat Support and Engineering teams with the same restrictions as accessing data reported through support cases. All _connected node_ information is used by Red&#160;Hat to help make {{ microshift_short }} better.


:::note

{{ microshift_short }} does not support Prometheus. To view the Telemetry gathered from your node, you must contact Red&#160;Hat Support.

:::