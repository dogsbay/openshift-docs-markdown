{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring chrony time service {id="installation-special-config-chrony_{{ context }}"}

You
{% if restricted %}
must
{% endif %}
{% if not restricted %}
can
{% endif %}
set the time server and related settings used by the chrony time service (`chronyd`)
by modifying the contents of the `chrony.conf` file and passing those contents
to your nodes as a machine config. {._abstract}

For more information on chrony best practices, see the following resources:

*   [Configuring chrony (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/3073261)
*   [Best practices for NTP (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/778603)
*   [Basic chrony NTP troubleshooting (Red&#160;Hat Ceph Storage documentation)](https://docs.redhat.com/en/documentation/red_hat_ceph_storage/8/html-single/troubleshooting_guide/basic-chrony-NTP-troubleshooting_diag#basic-chrony-NTP-troubleshooting_diag)

**Procedure**

1.  Create a Butane config including the contents of the `chrony.conf` file. For example, to configure chrony on worker nodes, create a `99-worker-chrony.bu` file.

    :::note

{% include "./snippets/butane-version.md" %}
    
    :::

    ```yaml
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 99-worker-chrony
      labels:
        machineconfiguration.openshift.io/role: worker
    storage:
      files:
      - path: /etc/chrony.conf
        mode: 0644
        overwrite: true
        contents:
          inline: |
            pool 0.rhel.pool.ntp.org iburst
            driftfile /var/lib/chrony/drift
            makestep 1.0 3
            rtcsync
            logdir /var/log/chrony
    ```
    *   `name: 99-worker-chrony` - Specify a name for the machine config file. On control plane nodes, substitute `master` for `worker`.
    *   `machineconfiguration.openshift.io/role: worker` - On control plane nodes, substitute `master` for `worker`.
    *   `mode: 0644` - Specify an octal value mode for the `mode` field in the machine config file. After creating the file and applying the changes, the `mode` is converted to a decimal value. You can check the YAML file with the command `oc get mc <mc-name> -o yaml`.
    *   `pool 0.rhel.pool.ntp.org iburst` - Specify any valid, reachable time source, such as the one provided by your DHCP server.


    :::note

    For all-machine to all-machine communication, the Network Time Protocol (NTP) on UDP is port `123`. If an external NTP time server is configured, you must open UDP port `123`.
    
    :::

{% if not restricted %}

    Alternatively, you can specify any of the following NTP servers: `1.rhel.pool.ntp.org`, `2.rhel.pool.ntp.org`, or `3.rhel.pool.ntp.org`. When you use NTP with your DHCP server, you must set the `sourcedir /run/chrony-dhcp` parameter in the `chrony.conf` file.
{% endif %}
1.  Use Butane to generate a `MachineConfig` object file, `99-worker-chrony.yaml`, containing the configuration to be delivered to the nodes:
    ```terminal
    $ butane 99-worker-chrony.bu -o 99-worker-chrony.yaml
    ```
1.  Apply the configurations in one of two ways:
    *   If the cluster is not running yet, after you generate manifest files, add the `MachineConfig` object file to the `<installation_directory>/openshift` directory, and then continue to create the cluster.
    *   If the cluster is already running, apply the file:
        ```terminal
        $ oc apply -f ./99-worker-chrony.yaml
        ```

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted = false -%}
{% endif %}