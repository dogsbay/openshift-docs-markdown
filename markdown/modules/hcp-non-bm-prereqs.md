{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites for deploying {{ hcp }} on non-bare-metal agent machines {id="hcp-non-bm-prereqs_{{ context }}"}

Before you deploy {{ hcp }} on non-bare-metal agent machines, ensure you meet the prerequisites. {._abstract}

*   You must have {{ mce }} 2.5 or later installed on an {{ product_title }} cluster. You can install the {{ mce_short }} as an Operator from the {{ product_title }} software catalog.
*   You must have at least one managed {{ product_title }} cluster for the {{ mce_short }}. The `local-cluster` management cluster is automatically imported. For more information about the `local-cluster`, see "Advanced configuration" in the {{ rh_rhacm_title }} documentation. You can check the status of your management cluster by running the following command:
    ```terminal
    $ oc get managedclusters local-cluster
    ```
*   You have enabled central infrastructure management. For more information, see "Enabling the central infrastructure management service" in the {{ rh_rhacm_title }} documentation.
*   You have installed the `hcp` command-line interface.
*   Your hosted cluster has a cluster-wide unique name.
*   You are running the management cluster and workers on the same infrastructure.