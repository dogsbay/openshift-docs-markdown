---
title: Installing a two-node OpenShift cluster with fencing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a two-node OpenShift cluster with fencing {id="installing-tnf"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "install-tnf" %}

For a highly available, small-footprint container platform at your edge sites or resource-constrained environments, you can deploy a two-node OpenShift cluster with fencing (TNF). This fencing mechanism protects your applications and data from `split-brain` scenarios by safely isolating a node if communication fails. To match your existing environment, you can deploy this cluster using automated, manual, or agent-based infrastructure methods.


Automated Infrastructure (installer-provisioned)
:   The cluster installation program controls all aspects of the deployment, including provisioning the underlying cloud or virtualization platforms, configuring network resources, and spinning up the nodes.


Manual Infrastructure (user-provisioned)
:   You provision and manage your own operating system images, networking, storage, and load balancers before starting the OpenShift deployment. This method offers maximum control over custom enterprise environments.


Agent-Based Infrastructure
:   You use a bootable ISO image containing an agent that automates the deployment on bare metal or pre-provisioned infrastructure. This combines the flexibility of manual setups with the ease of an automated workflow, making it ideal for disconnected environments.


:::important

Configure node access during installation, for example, by including SSH keys in the `install-config.yaml` file. TNF clusters might require manual intervention in specific error scenarios that can only be resolved through direct node access.

:::


{% leveloffset +1 %}{% include "./modules/sample-install-config-two-node-fencing-ipi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sample-install-config-two-node-fencing-upi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sample-install-config-two-node-fencing-abi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sample-agent-config-two-node-fencing-abi.md" %}{% endleveloffset %}