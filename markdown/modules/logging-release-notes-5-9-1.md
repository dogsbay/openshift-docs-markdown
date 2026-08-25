{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 5.9.1 {id="logging-release-notes-5-9-1_{{ context }}"}
This release includes [OpenShift Logging Bug Fix Release 5.9.1](https://access.redhat.com/errata/RHSA-2024:2096)

## Enhancements {id="logging-release-notes-5-9-1-enhancements"}

*   Before this update, the {{ loki_op }} configured Loki to use path-based style access for the Amazon Simple Storage Service (S3), which has been deprecated. With this update, the {{ loki_op }} defaults to virtual-host style without users needing to change their configuration. ([LOG-5401](https://issues.redhat.com/browse/LOG-5401))
*   Before this update, the {{ loki_op }} did not validate the Amazon Simple Storage Service (S3) endpoint used in the storage secret. With this update, the validation process ensures the S3 endpoint is a valid S3 URL, and the `LokiStack` status updates to indicate any invalid URLs. ([LOG-5395](https://issues.redhat.com/browse/LOG-5395))

## Bug Fixes {id="logging-release-notes-5-9-1-bug-fixes"}

*   Before this update, a bug in LogQL parsing left out some line filters from the query. With this update, the parsing now includes all the line filters while keeping the original query unchanged. ([LOG-5268](https://issues.redhat.com/browse/LOG-5268))
*   Before this update, a prune filter without a defined `pruneFilterSpec` would cause a segfault. With this update, there is a validation error if a prune filter is without a defined `puneFilterSpec`. ([LOG-5322](https://issues.redhat.com/browse/LOG-5322))
*   Before this update, a drop filter without a defined `dropTestsSpec` would cause a segfault. With this update, there is a validation error if a prune filter is without a defined `puneFilterSpec`. ([LOG-5323](https://issues.redhat.com/browse/LOG-5323))
*   Before this update, the {{ loki_op }} did not validate the Amazon Simple Storage Service (S3) endpoint URL format used in the storage secret. With this update, the S3 endpoint URL goes through a validation step that reflects on the status of the `LokiStack`. ([LOG-5397](https://issues.redhat.com/browse/LOG-5397))
*   Before this update, poorly formatted timestamp fields in audit log records led to `WARN` messages in {{ clo }} logs. With this update, a remap transformation ensures that the timestamp field is properly formatted. ([LOG-4672](https://issues.redhat.com/browse/LOG-4672))
*   Before this update, the error message thrown while validating a `ClusterLogForwarder` resource name and namespace did not correspond to the correct error. With this update, the system checks if a `ClusterLogForwarder` resource with the same name exists in the same namespace. If not, it corresponds to the correct error. ([LOG-5062](https://issues.redhat.com/browse/LOG-5062))
*   Before this update, the validation feature for output config required a TLS URL, even for services such as Amazon CloudWatch or {{ gcp_full }} Logging where a URL is not needed by design. With this update, the validation logic for services without URLs are improved, and the error message are more informative. ([LOG-5307](https://issues.redhat.com/browse/LOG-5307))
*   Before this update, defining an infrastructure input type did not exclude {{ logging }} workloads from the collection. With this update, the collection excludes {{ logging }} services to avoid feedback loops. ([LOG-5309](https://issues.redhat.com/browse/LOG-5309))

## CVEs {id="logging-release-notes-5-9-1-CVEs"}
No CVEs.