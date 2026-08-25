{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an {{ op_system }} images cache {id="ipi-install-creating-an-rhcos-images-cache_{{ context }}"}

To employ image caching, you must download the {{ op_system_first }} image used by the bootstrap VM to provision the cluster nodes. Image caching is optional, but it is especially useful when running the installation program on a network with limited bandwidth. {._abstract}


:::note

The installation program no longer needs the `clusterOSImage` {{ op_system }} image because the correct image is in the release payload.

:::


If you are running the installation program on a network with limited bandwidth and the {{ op_system }} images download takes more than 15 to 20 minutes, the installation program will timeout. Caching images on a web server will help in such scenarios.


:::warning

If you enable TLS for the HTTPD server, you must confirm the root certificate is signed by an authority trusted by the client and verify the trusted certificate chain between your {{ product_title }} hub and spoke clusters and the HTTPD server. Using a server configured with an untrusted certificate prevents the images from being downloaded to the image creation service. Using untrusted HTTPS servers is not supported.

:::


Install a container that contains the images.

**Procedure**

1.  Install `podman`:
    ```terminal
    $ sudo dnf install -y podman
    ```
1.  Open firewall port `8080` to be used for {{ op_system }} image caching:
    ```terminal
    $ sudo firewall-cmd --add-port=8080/tcp --zone=public --permanent
    ```
    ```terminal
    $ sudo firewall-cmd --reload
    ```
1.  Create a directory to store the `bootstraposimage`:
    ```terminal
    $ mkdir /home/kni/rhcos_image_cache
    ```
1.  Set the appropriate SELinux context for the newly created directory:
    ```terminal
    $ sudo semanage fcontext -a -t httpd_sys_content_t "/home/kni/rhcos_image_cache(/.*)?"
    ```
    ```terminal
    $ sudo restorecon -Rv /home/kni/rhcos_image_cache/
    ```
1.  Get the URI for the {{ op_system }} image that the installation program will deploy on the bootstrap VM:
    ```terminal
    $ export RHCOS_QEMU_URI=$(/usr/local/bin/openshift-baremetal-install coreos print-stream-json | jq -r --arg ARCH "$(arch)" '.architectures[$ARCH].artifacts.qemu.formats["qcow2.gz"].disk.location')
    ```
1.  Get the name of the image that the installation program will deploy on the bootstrap VM:
    ```terminal
    $ export RHCOS_QEMU_NAME=${RHCOS_QEMU_URI##*/}
    ```
1.  Get the SHA hash for the {{ op_system }} image that will be deployed on the bootstrap VM:
    ```terminal
    $ export RHCOS_QEMU_UNCOMPRESSED_SHA256=$(/usr/local/bin/openshift-baremetal-install coreos print-stream-json | jq -r --arg ARCH "$(arch)" '.architectures[$ARCH].artifacts.qemu.formats["qcow2.gz"].disk["uncompressed-sha256"]')
    ```
1.  Download the image and place it in the `/home/kni/rhcos_image_cache` directory:
    ```terminal
    $ curl -L ${RHCOS_QEMU_URI} -o /home/kni/rhcos_image_cache/${RHCOS_QEMU_NAME}
    ```
1.  Confirm SELinux type is of `httpd_sys_content_t` for the new file:
    ```terminal
    $ ls -Z /home/kni/rhcos_image_cache
    ```
1.  Create the pod:
    ```terminal
    $ podman run -d --name rhcos_image_cache \
    -v /home/kni/rhcos_image_cache:/var/www/html \
    -p 8080:8080/tcp \
    registry.access.redhat.com/ubi9/httpd-24
    ```

    This command creates a caching webserver with the name `rhcos_image_cache`. This pod serves the `bootstrapOSImage` image in the `install-config.yaml` file for deployment.
1.  Generate the `bootstrapOSImage` configuration:
    ```terminal
    $ export BAREMETAL_IP=$(ip addr show dev baremetal | awk '/inet /{print $2}' | cut -d"/" -f1)
    ```
    ```terminal
    $ export BOOTSTRAP_OS_IMAGE="http://${BAREMETAL_IP}:8080/${RHCOS_QEMU_NAME}?sha256=${RHCOS_QEMU_UNCOMPRESSED_SHA256}"
    ```
    ```terminal
    $ echo "    bootstrapOSImage=${BOOTSTRAP_OS_IMAGE}"
    ```
1.  Add the required configuration to the `install-config.yaml` file under `platform.baremetal`:
    ```terminal
    platform:
      baremetal:
        bootstrapOSImage: <bootstrap_os_image> 
    ```

    Replace `<bootstrap_os_image>` with the value of `$BOOTSTRAP_OS_IMAGE`.

    See the "Configuring the install-config.yaml file" section for additional details.