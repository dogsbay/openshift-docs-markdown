---
title: "{{ op_system_first }}"
---

# {{ op_system_first }} {#architecture-rhcos}

{{ op_system_first }} represents the next generation of single-purpose container operating system technology by providing the quality standards of {{ op_system_base_full }} with automated, remote upgrade features.

{{ op_system }} is supported only as a component of OpenShift Container Platform 4.22 for all OpenShift Container Platform machines. {{ op_system }} is the only supported operating system for all node types in OpenShift Container Platform. {{ op_system }} is deployed in OpenShift Container Platform 4.22 in two general ways:

- If you install your cluster on infrastructure that the installation program provisions, {{ op_system }} images are downloaded to the target platform during installation. Suitable Ignition config files, which control the {{ op_system }} configuration, are also downloaded and used to deploy the machines.
- If you install your cluster on infrastructure that you manage, you must follow the installation documentation to obtain the {{ op_system }} images, generate Ignition config files, and use the Ignition config files to provision your machines.

**Additional resources**

- [cloud-init documentation](https://cloud-init.io/)
- [Kickstart installations](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/installation_guide/index#chap-kickstart-installations)
