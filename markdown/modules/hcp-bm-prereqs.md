{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a management cluster for bare metal {id="hcp-bm-prereqs_{{ context }}"}

Before you create a hosted cluster on bare metal with the Agent platform, you need a properly configured {{ product_title }} management cluster. {._abstract}

**Prerequisites**

*   The management cluster and compute nodes must be on the same platform.
*   You need the {{ mce }} 2.2 and later installed on an {{ product_title }} cluster. You can install {{ mce_short }} as an Operator from the {{ product_title }} software catalog.

**Procedure**

1.  The {{ mce_short }} must have at least one managed {{ product_title }} cluster. The `local-cluster` is automatically imported in {{ mce_short }} 2.2 and later. For more information about the `local-cluster`, see "Advanced configuration" in the {{ rh_rhacm_title }} documentation. You can check the status of your hub cluster by running the following command:
    ```terminal
    $ oc get managedclusters local-cluster
    ```
1.  Add the `topology.kubernetes.io/zone` label to your bare-metal hosts on your management cluster. Ensure that each host has a unique value for `topology.kubernetes.io/zone`. Otherwise, all of the control plane pods are scheduled on a single node, causing a single point of failure.
1.  Use the Agent platform to provision {{ hcp }} on bare metal. The Agent platform uses the central infrastructure management service to add compute nodes to a hosted cluster. For more information, see "Enabling the central infrastructure management service".
1.  Install the hosted control plane command-line interface. For more information, see "Installing the {{ hcp }} command-line interface".