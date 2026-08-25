{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator subscriptions {id="ztp-sno-du-subscribing-to-the-operators-needed-for-platform-configuration_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require the following `Subscription` CRs. The subscription provides the location to download the following Operators: {._abstract}

*   Local Storage Operator
*   Logging Operator
*   PTP Operator
*   SR-IOV Network Operator
*   SRIOV-FEC Operator

For each Operator subscription, specify the channel to get the Operator from. The recommended channel is `stable`.

You can specify `Manual` or `Automatic` updates.
In `Automatic` mode, the Operator automatically updates to the latest versions in the channel as they become available in the registry.
In `Manual` mode, new Operator versions are installed only when they are explicitly approved.


:::tip

Use `Manual` mode for subscriptions. This allows you to control the timing of Operator updates to fit within scheduled maintenance windows.

:::


```yaml title="Recommended Local Storage Operator subscription (StorageSubscription.yaml)"
{% include "./snippets/ztp_StorageSubscription.yaml" %}
```

```yaml title="Recommended SR-IOV Operator subscription (SriovSubscription.yaml)"
{% include "./snippets/ztp_SriovSubscription.yaml" %}
```

```yaml title="Recommended PTP Operator subscription (PtpSubscription.yaml)"
{% include "./snippets/ztp_PtpSubscription.yaml" %}
```

```yaml title="Recommended Cluster Logging Operator subscription (ClusterLogSubscription.yaml)"
{% include "./snippets/ztp_ClusterLogSubscription.yaml" %}
```