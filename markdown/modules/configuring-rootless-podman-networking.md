{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring rootless Podman networking {id="configuring-rootless-podman_{{ context }}"}

To restore rootless Podman networking when the default `pasta` stack fails on {{ product_title }} mirror or install hosts, you can set the default rootless network back to `slirp4netns` in the `/etc/containers/containers.conf` file, or in the user’s `~/.config/containers/container.conf` file.  {._abstract}

You might need to configure rootless Podman networking after upgrading to {{ op_system_base }} 9.5 or Podman 5.0. In these versions, the default networking stack changed from `slirp4netns` to `pasta`. As a result, systems that previously operated without a default route might no longer be able to establish network connectivity and could display the following error:

```terminal
Error: pasta failed with exit code 1:
External interface not usable
```

**Prerequisites**

*   You have updated to {{ op_system_base }} 9.5 or Podman 5.0.

**Procedure**

1.  Use your preferred IDE to modify the `/etc/containers/containers.conf` or `~/.config/containers/container.conf` file.
    1.  To modify the `/etc/containers/containers.conf` file, enter the following command:
        ```terminal
        $ nano /etc/containers/containers.conf
        ```
    1.  To modify the `~/.config/containers/container.conf` file, enter the following command:
        ```terminal
        $ nano ~/.config/containers/container.conf
        ```
1.  Add, or update, the `[network]` section as in the following example:
    ```text
    # ...
    [network]
    default_rootless_network_cmd = "slirp4netns"
    # ...
    ```
1.  Restart the Podman system as the rootless user by entering the following command. Note that all containers must be stopped and restarted for the change to take effect.
    ```terminal
    $ podman system migrate
    ```