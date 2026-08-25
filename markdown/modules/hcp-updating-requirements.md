{%- set _mod_docs_content_type = "CONCEPT" %}
# Requirements to upgrade {{ hcp }} {id="hosted-control-planes-upgrading-requirements_{{ context }}"}

The {{ mce }} can manage one or more {{ product_title }} clusters. After you create a hosted cluster on {{ product_title }}, you must import your hosted cluster in the {{ mce_short }} as a managed cluster.  {._abstract}

You can then use the {{ product_title }} cluster as a management cluster.

Consider the following requirements before you start updating {{ hcp }}:

*   You must use the bare metal platform for an {{ product_title }} cluster when using {{ VirtProductName }} as a provider.
*   You must use bare metal or {{ VirtProductName }} as the cloud platform for the hosted cluster. You can find the platform type of your hosted cluster in the `spec.Platform.type` specification of the `HostedCluster` custom resource (CR).


:::important

You must update {{ hcp }} in the following order:

1.  Upgrade an {{ product_title }} cluster to the latest version. For more information, see "Updating a cluster using the web console" or "Updating a cluster using the CLI".
1.  Upgrade the {{ mce_short }} to the latest version. For more information, see "Updating installed Operators".
1.  Upgrade the hosted cluster and node pools from the previous {{ product_title }} version to the latest version. For more information, see "Updating a control plane in a hosted cluster" and "Updating node pools in a hosted cluster".

:::