{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster logging and log forwarding {id="ztp-sno-du-configuring-logging-locally-and-forwarding_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require logging and log forwarding for debugging.
The following custom resources (CRs) are required. {._abstract}

<a name="ztp-clusterlogforwarder-yaml"></a>
```yaml title="Recommended ClusterLogForwarder.yaml" {minja}
{% include "./snippets/ztp_ClusterLogForwarder.yaml" %}
```


:::note

Set the `spec.outputs.kafka.url` field to the URL of the Kafka server where the logs are forwarded to.

:::


<a name="ztp-clusterlogns-yaml"></a>
```yaml title="Recommended ClusterLogNS.yaml" {minja}
{% include "./snippets/ztp_ClusterLogNS.yaml" %}
```

<a name="ztp-clusterlogopergroup-yaml"></a>
```yaml title="Recommended ClusterLogOperGroup.yaml" {minja}
{% include "./snippets/ztp_ClusterLogOperGroup.yaml" %}
```

<a name="ztp-clusterlogserviceaccount-yaml"></a>
```yaml title="Recommended ClusterLogServiceAccount.yaml" {minja}
{% include "./snippets/ztp_ClusterLogServiceAccount.yaml" %}
```

<a name="ztp-clusterlogserviceaccountauditbinding-yaml"></a>
```yaml title="Recommended ClusterLogServiceAccountAuditBinding.yaml" {minja}
{% include "./snippets/ztp_ClusterLogServiceAccountAuditBinding.yaml" %}
```

<a name="ztp-clusterlogserviceaccountinfrastructurebinding-yaml"></a>
```yaml title="Recommended ClusterLogServiceAccountInfrastructureBinding.yaml" {minja}
{% include "./snippets/ztp_ClusterLogServiceAccountInfrastructureBinding.yaml" %}
```

<a name="ztp-clusterlogsubscription-yaml"></a>
```yaml title="Recommended ClusterLogSubscription.yaml" {minja}
{% include "./snippets/ztp_ClusterLogSubscription.yaml" %}
```