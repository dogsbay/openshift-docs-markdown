{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites to deploy {{ hcp }} on {{ aws_short }} {id="hcp-aws-prereqs_{{ context }}"}

To ensure successful deployment of {{ hcp }} on {{ aws_first }}, your environment must meet the following requirements. {._abstract}

*   You installed the {{ mce }} 2.5 and later on an {{ product_title }} cluster. The {{ mce_short }} is automatically installed when you install {{ rh_rhacm_first }}. The {{ mce_short }} can also be installed without {{ rh_rhacm }} as an Operator from the {{ product_title }} software catalog.
*   You have at least one managed {{ product_title }} cluster for the {{ mce_short }}. The `local-cluster` is automatically imported in the {{ mce_short }} version 2.5 and later. You can check the status of your hub cluster by running the following command:
    ```terminal
    $ oc get managedclusters local-cluster
    ```
*   You installed the [`aws` command-line interface (CLI)](https://aws.amazon.com/cli/).
*   You installed the hosted control plane CLI, `hcp`.


:::important

*   Run the management cluster and compute nodes on the same platform.
*   For each hosted cluster, provide a cluster-wide unique name. A hosted cluster name cannot be the same as any existing managed cluster in order for {{ mce_short }} to manage it.
*   Do not use `clusters` as a hosted cluster name.
*   Do not create a hosted cluster in the namespace of a {{ mce_short }} managed cluster.

:::