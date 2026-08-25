{%- set _mod_docs_content_type = "REFERENCE" %}
# Information collected by the {{ microshift_short }} Telemetry API {id="microshift-info-collected-by-telemetry_{{ context }}"}

The {{ microshift_short }} Telemetry API collects a lightweight set of metrics to assist with remote health monitoring and product improvement. The data payload is minimal, generally under 2KB, and is designed to have very minimal impact on node resources. The collected information is categorized into system configuration, node capacity, and usage metrics. {._abstract}

The following information is collected by Telemetry:


System information

:   The system information describes the basic configuration of your {{ microshift_short }} node and where it is running, for example:

    *   Version information, including the {{ microshift_short }} node version.
    *   The {{ op_system_base_full }} version.
    *   The {{ op_system_base }} deployment type.

Sizing information

:   Sizing information details the node capacity, for example:

*   The CPU cores {{ microshift_short }} can use.
*   Architecture information.
*   The usable bytes of memory.

Usage information

:   Usage information outlines what is happening in the node, for example:

*   The CPU usage in percentage.
*   The memory usage in percentage.
*   The number of Kubernetes objects by resource type (CRDs).
*   The number of running containers, namespaces, and running pods.
*   The number of routes, ingress, services.


:::note

Telemetry does not collect identifying information such as usernames or passwords. Red&#160;Hat does not intend to collect personal information. If Red&#160;Hat discovers that personal information has been inadvertently received, Red&#160;Hat deletes such information. To the extent that any Telemetry constitutes personal data, refer to the [Red&#160;Hat Privacy Statement](https://www.redhat.com/en/about/privacy-policy) for more information about Red&#160;Hat’s privacy practices.

:::



Additional details about how remote health monitoring data is used

:   Red&#160;Hat collects data about your use of the Red&#160;Hat product(s) for purposes such as providing support and troubleshooting, improving the offerings and user experience, responding to issues, and for billing purposes if applicable.

    *   Collection safeguards: Red&#160;Hat employs technical and organizational measures designed to protect Telemetry data.
*   Sharing: Red&#160;Hat might share the data collected through the Telemetry API internally within Red&#160;Hat to improve your user experience. Red&#160;Hat might share Telemetry data with its business partners in an aggregated form that does not identify customers to help the partners better understand their markets and their customers' use of Red&#160;Hat offerings, or to ensure the successful integration of products jointly supported by those partners.
*   Third parties: Red&#160;Hat might engage certain third parties to assist in the collection, analysis, and storage of Telemetry data.
*   Disabling Telemetry data collection: You can disable {{ microshift_short }} Telemetry by following the instructions in the "Opting out of remote health reporting for {{ microshift_short }}" section.