{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 6.1.2 Release Notes {id="logging-release-notes-6-1-2_{{ context }}"}

This release includes [{{ logging_uc }} {{ for }} Bug Fix Release 6.1.2](https://access.redhat.com/errata/RHBA-2025:1229).

## New Features and Enhancements {id="logging-release-notes-6-1-2-enhancements_{{ context }}"}

*   This enhancement adds `OTel` semantic stream labels to the `lokiStack` output so that you can query logs by using both `ViaQ` and `OTel` stream labels.
([LOG-6579](https://issues.redhat.com/browse/LOG-6579))

## Bug Fixes {id="logging-release-notes-6-1-2-bug-fixes_{{ context }}"}

*   Before this update, the collector alerting rules contained summary and message fields. With this update, the collector alerting rules contain summary and description fields.
([LOG-6126](https://issues.redhat.com/browse/LOG-6126))
*   Before this update, the collector metrics dashboard could get removed after an Operator upgrade due to a race condition during the transition from the old to the new pod deployment. With this update, labels are added to the dashboard `ConfigMap` to identify the upgraded deployment as the current owner so that it will not be removed.
([LOG-6280](https://issues.redhat.com/browse/LOG-6280))
*   Before this update, when you included infrastructure namespaces in application inputs, their `log_type` would be set to `application`. With this update, the `log_type` of infrastructure namespaces included in application inputs is set to `infrastructure`.
([LOG-6373](https://issues.redhat.com/browse/LOG-6373))
*   Before this update, the Cluster Logging Operator used a cached client to fetch the `SecurityContextConstraint` cluster resource, which could result in an error when the cache is invalid. With this update, the Operator now always retrieves data from the API server instead of using a cache.
([LOG-6418](https://issues.redhat.com/browse/LOG-6418))
*   Before this update, the logging `must-gather` did not collect resources such as `UIPlugin`, `ClusterLogForwarder`, `LogFileMetricExporter`, and `LokiStack`. With this update, the `must-gather` now collects all of these resources and places them in their respective namespace directory instead of the `cluster-logging` directory.
([LOG-6422](https://issues.redhat.com/browse/LOG-6422))
*   Before this update, the Vector startup script attempted to delete buffer lock files during startup. With this update, the Vector startup script no longer attempts to delete buffer lock files during startup.
([LOG-6506](https://issues.redhat.com/browse/LOG-6506))
*   Before this update, the API documentation incorrectly claimed that `lokiStack` outputs would default the target namespace, which could prevent the collector from writing to that output. With this update, this claim has been removed from the API documentation and the Cluster Logging Operator now validates that a target namespace is present.
([LOG-6573](https://issues.redhat.com/browse/LOG-6573))
*   Before this update, the Cluster Logging Operator could deploy the collector with output configurations that were not referenced by any inputs. With this update, a validation check for the `ClusterLogForwarder` resource prevents the Operator from deploying the collector.
([LOG-6585](https://issues.redhat.com/browse/LOG-6585))

## CVEs {id="logging-release-notes-6-1-2-CVEs_{{ context }}"}

*   [CVE-2019-12900](https://access.redhat.com/security/cve/CVE-2019-12900)