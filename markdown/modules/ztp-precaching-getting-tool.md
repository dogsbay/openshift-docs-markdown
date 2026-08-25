{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting the {{ factory_prestaging_tool }} {id="ztp-getting-tool_{{ context }}"}

The {{ factory_prestaging_tool }} Go binary is publicly available in [the {{ rds_first }} tools container image](https://quay.io/openshift-kni/telco-ran-tools:latest).
The {{ factory_prestaging_tool }} Go binary in the container image is executed on the server running an {{ op_system }} live image using `podman`.
If you are working in a disconnected environment or have a private registry, you need to copy the image there so you can download the image to the server. {._abstract}

**Procedure**

*   Pull the {{ factory_prestaging_tool }} image by running the following command:
    ```terminal
    # podman pull quay.io/openshift-kni/telco-ran-tools:latest
    ```

**Verification**

*   To check that the tool is available, query the current version of the {{ factory_prestaging_tool }} Go binary:
    ```terminal
    # podman run quay.io/openshift-kni/telco-ran-tools:latest -- factory-precaching-cli -v
    ```


    The following is example output:
    ```terminal
    factory-precaching-cli version 20221018.120852+main.feecf17
    ```