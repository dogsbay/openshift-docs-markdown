{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ hcp }} on bare metal with the Agent platform {id="hcp-bm-overview_{{ context }}"}

You can deploy {{ hcp }} on bare-metal infrastructure with the Agent platform by configuring an {{ product_title }} cluster to function as a management cluster.  {._abstract}

The management cluster is the {{ product_title }} cluster where the control planes are hosted. In some contexts, the management cluster is also known as the _hosting_ cluster. The management cluster is not the same thing as the _managed_ cluster. A managed cluster is a cluster that the hub cluster manages.

The {{ hcp }} feature is enabled by default.

The {{ mce_short }} supports only the default `local-cluster`, which is a hub cluster that is managed, and the hub cluster as the management cluster. If you have {{ rh_rhacm_title }} installed, you can use the managed hub cluster, also known as the `local-cluster`, as the management cluster.

A _hosted cluster_ is an {{ product_title }} cluster with its API endpoint and control plane that are hosted on the management cluster. The hosted cluster includes the control plane and its corresponding data plane. You can use the {{ mce_short }} console or the hosted control plane command-line interface (`hcp`) to create a hosted cluster.

The hosted cluster is automatically imported as a managed cluster. If you want to disable this automatic import feature, see "Disabling the automatic import of hosted clusters into {{ mce_short }}".