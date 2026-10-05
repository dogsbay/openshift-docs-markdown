{%- set _mod_docs_content_type = "CONCEPT" %}
# About sysctls {id="nodes-containers-sysctls-about_{{ context }}"}

The Linux sysctl interface allows you to modify kernel parameters at runtime to manage subsystems such as networking, virtual memory, and MDADM. By accessing the sysctl interface, you can view and adjust system configurations without rebooting the operating system. {._abstract}

You can modify the following subsystems by using sysctls:

*   kernel (common prefix: `_kernel._`)
*   networking (common prefix: `_net._`)
*   virtual memory (common prefix: `_vm._`)
*   MDADM (common prefix: `_dev._`)

For more information on the subsystems you can manage, see "Kernel.org documentation".

You can get a list of all parameters by running the following command:

```terminal
$ sudo sysctl -a
```

**Additional resources**
{._additional-resources}

*   [Kernel.org documentation](https://www.kernel.org/doc/Documentation/sysctl/README)