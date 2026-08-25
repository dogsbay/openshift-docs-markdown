{%- set _mod_docs_content_type = "CONCEPT" %}
# Minimum resource requirements for installing a two-node OpenShift cluster with fencing {id="installation-two-node-fencing-minimum-resource-requirements_{{ context }}"}

Each cluster must meet minimum requirements so that the cluster runs as expected. {._abstract}

Each cluster machine must meet the following minimum requirements:

**Minimum resource requirements**

| Machine | Operating System | CPU <sup>[1]</sup> | RAM | Storage | Input/Output Per Second (IOPS) <sup>[1]</sup> |
| --- | --- | --- | --- | --- | --- |
| Bootstrap | RHCOS | 4 | 16 GB | 120 GB | 300 |
| Control plane | RHCOS | 4 | 16 GB | 120 GB | 300 |

1.  One CPU is equivalent to one physical core when simultaneous multithreading (SMT), or Hyper-Threading, is not enabled. When enabled, use the following formula to calculate the corresponding ratio: (threads per core × cores) × sockets = CPUs.
1.  {{ product_title }} and Kubernetes are sensitive to disk performance, and faster storage is recommended, particularly for etcd on the control plane nodes. Note that on many cloud platforms, storage size and IOPS scale together, so you might need to over-allocate storage volume to obtain sufficient performance.