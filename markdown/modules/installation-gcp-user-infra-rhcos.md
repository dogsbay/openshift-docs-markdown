{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the {{ op_system }} cluster image for the {{ gcp_short }} infrastructure {id="installation-gcp-user-infra-rhcos_{{ context }}"}

You must use a valid {{ op_system_first }} image for {{ gcp_first }} for your {{ product_title }} nodes. {._abstract}

**Prerequisites**

*   You have downloaded the `openshift-install` binary.

**Procedure**

1.  Obtain the image name by running the following command:
    ```terminal
    $ source_image=$(openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.images.gcp.name')
    ```
1.  Obtain the project name by running the following command:
    ```terminal
    $ source_project=$(openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.images.gcp.project')
    ```
1.  Create the image by running the following command:
    ```terminal
    $ gcloud compute images create "${INFRA_ID}-rhcos-image" \
        --source-image="${source_image}" --source-image-project="${source_project}"
    ```