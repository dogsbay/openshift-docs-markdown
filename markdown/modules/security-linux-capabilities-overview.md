{%- set _mod_docs_content_type = "CONCEPT" %}
# Linux capabilities {id="security-linux-capabilities-overview_{{ context }}"}

Linux capabilities define the actions a process can perform on the host system. By default, pods are granted several capabilities unless security measures are applied. These default capabilities are as follows: {._abstract}

*   `CHOWN`
*   `DAC_OVERRIDE`
*   `FSETID`
*   `FOWNER`
*   `SETGID`
*   `SETUID`
*   `SETPCAP`
*   `NET_BIND_SERVICE`
*   `KILL`

You can modify which capabilities that a pod can receive by configuring Security Context Constraints (SCCs).


:::important

You must not assign the following capabilities to a pod:

*   `SYS_ADMIN`: A powerful capability that grants elevated privileges. Allowing this capability can break security boundaries and pose a significant security risk.
*   `NET_ADMIN`: Allows control over networking, like SR-IOV ports, but can be replaced with alternative solutions in modern setups.

For more information about Linux capabilities, see the [Linux capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html) man page.

:::