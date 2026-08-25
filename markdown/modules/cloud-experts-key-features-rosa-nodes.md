{%- set _mod_docs_content_type = "CONCEPT" %}
# Nodes {id="cloud-experts-key-features-rosa-nodes_{{ context }}"}

The following covers the various aspects about {{ product_title }} cluster nodes, including worker node requirements, operating system, supported instances, and scaling capabilities. {._abstract}

## Worker nodes across multiple AWS regions {id="_worker_nodes_across_multiple_aws_regions"}
All nodes in a {{ product_title }} cluster must be located in the same AWS region. For clusters configured for multiple availability zones, control plane nodes and worker nodes will be distributed across the availability zones.

## Minimum number of worker nodes {id="_minimum_number_of_worker_nodes"}
For a {{ product_title }} cluster, the minimum is 2 worker nodes for single availability zone and 3 worker nodes for multiple availability zones.

## Underlying node operating system {id="_underlying_node_operating_system"}
As with all OpenShift v4.x offerings, the control plane, infra and worker nodes run Red&#160;Hat Enterprise Linux CoreOS (RHCOS).

## Node hibernation or shut-down {id="_node_hibernation_or_shut-down"}
At this time, {{ product_title }} does not have a hibernation or shut-down feature for nodes. The shutdown and hibernation feature is an OpenShift platform feature that is not yet mature enough for widespread cloud services use.

## Supported instances for worker nodes {id="_supported_instances_for_worker_nodes"}
For a complete list of supported instances for worker nodes see the _Additional Resources_ for the AWS instance types. Spot instances are also supported.

## Node autoscaling {id="_node_autoscaling"}
Autoscaling allows you to automatically adjust the size of the cluster based on the current workload.

## Maximum number of worker nodes {id="_maximum_number_of_worker_nodes"}
The maximum number of worker nodes in {{ product_title }} clusters versions 4.14.14 and later is 249. For earlier versions, the limit is 180 nodes.