---
title: Troubleshooting operating system issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting operating system issues {id="troubleshooting-operating-system-issues"}

{%- set context = "troubleshooting-operating-system-issues" %}

{{ product_title }} runs on {{ op_system }}. You can follow these procedures to troubleshoot problems related to the operating system. {._abstract}

{% leveloffset +1 %}{% include "./modules/investigating-kernel-crashes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/troubleshooting-enabling-kdump.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/troubleshooting-enabling-kdump-day-one.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/troubleshooting-kdump-testing-analyzing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if openshift_origin %}
*   [Fedora CoreOS Docs on debugging kernel crashes](https://docs.fedoraproject.org/en-US/fedora-coreos/debugging-kernel-crashes/)
*   [Setting up kdump in Fedora](https://fedoraproject.org/wiki/How_to_use_kdump_to_debug_kernel_crashes)
{% endif %}
{% if openshift_enterprise %}
*   [Setting up kdump in RHEL](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/configuring-kdump-on-the-command-line_managing-monitoring-and-updating-the-kernel)
{%- endif %}
*   [Linux kernel documentation for kdump](https://www.kernel.org/doc/html/latest/admin-guide/kdump/kdump.html)
*   [kdump.conf(5) manual page](https://www.kernel.org/doc/html/latest/admin-guide/kdump/kdump.html#configuration)
*   [kexec(8) manual page](https://www.kernel.org/doc/html/latest/admin-guide/kdump/kdump.html)
*   [Red Hat Knowledgebase article regarding kexec and kdump](https://access.redhat.com/site/solutions/6038)

{% leveloffset +1 %}{% include "./modules/troubleshooting-debugging-ignition.md" %}{% endleveloffset %}