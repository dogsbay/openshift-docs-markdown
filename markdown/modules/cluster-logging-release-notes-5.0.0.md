# OpenShift Logging 5.0.0 {id="cluster-logging-release-notes-5-0-0"}

This release includes [RHBA-2021:0652 - Bug Fix Advisory. Errata Advisory for Openshift Logging 5.0.0](https://access.redhat.com/errata/RHBA-2021:0652).

## New features and enhancements {id="openshift-logging-5-0-new-features-and-enhancements"}

This release adds improvements related to the following concepts.

### Cluster Logging becomes Red Hat OpenShift Logging {id="ocp-4-7-cluster-logging-renamed-openshift-logging"}

With this release, Cluster Logging becomes Red Hat OpenShift Logging, version 5.0.

### Maximum five primary shards per index {id="openshift-logging-5-0-eo-max-five-shards"}

With this release, the OpenShift Elasticsearch Operator (EO) sets the number of primary shards for an index between one and five, depending on the number of data nodes defined for a cluster.

Previously, the EO set the number of shards for an index to the number of data nodes. When an index in Elasticsearch was configured with a number of replicas, it created that many replicas for each primary shard, not per index. Therefore, as the index sharded, a greater number of replica shards existed in the cluster, which created a lot of overhead for the cluster to replicate and keep in sync.

### Updated OpenShift Elasticsearch Operator name and maturity level {id="openshift-logging-5-0-updated-eo-name"}

This release updates the display name of the OpenShift Elasticsearch Operator and operator maturity level. The new display name and clarified specific use for the OpenShift Elasticsearch Operator are updated in Operator Hub.

### OpenShift Elasticsearch Operator reports on CSV success {id="openshift-logging-5-0-es-csv-success"}

This release adds reporting metrics to indicate that installing or upgrading the `ClusterServiceVersion` (CSV) object for the OpenShift Elasticsearch Operator  was successful. Previously, there was no way to determine, or generate an alert, if the installing or upgrading the CSV failed. Now, an alert is provided as part of the OpenShift Elasticsearch Operator.

### Reduce Elasticsearch pod certificate permission warnings {id="openshift-logging-5-0-reduced-cert-warnings"}

Previously, when the Elasticsearch pod started, it generated certificate permission warnings, which misled some users to troubleshoot their clusters. The current release fixes these permissions issues to reduce these types of notifications.

### New links from alerts to explanations and troubleshooting {id="openshift-logging-5-0-links-from-alerts"}

This release adds a link from the alerts that an Elasticsearch cluster generates to a page of explanations and troubleshooting steps for that alert.

### New connection timeout for deletion jobs {id="openshift-logging-5-0-curl-connection-timeout"}

The current release adds a connection timeout for deletion jobs, which helps prevent pods from occasionally hanging when they query Elasticsearch to delete indices. Now, if the underlying 'curl' call does not connect before the timeout period elapses, the timeout terminates the call.

### Minimize updates to rollover index templates {id="openshift-logging-5-0-minimize-updates-to-rollover-index-templates"}

With this enhancement, the OpenShift Elasticsearch Operator only updates its rollover index templates if they have different field values. Index templates have a higher priority than indices. When the template is updated, the cluster prioritizes distributing them over the index shards, impacting performance. To minimize Elasticsearch cluster operations, the operator only updates the templates when the number of primary shards or replica shards changes from what is currently configured.

## Technology Preview features {id="openshift-logging-5-0-technology-preview"}

Some features in this release are currently in Technology Preview. These experimental features are not intended for production use. Note the following scope of support on the Red Hat Customer Portal for these features:

[Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview)

In the table below, features are marked with the following statuses:

*   **TP**: _Technology Preview_
*   **GA**: _General Availability_
*   **-**: _Not Available_

**Technology Preview tracker**

| Feature | {{ product_title }} 4.5 | {{ product_title }} 4.6 | Logging 5.0 |
| --- | --- | --- | --- |
| Log forwarding | TP | GA | GA |

## Bug fixes {id="openshift-logging-5-0-bug-fixes"}

*   Previously, Elasticsearch rejected HTTP requests whose headers exceeded the default max header size, 8 KB. Now, the max header size is 128 KB, and Elasticsearch no longer rejects HTTP requests for exceeding the max header size. ([**BZ#1845293**](https://bugzilla.redhat.com/show_bug.cgi?id=1845293))
*   Previously, nodes did not recover from `Pending` status because a software bug did not correctly update their statuses in the Elasticsearch custom resource (CR). The current release fixes this issue, so the nodes can recover when their status is `Pending.` ([**BZ#1887357**](https://bugzilla.redhat.com/show_bug.cgi?id=1887357))
*   Previously, when the Cluster Logging Operator (CLO) scaled down the number of Elasticsearch nodes in the `clusterlogging` CR to three nodes, it omitted previously-created nodes that had unique IDs. The OpenShift Elasticsearch Operator rejected the update because it has safeguards that prevent nodes with unique IDs from being removed. Now, when the CLO scales down the number of nodes and updates the Elasticsearch CR, it marks nodes with unique IDs as count 0 instead of omitting them. As a result, users can scale down their cluster to 3 nodes by using the `clusterlogging` CR. ([**BZ#1879150**](https://bugzilla.redhat.com/show_bug.cgi?id=1879150))


:::note

In OpenShift Logging 5.0 and later, the Cluster Logging Operator is called Red Hat OpenShift Logging Operator.

:::


*   Previously, the Fluentd collector pod went into a crash loop when the `ClusterLogForwarder` had an incorrectly-configured secret. The current release fixes this issue. Now, the `ClusterLogForwarder` validates the secrets and reports any errors in its status field. As a result, it does not cause the Fluentd collector pod to crash. ([**BZ#1888943**](https://bugzilla.redhat.com/show_bug.cgi?id=1888943))
*   Previously, if you updated the Kibana resource configuration in the `clusterlogging` instance to `resource{}`, the resulting nil map caused a panic and changed the status of the OpenShift Elasticsearch Operator to `CrashLoopBackOff`. The current release fixes this issue by initializing the map. ([**BZ#1889573**](https://bugzilla.redhat.com/show_bug.cgi?id=1889573))
*   Previously, the fluentd collector pod went into a crash loop when the ClusterLogForwarder had multiple outputs using the same secret. The current release fixes this issue. Now, multiple outputs can share a secret. ([**1890072**](https://bugzilla.redhat.com/show_bug.cgi?id=1890072))
*   Previously, if you deleted a Kibana route, the Cluster Logging Operator (CLO) could not recover or recreate it. Now, the CLO watches the route, and if you delete the route, the OpenShift Elasticsearch Operator can reconcile or recreate it. ([**BZ#1890825**](https://bugzilla.redhat.com/show_bug.cgi?id=1890825))
*   Previously, the Cluster Logging Operator (CLO) would attempt to reconcile the Elasticsearch resource, which depended upon the Red Hat-provided Elastic Custom Resource Definition (CRD). Attempts to list an unknown kind caused the CLO to exit its reconciliation loop. This happened because the CLO tried to reconcile all of its managed resources whether they were defined or not. The current release fixes this issue. The CLO only reconciles types provided by the OpenShift Elasticsearch Operator if a user defines managed storage. As a result, users can create collector-only deployments of cluster logging by deploying the CLO. ([**BZ#1891738**](https://bugzilla.redhat.com/show_bug.cgi?id=1891738))
*   Previously, because of an LF GA syslog implementation for RFC 3164, logs sent to remote syslog were not compatible with the legacy behavior. The current release fixes this issue. AddLogSource adds details about log’s source details to the "message" field. Now, logs sent to remote syslog are compatible with the legacy behavior. ([**BZ#1891886**](https://bugzilla.redhat.com/show_bug.cgi?id=1891886))
*   Previously, the Elasticsearch rollover pods failed with a `resource_already_exists_exception` error. Within the Elasticsearch rollover API, when the next index was created, the `*-write` alias was not updated to point to it. As a result, the next time the rollover API endpoint was triggered for that particular index, it received an error that the resource already existed.

    The current release fixes this issue. Now, when a rollover occurs in the `indexmanagement` cronjobs, if a new index was created, it verifies that the alias points to the new index. This behavior prevents the error. If the cluster is already receiving this error, a cronjob fixes the issue so that subsequent runs work as expected. Now, performing rollovers no longer produces the exception. ([**BZ#1893992**](https://bugzilla.redhat.com/show_bug.cgi?id=1893992))
*   Previously, Fluent stopped sending logs even though the logging stack seemed functional. Logs were not shipped to an endpoint for an extended period even when an endpoint came back up. This happened if the max backoff time was too long and the endpoint was down. The current release fixes this issue by lowering the max backoff time, so the logs are shipped sooner. ([**BZ#1894634**](https://bugzilla.redhat.com/show_bug.cgi?id=1894634))
*   Previously, omitting the Storage size of the Elasticsearch node caused panic in the OpenShift Elasticsearch Operator code. This panic appeared in the logs as: `Observed a panic: "invalid memory address or nil pointer dereference"` The panic happened because although Storage size is a required field, the software didn’t check for it. The current release fixes this issue, so there is no panic if the storage size is omitted. Instead, the storage defaults to ephemeral storage and generates a log message for the user. ([**BZ#1899589**](https://bugzilla.redhat.com/show_bug.cgi?id=1899589))
*   Previously, `elasticsearch-rollover` and `elasticsearch-delete` pods remained in the `Invalid JSON:` or `ValueError: No JSON object could be decoded` error states. This exception was raised because there was no exception handler for invalid JSON input. The current release fixes this issue by providing a handler for invalid JSON input. As a result, the handler outputs an error message instead of an exception traceback, and the `elasticsearch-rollover` and `elasticsearch-delete` jobs do not remain those error states. ([**BZ#1899905**](https://bugzilla.redhat.com/show_bug.cgi?id=1899905))
*   Previously, when deploying Fluentd as a stand-alone, a Kibana pod was created even if the value of `replicas` was `0`. This happened because Kibana defaulted to `1` pod even when there were no Elasticsearch nodes. The current release fixes this. Now, a Kibana only defaults to `1` when there are one or more Elasticsearch nodes. ([**BZ#1901424**](https://bugzilla.redhat.com/show_bug.cgi?id=1901424))
*   Previously, if you deleted the secret, it was not recreated. Even though the certificates were on a disk local to the operator, they weren’t rewritten because they hadn’t changed. That is, certificates were only written if they changed. The current release fixes this issue. It rewrites the secret if the certificate changes or is not found. Now, if you delete the master-certs, they are replaced. ([**BZ#1901869**](https://bugzilla.redhat.com/show_bug.cgi?id=1901869))
*   Previously, if a cluster had multiple custom resources with the same name, the resource would get selected alphabetically when not fully qualified with the API group. As a result, if you installed both Red Hat’s OpenShift Elasticsearch Operator alongside the OpenShift Elasticsearch Operator, you would see failures when collected data via a must-gather report. The current release fixes this issue by ensuring must-gathers now use the full API group when gathering information about the cluster’s custom resources. ([**BZ#1897731**](https://bugzilla.redhat.com/show_bug.cgi?id=1897731))
*   An earlier bug fix to address issues related to certificate generation introduced an error. Trying to read the certificates caused them to be regenerated because they were recognized as missing. This, in turn, triggered the OpenShift Elasticsearch Operator to perform a rolling upgrade on the Elasticsearch cluster and, potentially, to have mismatched certificates. This bug was caused by the operator incorrectly writing certificates to the working directory. The current release fixes this issue. Now the operator consistently reads and writes certificates to the same working directory, and the certificates are only regenerated if needed. ([**BZ#1905910**](https://bugzilla.redhat.com/show_bug.cgi?id=1905910))
*   Previously, queries to the root endpoint to retrieve the Elasticsearch version received a 403 response. The 403 response broke any services that used this endpoint in prior releases. This error happened because non-administrative users did not have the `monitor` permission required to query the root endpoint and retrieve the Elasticsearch version. Now, non-administrative users can query the root endpoint for the deployed version of Elasticsearch. ([**BZ#1906765**](https://bugzilla.redhat.com/show_bug.cgi?id=1906765))
*   Previously, in some bulk insertion situations, the Elasticsearch proxy timed out connections between fluentd and Elasticsearch. As a result, fluentd failed to deliver messages and logged a `Server returned nothing (no headers, no data)` error. The current release fixes this issue: It increases the default HTTP read and write timeouts in the Elasticsearch proxy from five seconds to one minute. It also provides command-line options in the Elasticsearch proxy to control HTTP timeouts in the field. ([**BZ#1908707**](https://bugzilla.redhat.com/show_bug.cgi?id=1908707))
*   Previously, in some cases, the {{ ProductName }}/Elasticsearch dashboard was missing from the {{ product_title }} monitoring dashboard because the dashboard configuration resource referred to a different namespace owner and caused the {{ product_title }} to garbage-collect that resource. Now, the ownership reference is removed from the OpenShift Elasticsearch Operator reconciler configuration, and the logging dashboard appears in the console. ([**BZ#1910259**](https://bugzilla.redhat.com/show_bug.cgi?id=1910259))
*   Previously, the code that uses environment variables to replace values in the Kibana configuration file did not consider commented lines. This prevented users from overriding the default value of server.maxPayloadBytes. The current release fixes this issue by uncommenting the default value of server.maxPayloadByteswithin. Now, users can override the value by using environment variables, as documented. ([**BZ#1918876**](https://bugzilla.redhat.com/show_bug.cgi?id=1918876))
*   Previously, the Kibana log level was increased not to suppress instructions to delete indices that failed to migrate, which also caused the display of GET requests at the INFO level that contained the Kibana user’s email address and OAuth token. The current release fixes this issue by masking these fields, so the Kibana logs do not display them. ([**BZ#1925081**](https://bugzilla.redhat.com/show_bug.cgi?id=1925081))

## Known issues {id="openshift-logging-5-0-known-issues"}

*   Fluentd pods with the `ruby-kafka-1.1.0` and `fluent-plugin-kafka-0.13.1` gems are not compatible with Apache Kafka version 0.10.1.0.

    As a result, log forwarding to Kafka fails with a message: `error_class=Kafka::DeliveryFailed error="Failed to send messages to flux-openshift-v4/1"`

    The `ruby-kafka-0.7` gem dropped support for Kafka 0.10 in favor of native support for Kafka 0.11. The `ruby-kafka-1.0.0` gem added support for Kafka 2.3 and 2.4. The current version of OpenShift Logging tests and therefore supports Kafka version 2.4.1.

    To work around this issue, upgrade to a supported version of Apache Kafka.

    ([**BZ#1907370**](https://bugzilla.redhat.com/show_bug.cgi?id=1907370))