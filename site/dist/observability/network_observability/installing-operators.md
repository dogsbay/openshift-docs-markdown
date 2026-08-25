---
title: Installing the Network Observability Operator
---

# Installing the Network Observability Operator {#installing-network-observability-operators}

Installing the Loki Operator is recommended before using the Network Observability Operator. You can use network observability without Loki, but special considerations apply if you only need metrics or external exporters.

The {{ loki_op }} integrates a gateway that implements multi-tenancy and authentication with Loki for data flow storage. The `LokiStack` resource manages Loki, which is a scalable, highly-available, multi-tenant log aggregation system, and a web proxy with OpenShift Container Platform authentication. The `LokiStack` proxy uses OpenShift Container Platform authentication to enforce multi-tenancy and facilitate the saving and indexing of data in Loki log stores.

**Additional resources**

- [Export enriched network flow data](/openshift-docs-markdown/observability/network_observability/configuring-operator#network-observability-enriched-flows_network_observability)

**Additional resources**

- [Fine grained access for Loki logs](https://docs.redhat.com/en/documentation/red_hat_openshift_logging/6.5/html/configuring_logging/configuring-lokistack-storage#logging-loki-log-access_configuring-the-log-store)

**Additional resources**

- [Creating a LokiStack custom resource](/openshift-docs-markdown/observability/network_observability/installing-operators#network-observability-lokistack-create_network_observability)
- [Loki object storage](https://docs.redhat.com/en/documentation/red_hat_openshift_logging/latest/html/configuring_logging/configuring-lokistack-storage#logging-loki-storage_configuring-the-log-store)
- [Loki deployment sizing](https://docs.redhat.com/en/documentation/red_hat_openshift_logging/latest/html/configuring_logging/configuring-lokistack-storage.html#loki-sizing_configuring-the-log-store)
- [LokiStack API reference](https://loki-operator.dev/docs/api.md/#loki-grafana-com-v1-IngestionLimitSpec)
- [Flow Collector API Reference](/openshift-docs-markdown/observability/network_observability/flowcollector-api#network-observability-flowcollector-api-specifications_network_observability)
- [Flow Collector sample resource](/openshift-docs-markdown/observability/network_observability/configuring-operator#network-observability-flowcollector-view_network_observability)

**Additional resources**

- [Configuring the Flow Collector resource with Kafka](/openshift-docs-markdown/observability/network_observability/configuring-operator#network-observability-flowcollector-kafka-config_network_observability)
- [Export enriched network flow data to Kafka or IPFIX](/openshift-docs-markdown/observability/network_observability/configuring-operator#network-observability-enriched-flows_network_observability)
- [Configuring monitoring for SR-IOV interface traffic](/openshift-docs-markdown/observability/network_observability/network-observability-secondary-networks#network-observability-SR-IOV-config_network-observability-secondary-networks)
- [Working with conversation tracking](/openshift-docs-markdown/observability/network_observability/observing-network-traffic#network-observability-working-with-conversations_nw-observe-network-traffic)
- [Working with DNS tracking](/openshift-docs-markdown/observability/network_observability/observing-network-traffic#network-observability-dns-tracking_nw-observe-network-traffic)
- [Working with packet drops](/openshift-docs-markdown/observability/network_observability/observing-network-traffic#network-observability-packet-drops_nw-observe-network-traffic)
- [Flow Collector API Reference](/openshift-docs-markdown/observability/network_observability/flowcollector-api#network-observability-flowcollector-api-specifications_network_observability)
- [Flow Collector sample resource](/openshift-docs-markdown/observability/network_observability/configuring-operator#network-observability-flowcollector-view_network_observability)
- [Resource considerations](/openshift-docs-markdown/observability/network_observability/configuring-operator#network-observability-resources-table_network_observability)
- [Troubleshooting network observability controller manager pod runs out of memory](/openshift-docs-markdown/observability/network_observability/troubleshooting-network-observability#controller-manager-pod-runs-out-of-memory_network-observability-troubleshooting)
- [Network observability architecture](/openshift-docs-markdown/observability/network_observability/understanding-network-observability-operator#network-observability-architecture_nw-network-observability-operator)

**Additional resources**

- [Kubernetes Storage Version Migrator Operator](/openshift-docs-markdown/operators/operator-reference#cluster-kube-storage-version-migrator-operator_operator-reference)
