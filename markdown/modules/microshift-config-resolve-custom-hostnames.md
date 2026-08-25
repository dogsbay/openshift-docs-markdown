{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure custom hostnames {id="microshift-resolve-custom-hostnames_{{ context }}"}

You can use the `hosts` file to resolve custom hostnames for pod workloads. This enables applications to resolve fixed hostnames, such as the local machine or external services, by applying `/etc/hosts` functionality to DNS queries within the node. The functionality is applied by adding specific configuration to the {{ microshift_short }} configuration YAML file, and completing a service restart. {._abstract}

**Prerequisites**

*   You installed the OpenShift CLI (`oc`).
*   You have root access to the node.

**Procedure**

1.  Edit the {{ microshift_short }} configuration in the `/etc/microshift/config.yaml` file.
1.  Add the following `hosts` configuration at the end of the file:
    ```yaml
    dns:
     hosts:
       status: <Enabled|Disabled>
       file: <filepath>
    ```
1.  Save your configuration YAML file.
1.  Restart the {{ microshift_short }} service to activate the configuration changes:
    ```terminal
    $ sudo systemctl restart microshift
    ```

    After this initial restart, if `dns.hosts.status` is set to `Enabled`, {{ microshift_short }} automatically monitors the `dns.hosts.file` file for updates. You do not have to restart the {{ microshift_short }} service until the {{ microshift_short }} configuration YAML file is changed again.

    :::note

    After you save the `/etc/hosts` file, it takes up to 90 seconds for the change to be active in the pods. During this period, the pods might not properly resolve hostnames.
    
    :::