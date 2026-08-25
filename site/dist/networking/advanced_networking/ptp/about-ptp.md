---
title: About PTP in OpenShift cluster nodes
---

# About PTP in OpenShift cluster nodes {#about-ptp}

Precision Time Protocol (PTP) is used to synchronize clocks in a network. When used in conjunction with hardware support, PTP is capable of sub-microsecond accuracy, and is more accurate than Network Time Protocol (NTP).

> [!IMPORTANT]
> If your `openshift-sdn` cluster with PTP uses the User Datagram Protocol (UDP) for hardware time stamping and you migrate to the OVN-Kubernetes plugin, the hardware time stamping cannot be applied to primary interface devices, such as an Open vSwitch (OVS) bridge. As a result, UDP version 4 configurations cannot work with a `br-ex` interface.

You can configure `linuxptp` services and use PTP-capable hardware in OpenShift Container Platform cluster nodes.

Use the OpenShift Container Platform web console or OpenShift CLI (`oc`) to install PTP by deploying the PTP Operator. The PTP Operator creates and manages the `linuxptp` services and provides the following features:

- Discovery of the PTP-capable devices in the cluster.
- Management of the configuration of `linuxptp` services.
- Notification of PTP clock events that negatively affect the performance and reliability of your application with the PTP Operator `cloud-event-proxy` sidecar.

> [!NOTE]
> The PTP Operator works with PTP-capable devices on clusters provisioned only on bare-metal infrastructure.

**Additional resources**

- [Disabling chrony time service](/machine_configuration/machine-configs-configure#cnf-disable-chronyd_machine-configs-configure)
