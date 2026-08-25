{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ zero_trust_full }} monitoring available metrics {id="zero-trust-manager-available-metrics_{{ context }}"}

Monitor the health and performance of {{ zero_trust_full }} components by reviewing exposed metrics. This reference describes controller, certificate, and runtime metrics that help you maintain system health and troubleshoot errors. {._abstract}

The {{ zero_trust_full }} exposes the following metrics:


Controller runtime metrics

:   *   `controller_runtime_active_workers`: Number of currently used workers per controller
    *   `controller_runtime_max_concurrent_reconciles`: Maximum number of concurrent reconciles per controller
    *   `controller_runtime_reconcile_errors_total`: Total number of reconciliation errors per controller
    *   `controller_runtime_reconcile_time_seconds`: Length of time per reconciliation per controller
    *   `controller_runtime_reconcile_total`: Total number of reconciliations per controller

Certificate watcher metrics

:   *   `certwatcher_read_certificate_errors_total`: Total number of certificate read errors
    *   `certwatcher_read_certificate_total`: Total number of certificates read

Go runtime metrics

:   Standard Go runtime metrics including:

    *   `go_gc_duration_seconds`: Garbage collection duration
    *   `go_goroutines`: Number of goroutines
    *   `go_memstats_*`: Memory statistics
    *   `process_*`: Process statistics

Custom Operator metrics

:   The operator also exposes custom metrics related to:

    *   SPIRE Server status and health
    *   SPIRE Agent deployment status
    *   SPIFFE CSI Driver status
    *   OIDC Discovery Provider status
    *   Workload identity management operations