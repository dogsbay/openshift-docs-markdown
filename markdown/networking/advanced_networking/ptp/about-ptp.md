---
title: About PTP in OpenShift cluster nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About PTP in OpenShift cluster nodes {id="about-ptp"}
{%- set context = "about-ptp" %}

Precision Time Protocol (PTP) is used to synchronize clocks in a network. When used in conjunction with hardware support, PTP is capable of sub-microsecond accuracy, and is more accurate than Network Time Protocol (NTP). {._abstract}


:::important

If your `openshift-sdn` cluster with PTP uses the User Datagram Protocol (UDP) for hardware time stamping and you migrate to the OVN-Kubernetes plugin, the hardware time stamping cannot be applied to primary interface devices, such as an Open vSwitch (OVS) bridge. As a result, UDP version 4 configurations cannot work with a `br-ex` interface.

:::


You can configure `linuxptp` services and use PTP-capable hardware in {{ product_title }} cluster nodes.

Use the {{ product_title }} web console or OpenShift CLI (`oc`) to install PTP by deploying the PTP Operator. The PTP Operator creates and manages the `linuxptp` services and provides the following features:

*   Discovery of the PTP-capable devices in the cluster.
*   Management of the configuration of `linuxptp` services.
*   Notification of PTP clock events that negatively affect the performance and reliability of your application with the PTP Operator `cloud-event-proxy` sidecar.


:::note

The PTP Operator works with PTP-capable devices on clusters provisioned only on bare-metal infrastructure.

:::


{% leveloffset +1 %}{% include "./modules/nw-ptp-introduction.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Disabling chrony time service](/machine_configuration/machine-configs-configure#cnf-disable-chronyd_machine-configs-configure)

{% leveloffset +1 %}{% include "./modules/ptp-linuxptp-introduction.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ptp-overview-of-gnss-grandmaster-clock.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-about-ptp-and-clock-synchronization.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ptp-dual-nics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ptp-dual-ports-oc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ptp-three-card-grandmaster.md" %}{% endleveloffset %}