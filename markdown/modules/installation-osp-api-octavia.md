{%- set _mod_docs_content_type = "CONCEPT" %}
# Scaling clusters for application traffic by using Octavia {id="installation-osp-api-octavia_{{ context }}"}

To distribute traffic across multiple virtual machines (VMs), configure your cluster that runs on {{ rh_openstack_first }} to use the Octavia load balancing service. By using this feature, you can mitigate the bottleneck that single machines or addresses create. {._abstract}

You must create your own Octavia load balancer to use it for application network scaling.