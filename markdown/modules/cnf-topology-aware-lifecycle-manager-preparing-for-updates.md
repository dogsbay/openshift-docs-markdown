{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the disconnected environment {id="talo-platform-prepare-for-update-env-setup_{{ context }}"}

{{ cgu_operator }} can perform both platform and Operator updates. {._abstract}

You must mirror both the platform image and Operator images that you want to update to in your mirror registry before you can use {{ cgu_operator }} to update your disconnected clusters.

**Procedure**

*   For platform updates, you must perform the following steps:
    1.  Mirror the required {{ product_title }} image repository. Ensure that the required platform image is mirrored by following the "Mirroring the {{ product_title }} image repository" procedure linked in the Additional resources. Save the contents of the `imageContentSources` section in the `imageContentSources.yaml` file:

        The following is example output:
        ```yaml
        imageContentSources:
         - mirrors:
           - mirror-ocp-registry.ibmcloud.io.cpak:5000/openshift-release-dev/openshift4
           source: quay.io/openshift-release-dev/ocp-release
         - mirrors:
           - mirror-ocp-registry.ibmcloud.io.cpak:5000/openshift-release-dev/openshift4
           source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
        ```
    1.  Save the image signature of the required platform image that was mirrored. You must add the image signature to the `{{ policy_gen_cr }}` CR for platform updates. To get the image signature, perform the following steps:
        1.  Specify the required {{ product_title }} tag by running the following command:
            ```terminal
            $ OCP_RELEASE_NUMBER=<release_version>
            ```
        1.  Specify the architecture of the cluster by running the following command:
            ```terminal
            $ ARCHITECTURE=<cluster_architecture>
            ```
            *   `<cluster_architecture>` specifies the architecture of the cluster, such as `x86_64`, `aarch64`, `s390x`, or `ppc64le`.
        1.  Get the release image digest from Quay by running the following command
            ```terminal
            $ DIGEST="$(oc adm release info quay.io/openshift-release-dev/ocp-release:${OCP_RELEASE_NUMBER}-${ARCHITECTURE} | sed -n 's/Pull From: .*@//p')"
            ```
        1.  Set the digest algorithm by running the following command:
            ```terminal
            $ DIGEST_ALGO="${DIGEST%%:*}"
            ```
        1.  Set the digest signature by running the following command:
            ```terminal
            $ DIGEST_ENCODED="${DIGEST#*:}"
            ```
        1.  Get the image signature from the [mirror.openshift.com](https://mirror.openshift.com/pub/openshift-v4/signatures/openshift/release/) website by running the following command:
            ```terminal
            $ SIGNATURE_BASE64=$(curl -s "https://mirror.openshift.com/pub/openshift-v4/signatures/openshift/release/${DIGEST_ALGO}=${DIGEST_ENCODED}/signature-1" | base64 -w0 && echo)
            ```
        1.  Save the image signature to the `checksum-<OCP_RELEASE_NUMBER>.yaml` file by running the following commands:
            ```terminal
            $ cat >checksum-${OCP_RELEASE_NUMBER}.yaml <<EOF
            ```
            ```terminal
            ${DIGEST_ALGO}-${DIGEST_ENCODED}: ${SIGNATURE_BASE64}
            EOF
            ```
    1.  Prepare the update graph. You have two options to prepare the update graph:
        1.  Use the OpenShift Update Service.

            For more information about how to set up the graph on the hub cluster, see [Deploy the operator for OpenShift Update Service](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.4/html/clusters/managing-your-clusters#deploy-the-operator-for-cincinnati) and [Build the graph data init container](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.4/html/clusters/managing-your-clusters#build-the-graph-data-init-container).
        1.  Make a local copy of the upstream graph. Host the update graph on an `http` or `https` server in the disconnected environment that has access to the managed cluster. To download the update graph, use the following command:
            ```terminal
            $ curl -s https://api.openshift.com/api/upgrades_info/v1/graph?channel=stable-{{ product_version }} -o ~/upgrade-graph_stable-{{ product_version }}
            ```
*   For Operator updates, you must perform the following task:
    *   Mirror the Operator catalogs. Ensure that the required Operator images are mirrored by following the procedure in the "Mirroring Operator catalogs for use with disconnected clusters" section.