{%- set _mod_docs_content_type = "CONCEPT" %}
# Choosing how to harden {{ op_system }} {id="security-hardening-how_{{ context }}"}

Direct modification of {{ op_system }} systems in {{ product_title }} is discouraged. Instead, you should think of modifying systems in pools of nodes, such as worker nodes and control plane nodes.  {._abstract}

When a new node is needed, in non-bare metal installs, you can request a new node of the type you want and it will be created from an {{ op_system }} image plus the modifications you created earlier.

There are opportunities for modifying {{ op_system }} before installation, during installation, and after the cluster is up and running.

## Hardening before installation {id="security-harden-before-installation_{{ context }}"}

For bare-metal installations, you can add hardening features to {{ op_system }} before beginning the {{ product_title }} installation. For example, you can add kernel options when you boot the {{ op_system }} installer to turn security features on or off, such as various SELinux Boolean values or low-level settings, such as symmetric multithreading.


:::warning

Disabling SELinux on {{ op_system }} nodes is not supported.

:::


Although bare metal {{ op_system }} installations are more difficult, they offer the opportunity of getting operating system changes in place before starting the {{ product_title }} installation. This can be important when you need to ensure that certain features, such as disk encryption or special networking settings, be set up at the earliest possible moment.

## Hardening during installation {id="security-harden-during-installation_{{ context }}"}

You can interrupt the {{ product_title }} installation process and change Ignition configs. Through Ignition configs, you can add your own files and systemd services to the {{ op_system }} nodes. You can also make some basic security-related changes to the `install-config.yaml` file used for installation. Contents added in this way are available at each node’s first boot.

## Hardening after the cluster is running {id="security-harden-after-installation_{{ context }}"}
After the {{ product_title }} cluster is up and running, there are several ways to apply hardening features to {{ op_system }}:

*   Daemon set: If you need a service to run on every node, you can add that service with a Kubernetes `DaemonSet` object.
*   Machine config: `MachineConfig` objects contain a subset of Ignition configs in the same format. By applying machine configs to all worker or control plane nodes, you can ensure that the next node of the same type that is added to the cluster has the same changes applied.

All of the features noted here are described in the {{ product_title }} product documentation.