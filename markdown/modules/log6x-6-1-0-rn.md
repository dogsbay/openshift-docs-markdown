# Logging 6.1.0 Release Notes
{%- set _mod_docs_content_type = "REFERENCE" %}

<a name="logging-release-notes-6-1-0_{{ context }}"></a>

This release includes [{{ logging_uc }} {{ for }} Bug Fix Release 6.1.0](https://access.redhat.com/errata/RHBA-2024:9038).

## New Features and Enhancements {id="openshift-logging-release-notes-6-1-0-enhancements"}

### Log Collection {id="_log_collection"}

*   This enhancement adds the source `iostream` to the attributes sent from collected container logs. The value is set to either `stdout` or `stderr` based on how the collector received it. ([LOG-5292](https://issues.redhat.com/browse/LOG-5292))
*   With this update, the default memory limit for the collector increases from 1024 Mi to 2048 Mi. Users should adjust resource limits based on their cluster’s specific needs and specifications. ([LOG-6072](https://issues.redhat.com/browse/LOG-6072))
*   With this update, users can now set the syslog output delivery mode of the `ClusterLogForwarder` CR to either `AtLeastOnce` or `AtMostOnce.` ([LOG-6355](https://issues.redhat.com/browse/LOG-6355))

### Log Storage {id="_log_storage"}

*   With this update, the new `1x.pico` LokiStack size supports clusters with fewer workloads and lower log volumes (up to 50GB/day). ([LOG-5939](https://issues.redhat.com/browse/LOG-5939))

## Technology Preview {id="logging-release-notes-6-1-0-technology-preview-features"}

{%- set FeatureName = "The OpenTelemetry Protocol (OTLP) output log forwarder" %}
{% include "./snippets/technology-preview.md" %}

*   With this update, OpenTelemetry logs can now be forwarded using the `OTel` (OpenTelemetry) data model to a Red Hat Managed LokiStack instance. To enable this feature, add the `observability.openshift.io/tech-preview-otlp-output: "enabled"` annotation to your `ClusterLogForwarder` configuration. For additional configuration information, see [OTLP Forwarding](https://github.com/openshift/cluster-logging-operator/blob/master/docs/features/logforwarding/outputs/opentelemetry-lokistack-forwarding.adoc).
*   With this update, a `dataModel` field has been added to the `lokiStack` output specification. Set the `dataModel` to `Otel` to configure log forwarding using the OpenTelemetry data format. The default is set to `Viaq`. For information about data mapping see [OTLP Specification](https://opentelemetry.io/docs/specs/otlp/).

## Bug Fixes {id="logging-release-notes-6-1-0-bug-fixes_{{ context }}"}
None.

## CVEs {id="logging-release-notes-6-1-0-CVEs_{{ context }}"}

*   [CVE-2024-6119](https://access.redhat.com/security/cve/CVE-2024-6119)
*   [CVE-2024-6232](https://access.redhat.com/security/cve/CVE-2024-6232)