{%- set _mod_docs_content_type = "CONCEPT" %}
# Capacity planning for VM failover {id="virt-about-capacity-planning-for-vm-failover_{{ context }}"}

Plan node capacity to ensure your cluster has enough resources to host VMs that migrate from failed nodes. {._abstract}

When a node fails and you have enabled remediation, VMs automatically migrate to other available nodes in the cluster. Monitor the following resources on your cluster to ensure adequate capacity for VM failover:

*   VM count per node
*   Available CPU
*   Available memory
*   Available disk
*   Available network bandwidth

Check the current resource use of your nodes:
```terminal
$ oc adm top nodes
```


:::note

The number of VMs that a node can host depends on the `maxPods` value set in the kubelet configuration:

```yaml
kubeletConfig:
  maxPods: 250
```

:::