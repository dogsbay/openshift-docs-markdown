---
title: Host practices for IBM Z and IBM LinuxONE environments
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Host practices for IBM Z and IBM LinuxONE environments {id="ibm-z-recommended-host-practices"}
{%- set context = "ibm-z-recommended-host-practices" %}

You can apply host practices for {{ ibm_z_title }} and {{ ibm_linuxone_name }} environments to ensure your s390x architecture meets specific operational requirements. {._abstract}

The s390x architecture is unique in many aspects. Some host practice recommendations might not apply to other platforms.


:::note

Unless stated otherwise, the host practices apply to both z/VM and {{ op_system_base_full }} KVM installations on {{ ibm_z_name }} and {{ ibm_linuxone_name }}.

:::


{% leveloffset +1 %}{% include "./modules/ibm-z-managing-cpu-overcommitment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [z/VM Common Performance Problems and Solutions](https://www.vm.ibm.com/perf/tips/prgcom.html)
*   [z/VM overcommitment considerations](https://www.ibm.com/docs/en/linux-on-systems?topic=overcommitment-considerations)
*   [LPAR CPU management](https://www.ibm.com/docs/en/zos/2.2.0?topic=director-lpar-cpu-management)

{% leveloffset +1 %}{% include "./modules/ibm-z-disable-thp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibm-z-boost-networking-performance-with-rfs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} on {{ ibm_z_name }}: Tune your network performance with RFS](https://developer.ibm.com/tutorials/red-hat-openshift-on-ibm-z-tune-your-network-performance-with-rfs/)
*   [Configuring Receive Flow Steering (RFS)](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/performance_tuning_guide/sect-red_hat_enterprise_linux-performance_tuning_guide-networking-configuration_tools#sect-Red_Hat_Enterprise_Linux-Performance_Tuning_Guide-Configuration_tools-Configuring_Receive_Flow_Steering_RFS)
*   [Scaling in the Linux Networking Stack](https://www.kernel.org/doc/Documentation/networking/scaling.txt)

{% leveloffset +1 %}{% include "./modules/ibm-z-choose-networking-setup.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} on {{ ibm_z_name }} - Performance Experiences, Hints and Tips](https://www.ibm.com/docs/en/linux-on-systems?topic=openshift-performance#openshift_perf__ocp_eval)
*   [{{ product_title }} on {{ ibm_z_name }} Networking Performance](https://www.ibm.com/docs/en/linux-on-systems?topic=openshift-performance#openshift_perf__ocp_net)
*   [Controlling pod placement on nodes using node affinity rules](/nodes/scheduling/nodes-scheduler-node-affinity)

{% leveloffset +1 %}{% include "./modules/ibm-z-ensure-high-disk-performance-hyperpav.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using HyperPAV for ECKD DASD](https://www.ibm.com/docs/en/linux-on-systems?topic=io-using-hyperpav-eckd-dasd)
*   [Scaling HyperPAV alias devices on Linux guests on z/VM](https://public.dhe.ibm.com/software/dw/linux390/perf/zvm_hpav00.pdf)

{% leveloffset +1 %}{% include "./modules/ibm-z-rhel-kvm-host-recommendations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/use-io-threads-for-your-virtual-block-devices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/avoid-virtual-scsi-devices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configure-guest-caching-for-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/exclude-the-memory-balloon-device.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/tune-the-cpu-migration-algorithm-of-the-host-scheduler.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/disabling-the-cpuset-cgroup-controller.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/tuning-the-polling-period-for-idle-virtual-cpus.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Linux on {{ ibm_z_name }} Performance Tuning for KVM](https://www.ibm.com/docs/en/linux-on-systems?topic=v-kvm)
*   [Getting started with virtualization on {{ ibm_z_name }}](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/getting-started-with-virtualization-in-rhel-8-on-ibm-z_configuring-and-managing-virtualization)