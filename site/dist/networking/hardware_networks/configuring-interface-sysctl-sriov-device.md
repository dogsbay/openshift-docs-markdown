---
title: Configuring interface-level network sysctl settings and all-multicast mode for SR-IOV networks
---

# Configuring interface-level network sysctl settings and all-multicast mode for SR-IOV networks {#configuring-interface-level-sysctl-settings-sriov-device}

As a cluster administrator, you can change interface-level network sysctls and several interface attributes such as promiscuous mode, all-multicast mode, MTU, and MAC address by using the tuning Container Network Interface (CNI) meta plugin for a pod connected to a SR-IOV network device.

Before you perform any tasks in the following documentation, ensure that you [installed the SR-IOV Network Operator](/openshift-docs-markdown/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).
