{%- set _mod_docs_content_type = "CONCEPT" %}
# On-demand {{ insights_operator }} gather operations {id="running-insights-operator-gather_{{ context }}"}

Instead of waiting for the next periodic data gather operation, you can run a custom on-demand {{ insights_operator }} data gather operation by using the {{ product_title }} web console or command-line interface (CLI). {._abstract}

A periodic data gather operation uses the `InsightsDataGather` custom resource definition (CRD) for configuration instructions, whereas an on-demand equivalent requires a `DataGather` CRD to be configured.

An on-demand `DataGather` operation is:

*   Useful for one-off data collections that require different CRD configurations to the periodic data gathering (`InsightsDataGather`) specification.
*   Independent from the periodic data gathering. When you create an on-demand `DataGather` CRD, the configuration is independent from the `InsightsDataGather` CRD specification of your periodic data gathering job.

**Custom specification options**

You can optionally customize the following items for the on-demand data gather operation:

*   **Enable and define data obfuscation:** By defining the `DataGather` `dataPolicy` specification, you can enable additional obfuscation of the {{ red_hat_lightspeed }} archive data, for example, the IP address or workload names.
*   **Enable persistent storage:** By default, the {{ insights_operator }} uses ephemeral storage, which means that a new pod will be created for each gather operation and the history of gather operations and data collected is not retained. You can switch to persistent storage to retain the data and history for up to the last 10 gather operations by defining the `DataGather` `storage` specification in the CRD.
*   **Exclude specific data gather operations:** You can choose to disable specific gather operations from running by defining the `DataGather` `gatherers` specification. For example, you can choose to disable the cluster authentication operation or the workload data operation.


:::important

Excluding gather operations from the default list might reduce or limit the  recommendations offered by the {{ red_hat_lightspeed }} advisor service for your cluster.

:::


If you do not configure any custom specification options in the `DataGather` CRD, the default {{ insights_operator }} data collection job will run. This means that all gather operations will run, the collected data will be unobfuscated and the archive file will not be retained.

When you run a gather operation on-demand, any configuration that was previously applied to disable {{ insights_operator }} gather operations for your cluster will be overridden.

{%- set FeatureName = "The `DataGather` custom resource" %}
{% include "./snippets/technology-preview.md" %}


:::note

If you enable Technology Preview in your cluster, the {{ insights_operator }} runs gather operations in individual pods. This is part of the Technology Preview feature set for the {{ insights_operator }} and supports the new data gathering features.

:::