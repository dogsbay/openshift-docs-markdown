{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Network Observability Operator {id="network-observability-operator-installation_{{ context }}"}

Install the Network Observability Operator and use the setup wizard to create the `FlowCollector` custom resource definition (CRD) to complete the initial configuration. {._abstract}

You can set specifications in the web console when you create the `FlowCollector`.


:::important

The actual memory consumption of the Operator depends on your cluster size and the number of resources deployed. Memory consumption might need to be adjusted accordingly. For more information refer to "Network Observability controller manager pod runs out of memory" in the "Important Flow Collector configuration considerations" section.

:::


**Prerequisites**

*   If you choose to use Loki, install the [{{ loki_op }} version 5.7+](https://catalog.redhat.com/software/containers/openshift-logging/loki-rhel8-operator/622b46bcae289285d6fcda39).
*   You must have `cluster-admin` privileges.
*   One of the following supported architectures is required: `amd64`, `ppc64le`, `arm64`, or `s390x`.
*   Any CPU supported by Red Hat Enterprise Linux (RHEL) 9.
*   Must be configured with OVN-Kubernetes as the main network plugin, and optionally using secondary interfaces with Multus and SR-IOV.


:::note

Additionally, this installation example uses the `netobserv` namespace, which is used across all components. You can optionally use a different namespace.

:::


**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Software Catalog**.
1.  Choose  **Network Observability Operator** from the list of available Operators in the software catalog, and click **Install**.
1.  Select the checkbox `Enable Operator recommended cluster monitoring on this Namespace`.
1.  Navigate to **Operators** -> **Installed Operators**. Under Provided APIs for Network Observability, select the **Flow Collector** link.
1.  Follow the **Network Observability FlowCollector setup** wizard.
1.  Click **Create**.

**Verification**

To confirm this was successful, when you navigate to **Observe** you should see **Network Traffic** listed in the options.

In the absence of **Application Traffic** within the {{ product_title }} cluster, default filters might show that there are "No results", which results in no visual flow. Beside the filter selections, select **Clear all filters** to see the flow.