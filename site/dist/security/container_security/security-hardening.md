---
title: Hardening {{ op_system }}
---

# Hardening {{ op_system }} {#security-hardening}

If you are planning to harden {{ op_system }} nodes in OpenShift Container Platform to meet your security needs, you should consider both what to harden and how to go about doing that hardening.

{{ op_system }} was created and tuned to be deployed in OpenShift Container Platform with few if any changes needed to {{ op_system }} nodes. Every organization adopting OpenShift Container Platform has its own requirements for system hardening. As a {{ op_system_base }} system with OpenShift-specific modifications and features added (such as Ignition, ostree, and a read-only `/usr` to provide limited immutability), {{ op_system }} can be hardened just as you would any {{ op_system_base }} system. Differences lie in the ways you manage the hardening.

A key feature of OpenShift Container Platform and its Kubernetes engine is to be able to quickly scale applications and infrastructure up and down as needed. Unless it is unavoidable, you do not want to make direct changes to {{ op_system }} by logging into a host and adding software or changing settings. You want to have the OpenShift Container Platform installer and control plane manage changes to {{ op_system }} so new nodes can be spun up without manual intervention.

So, if you are setting out to harden {{ op_system }} nodes in OpenShift Container Platform to meet your security needs, you should consider both what to harden and how to go about doing that hardening.

**Additional resources**

- [Red Hat Enterprise Linux 9 Security Hardening guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/security_hardening/index#scanning-container-and-container-images-for-vulnerabilities_scanning-the-system-for-security-compliance-and-vulnerabilities)

**Additional resources**

- [Kubernetes DaemonSet documentation](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)
- [OpenShift Security Guide](https://access.redhat.com/articles/5059881)
- [Choosing how to configure {{ op_system }}](/architecture/architecture-rhcos#rhcos-deployed_architecture-rhcos)
- [Modifying Nodes](/nodes/nodes/nodes-nodes-managing#nodes-nodes-managing)
- [Manually creating the installation configuration file](/installing/installing_bare_metal/upi/installing-bare-metal#installation-initializing-manual_installing-bare-metal)
- [Creating the Kubernetes manifest and Ignition config files](/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-infra-generate-k8s-manifest-ignition_installing-bare-metal)
- [Installing {{ op_system }} by using an ISO image](/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-infra-machines-iso_installing-bare-metal)
- [Customizing nodes](/installing/install_config/installing-customizing#installing-customizing)
- [Adding kernel arguments to nodes](/nodes/nodes/nodes-nodes-managing#nodes-nodes-kernel-arguments_nodes-nodes-managing)
- [Optional configuration parameters](/installing/installing_aws/installation-config-parameters-aws#installation-configuration-parameters-optional_installation-config-parameters-aws)
- [Support for FIPS cryptography](/installing/overview/installing-fips#installing-fips)
- [{{ op_system_base }} core crypto components](https://access.redhat.com/articles/3359851)
