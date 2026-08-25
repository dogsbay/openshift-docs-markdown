{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the web server for {{ hcp }} in a disconnected environment {id="hcp-dc-web-server_{{ context }}"}

You must configure an additional web server to host the {{ op_system_first }} images that are associated with the {{ product_title }} release that you are deploying as a hosted cluster. {._abstract}

**Procedure**

1.  Extract the `openshift-install` binary from the {{ product_title }} release that you want to use by entering the following command:
    ```terminal
    $ oc adm -a ${LOCAL_SECRET_JSON} release extract --command=openshift-install \
      "${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE}"
    ```
1.  Run the following script. The script creates a folder in the `/opt/srv` directory. The folder contains the {{ op_system }} images to provision the worker nodes.
    ```bash
    #!/bin/bash

    WEBSRV_FOLDER=/opt/srv
    ROOTFS_IMG_URL="$(./openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.artifacts.metal.formats.pxe.rootfs.location')"
    LIVE_ISO_URL="$(./openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.artifacts.metal.formats.iso.disk.location')"

    mkdir -p ${WEBSRV_FOLDER}/images
    curl -Lk ${ROOTFS_IMG_URL} -o ${WEBSRV_FOLDER}/images/${ROOTFS_IMG_URL##*/}
    curl -Lk ${LIVE_ISO_URL} -o ${WEBSRV_FOLDER}/images/${LIVE_ISO_URL##*/}
    chmod -R 755 ${WEBSRV_FOLDER}/*

    ## Run Webserver
    podman ps --noheading | grep -q websrv-ai
    if [[ $? == 0 ]];then
        echo "Launching Registry pod..."
        /usr/bin/podman run --name websrv-ai --net host -v /opt/srv:/usr/local/apache2/htdocs:z quay.io/alosadag/httpd:p8080
    fi
    ```
    *   You can find the `ROOTFS_IMG_URL` value on the OpenShift CI Release page.
    *   You can find the `LIVE_ISO_URL` value on the OpenShift CI Release page.

        After the download is completed, a container runs to host the images on a web server. The container uses a variation of the official HTTPd image, which also enables it to work with IPv6 networks.