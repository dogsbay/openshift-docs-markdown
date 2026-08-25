{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites to configure {{ hcp }} on {{ ibm_power_title }} {id="hcp-ibm-power-prereqs_{{ context }}"}

Ensure you meet the prerequisites to configure {{ hcp }} on {{ ibm_power_title }}. {._abstract}

*   The {{ mce }} version 2.7 and later installed on an {{ product_title }} cluster. The {{ mce_short }} is automatically installed when you install {{ rh_rhacm_first }}. You can also install the {{ mce_short }} without {{ rh_rhacm }} as an Operator from the {{ product_title }} software catalog.
*   The {{ mce_short }} must have at least one managed {{ product_title }} cluster. The `local-cluster` managed hub cluster is automatically imported in the {{ mce_short }} version 2.7 and later. For more information about `local-cluster`, see _Advanced configuration_ in the {{ rh_rhacm }} documentation. You can check the status of your hub cluster by running the following command:
    ```terminal
    $ oc get managedclusters local-cluster
    ```
*   You need a hosting cluster with at least 3 compute nodes to run the HyperShift Operator.
*   You need to enable the central infrastructure management service. For more information, see "Enabling the central infrastructure management service".
*   You need to install the hosted control planes command-line interface. For more information, see "Installing the hosted control plane command-line interface".

The {{ hcp }} feature is enabled by default. If you disabled the feature and want to manually enable the feature, see "Manually enabling the {{ hcp }} feature". If you need to disable the feature, see "Disabling the {{ hcp }} feature".