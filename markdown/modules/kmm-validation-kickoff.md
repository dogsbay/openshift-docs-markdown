{%- set _mod_docs_content_type = "CONCEPT" %}
# Validation kickoff {id="kmm-validation-kickoff_{{ context }}"}

Create a `PreflightValidationOCP` resource to trigger preflight validation and specify the kernel version and DTK image for validation. {._abstract}

Preflight validation is triggered by creating a `PreflightValidationOCP` resource in the cluster. This resource contains the following fields:


`dtkImage`
:   The DTK container image released for the specific {{ product_title }} version of the cluster. If this value is not set, the `DTK_AUTO` feature cannot be used.

    You can obtain the image by running one of the following commands in the cluster:
    ```terminal
    # For x86_64 image:
    $ oc adm release info quay.io/openshift-release-dev/ocp-release:4.22.0-x86_64 --image-for=driver-toolkit
    ```
    ```terminal
    # For ARM64 image:
    $ oc adm release info quay.io/openshift-release-dev/ocp-release:4.22.0-aarch64 --image-for=driver-toolkit
    ```


`kernelVersion`
:   Required field that provides the version of the kernel that the cluster is upgraded to.

    You can obtain the version by running the following command in the cluster:
    ```terminal
    $ podman run -it --rm $(oc adm release info quay.io/openshift-release-dev/ocp-release:4.22.0-x86_64 --image-for=driver-toolkit) cat /etc/driver-toolkit-release.json
    ```


`pushBuiltImage`
:   If `true`, then the images created during the Build and Sign validation are pushed to their repositories. This field is `false` by default.