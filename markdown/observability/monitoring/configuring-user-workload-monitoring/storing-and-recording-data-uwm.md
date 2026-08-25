{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Storing and recording data for user workload monitoring {id="storing-and-recording-data-uwm"}
{%- set context = "storing-and-recording-data-uwm" %}

Store and record your metrics and alerting data, configure logs to specify which activities are recorded, control how long Prometheus retains stored data, and set the maximum amount of disk space for the data. These actions help you protect your data and use them for troubleshooting.

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-persistent-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-configuring-a-persistent-volume-claim.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [PersistentVolumeClaims (Kubernetes documentation)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +2 %}{% include "./modules/monitoring-resizing-a-persistent-volume.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not openshift_rosa_hcp %}
*   [Prometheus database storage requirements](/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#prometheus-database-storage-requirements_recommended-infrastructure-practices)
{%- endif %}
*   [Expanding persistent volume claims (PVCs) with a file system](/storage/expanding-persistent-volumes#expanding-pvc-filesystem_expanding-persistent-volumes)

{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-modifying-retention-time-and-size-for-prometheus-metrics-data.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-modifying-the-retention-time-for-thanos-ruler-metrics-data.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Retention time and size for Prometheus metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#retention-time-and-size-for-prometheus-metrics-data_key-concepts)
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{% endif %}
{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Prometheus database storage requirements](/scalability_and_performance/recommended-performance-scale-practices/recommended-infrastructure-practices#prometheus-database-storage-requirements_recommended-infrastructure-practices)
*   [Recommended configurable storage technology](/scalability_and_performance/optimization/optimizing-storage#recommended-configurable-storage-technology_persistent-storage)
*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-setting-log-levels-for-monitoring-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-setting-query-log-file-for-prometheus.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}

**Additional resources**
{._additional-resources}

*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{% endif %}