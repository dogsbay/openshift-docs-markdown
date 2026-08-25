{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pre-caching custom images in disconnected environments {id="ztp-custom-pre-caching-in-disconnected-environment_{{ context }}"}

The `--generate-imageset` argument stops the {{ factory_prestaging_tool }} after the `ImageSetConfiguration` custom resource (CR) is generated.
This allows you to customize the `ImageSetConfiguration` CR before downloading any images.
After you customized the CR, you can use the `--skip-imageset` argument to download the images that you specified in the `ImageSetConfiguration` CR. {._abstract}

You can customize the `ImageSetConfiguration` CR in the following ways:

*   Add Operators and additional images
*   Remove Operators and additional images
*   Change Operator and catalog sources to local or disconnected registries

**Procedure**

1.  Pre-cache the images:
    ```terminal {minja}
    # podman run -v /mnt:/mnt -v /root/.docker:/root/.docker --privileged --rm quay.io/openshift-kni/telco-ran-tools:latest -- factory-precaching-cli download \
       -r {{ product_version }}.0 \
       --acm-version 2.6.3 \
       --mce-version 2.1.4 \
       -f /mnt \
       --img quay.io/custom/repository \
       --du-profile -s \
       --generate-imageset
    ```

    Where:
    *   `factory-precaching-cli download` specifies the downloading function of the {{ factory_prestaging_tool }}.
    *   `-r {{ product_version }}.0`{minja} specifies the {{ product_title }} release version.
    *   `--acm-version 2.6.3` specifies the {{ rh_rhacm }} version.
    *   `--mce-version 2.1.4` specifies the multicluster engine version.
    *   `-f /mnt` specifies the folder where you want to download the images on the disk.
    *   `--img quay.io/custom/repository` is optional and specifies the repository where you store your additional images. These images are downloaded and pre-cached on the disk.
    *   `--du-profile -s` specifies pre-caching the Operators included in the DU configuration.
    *   `--generate-imageset` generates the `ImageSetConfiguration` CR only, which allows you to customize the CR.

        The following is example output:
        ```terminal
        Generated /mnt/imageset.yaml
        ```

        The following example shows the `ImageSetConfiguration` CR:
        ```yaml {minja}
        apiVersion: mirror.openshift.io/v1alpha2
        kind: ImageSetConfiguration
        mirror:
          platform:
            channels:
            - name: stable-{{ product_version }}
              minVersion: {{ product_version }}.0
              maxVersion: {{ product_version }}.0
          additionalImages:
            - name: quay.io/custom/repository
          operators:
            - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
              packages:
                - name: advanced-cluster-management
                  channels:
                     - name: 'release-2.6'
                       minVersion: 2.6.3
                       maxVersion: 2.6.3
                - name: multicluster-engine
                  channels:
                     - name: 'stable-2.1'
                       minVersion: 2.1.4
                       maxVersion: 2.1.4
                - name: local-storage-operator
                  channels:
                    - name: 'stable'
                - name: ptp-operator
                  channels:
                    - name: 'stable'
                - name: sriov-network-operator
                  channels:
                    - name: 'stable'
                - name: cluster-logging
                  channels:
                    - name: 'stable'
                - name: lvms-operator
                  channels:
                    - name: 'stable-{{ product_version }}'
                - name: amq7-interconnect-operator
                  channels:
                    - name: '1.10.x'
                - name: bare-metal-event-relay
                  channels:
                    - name: 'stable'
            - catalog: registry.redhat.io/redhat/certified-operator-index:v{{ product_version }}
              packages:
                - name: sriov-fec
                  channels:
                    - name: 'stable'
        ```

        Where:
    *   `mirror.platform.channels.minVersion`, `mirror.platform.channels.maxVersion` -- Specifies the platform versions that match the versions passed to the tool.
    *   `mirror.operators.packages.name: advanced-cluster-management`, `mirror.operators.packages.name: multicluster-engine` -- Specifies the versions of {{ rh_rhacm }} and the {{ mce_short }} that match the versions passed to the tool.
    *   `mirror.operators.packages.name: local-storage-operator`, `mirror.operators.packages.name: ptp-operator`, `mirror.operators.packages.name: sriov-network-operator`, `mirror.operators.packages.name: cluster-logging`, `mirror.operators.packages.name: lvms-operator`, `mirror.operators.packages.name: amq7-interconnect-operator`, `mirror.operators.packages.name: bare-metal-event-relay`, `mirror.operators.packages.name: sriov-fec` -- Specifies the CR contains all the specified DU Operators.
1.  Customize the catalog resource in the CR:
    ```yaml {minja}
    apiVersion: mirror.openshift.io/v1alpha2
    kind: ImageSetConfiguration
    mirror:
      platform:
    [...]
      operators:
        - catalog: eko4.cloud.lab.eng.bos.redhat.com:8443/redhat/certified-operator-index:v{{ product_version }}
          packages:
            - name: sriov-fec
              channels:
                - name: 'stable'
    ```

    When you download images by using a local or disconnected registry, you have to first add certificates for the registries that you want to pull the content from.
1.  To avoid any errors, copy the registry certificate into your server:
    ```terminal
    # cp /tmp/eko4-ca.crt /etc/pki/ca-trust/source/anchors/.
    ```
1.  Then, update the certificates truststore:
    ```terminal
    # update-ca-trust
    ```
1.  Mount the host `/etc/pki` folder into the factory-cli image:
    ```terminal {minja}
    # podman run -v /mnt:/mnt -v /root/.docker:/root/.docker -v /etc/pki:/etc/pki --privileged --rm quay.io/openshift-kni/telco-ran-tools:latest -- \
    factory-precaching-cli download \
       -r {{ product_version }}.0 \
       --acm-version 2.6.3 \
       --mce-version 2.1.4 \
       -f /mnt \
       --img quay.io/custom/repository \
       --du-profile -s \
       --skip-imageset
    ```

    Where:
    *   `factory-precaching-cli download` specifies the downloading function of the {{ factory_prestaging_tool }}.
    *   `-r {{ product_version }}.0`{minja} specifies the {{ product_title }} release version.
    *   `--acm-version 2.6.3` specifies the {{ rh_rhacm }} version.
    *   `--mce-version 2.1.4` specifies the multicluster engine version.
    *   `-f /mnt` specifies the folder where you want to download the images on the disk.
    *   `--img quay.io/custom/repository` is optional and specifies the repository where you store your additional images. These images are downloaded and pre-cached on the disk.
    *   `--du-profile -s` specifies pre-caching the Operators included in the DU configuration.
    *   `--skip-imageset` specifies to download the images in your customized `ImageSetConfiguration` CR.
1.  Download the images without generating a new `imageSetConfiguration` CR:
    ```terminal {minja}
    # podman run -v /mnt:/mnt -v /root/.docker:/root/.docker --privileged --rm quay.io/openshift-kni/telco-ran-tools:latest -- factory-precaching-cli download -r {{ product_version }}.0 \
    --acm-version 2.6.3 --mce-version 2.1.4 -f /mnt \
    --img quay.io/custom/repository \
    --du-profile -s \
    --skip-imageset
    ```