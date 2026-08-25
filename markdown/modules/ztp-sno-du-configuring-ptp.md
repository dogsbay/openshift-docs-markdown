{%- set _mod_docs_content_type = "CONCEPT" %}
# PTP {id="ztp-sno-du-configuring-ptp_{{ context }}"}

{{ sno_caps }} clusters use Precision Time Protocol (PTP) for network time synchronization.
The following example `PtpConfig` custom resources (CRs) illustrate configurations for ordinary clocks, boundary clocks, and Telecom Grandmaster clocks on supported Intel Ethernet hardware.
You must select the profile that matches your qualified GNR-D hardware layout and complete interface renaming prerequisites before you apply Granite Rapids-D Telecom Grandmaster YAML on Intel Granite Rapids-D servers. {._abstract}

```yaml title="Recommended PTP ordinary clock configuration (PtpConfigSlave.yaml)"
{% include "./snippets/ztp_PtpConfigSlave.yaml" %}
```

```yaml title="Recommended boundary clock configuration (PtpConfigBoundary.yaml)"
{% include "./snippets/ztp_PtpConfigBoundary.yaml" %}
```

```yaml title="Recommended PTP Westport Channel e810 grandmaster clock configuration (PtpConfigGmWpc.yaml)"
{% include "./snippets/ztp_PtpConfigGmWpc.yaml" %}
```

{%- set FeatureName = "Telecom Grandmaster clock configuration on Intel Granite Rapids-D (GNR-D) hardware" %}
{% include "./snippets/technology-preview.md" %}
{%- set FeatureName = false %}

```yaml title="Recommended PTP Granite Rapids-D Telecom Grandmaster clock configuration (PtpConfigGnrdTGM.yaml)"
{% include "./snippets/ptp_PtpConfigGnrdTGM.yaml" %}
```

The following optional `PtpOperatorConfig` CR configures PTP events reporting for the node.

```yaml title="Recommended PTP events configuration (PtpOperatorConfigForEvent.yaml)"
{% include "./snippets/ztp_PtpOperatorConfigForEvent.yaml" %}
```

**Additional resources**
{._additional-resources}

*   [Configuring linuxptp services as a Telecom Grandmaster clock on Intel Granite Rapids-D hardware](/networking/advanced_networking/ptp/configuring-ptp#configuring-linuxptp-services-as-grandmaster-clock-gnrd_configuring-ptp)