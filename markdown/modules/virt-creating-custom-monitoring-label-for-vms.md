{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom monitoring label for virtual machines {id="virt-creating-custom-monitoring-label-for-vms_{{ context }}"}

To enable queries to multiple virtual machines from a single service, you can add a custom label in the virtual machine’s YAML file. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   Access to the web console for stop and restart a virtual machine.

**Procedure**

1.  Edit the `template` spec of your virtual machine configuration file. In this example, the label `monitor` has the value `metrics`.
    ```yaml
    spec:
      template:
        metadata:
          labels:
            monitor: metrics
    ```
1.  Stop and restart the virtual machine to create a new pod with the label name given to the `monitor` label.