{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding network verification for {{ product_title }} clusters {id="osd-understanding-network-verification_{{ context }}"}

When you deploy
{%- if openshift_dedicated %}
an {{ product_title }}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }}
{%- endif %}
cluster into an existing Virtual Private Cloud (VPC) or create an additional machine pool with a subnet that is new to your cluster, network verification runs automatically. This helps you identify and resolve configuration issues before cluster deployment. {._abstract}

{% if openshift_dedicated %}
When you prepare to install your cluster by using {{ cluster_manager_first }}, the automatic checks run after you input a subnet into a subnet ID field on the **Virtual Private Cloud (VPC) subnet settings** page.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
When you prepare to install your cluster by using {{ cluster_manager_first }}, the automatic checks run after you input a subnet into a subnet ID field on the **Virtual Private Cloud (VPC) subnet settings** page. If you create your cluster by using the ROSA CLI (`rosa`) with the interactive mode, the checks run after you provide the required VPC network information. If you use the CLI without the interactive mode, the checks begin immediately before cluster creation.
{% endif %}

When you add a machine pool with a subnet that is new to your cluster, the automatic network verification checks the subnet to ensure that network connectivity is available before provisioning the machine pool.

After automatic network verification completes, the system sends a record to the service log. The record provides the results of the verification check, including any network configuration errors. You can resolve the identified issues before a deployment and the deployment has a greater chance of success.

You can also run the network verification manually for an existing cluster to verify the network configuration after making configuration changes. For steps to run the network verification checks manually, see _Running the network verification manually_.