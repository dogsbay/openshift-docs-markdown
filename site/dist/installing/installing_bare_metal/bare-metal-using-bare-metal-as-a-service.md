---
title: Using {{ bmaas_first }}
---

# Using {{ bmaas_first }} {#bare-metal-using-bare-metal-as-a-service}

You can provision and manage bare-metal hosts by using the Metal^3^ API and the Bare Metal Operator (BMO). These hosts, external to the OpenShift Container Platform cluster, can run workloads that might not be suitable for containerization or virtualization, such as legacy applications or applications that require direct hardware access.

{{ bmaas_first }} has the following capabilities:

- Provisioning of bare-metal hosts, including initial configuration.
- Lifecycle management such as power management, firmware updates, and decommissioning by using the BMO.

As standalone systems, these hosts operate independently of the OpenShift Container Platform cluster and support diverse workloads by integrating bare metal resources with containerized and virtualized applications. {{ bmaas_first }} can run other operating systems, but only {{ op_system_base_full }} and CentOS Stream 9 were tested.

**Additional resources**

- [About BMC addressing](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
