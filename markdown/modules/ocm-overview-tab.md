{%- set _mod_docs_content_type = "REFERENCE" %}
# Overview tab {id="ocm-overview-tab_{{ context }}"}

The **Overview** tab provides information about how the cluster was configured: {._abstract}

*   **Cluster ID** is the unique identification for the created cluster. This ID can be used when issuing commands to the cluster from the command line.
*   **Domain prefix** is the prefix that is used throughout the cluster. The default value is the cluster’s name.
*   **Type** shows the type of cluster, for example {{ rosa_classic_title }}, {{ rosa_title }}, or {{ dedicated }}.
{%- if not openshift_rosa %}
*   **Control plane type** is the architecture type of the cluster. The field only displays if the cluster uses a hosted control plane architecture.
{%- endif %}
*   **Region** is the server region.
{%- if openshift_rosa %}
*   **Availability** shows which type of availability zone that the cluster uses, either single or multizone.
{%- endif %}
{%- if openshift_rosa_hcp %}
*   **Availability** shows multizone for {{ rosa_title }} clusters.
{%- endif %}
{%- if not openshift_enterprise %}
*   **Channel group** shows the update channel for the cluster, such as stable or eus. Support for channel groups varies by cluster version. If support channel editing is available, this field can be changed by clicking the pencil icon.
{%- endif %}
*   **Version** is the OpenShift version that is installed on the cluster. If there is an update available, you can update from this field.
*   **Created at** shows the date and time that the cluster was created.
*   **Owner** identifies who created the cluster and has owner rights.
*   **Delete Protection: &lt;status>** shows whether or not the cluster’s delete protection is enabled.
{%- if openshift_rosa_hcp %}
*   **Status** displays the current status of the control plane and machine pools of the cluster.
{%- endif %}
{%- if openshift_rosa %}
*   **Status** displays the current status of the cluster.
{%- endif %}
*   **Total vCPU** shows the total available virtual CPU for this cluster.
*   **Total memory** shows the total available memory for this cluster.
*   **Infrastructure AWS account** displays the AWS account that is responsible for cluster creation and maintenance.
{%- if openshift_rosa_hcp %}
*   **Billing marketplace account** displays the AWS account that is used for billing purposes. Click on the pencil icon to edit this field.
{%- endif %}
{%- if openshift_rosa %}
*   **Additional encryption** field shows any applicable additional encryption options.
{%- endif %}
*   **Nodes** shows the actual and desired nodes on the cluster. These numbers might not match due to cluster scaling.
{%- if openshift_rosa %}
*   **Cluster autoscaling** field shows whether or not you have enabled autoscaling on the cluster.
*   **Instance Metadata Service (IMDS)** field shows your selected instance metadata service for the cluster.
{%- endif %}
*   **Network** field shows the address and prefixes for network connectivity.
*   **OIDC configuration** field shows the Open ID Connect configuration for the cluster.
*   **Resource usage** section of the tab displays the resources in use with a graph.
*   **Advisor recommendations** section gives insight in relation to security, performance, availability, and stability. This section requires the use of remote health functionality. See _Using {{ red_hat_lightspeed }} to identify issues with the cluster_ in the _Additional resources_ section.