{%- set _mod_docs_content_type = "REFERENCE" %}
# Parameters for the cluster-wide infrastructure CRD {id="references-regions-zones-infrastructure-vsphere_{{ context }}"}

You must set values for specific parameters in the cluster-wide infrastructure, `infrastructures.config.openshift.io`, Custom Resource Definition (CRD) to define multiple regions and zones for your {{ product_title }} cluster that runs on a VMware vSphere instance. {._abstract}

The following table lists mandatory parameters for defining multiple regions and zones for your {{ product_title }} cluster:

| Parameter | Description |
| --- | --- |
| `vcenters` | The vCenter servers for your {{ product_title }} cluster. You can specify either a single vCenter, or up to 3 vCenters. |
| `datacenters` | vCenter data centers where VMs associated with the {{ product_title }} cluster will be created or presently exist. |
| `port` | The TCP port of the vCenter server. |
| `server` | The fully qualified domain name (FQDN) of the vCenter server. |
| `failureDomains` | The list of failure domains. |
| `name` | The name of the failure domain. |
| `region` | The value of the `openshift-region` tag assigned to the topology for the failure domain. |
| `zone` | The value of the `openshift-zone` tag assigned to the topology for the failure domain. |
| `topology` | The vCenter resources associated with the failure domain. |
| `datacenter` | The data center associated with the failure domain. |
| `computeCluster` | The full path of the compute cluster associated with the failure domain. |
| `resourcePool` | The full path of the resource pool associated with the failure domain. |
| `datastore` | The full path of the datastore associated with the failure domain. |
| `networks` | A list of port groups associated with the failure domain. Only one portgroup can be defined. |