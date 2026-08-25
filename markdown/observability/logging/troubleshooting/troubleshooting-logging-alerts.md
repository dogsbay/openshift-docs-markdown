{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting logging alerts {id="troubleshooting-logging-alerts"}
{%- set context = "troubleshooting-logging-alerts" %}

You can use the following procedures to troubleshoot logging alerts on your cluster.

{% leveloffset +1 %}{% include "./modules/es-cluster-health-is-red.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Reviewing monitoring dashboards as a cluster administrator](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#reviewing-monitoring-dashboards-admin_accessing-metrics-as-an-administrator)
*   [Fix a red or yellow cluster status](https://www.elastic.co/guide/en/elasticsearch/reference/7.13/fix-common-cluster-issues.html#fix-red-yellow-cluster-status)

## Elasticsearch cluster health status is yellow {id="elasticsearch-cluster-health-is-yellow" ._additional-resources}

Replica shards for at least one primary shard are not allocated to nodes. Increase the node count by adjusting the `nodeCount` value in the `ClusterLogging` custom resource (CR).

**Additional resources**
{._additional-resources}

*   [Fix a red or yellow cluster status](https://www.elastic.co/guide/en/elasticsearch/reference/7.13/fix-common-cluster-issues.html#fix-red-yellow-cluster-status)

{% leveloffset +1 %}{% include "./modules/es-node-disk-low-watermark-reached.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/es-node-disk-high-watermark-reached.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/es-node-disk-flood-watermark-reached.md" %}{% endleveloffset %}

## Elasticsearch JVM heap usage is high {id="troubleshooting-logging-alerts-es-jvm-heap-use-is-high" ._additional-resources}

The Elasticsearch node Java virtual machine (JVM) heap memory used is above 75%. Consider [increasing the heap size](https://www.elastic.co/guide/en/elasticsearch/reference/current/advanced-configuration.html#set-jvm-heap-size).

## Aggregated logging system CPU is high {id="troubleshooting-logging-alerts-aggregated-logging-system-cpu-is-high"}

System CPU usage on the node is high. Check the CPU of the cluster node. Consider allocating more CPU resources to the node.

## Elasticsearch process CPU is high {id="troubleshooting-logging-alerts-es-process-cpu-is-high"}

Elasticsearch process CPU usage on the node is high. Check the CPU of the cluster node. Consider allocating more CPU resources to the node.

{% leveloffset +1 %}{% include "./modules/es-disk-space-low.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Fix a red or yellow cluster status](https://www.elastic.co/guide/en/elasticsearch/reference/7.13/fix-common-cluster-issues.html#fix-red-yellow-cluster-status)

## Elasticsearch FileDescriptor usage is high {id="troubleshooting-logging-alerts-es-filedescriptor-usage-is-high" ._additional-resources}

Based on current usage trends, the predicted number of file descriptors on the node is insufficient. Check the value of `max_file_descriptors` for each node as described in the Elasticsearch [File Descriptors](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/file-descriptors.html) documentation.