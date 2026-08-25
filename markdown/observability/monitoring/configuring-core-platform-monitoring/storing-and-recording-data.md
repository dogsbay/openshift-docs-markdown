{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Storing and recording data for core platform monitoring {id="storing-and-recording-data"}
{%- set context = "storing-and-recording-data" %}

Store and record your metrics and alerting data, configure logs to specify which activities are recorded, control how long Prometheus retains stored data, and set the maximum amount of disk space for the data. These actions help you protect your data and use them for troubleshooting.

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-persistent-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-a-persistent-volume-claim.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [PersistentVolumeClaims (Kubernetes documentation)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)

{% leveloffset +2 %}{% include "./modules/monitoring-resizing-a-persistent-volume.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not openshift_rosa_hcp %}
*   [Prometheus database storage requirements](/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#prometheus-database-storage-requirements_recommended-infrastructure-practices)
{%- endif %}
*   [Expanding persistent volume claims (PVCs) with a file system](/storage/expanding-persistent-volumes#expanding-pvc-filesystem_expanding-persistent-volumes)

{% leveloffset +1 %}{% include "./modules/monitoring-modifying-retention-time-and-size-for-prometheus-metrics-data.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Retention time and size for Prometheus metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#retention-time-and-size-for-prometheus-metrics-data_key-concepts)
*   [Preparing to configure core platform monitoring stack](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#preparing-to-configure-the-monitoring-stack)
{%- if not openshift_rosa_hcp %}
*   [Prometheus database storage requirements](/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#prometheus-database-storage-requirements_recommended-infrastructure-practices)
*   [Recommended configurable storage technology](/scalability_and_performance/optimization/optimizing-storage#recommended-configurable-storage-technology_persistent-storage)
{%- endif %}
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
{%- if not openshift_rosa_hcp %}
*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-audit-logs-for-metrics-server.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-setting-log-levels-for-monitoring-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-setting-query-log-file-for-prometheus.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to configure core platform monitoring stack](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#preparing-to-configure-the-monitoring-stack)

{% leveloffset +1 %}{% include "./modules/monitoring-enabling-query-logging-for-thanos-querier.md" %}{% endleveloffset %}