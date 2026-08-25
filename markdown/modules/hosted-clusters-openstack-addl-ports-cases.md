{%- set _mod_docs_content_type = "CONCEPT" %}
# Additional ports for node pools {id="hosted-clusters-openstack-addl-ports-cases_{{ context }}"}

You can configure additional ports for node pools to support advanced networking scenarios, such as SR-IOV or multiple networks. {._abstract}

Common reasons to configure additional ports for node pools include the following:


SR-IOV (Single Root I/O Virtualization)
:   Enables a physical network device to appear as multiple virtual functions (VFs). By attaching additional ports to node pools, workloads can use SR-IOV interfaces to achieve low-latency, high-performance networking.


DPDK (Data Plane Development Kit)
:   Provides fast packet processing in user space, bypassing the kernel. Node pools with additional ports can expose interfaces for workloads that use DPDK to improve network performance.


Manila RWX volumes on NFS
:   Supports `ReadWriteMany` (RWX) volumes over NFS, allowing multiple nodes to access shared storage. Attaching additional ports to node pools enables workloads to reach the NFS network used by Manila.


Multus CNI
:   Enables pods to connect to multiple network interfaces. Node pools with additional ports support use cases that require secondary network interfaces, including dual-stack connectivity and traffic separation.