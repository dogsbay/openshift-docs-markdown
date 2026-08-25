{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ op_system_bundle }} installation steps {id="microshift-install-rhde-steps_{{ context }}"}

Before proceeding with your specific installation method, you must prepare your environment for installation. To ensure a successful deployment, you must follow the general prerequisites such as obtaining your pull secret, planning your storage strategy, and defining your network topology, before you begin. {._abstract}

For most installation types, you must also take the following steps:

*   Download the pull secret from the Red&#160;Hat Hybrid Cloud Console using the following link:
    *   [Pull secret](https://console.redhat.com/openshift/install/pull-secret)
*   Be ready to configure {{ microshift_short }} by adding parameters and values to the {{ microshift_short }} YAML configuration file. For more information, see "Customizing MicroShift by using the configuration file".
*   Decide whether you need to configure storage for the application and tasks you are using in your {{ microshift_short }} node, or disable the {{ microshift_short }} storage plugin completely.
*   For more information about creating volume groups and persistent volumes on {{ op_system_base }}, see the following link:
    *   [Overview of logical volume management](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_managing_logical_volumes/overview-of-logical-volume-management_configuring-and-managing-logical-volumes)
*   Configure networking settings according to the access needs you plan for your {{ microshift_short }} node and applications. Consider whether you want to use single or dual-stack networks, configure a firewall, or configure routes.

    :::note

    You can use the {{ op_system_rt_kernel }} where predictable latency is critical. Workload partitioning is also required for low-latency applications. For more information about low latency and the {{ op_system_rtk }}, see "Configuring low latency".
    
    :::