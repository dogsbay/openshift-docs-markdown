{%- set _mod_docs_content_type = "CONCEPT" %}
# Node tuning for hosted clusters on {{ rh_openstack }} {id="hosted-clusters-openstack-performance_{{ context }}"}

You can tune hosted cluster node performance on {{ rh_openstack }} for high-performance workloads, such as cloud-native network functions (CNFs). Performance tuning includes configuring {{ rh_openstack }} resources, creating a performance profile, deploying a tuned `NodePool` resource, and enabling SR-IOV device support. {._abstract}

CNFs are designed to run in cloud-native environments. They can provide network services such as routing, firewalling, and load balancing. You can configure the node pool to use high-performance computing and networking devices to run CNFs.