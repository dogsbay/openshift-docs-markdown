{%- set _mod_docs_content_type = "CONCEPT" %}
# Resource guidelines for installing {{ product_title }} on {{ rh_openstack }} {id="installation-osp-default-deployment_{{ context }}"}

To support an {{ product_title }} installation, your {{ rh_openstack_first }} quota must meet certain requirements. {._abstract}

**Recommended resources for a default {{ product_title }} cluster on {{ rh_openstack }}**

| Resource | Value |
| --- | --- |
| Floating IP addresses | 3 |
| Ports | 15 |
| Routers | 1 |
| Subnets | 1 |
| RAM | 88 GB |
| vCPUs | 22 |
| Volume storage | 275 GB |
| Instances | 7 |
| Security groups | 3 |
| Security group rules | 60 |
| Server groups | 2 - plus 1 for each additional availability zone in each machine pool |

A cluster might function with fewer than recommended resources, but cluster performance is not guaranteed.


:::important

If {{ rh_openstack }} object storage (Swift) is available and operated by a user account with the `swiftoperator` role, Swift is used as the default backend for the {{ product_title }} image registry. In this case, the volume storage requirement is 175 GB. Swift space requirements vary depending on the size of the image registry.

:::



:::note

By default, your security group and security group rule quotas might be low. If you encounter problems, run `openstack quota set --secgroups 3 --secgroup-rules 60 <project>` as an administrator to increase them.

:::


An {{ product_title }} deployment comprises control plane machines, compute machines, and a bootstrap machine.