{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine pools in {{ hcp_title }} clusters {id="machine-pools-hcp_{{ context }}"}

In {{ hcp_title }} clusters, the hosted control plane spans three availability zones (AZ) in the installed cloud region. Each machine pool in a {{ hcp_title }} cluster deploys in a single subnet within a single AZ. Each of these AZs can have only one machine pool. 

Each machine pool in an {{ hcp_title }} cluster upgrades independently. Because the machine pools upgrade independently, they must remain within 2 minor (Y-stream) versions of the hosted control plane. For example, if your hosted control plane is 4.16.z, your machine pools must be at least 4.14.z.

The following image depicts how machine pools work within ROSA and {{ product_title }} clusters:

![Machine pools on ROSA classic and {{ product_title }} clusters](/_assets/images/hcp-rosa-machine-pools.png)


:::note

Machine pools in {{ hcp_title }} clusters each upgrade independently and the machine pool versions must remain within two minor (Y-stream) versions of the control plane.

:::