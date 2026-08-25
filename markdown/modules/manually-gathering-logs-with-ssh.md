{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually gathering logs with SSH access to your hosts {id="installation-manually-gathering-logs-with-SSH_{{ context }}"}

Manually gather logs in situations where `must-gather` or automated collection methods do not work. {._abstract}


:::important

By default, SSH access to the {{ product_title }} nodes is disabled on the {{ rh_openstack_first }} based installations.

:::


**Prerequisites**

*   You must have SSH access to your hosts.

**Procedure**

1.  Collect the `bootkube.service` service logs from the bootstrap host by entering the `journalctl` command:
    ```terminal
    $ journalctl -b -f -u bootkube.service
    ```
1.  Collect the container logs of the bootstrap host by using the podman logs. Podman logs are shown as a loop to get all of the container logs from the host.
    ```terminal
    $ for pod in $(sudo podman ps -a -q); do sudo podman logs $pod; done
    ```
1.  Alternatively, collect the container logs of the host by entering the `tail` command:
    ```terminal
    # tail -f /var/lib/containers/storage/overlay-containers/*/userdata/ctr.log
    ```
1.  Collect the `kubelet.service` and `crio.service` service logs from the control plane and compute hosts using the `journalctl` command by running:
    ```terminal
    $ journalctl -b -f -u kubelet.service -u crio.service
    ```
1.  Collect the control plane and compute host container logs by entering the `tail` command:
    ```terminal
    $ sudo tail -f /var/log/containers/*
    ```