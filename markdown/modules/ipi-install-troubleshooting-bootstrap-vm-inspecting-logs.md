{%- set _mod_docs_content_type = "PROCEDURE" %}
# Inspecting logs {id="ipi-install-troubleshooting-bootstrap-vm-inspecting-logs_{{ context }}"}

When experiencing issues downloading or accessing the {{ op_system }} images, first verify that the URL is correct in the `install-config.yaml` configuration file. {._abstract}

See the following example of internal webserver hosting {{ op_system }} images:

```yaml
bootstrapOSImage: http://<ip:port>/rhcos-43.81.202001142154.0-qemu.<architecture>.qcow2.gz?sha256=9d999f55ff1d44f7ed7c106508e5deecd04dc3c06095d34d36bf1cd127837e0c
clusterOSImage: http://<ip:port>/rhcos-43.81.202001142154.0-openstack.<architecture>.qcow2.gz?sha256=a1bda656fa0892f7b936fdc6b6a6086bddaed5dafacedcd7a1e811abb78fe3b0
```

The `coreos-downloader` container downloads resources from a webserver or from the external [quay.io](https://quay.io) registry, whichever the `install-config.yaml` configuration file specifies. Verify that the `coreos-downloader` container is up and running and inspect its logs as needed.

**Procedure**

1.  Log in to the bootstrap VM by running the following command:
    ```terminal
    $ ssh core@172.22.0.2
    ```
1.  Check the status of the `coreos-downloader` container within the bootstrap VM by running the following command:

    ```terminal
    [core@localhost ~]$ sudo podman logs -f coreos-downloader
    ```

    If the bootstrap VM cannot access the URL to the images, use the `curl` command to verify that the VM can access the images.
1.  Inspect the system and bootstrap logs to verify if all the containers launched during the deployment phase:
    1.  Inspect the system logs by running the following command:
        ```terminal
        [core@localhost ~]$ journalctl -xe
        ```
    1.  Inspect the `bootkube` logs to check bootstrap progress by running the following command:
        ```terminal
        [core@localhost ~]$ journalctl -b -f -u bootkube.service
        ```
1.  Verify all the pods, including `dnsmasq`, `mariadb`, `httpd`, and `ironic`, are running by using the following command:
    ```terminal
    [core@localhost ~]$ sudo podman ps
    ```
1.  If there are issues with the pods, check the logs of the containers with issues. To check the logs of the `ironic` service, run the following command:
    ```terminal
    [core@localhost ~]$ sudo podman logs ironic
    ```