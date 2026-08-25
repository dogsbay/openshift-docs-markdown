{%- set _mod_docs_content_type = "CONCEPT" %}
# Operators {id="ztp-sno-du-configuring-the-operators_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require the following Operators to be installed: {._abstract}

*   Local Storage Operator
*   Logging Operator
*   PTP Operator
*   SR-IOV Network Operator

You also need to configure a custom `CatalogSource` CR, disable the default `OperatorHub` configuration, and configure an `ImageContentSourcePolicy` mirror registry that is accessible from the clusters that you install.

```yaml title="Recommended Storage Operator namespace and Operator group configuration (StorageNS.yaml, StorageOperGroup.yaml)" {minja}
---
{% include "./snippets/ztp_StorageNS.yaml" %}
---
{% include "./snippets/ztp_StorageOperGroup.yaml" %}
```

```yaml title="Recommended Cluster Logging Operator namespace and Operator group configuration (ClusterLogNS.yaml, ClusterLogOperGroup.yaml)" {minja}
{% include "./snippets/ztp_ClusterLogNS.yaml" %}
{% include "./snippets/ztp_ClusterLogOperGroup.yaml" %}
```

```yaml title="Recommended PTP Operator namespace and Operator group configuration (PtpSubscriptionNS.yaml, PtpSubscriptionOperGroup.yaml)" {minja}
{% include "./snippets/ztp_PtpSubscriptionNS.yaml" %}
---
{% include "./snippets/ztp_PtpSubscriptionOperGroup.yaml" %}
```

```yaml title="Recommended SR-IOV Operator namespace and Operator group configuration (SriovSubscriptionNS.yaml, SriovSubscriptionOperGroup.yaml)" {minja}
---
{% include "./snippets/ztp_SriovSubscriptionNS.yaml" %}
---
{% include "./snippets/ztp_SriovSubscriptionOperGroup.yaml" %}
```

```yaml title="Recommended CatalogSource configuration (DefaultCatsrc.yaml)" {minja}
{% include "./snippets/ztp_DefaultCatsrc.yaml" %}
```

```yaml title="Recommended ImageContentSourcePolicy configuration (DisconnectedICSP.yaml)" {minja}
{% include "./snippets/ztp_DisconnectedICSP.yaml" %}
```

```yaml title="Recommended OperatorHub configuration (OperatorHub.yaml)" {minja}
{% include "./snippets/ztp_OperatorHub.yaml" %}
```