{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine pool infrastructure {id="rosa-nodes-machinepools-infrastructure_{{ context }}"}

{{ product_title }} uses machines, compute machine sets, and machine pools to manage the underlying cloud infrastructure for worker nodes. {._abstract}

## Machines {id="rosa-nodes-machinepools-infrastructure-machines_{{ context }}"}
A machine is a fundamental unit that describes the host for a worker node.

## Machine sets {id="rosa-nodes-machinepools-infrastructure-machine-sets_{{ context }}"}
`MachineSet` resources are groups of compute machines. If you need more machines or must scale them down, change the number of replicas in the machine pool to which the compute machine sets belong.

{% if openshift_rosa or openshift_rosa_hcp %}
Machine sets are not directly modifiable in {{ product_title }}.
{% endif %}

## Machine pools {id="rosa-nodes-machinepools-infrastructure-machine-pools_{{ context }}"}
Machine pools are a higher-level construct than compute machine sets.

A machine pool creates compute machine sets that are all clones of the same configuration across availability zones. Machine pools perform all of the host node provisioning management actions on a worker node. If you need more machines or must scale them down, change the number of replicas in the machine pool to meet your compute needs. You can manually configure scaling or set autoscaling.

{% if openshift_rosa_hcp %}
In {{ product_title }} clusters, the hosted control plane spans multiple availability zones (AZ) in the installed cloud region. Each machine pool in a {{ product_title }} cluster deploys in a single subnet within a single AZ.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
{% include "./snippets/rosa-node-lifecycle.md" %}
{% endif %}

Many machine pools can exist on a single cluster, and each machine pool can contain a unique node type and node size configuration.


:::note

By default, a cluster has one machine pool. During cluster installation, you can define instance type or size, add labels to this machine pool, and define the size of the root disk.

:::