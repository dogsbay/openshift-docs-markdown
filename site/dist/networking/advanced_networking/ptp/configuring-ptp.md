---
title: Configuring PTP devices
---

# Configuring PTP devices {#configuring-ptp}

The PTP Operator adds the `NodePtpDevice.ptp.openshift.io` custom resource definition (CRD) to OpenShift Container Platform.

When installed, the PTP Operator searches your cluster for Precision Time Protocol (PTP) capable network devices on each node. The Operator creates and updates a `NodePtpDevice` custom resource (CR) object for each node that provides a compatible PTP-capable network device.

Network interface controller (NIC) hardware with built-in PTP capabilities sometimes require a device-specific configuration. You can use hardware-specific NIC features for supported hardware with the PTP Operator by configuring a plugin in the `PtpConfig` custom resource (CR). The `linuxptp-daemon` service uses the named parameters in the `plugin` stanza to start `linuxptp` processes, `ptp4l` and `phc2sys`, based on the specific hardware configuration.

> [!IMPORTANT]
> In OpenShift Container Platform 4.22, supported `PtpConfig` plugins include Intel E810 hardware configuration, Intel Granite Rapids-D plugin configurations (`e830` and `e825`), and optional `ntpfailover` behavior.

**Additional resources**

- [Boundary clocks without holdover on Intel Granite Rapids-D hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-granite-rapids-boundary-clock-overview_configuring-ptp)
- [Configuring linuxptp services as a boundary clock without holdover on Intel Granite Rapids-D hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#ptp-configuring-linuxptp-services-as-boundary-clock-gnrd_configuring-ptp)
- [Configuring GNR-D T-BC holdover on a GNR-D platform](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-gnrd-t-bc-holdover_configuring-ptp)

**Additional resources**

- [Configuring the PTP fast event notifications publisher](/openshift-docs-markdown/networking/advanced_networking/ptp/ptp-cloud-events-consumer-dev-reference-v2#cnf-configuring-the-ptp-fast-event-publisher-v2_ptp-consumer)
- [Boundary clocks without holdover on Intel Granite Rapids-D hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-granite-rapids-boundary-clock-overview_configuring-ptp)
- [Configuring linuxptp services as a boundary clock without holdover on Intel Granite Rapids-D hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#ptp-configuring-linuxptp-services-as-boundary-clock-gnrd_configuring-ptp)
- [Configuring GNR-D T-BC holdover on a GNR-D platform](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-gnrd-t-bc-holdover_configuring-ptp)

**Additional resources**

- [Grandmaster clock class sync state reference](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-grandmaster-clock-class-reference_configuring-ptp)

**Additional resources**

- [Machine Configuration documentation](/openshift-docs-markdown/machine_configuration/index#machine-config-index)

**Additional resources**

- [Configuring FIFO priority scheduling for PTP hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#cnf-configuring-fifo-priority-scheduling-for-ptp_configuring-ptp)
- [Configuring the PTP fast event notifications publisher](/openshift-docs-markdown/networking/advanced_networking/ptp/ptp-cloud-events-consumer-dev-reference-v2#cnf-configuring-the-ptp-fast-event-publisher-v2_ptp-consumer)

**Additional resources**

- [Configuring FIFO priority scheduling for PTP hardware](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#cnf-configuring-fifo-priority-scheduling-for-ptp_configuring-ptp)
- [Configuring the PTP fast event notifications publisher](/openshift-docs-markdown/networking/advanced_networking/ptp/ptp-cloud-events-consumer-dev-reference-v2#cnf-configuring-the-ptp-fast-event-publisher-v2_ptp-consumer)

**Additional resources**

- [Configuring linuxptp services as ordinary clock](/openshift-docs-markdown/networking/advanced_networking/ptp/configuring-ptp#configuring-linuxptp-services-as-ordinary-clock_configuring-ptp)
- [Using dual-port NICs to improve redundancy for PTP ordinary clocks](/openshift-docs-markdown/networking/advanced_networking/ptp/about-ptp#ptp-dual-ports-oc_about-ptp)
