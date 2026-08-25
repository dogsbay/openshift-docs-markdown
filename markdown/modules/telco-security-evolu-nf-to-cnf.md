{%- set _mod_docs_content_type = "CONCEPT" %}
# Evolution of Network Functions to CNFs {id="telco-security-evolution-of-nf-to-cnf_{{ context }}"}

Network Functions (NFs) began as Physical Network Functions (PNFs), which were purpose-built hardware devices operating independently. Over time, PNFs evolved into Virtual Network Functions (VNFs), which virtualized their capabilities while controlling resources like CPU, memory, storage, and network.

As technology advanced further, VNFs transitioned to cloud-native network functions (CNFs). CNFs run in lightweight, secure, and scalable containers. They enforce stringent restrictions, including non-root execution and minimal host interference, to enhance security and performance.

PNFs had unrestricted root access to operate independently without interference. With the shift to VNFs, resource usage was controlled, but processes could still run as root within their virtual machines. In contrast, CNFs restrict root access and limit container capabilities to prevent interference with other containers or the host operating system.

The main challenges in migrating to CNFs are as follows:

*   Breaking down monolithic network functions into smaller, containerized processes.
*   Adhering to cloud-native principles, such as non-root execution and isolation, while maintaining telco-grade performance and reliability.