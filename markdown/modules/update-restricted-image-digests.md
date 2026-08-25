{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrieving a release image digest {id="update-disconnected-image-digests_{{ context }}"}

In order to update a cluster in a disconnected environment using the `oc adm upgrade` command with the `--to-image` option, you must reference the sha256 digest that corresponds to your targeted release image. {._abstract}

**Procedure**

1.  Run the following command on a device that is connected to the internet:
    ```terminal
    $ oc adm release info -o 'jsonpath={.digest}{"\n"}' quay.io/openshift-release-dev/ocp-release:${OCP_RELEASE_VERSION}-${ARCHITECTURE}
    ```

    For `{{ OCP_RELEASE_VERSION }}`{minja}, specify the version of {{ product_title }} to which you want to update, such as `4.10.16`.

    For `{{ ARCHITECTURE }}`{minja}, specify the architecture of the cluster, such as `x86_64`, `aarch64`, `s390x`, or `ppc64le`.
    ```terminal title="Example output"
    sha256:a8bfba3b6dddd1a2fbbead7dac65fe4fb8335089e4e7cae327f3bad334add31d
    ```
1.  Copy the sha256 digest for use when updating your cluster.