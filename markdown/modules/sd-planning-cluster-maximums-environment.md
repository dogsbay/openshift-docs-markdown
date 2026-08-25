{%- set _mod_docs_content_type = "REFERENCE" %}
# OpenShift Container Platform testing environment and configuration {id="planning-cluster-maximums-environment-sd_{{ context }}"}

To successfully plan your deployment on the AWS cloud platform, review the tested {{ product_title }} environment and configuration settings. Adhering to these cluster maximums ensures your environment is fully supported and optimized for scale. {._abstract}

| Node | Type | vCPU | RAM(GiB) | Disk type | Disk size(GiB)/IOPS | Count | Region |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Control plane/etcd <sup>[1]</sup> | m5.4xlarge | 16 | 64 | gp3 | 350 / 1,000 | 3 | us-west-2 |
| Infrastructure nodes <sup>[2]</sup> | r5.2xlarge | 8 | 64 | gp3 | 300 / 900 | 3 | us-west-2 |
| Workload <sup>[3]</sup> | m5.2xlarge | 8 | 32 | gp3 | 350 / 900 | 3 | us-west-2 |
| Compute nodes | m5.2xlarge | 8 | 32 | gp3 | 350 / 900 | 102 | us-west-2 |

1.  io1 disks are used for control plane/etcd nodes in all versions prior to 4.10.
1.  Infrastructure nodes are used to host monitoring components because Prometheus can claim a large amount of memory, depending on usage patterns.
1.  Workload nodes are dedicated to run performance and scalability workload generators.

Larger cluster sizes and higher object counts might be reachable. However, the sizing of the infrastructure nodes limits the amount of memory that is available to Prometheus. When creating, modifying, or deleting objects, Prometheus stores the metrics in its memory for roughly 3 hours prior to persisting the metrics on disk. If the rate of creation, modification, or deletion of objects is too high, Prometheus can become overwhelmed and fail due to the lack of memory resources.