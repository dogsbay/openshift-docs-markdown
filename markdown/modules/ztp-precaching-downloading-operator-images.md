{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading the Operator images {id="ztp-downloading-operator-images_{{ context }}"}

You can also pre-cache Day-2 Operators used in the 5G Radio Access Network (RAN) Distributed Unit (DU) cluster configuration. The Day-2 Operators depend on the installed {{ product_title }} version. {._abstract}


:::important

You need to include the {{ rh_rhacm }} hub and {{ mce_short }} versions by using the `--acm-version` and `--mce-version` flags so the {{ factory_prestaging_tool }} can pre-cache the appropriate containers images for {{ rh_rhacm }} and the {{ mce_short }}.

:::


**Procedure**

*   Pre-cache the Operator images:
    ```terminal
    # podman run -v /mnt:/mnt -v /root/.docker:/root/.docker --privileged --rm quay.io/openshift-kni/telco-ran-tools:latest -- factory-precaching-cli download \
       -r {{ product_version }}.0 \
       --acm-version 2.6.3 \
       --mce-version 2.1.4 \
       -f /mnt \
       --img quay.io/custom/repository \
       --du-profile -s
    ```

    Where:
    *   `factory-precaching-cli download` specifies the downloading function of the {{ factory_prestaging_tool }}.
    *   `-r {{ product_version }}.0` specifies the {{ product_title }} release version.
    *   `--acm-version 2.6.3` specifies the {{ rh_rhacm }} version.
    *   `--mce-version 2.1.4` specifies the multicluster engine version.
    *   `-f /mnt` specifies the folder where you want to download the images on the disk.
    *   `--img quay.io/custom/repository` is optional and specifies the repository where you store your additional images. These images are downloaded and pre-cached on the disk.
    *   `--du-profile -s` specifies pre-caching the Operators included in the DU configuration.

        The following is example output:
        ```terminal
        Generated /mnt/imageset.yaml
        Generating list of pre-cached artifacts...
        Processing artifact [1/379]: ocp-v4.0-art-dev@sha256_7753a8d9dd5974be8c90649aadd7c914a3d8a1f1e016774c7ac7c9422e9f9958
        Processing artifact [2/379]: ose-kube-rbac-proxy@sha256_c27a7c01e5968aff16b6bb6670423f992d1a1de1a16e7e260d12908d3322431c
        Processing artifact [3/379]: ocp-v4.0-art-dev@sha256_370e47a14c798ca3f8707a38b28cfc28114f492bb35fe1112e55d1eb51022c99
        ...
        Processing artifact [378/379]: ose-local-storage-operator@sha256_0c81c2b79f79307305e51ce9d3837657cf9ba5866194e464b4d1b299f85034d0
        Processing artifact [379/379]: multicluster-operators-channel-rhel8@sha256_c10f6bbb84fe36e05816e873a72188018856ad6aac6cc16271a1b3966f73ceb3
        ...
        Summary:

        Release:                            {{ product_version }}.0
        Hub Version:                        2.6.3
        ACM Version:                        2.6.3
        MCE Version:                        2.1.4
        Include DU Profile:                 Yes
        Workers:                            83
        ```