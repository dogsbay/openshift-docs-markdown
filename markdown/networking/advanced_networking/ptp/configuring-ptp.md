---
title: Configuring PTP devices
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring PTP devices {id="configuring-ptp"}
{%- set context = "configuring-ptp" %}

The PTP Operator adds the `NodePtpDevice.ptp.openshift.io` custom resource definition (CRD) to {{ product_title }}. {._abstract}

When installed, the PTP Operator searches your cluster for Precision Time Protocol (PTP) capable network devices on each node. The Operator creates and updates a `NodePtpDevice` custom resource (CR) object for each node that provides a compatible PTP-capable network device.

Network interface controller (NIC) hardware with built-in PTP capabilities sometimes require a device-specific configuration. You can use hardware-specific NIC features for supported hardware with the PTP Operator by configuring a plugin in the `PtpConfig` custom resource (CR). The `linuxptp-daemon` service uses the named parameters in the `plugin` stanza to start `linuxptp` processes, `ptp4l` and `phc2sys`, based on the specific hardware configuration.


:::important

In {{ product_title }} {{ product_version }}, supported `PtpConfig` plugins include Intel E810 hardware configuration, Intel Granite Rapids-D plugin configurations (`e830` and `e825`), and optional `ntpfailover` behavior.

:::


{% leveloffset +1 %}{% include "./modules/nw-ptp-installing-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-installing-operator-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-device-discovery.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-as-grandmaster-clock.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-as-grandmaster-clock-dual-nic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-as-grandmaster-clock-three-nic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-granite-rapids-telecom-grandmaster-clock-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Boundary clocks without holdover on Intel Granite Rapids-D hardware](/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-granite-rapids-boundary-clock-overview_configuring-ptp)
*   [Configuring linuxptp services as a boundary clock without holdover on Intel Granite Rapids-D hardware](/networking/advanced_networking/ptp/configuring-ptp#ptp-configuring-linuxptp-services-as-boundary-clock-gnrd_configuring-ptp)
*   [Configuring GNR-D T-BC holdover on a GNR-D platform](/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-gnrd-t-bc-holdover_configuring-ptp)

{% leveloffset +2 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-as-grandmaster-clock-gnrd.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the PTP fast event notifications publisher](/networking/advanced_networking/ptp/ptp-cloud-events-consumer-dev-reference-v2#cnf-configuring-the-ptp-fast-event-publisher-v2_ptp-consumer)
*   [Boundary clocks without holdover on Intel Granite Rapids-D hardware](/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-granite-rapids-boundary-clock-overview_configuring-ptp)
*   [Configuring linuxptp services as a boundary clock without holdover on Intel Granite Rapids-D hardware](/networking/advanced_networking/ptp/configuring-ptp#ptp-configuring-linuxptp-services-as-boundary-clock-gnrd_configuring-ptp)
*   [Configuring GNR-D T-BC holdover on a GNR-D platform](/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-gnrd-t-bc-holdover_configuring-ptp)

{% leveloffset +1 %}{% include "./modules/nw-ptp-grandmaster-clock-configuration-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-grandmaster-clock-class-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-e810-hardware-configuration-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-dual-wpc-hardware-config-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-three-nic-hardware-config-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-holdover-in-a-grandmaster-clock.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-t-bc-t-tsc-holdover.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Grandmaster clock class sync state reference](/networking/advanced_networking/ptp/configuring-ptp#nw-ptp-grandmaster-clock-class-reference_configuring-ptp)

{% leveloffset +1 %}{% include "./modules/nw-ptp-gnrd-t-bc-holdover.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Machine Configuration documentation](/machine_configuration/index#machine-config-index)

{% leveloffset +1 %}{% include "./modules/ptp-configuring-dynamic-leap-seconds-handling-for-tgm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-as-boundary-clock.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring FIFO priority scheduling for PTP hardware](/networking/advanced_networking/ptp/configuring-ptp#cnf-configuring-fifo-priority-scheduling-for-ptp_configuring-ptp)
*   [Configuring the PTP fast event notifications publisher](/networking/advanced_networking/ptp/ptp-cloud-events-consumer-dev-reference-v2#cnf-configuring-the-ptp-fast-event-publisher-v2_ptp-consumer)

{% leveloffset +2 %}{% include "./modules/ptp-configuring-linuxptp-services-as-boundary-clock-dual-nic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ptp-configuring-linuxptp-services-as-ha-bc-for-dual-nic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-granite-rapids-boundary-clock-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ptp-configuring-linuxptp-services-as-boundary-clock-gnrd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-as-ordinary-clock.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring FIFO priority scheduling for PTP hardware](/networking/advanced_networking/ptp/configuring-ptp#cnf-configuring-fifo-priority-scheduling-for-ptp_configuring-ptp)
*   [Configuring the PTP fast event notifications publisher](/networking/advanced_networking/ptp/ptp-cloud-events-consumer-dev-reference-v2#cnf-configuring-the-ptp-fast-event-publisher-v2_ptp-consumer)

{% leveloffset +2 %}{% include "./modules/nw-columbiaville-ptp-config-refererence.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-configuring-linuxptp-services-dual-port-oc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring linuxptp services as ordinary clock](/networking/advanced_networking/ptp/configuring-ptp#configuring-linuxptp-services-as-ordinary-clock_configuring-ptp)
*   [Using dual-port NICs to improve redundancy for PTP ordinary clocks](/networking/advanced_networking/ptp/about-ptp#ptp-dual-ports-oc_about-ptp)

{% leveloffset +1 %}{% include "./modules/cnf-configuring-fifo-priority-scheduling-for-ptp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-log-reduction-for-linuxptp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-configuring-log-filtering-for-linuxptp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-configuring-enhanced-log-filtering-for-linuxptp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-time-synchronization-continuity.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-configuring-gnss-to-ntp-failover.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ptp-configuring-gnss-to-ntp-failover-sno.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-troubleshooting-common-ptp-operator-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-getting-the-dpll-firmware-version-for-intel-800-series-nics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-about-collecting-ptp-data.md" %}{% endleveloffset %}