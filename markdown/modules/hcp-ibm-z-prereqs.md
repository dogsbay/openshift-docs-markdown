{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites to configure {{ hcp }} on {{ ibm_z_title }} {id="hcp-ibm-z-prereqs_{{ context }}"}

Ensure you meet the prerequisites to configure {{ hcp }} on {{ ibm_z_title }}. {._abstract}

*   The {{ mce }} version 2.7 or later must be installed on an {{ product_title }} cluster. You can install {{ mce_short }} as an Operator from the {{ product_title }} OperatorHub.
*   The {{ mce_short }} must have at least one managed {{ product_title }} cluster. The `local-cluster` is automatically imported in {{ mce_short }} 2.7 and later. For more information about the `local-cluster`, see _Advanced configuration_ in the Red&#160;Hat Advanced Cluster Management documentation. You can check the status of your hub cluster by running the following command:
    ```terminal
    $ oc get managedclusters local-cluster
    ```
*   You need a hosting cluster with at least three worker nodes to run the HyperShift Operator.
*   You need to enable the central infrastructure management service. For more information, see "Enabling the central infrastructure management service".
*   You need to install the hosted control plane command-line interface. For more information, see "Installing the hosted control plane command-line interface".


:::note

The _management_ cluster can run on either the x86_64 architecture, supported beginning with {{ product_title }} 4.17 and {{ mce }} 2.7, or the s390x architecture, supported beginning with {{ product_title }} 4.20 and {{ mce }} 2.10.

:::