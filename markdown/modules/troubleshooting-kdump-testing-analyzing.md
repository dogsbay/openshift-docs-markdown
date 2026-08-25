{%- set _mod_docs_content_type = "REFERENCE" %}
# Testing and analyzing kdump {id="troubleshooting-kdump-testing-analyzing_{{ context }}"}

After configuring kdump, you can test the configuration and analyze core dumps using the {{ op_system_base }} documentation. {._abstract}

{% if openshift_enterprise %}
See the [Testing the kdump configuration](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/configuring-kdump-on-the-command-line_managing-monitoring-and-updating-the-kernel#testing-the-kdump-configuration_configuring-kdump-on-the-command-line) section in the {{ op_system_base }} documentation for kdump.

See the [Analyzing a core dump](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/analyzing-a-core-dump_managing-monitoring-and-updating-the-kernel) section in the {{ op_system_base }} documentation for kdump.
{% endif %}

{% if openshift_origin %}
See the [Capturing the Dump](https://fedoraproject.org/wiki/How_to_use_kdump_to_debug_kernel_crashes#Step_2:_Capturing_the_Dump) section in the {{ op_system_base }} documentation for kdump.

See the [Dump Analysis](https://fedoraproject.org/wiki/How_to_use_kdump_to_debug_kernel_crashes#Step_3:_Dump_Analysis) section in the {{ op_system_base }} documentation for kdump.
{% endif %}


:::note

It is recommended to perform vmcore analysis on a separate {{ op_system_base }} system.

:::