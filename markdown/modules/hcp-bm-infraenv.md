{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating an InfraEnv resource {id="hcp-bm-infraenv_{{ context }}"}

Before you can create a hosted cluster on bare metal, you need an `InfraEnv` resource. {._abstract}

On {{ hcp }}, the control-plane components run as pods on the management cluster while the data plane runs on dedicated nodes. You can use the Assisted Service to boot your hardware with a discovery ISO that adds your hardware to a hardware inventory. 

Later, when you create a hosted cluster, the hardware from the inventory is used to provision the data-plane nodes. The object that is used to get the discovery ISO is an `InfraEnv` resource. You need to create a `BareMetalHost` object that configures the cluster to boot the bare-metal node from the discovery ISO.