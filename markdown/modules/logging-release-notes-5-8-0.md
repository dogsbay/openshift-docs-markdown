{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.8.0 {id="logging-release-notes-5-8-0_{{ context }}"}

This release includes [OpenShift Logging Bug Fix Release 5.8.0](https://access.redhat.com/errata/RHBA-2023:6139) and [OpenShift Logging Bug Fix Release 5.8.0 Kibana](https://access.redhat.com/errata/RHBA-2023:6134).

## Deprecation notice {id="logging-release-notes-5-8-0-deprecation-notice"}

In Logging 5.8, Elasticsearch, Fluentd, and Kibana are deprecated and are planned to be removed in Logging 6.0, which is expected to be shipped alongside a future release of {{ product_title }}. Red Hat will provide critical and above CVE bug fixes and support for these components during the current release lifecycle, but these components will no longer receive feature enhancements. The Vector-based collector provided by the {{ clo }} and LokiStack provided by the {{ loki_op }} are the preferred Operators for log collection and storage. We encourage all users to adopt the Vector and Loki log stack, as this will be the stack that will be enhanced going forward.

## Enhancements {id="logging-release-notes-5-8-0-enhancements"}

### Log Collection {id="logging-release-notes-5-8-0-log-collection"}

*   With this update, the LogFileMetricExporter is no longer deployed with the collector by default. You must manually create a `LogFileMetricExporter` custom resource (CR) to generate metrics from the logs produced by running containers. If you do not create the `LogFileMetricExporter` CR, you may see a **No datapoints found** message in the {{ product_title }} web console dashboard for **Produced Logs**. ([LOG-3819](https://issues.redhat.com/browse/LOG-3819))
*   With this update, you can deploy multiple, isolated, and RBAC-protected `ClusterLogForwarder` custom resource (CR) instances in any namespace. This allows independent groups to forward desired logs to any destination while isolating their configuration from other collector deployments. ([LOG-1343](https://issues.redhat.com/browse/LOG-1343))

    :::important

    In order to support multi-cluster log forwarding in additional namespaces other than the `openshift-logging` namespace, you must update the {{ clo }} to watch all namespaces. This functionality is supported by default in new {{ clo }} version 5.8 installations.
    
    :::

*   With this update, you can use the flow control or rate limiting mechanism to limit the volume of log data that can be collected or forwarded by dropping excess log records. The input limits prevent poorly-performing containers from overloading the {{ logging_uc }} and the output limits put a ceiling on the rate of logs shipped to a given data store. ([LOG-884](https://issues.redhat.com/browse/LOG-884))
*   With this update, you can configure the log collector to look for HTTP connections and receive logs as an HTTP server, also known as a webhook. ([LOG-4562](https://issues.redhat.com/browse/LOG-4562))
*   With this update, you can configure audit policies to control which Kubernetes and OpenShift API server events are forwarded by the log collector. ([LOG-3982](https://issues.redhat.com/browse/LOG-3982))

### Log Storage {id="logging-release-notes-5-8-0-log-storage"}

*   With this update, LokiStack administrators can have more fine-grained control over who can access which logs by granting access to logs on a namespace basis. ([LOG-3841](https://issues.redhat.com/browse/LOG-3841))
*   With this update, the {{ loki_op }} introduces `PodDisruptionBudget` configuration on LokiStack deployments to ensure normal operations during {{ product_title }} cluster restarts by keeping ingestion and the query path available. ([LOG-3839](https://issues.redhat.com/browse/LOG-3839))
*   With this update, the reliability of existing LokiStack installations are seamlessly improved by applying a set of default Affinity and Anti-Affinity policies.
([LOG-3840](https://issues.redhat.com/browse/LOG-3840))
*   With this update, you can manage zone-aware data replication as an administrator in LokiStack, in order to enhance reliability in the event of a zone failure. ([LOG-3266](https://issues.redhat.com/browse/LOG-3266))
*   With this update, a new supported small-scale LokiStack size of 1x.extra-small is introduced for {{ product_title }} clusters hosting a few workloads and smaller ingestion volumes (up to 100GB/day). ([LOG-4329](https://issues.redhat.com/browse/LOG-4329))
*   With this update, the LokiStack administrator has access to an official Loki dashboard to inspect the storage performance and the health of each component. ([LOG-4327](https://issues.redhat.com/browse/LOG-4327))

### Log Console {id="logging-release-notes-5-8-0-log-console"}

*   With this update, you can enable the Logging Console Plugin when Elasticsearch is the default Log Store. ([LOG-3856](https://issues.redhat.com/browse/LOG-3856))
*   With this update, {{ product_title }} application owners can receive notifications for application log-based alerts on the {{ product_title }} web console **Developer** perspective for {{ product_title }} version 4.14 and later. ([LOG-3548](https://issues.redhat.com/browse/LOG-3548))

## Known Issues {id="logging-release-notes-5-8-0-known-issues"}

*   Currently, Splunk log forwarding might not work after upgrading to version 5.8 of the {{ clo }}. This issue is caused by transitioning from OpenSSL version 1.1.1 to version 3.0.7. In the newer OpenSSL version, there is a default behavior change, where connections to TLS 1.2 endpoints are rejected if they do not expose the [RFC 5746](https://datatracker.ietf.org/doc/html/rfc5746) extension.

    As a workaround, enable TLS 1.3 support on the TLS terminating load balancer in front of the Splunk HEC (HTTP Event Collector) endpoint. Splunk is a third-party system and this should be configured from the Splunk end.
*   Currently, there is a flaw in handling multiplexed streams in the HTTP/2 protocol, where you can repeatedly make a request for a new multiplex stream and immediately send an `RST_STREAM` frame to cancel it. This created extra work for the server set up and tore down the streams, resulting in a denial of service due to server resource consumption. There is currently no workaround for this issue. ([LOG-4609](https://issues.redhat.com/browse/LOG-4609))
*   Currently, when using  FluentD as the collector, the collector pod cannot start on the {{ product_title }} IPv6-enabled cluster. The pod logs produce the `fluentd pod [error]: unexpected error error_class=SocketError error="getaddrinfo: Name or service not known` error. There is currently no workaround for this issue. ([LOG-4706](https://issues.redhat.com/browse/LOG-4706))
*   Currently, the log alert is not available on an IPv6-enabled cluster. There is currently no workaround for this issue. ([LOG-4709](https://issues.redhat.com/browse/LOG-4709))
*   Currently, `must-gather` cannot gather any logs on a FIPS-enabled cluster, because the required OpenSSL library is not available in the `cluster-logging-rhel9-operator`. There is currently no workaround for this issue. ([LOG-4403](https://issues.redhat.com/browse/LOG-4403))
*   Currently, when deploying the {{ logging }} version 5.8 on a FIPS-enabled cluster, the collector pods cannot start and are stuck in `CrashLoopBackOff` status, while using FluentD as a collector. There is currently no workaround for this issue. ([LOG-3933](https://issues.redhat.com/browse/LOG-3933))

## CVEs {id="logging-release-notes-5-8-0-CVEs"}
*   [CVE-2023-40217](https://access.redhat.com/security/cve/CVE-2023-40217)