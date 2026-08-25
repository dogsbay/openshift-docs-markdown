---
title: Understanding host and VM security
---

# Understanding host and VM security {#security-hosts-vms}

Containers and virtual machines provide ways of separating applications running on a host from the operating system itself. You should understand {{ op_system }}, which is the operating system used by OpenShift Container Platform, to see how the host systems protect containers and hosts from each other.

**Additional resources**

- [Building, running, and managing containers](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/building_running_and_managing_containers/index)
- [How nodes enforce resource constraints](/openshift-docs-markdown/nodes/nodes/nodes-nodes-resources-configuring#allocate-node-enforcement_nodes-nodes-resources-configuring)
- [Managing security context constraints](/openshift-docs-markdown/authentication/managing-security-context-constraints#managing-pod-security-policies)
- [Supported platforms for OpenShift clusters](/openshift-docs-markdown/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
- [Choosing how to configure {{ op_system }}](/openshift-docs-markdown/architecture/architecture-rhcos#rhcos-configured_architecture-rhcos)
- [Ignition](/openshift-docs-markdown/architecture/architecture-rhcos#rhcos-about-ignition_architecture-rhcos)
- [Kernel arguments](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-kargs_installing-customizing)
- [Kernel modules](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-kmod_installing-customizing)
- [Disk encryption](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)
- [Chrony time service](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)
- [About the OpenShift Update Service](/openshift-docs-markdown/updating/understanding_updates/intro-to-updates#update-service-about_understanding-openshift-updates)
- [Red Hat OpenShift security guide](https://www.redhat.com/en/resources/openshift-security-guide-ebook)
- [FIPS cryptography](/openshift-docs-markdown/installing/overview/installing-fips#installing-fips)

**Additional resources**

- [FIPS cryptography](/openshift-docs-markdown/installing/overview/installing-fips#installing-fips)
