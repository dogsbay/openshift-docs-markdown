{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine pool upgrade requirements {id="rosa-nodes-machinepools-upgrade-requirements-hcp_{{ context }}"}

Each machine pool in a {{ product_title }} cluster upgrades independently and therefore must remain within two minor (Y-stream) versions of the hosted control plane. For example, if your hosted control plane is 4.16.z, your machine pools must be at least 4.14.z. {._abstract}

The following image depicts how machine pools work within {{ product_title }} clusters:

![Machine pools on {{ rosa_classic_title }} and {{ product_title }} clusters](/images/hcp-rosa-machine-pools.png)